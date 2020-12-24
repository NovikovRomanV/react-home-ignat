import React, {ChangeEvent, useState} from "react";
import s from "./Greeting.module.css";
import {v1} from "uuid";

type UserType = {
    id: string
    name: string
}

export const Greeting = () => {
    const [users, setUsers] = useState<Array<UserType>>([])
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const inputValue = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
        setError('')
    }

    const addUser = () => {
        const newUser = {
            id: v1(),
            name: name
        }
        if (name !== '') {
            alert('Hello ' + name + '!')
            setUsers([newUser, ...users])
            setError('')
            setName('')
        } else {
            setError("Error provide user name!")
        }
    }
    const classError = error ? s.error : '';

    return <div className={s.container}>
        <div className={s.inputButton}>
            <input value={name} onChange={inputValue} className={classError} placeholder={'user name'}/>
            <button onClick={addUser}>add</button>
        </div>
        <span className={s.spanError}>{error}</span>
        <div className={s.totalUsers}>
            <span>Total users: {users.length}</span>
        </div>
    </div>
}