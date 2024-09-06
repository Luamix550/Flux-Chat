import React, { useState } from "react";
import {  RegisterFormValues, errorsForm,  invalidInput } from "@/app/types/types";

const useRegisterValidation = (initialState: RegisterFormValues) => {
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState<errorsForm>({});
    const [isInvalid, setIsInvalid] = useState<invalidInput>({ name: false, email: false, password: false, repeatPassword: false});

    const validateName = (name : string) => (/^[a-zA-Z]+$/).test(name);
    const validateEmail = (email: string) => (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i).test(email);
    const validatePassword = (password: string) => (/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/).test(password);
    const validateRepeatPassword = (password: string, repeatPassword: string) => password === repeatPassword;
    
    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
        setIsInvalid({ name: false, email: false, password: false, repeatPassword: false});
    }

    const validate = () => {
        const newErrors: errorsForm  = {};

        if (values.name === "") {
            newErrors.name = 'Name is required';
            setIsInvalid(prev => ({ ...prev, name: true }));
        }
        if (values.name !== "" && !validateName(values.name)) {
            newErrors.name = 'Name must be a String';
            setIsInvalid(prev => ({ ...prev, name: true }));
        }

        if (values.email === "") {
            newErrors.email = 'Email is required';
            setIsInvalid(prev => ({ ...prev, email: true }));
        }
        if (values.email !== "" && !validateEmail(values.email)) {
            newErrors.email = 'Invalid email';
            setIsInvalid(prev => ({ ...prev, email: true }));
        }
        

        if (values.password === "") {
            newErrors.password = 'Password is required';
            setIsInvalid(prev => ({ ...prev, password: true }));
        } 
        if (values.password !== "" && !validatePassword(values.password)) {
            newErrors.password = 'Password requirements include length between 8 to 16 characters, with at least one digit, one lowercase letter, and one uppercase letter.';
            setIsInvalid(prev => ({ ...prev, password: true }));
        }

        if (values.password === "") {
            newErrors.repeatPassword = 'Repeat password is required';
            setIsInvalid(prev => ({ ...prev, repeatPassword: true }));
        } 
        if (!validateRepeatPassword(values.password, values.repeatPassword)) {
            newErrors.repeatPassword = 'Passwords do not match';
            setIsInvalid(prev => ({ ...prev, repeatPassword: true }));
        }
        

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    return { values, errors, handleChange, validate, isInvalid };
}

export default useRegisterValidation;