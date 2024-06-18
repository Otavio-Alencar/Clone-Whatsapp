import { Avatar, AvatarImage } from "@/components/ui/avatar"

export const ChatListItem = ()=>{
    return(
        // ChatListItem 
        <div className="flex cursor-pointer items-center h-[70px] hover:bg-[#F5F5F5] scrollbar scrollbar-thumb-[rgba(0,0,0,0.2)] ">
            {/* avatar  */}
            <Avatar className='cursor-pointer h-[50px] w-[50px]'>
                <AvatarImage src='https://www.w3schools.com/howto/img_avatar2.png'/>
            </Avatar>
            {/* chalist-lines  */}
            <div className="flex-1 flex flex-col justify-center border-b border-[#EEE] pr-[15px] h-full ml-[15px] flex-wrap min-w-0">
                {/* chatlist line */}
                <div className="flex justify-between items-center w-full">
                    {/* chatlist name  */}
                    <div className="text-[17px] text-black"> bonieky</div>
                    {/* chatlist date  */}
                    <div className="text-[12px] text-[#999]">10:00</div>
                </div>
                {/* chatlist line */}
                <div className="flex justify-between items-center w-full">
                    {/* chatlist lastmsg  */}
                    <div className="text-[14px] text-[#999] flex w-full">
                        <p className="overflow-hidden whitespace-nowrap text-ellipsis">Opa, tudo bem?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}