import crypto from 'crypto';

/**
 * Generates a random identifier.
 */
export default function uid(length = 16, chars = 'abcdefghijklmnopqrstuvwxyz0123456789') {
  const rnd = crypto.randomBytes(length);
  const value = new Array(length);
  const len = chars.length;
  for (let i = 0; i < length; i++) {
    value[i] = chars[rnd[i] % len];
  }
  return value.join('');
}
