export function generatePassword(length: number = 20): string {
  const alphabetLower = 'abcdefghijklmnopqrstuvwxyz';
  const alphabetUpper = alphabetLower.toUpperCase();

  const digits = '0123456789';
  const symbols = '`~!@#$%^&*()_+-={}|[]:";\'<>?,./';

  let password: string = '';

  const seeds: string = alphabetLower + alphabetUpper + digits + symbols;

  const first: number = 0;
  const last: number = seeds.length;

  for (let index = 0; index < length; index++) {
    let seedIndex: number = Math.floor(Math.random() * (first - last + 1) + last);
    password += seeds.charAt(seedIndex);
  }

  return password;
}
