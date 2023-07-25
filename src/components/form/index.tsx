import React, { useState } from 'react'
import { Button, Input } from '..'
import { AiOutlinePlus } from "react-icons/ai";
import { ICar } from '@/interfaces/car';

type FormProps = {
    onAdd: (car: ICar) => void
}

const Form = ({ onAdd }: FormProps) => {
    const [value, setValue] = useState<string>('')
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    const handelSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (!value) return
        onAdd({
            id: Math.floor(Math.random() * 1000),
            name: value,
        });
        setValue('')
        e.target.reset()
    }
    return (
        <form className="flex justify-between items-center p-2 border border-red-300" onSubmit={handelSubmit}>
            <Input onChange={handleChange} />
            <Button type="primary" shape="default" icon={<AiOutlinePlus className="text-2xl" />} />
        </form>
    )
}

export default Form