"use client"
import { ChatIntro } from "@/components/contentArea/ChatIntro"
import { ChatWindow } from "@/components/contentArea/ChatWindow"

import { ChatListItem } from "@/components/sidebar/ChatListItem"
import { Header } from "@/components/sidebar/Header"
import { SearchItem } from "@/components/sidebar/Search"
import { ChatType } from "@/types/chatType"
import { useState } from "react"


const Page = ()=>{

  const [chatlist,setChatlist] = useState<ChatType[]>([
  {chatId:1,title:'fulano',image:'https://www.w3schools.com/howto/img_avatar2.png'},
  {chatId:2,title:'fulano',image:'https://www.w3schools.com/howto/img_avatar2.png'},
  {chatId:3,title:'fulano',image:'https://www.w3schools.com/howto/img_avatar2.png'}])

  const [activeChat,setActiveChat] = useState<ChatType | undefined>()

  console.log(activeChat)
  return(
    <div className="bg-[#D2DBDC] h-screen w-full font-['Segoe_UI']">
      {/* window  */}
      <div className="flex h-screen bg-[#EDEDED]">

        {/* sidebar  */}
        <div className="w-[35%] max-w-[415px] flex flex-col border-r border-[#DDD]">
          <Header/>
          <SearchItem/>

          <div className="flex-1 bg-white overflow-y-auto pl-[15px]">
            {chatlist.map((item,key)=> (
              <ChatListItem
                key={key}
                data={item}
                active={activeChat?.chatId === item.chatId}
                click={()=> setActiveChat(item)}
                
              />
            )
            )}
          </div>
        </div>

        {/* content area  */}
        <div className="flex-1">
          {activeChat !== undefined &&
            <ChatWindow/>}
          {activeChat === undefined &&
            <ChatIntro/>
          }
          
        </div>
      </div>
    </div>
  )
}

export default Page