"use client"
import { ChatIntro } from "@/components/contentArea/ChatIntro"
import { ChatList } from "@/components/sidebar/ChatList"
import { Header } from "@/components/sidebar/Header"
import { SearchItem } from "@/components/sidebar/Search"


const Page = ()=>{
  return(
    <div className="bg-[#D2DBDC] h-screen w-full font-['Segoe_UI']">
      {/* window  */}
      <div className="flex h-screen bg-[#EDEDED]">

        {/* sidebar  */}
        <div className="w-[35%] max-w-[415px] flex flex-col border-r border-[#DDD]">
          <Header/>
          <SearchItem/>
          <ChatList/>
        </div>

        {/* content area  */}
        <div>
          <ChatIntro/>
        </div>
      </div>
    </div>
  )
}

export default Page