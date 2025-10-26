import type cs from './content/messages/cs.json';

type Messages = typeof cs;

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages {}
}


