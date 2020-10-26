import React from 'react';
import s from './Message.module.css'

type MessageType = {
    name: string
    text: string
    time: string
}

function Message(props: MessageType) {
  return (
    <div className={s.message}>
        <img alt={"Foto user"} src={"http://smeshariki-mir.ru/avatars/forum/2D/krosh042.gif"}/>
        <div className={s.message__box}>
            <div className={s.message__name}>{props.name}</div>
            <div className={s.message__text}>{props.text}</div>
            <time className={s.message__time}>{props.time}</time>
        </div>
    </div>
  );
}

export default Message;
