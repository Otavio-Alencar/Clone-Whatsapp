import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react';
type Props = {
    user: {},
    chatlist: {},
    show: boolean,
    setShow : ()=> void

}
export const NewChat = ({user,chatlist,show,setShow}: Props)=>{
    const [list,setList] = useState([
        {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Bonieky'},
        {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Bonieky'},
        {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Bonieky'},
        {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Bonieky'}
    ])
    
    return(
        // new chat 
        <div className={`w-[35%] max-w-[415px] fixed top-0 bottom-0 bg-white flex flex-col border-r border-white z-50 ${show ? 'left-0': 'left-[-415px]'} transition-all ease`}>
            {/* new chat head  */}
            <div className="flex bg-[#00BFA5] items-center pt-[60px] px-[15px] pb-[15px]">
                <div className='w-10 h-10 flex justify-center items-center cursor-pointer' onClick={setShow}>
                    <ArrowBackIcon className='text-white'/> 
                </div>
                <div className='text-[19px] h-10 leading-10 flex-1 font-bold text-white ml-5'>Nova conversa</div>
            </div>
            {/* new chat list */}
            <div className='flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-[rgba(0,0,0,0.2)]'>
                {list.map((item,key)=>(
                    // new chat item 
                    <div key={key} className='flex items-center p-[15px] cursor-pointer hover:bg-[#F5F5F5]'>
                        <img className='w-[50px] h-[50px] rounded-[50%] text-[17px] mr-[15px] transition-all ease' src={item.avatar} alt="" />
                        <div className='text-[17px] text-black'>{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}