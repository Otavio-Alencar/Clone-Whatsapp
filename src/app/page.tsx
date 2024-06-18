import { Header } from "@/components/sidebar/Header"

const Page = ()=>{
  return(
    <div className="bg-[#D2DBDC] h-screen w-full font-['Segoe_UI']">
      {/* window  */}
      <div className="flex h-screen bg-[#EDEDED]">

        {/* sidebar  */}
        <div className="w-[35%] max-w-[415px] flex flex-col border-r border-[#DDD]">
          <Header/>
          
          {/* search  */}
          <div>
            ...
          </div>
          {/* chatlist  */}
          <div>
            ...
          </div>
        </div>


        {/* content area  */}
        <div>
          ...
        </div>
      </div>
    </div>
  )
}

export default Page