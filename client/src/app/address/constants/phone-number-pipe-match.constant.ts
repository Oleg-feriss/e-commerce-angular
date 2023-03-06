export const PHONE_NUMBER_PIPE_MATCH: {
  length: number;
  pattern: RegExp;
  replaceValue: string;
}[] = [
  { length: 2, pattern: /^(\d{0,2})/, replaceValue: '($1)' },
  { length: 5, pattern: /^(\d{0,2})(\d{0,3})/, replaceValue: '($1) $2' },
  {
    length: 8,
    pattern: /^(\d{0,2})(\d{0,3})(\d{0,3})/,
    replaceValue: '($1) $2-$3',
  },
  {
    length: 11,
    pattern: /^(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,3})/,
    replaceValue: '($1) $2-$3-$4',
  },
];
