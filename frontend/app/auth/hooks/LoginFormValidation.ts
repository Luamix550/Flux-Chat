import { useState } from 'react';
import { LoginFormValues, errorsForm, invalidInput } from '@/app/types/types';

const useLoginValidation = (initialState: LoginFormValues) => {
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState<errorsForm>({});
    const [isInvalid, setIsInvalid] = useState<invalidInput>({ name: false, email: false, password: false, repeatPassword: false});

    const validateEmail = (email: string) => (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i).test(email);
    const validatePassword = (password: string) => (/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/).test(password);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
        setIsInvalid({ name: false, email: false, password: false, repeatPassword: false});
    };

    const validate = () => {
        const newErrors: errorsForm = {};

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
            newErrors.password = 'Password must be 8-16 characters long and include at least one digit, one lowercase letter, and one uppercase letter.';
            setIsInvalid(prev => ({ ...prev, password: true }));
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    return { values, errors, handleChange, validate, isInvalid };
};

export default useLoginValidation;