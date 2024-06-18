export const MessageItem = ()=>{
    return(
        // message line 
        <div className="mb-[10px] flex">
            {/* message item  */}
            <div className="bg-white max-w-[80%] rounded-[10px] shadow-sm flex flex-col p-[3px]">
                {/* message text  */}
                <div className="text-[14px] mt-[5px] mr-[40px] ml-[5px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde aspernatur suscipit, quidem doloribus eum, consequatur nobis non officia blanditiis voluptate facere tenetur necessitatibus nisi mollitia est dolore soluta minus. Facere!</div>
                <div className="text-[11px] text-[#999] mr-[5px] h-[15px] text-right mt-[-15px]">19:00</div>
            </div>
        </div>
    )
}