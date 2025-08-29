import { z } from "zod";
import { rateLimit } from "@/lib/rateLimit";

export const dynamic = "force-dynamic";

const ContactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional().default(""),
  role: z.string().optional().default(""),
  message: z.string().min(10),
  bot: z.string().optional().default("")
});

async function sendMailStub(data: any) {
  // Replace with your mail provider
  console.log("MAIL STUB:", data);
}

export default function Contact() {
  async function submit(formData: FormData) {
    "use server";
    const vals = Object.fromEntries(formData);
    const parsed = ContactSchema.safeParse(vals);
    if (!parsed.success) return { ok: false, error: "Invalid input" };

    if (parsed.data.bot) return { ok: true };

    const limit = parseInt(process.env.RATE_LIMIT_CONTACT_PER_MIN || "5", 10);
    const key = `contact:${Date.now()}:${parsed.data.email}`;
    if (!rateLimit(key, limit)) {
      return { ok: false, error: "Too many requests, please try later." };
    }

    await sendMailStub(parsed.data);
    return { ok: true };
  }

  return (
    <div className="container-narrow py-16">
      <h1 className="font-display text-4xl">Contact</h1>
      <form action={submit as any} className="mt-8 grid gap-4 max-w-xl">
        <input className="glass rounded-2xl px-4 py-3" name="name" placeholder="Name" aria-label="Name" required />
        <input className="glass rounded-2xl px-4 py-3" name="email" type="email" placeholder="Email" aria-label="Email" required />
        <input className="glass rounded-2xl px-4 py-3" name="company" placeholder="Company" aria-label="Company" />
        <input className="glass rounded-2xl px-4 py-3" name="role" placeholder="Role" aria-label="Role" />
        <textarea className="glass rounded-2xl px-4 py-3" name="message" placeholder="Message" aria-label="Message" rows={5} required />
        <input className="hidden" name="bot" tabIndex={-1} autoComplete="off" />
        <button className="bg-navy text-offwhite rounded-2xl px-4 py-3" type="submit">Send</button>
      </form>
    </div>
  );
}
