import type { messages } from 'configuration/locale';
import type { routes } from 'configuration/routes';

// export type MessagesKeys = keyof messages;

type ValueOf<T> = T[keyof T];

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: { key: Key; content: M[Key] };
};

type MessagesKeys = {};

export interface LocaleItems {
  LOGIN: { enterPassword: string; password: string; signIn: string };
}

export type Locale = ActionMap<LocaleItems>[keyof ActionMap<LocaleItems>];

export type Pages = keyof typeof routes;
