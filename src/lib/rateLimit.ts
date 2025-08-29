type Bucket = { tokens: number; last: number };
const buckets = new Map<string, Bucket>();

export function rateLimit(key: string, perMinute: number) {
  const now = Date.now();
  const refillInterval = 60000;
  const maxTokens = perMinute;

  let b = buckets.get(key);
  if (!b) {
    b = { tokens: maxTokens, last: now };
    buckets.set(key, b);
  } else {
    const elapsed = now - b.last;
    const refill = Math.floor(elapsed / refillInterval) * maxTokens;
    if (refill > 0) {
      b.tokens = Math.min(maxTokens, b.tokens + refill);
      b.last = now;
    }
  }

  if (b.tokens <= 0) return false;
  b.tokens -= 1;
  return true;
}
