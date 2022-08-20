export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined ? { type: Key } : { type: Key; payload: M[Key] };
};

export type FormState = { password: string; username: string; description: string };

export interface FormPayload {
  ON_FILL_FIELD: { field: keyof FormState; value: string };
}

export type FormActions = ActionMap<FormPayload>[keyof ActionMap<FormPayload>];

export const initialFormState: FormState = { description: '', password: '', username: '' };

export const formReducer = (state = initialFormState, { payload, type }: FormActions): FormState => {
  switch (type) {
    case 'ON_FILL_FIELD':
      return { ...state, [payload.field]: payload.value };

    default:
      return state;
  }
};
