import React from "react";
import s from "./Affairs.module.css";
import {AffairType, FilterValuesType} from "./Affairs";
type AffairPropsType = {
    titleAffairs: Array<AffairType>
    deleteAffair: (id: number) => void
}
export const Affair = (props:AffairPropsType) => {

    return(
        <div>
            <ul>
                {props.titleAffairs.map(a => {
                    return (
                        <li className={s.item} key={a.id}>
                            <span>{a.name}</span>
                            <span className={s.button} onClick={() => {
                                props.deleteAffair(a.id)
                            }}><img className={s.trash_can} alt={"trash can"} src={"https://cdn.icon-icons.com/icons2/390/PNG/512/trash-can_38501.png"}/></span>
                        </li>
                    )
                })
                }
            </ul>
        </div>
    )
}