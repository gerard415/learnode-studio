import React, {useState} from 'react'
import View from './View'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const CreateOnboarding = () => {

    const schema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().min(8).max(20).required(),
        token:yup.number().integer()
    });

    const emptyInput = {
        name: '',
        password: '',
        email:''
    };

    const {register, handleSubmit, formState:{errors}, watch} = useForm({resolver: yupResolver(schema), defaultValues: {...emptyInput}});
    const state = watch()

    const onSubmit = (data) => console.log(data)

    return (
        <View />
    )
}
