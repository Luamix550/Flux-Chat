export type sessionForm = {
    changeWindow: () => void;
}

export type LoginFormValues = {
    email: string;
    password: string;
}

export type RegisterFormValues = {
    name: string;
    email: string;
    password: string;
    repeatPassword: string;
}

export interface invalidInput {
    name: boolean;
    email: boolean;
    password: boolean;
    repeatPassword: boolean;
}

export interface errorsForm {
    name?: string;
    email?: string;
    password?: string;
    repeatPassword?: string;
}