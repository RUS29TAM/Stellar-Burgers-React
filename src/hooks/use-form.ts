import {useState} from "react";

export function useForm(inputValues: any) {
    const [values, setValues] = useState(inputValues);

    const handleChange = (event: { target: { value: any; name: any; }; }) => {
        const {value, name} = event.target;
        setValues({...values, [name]: value});
    };
    return {values, handleChange, setValues};
}

// импортировать функцию туда, где нужно контролировать инпуты // => const {values, handleChange, setValues} = useForm({});
