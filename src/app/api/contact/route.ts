import { NextResponse } from "next/server";
import { z } from "zod";
import { rateLimit } from "@/lib/rateLimit";

const ContactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional().default(""),
  role: z.string().optional().default(""),
  message: z.string().min(10),
  bot: z.string().optional().default("")
});

export async function POST(request: Request) {
  const data = await request.json().catch(() => ({}));
  const parsed = ContactSchema.safeParse(data);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Invalid input" }, { status: 400 });
  }

  if (parsed.data.bot) return NextResponse.json({ ok: true });

  const limit = parseInt(process.env.RATE_LIMIT_CONTACT_PER_MIN || "5", 10);
  const ip = request.headers.get("x-forwarded-for") || "anon";
  const key = `api:contact:${ip}`;

  if (!rateLimit(key, limit)) {
    return NextResponse.json({ ok: false, error: "Too many requests" }, { status: 429 });
  }

  console.log("CONTACT:", parsed.data);

  return NextResponse.json({ ok: true });
}
