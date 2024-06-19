
type Props = {
    data: {
        author:any
        body: string
    }
    user: {
        id:number,
        avatar: string,
        name:string
    }
}
export const MessageItem = ({data,user}: Props)=>{
    return(
        // message line 
        <div className={`mb-[10px] flex ${user.id === data.author ? 'justify-end': 'justify-start'}`}>
            {/* message item  */}
            <div className={`${user.id === data.author ? 'bg-[#DCF8C6]': 'bg-white'} max-w-[80%] rounded-[10px] shadow-sm flex flex-col p-[3px]`}>
                {/* message text  */}
                <div className="text-[14px] mt-[5px] mr-[40px] ml-[5px]">{data.body}</div>
                <div className="text-[11px] text-[#999] mr-[5px] h-[15px] text-right mt-[-15px]">19:00</div>
            </div>
        </div>
    )
}