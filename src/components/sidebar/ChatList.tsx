import { useState } from "react"
import { ChatListItem } from "@/components/sidebar/ChatListItem"

export const ChatList = ()=>{
    const [chatlist,setChatlist] = useState([{},{},{}])
    return(
        <div className="flex-1 bg-white overflow-y-auto pl-[15px]">
            {chatlist.map((item,key)=> (
              <ChatListItem
                key={key}
              
              />
            )
            )}
          </div>
    )
}