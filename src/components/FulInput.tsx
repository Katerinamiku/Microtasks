import React, {ChangeEvent, useState} from 'react';

type FullInputType = {
    addMessage: (title: string) => void
}

export const FullInput = (props: FullInputType) => {
    let [title, setTitle] = useState('') // лежит значение инпута

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value) // синтиаксис реакта, по ивэнту отобразить значние currentTarget и
        // записать его в title
    }
    const onClickButtonHandler = () => {
        props.addMessage(title) //передаем зеначние из инпута в addMessage
        setTitle('') //обнуляем инпут
    }
    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    )
}

