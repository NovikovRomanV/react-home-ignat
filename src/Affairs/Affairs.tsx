import React, {useState} from "react";
import s from "./Affairs.module.css"
import {Affair} from "./Affair";

export type AffairType = {
    id: number
    name: string
    priority: string
}
export type FilterValuesType = "All" | "High" | "Middle" | "Low"


const Affairs = () => {

    let [affairs, setAffairs] = useState<Array<AffairType>>([
            {id: 1, name: "React", priority: "high"},
            {id: 2, name: "Anime", priority: "low"},
            {id: 3, name: "Games", priority: "low"},
            {id: 4, name: "Work", priority: "high"},
            {id: 5, name: "HTML & CSS", priority: "middle"},
        ]
    )

    let deleteAffair = (id: number) => {
        let filterAffair = affairs.filter(a => a.id !== id)
        return (setAffairs(filterAffair))
    }

    let [filter, setFilter] = useState<FilterValuesType>("All")

    let changeFilter = (value: FilterValuesType) => {
        setFilter(value)
    }

    let titleAffairs = affairs
    if (filter === "High") {
        titleAffairs = affairs.filter(a => a.priority === "high")
    }
    if (filter === "Middle") {
        titleAffairs = affairs.filter(a => a.priority === "middle")
    }
    if (filter === "Low") {
        titleAffairs = affairs.filter(a => a.priority === "low")
    }

    return (
        <div className={s.box}>
            <Affair titleAffairs={titleAffairs} deleteAffair={deleteAffair}/>
            <div className={s.container}>
            <button onClick={()=>{changeFilter("All")}}>All</button>
            <button onClick={()=>{changeFilter("High")}}>High</button>
            <button onClick={()=>{changeFilter("Middle")}}>Middle</button>
            <button onClick={()=>{changeFilter("Low")}}>Low</button>
            </div>
        </div>
    )
}

export default Affairs;