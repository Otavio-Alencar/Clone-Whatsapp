import { createContext, useState } from "react";

type active = {
    active: object,
    setActive:(id:object)=>{}
}
const ActiveContext = createContext<active | null>(null)

export const ActiveProvider = ()=>{
    const [activeChat,setActiveChat] = useState({})

    const modifier = (id:object)=>{
        setActiveChat(id)
    }
    return(
        <ActiveContext.Provider value={{activeChat,modifier}}>

        </ActiveContext.Provider>
    )
}