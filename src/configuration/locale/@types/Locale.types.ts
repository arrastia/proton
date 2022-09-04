import type { Routes } from 'configuration/routes';

type LocaleMap<M extends { [key in Routes]: any }> = {
  [Key in keyof M]: M[Key];
};

export type Languages = 'en' | 'es' | 'eus';

export type Locale = { DASHBOARD: DashboardMessages; LOGIN: LoginMessages };

export type LocaleByPage<T extends Routes> = LocaleMap<Locale>[T];

interface LoginMessages {
  enterPassword: string;
  password: string;
  signIn: string;
  wrongPasswordNotification: string;
}

interface DashboardMessages {
  cancel: string;
  editPasswordTitlePlaceholder: string;
  logOut: string;
  newPassword: string;
  notes: string;
  password: string;
  save: string;
  selectAnAccountToViewDetails: string;
  url: string;
  username: string;
}

// type ValueOf<T> = T[keyof T];
