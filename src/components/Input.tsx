import React, {ChangeEvent} from 'react';

type InputPropsType = {
    setTitle: (title: string)=> void
    title: string
}
export const Input=(props:InputPropsType)=> {
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value) // синтиаксис реакта, по ивэнту отобразить значние currentTarget и
        // записать его в title
    }
    return (
        <input value={props.title} onChange={onChangeInputHandler}/>
    )
}
