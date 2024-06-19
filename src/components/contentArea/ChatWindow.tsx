

import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react'
import { useEffect, useRef, useState } from 'react';
import { HeaderInfo } from './window/HeaderInfo';
import { MessageItem } from './window/MessageItem';

type Props = {
    user: {
        id:number,
        avatar: string,
        name:string
    }
}
export const ChatWindow = ({user}: Props)=>{
   

    const [emojiOpen, setEmojiOpen] = useState(false)
    const [text,setText] = useState('')
    const [list,setList] = useState([
        {author:123,body: 'blablabla'},
        {author:123,body: 'blablabla'},
        {author:1234,body: 'blablabla'},
        {author:1234,body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting'}
        ])
    
    const body= useRef<HTMLDivElement>(null)
    
    useEffect(()=>{
        if (body.current && body.current.scrollHeight > body.current.offsetHeight) {
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight
        }
    },list)   
    
    
    const handleOpenEmoji = ()=>{
        setEmojiOpen(true)
    }
    const handleCloseEmoji = ()=>{
        setEmojiOpen(false)
    }
    const handleEmojiClick = (e: EmojiClickData)=>{
        setText(text + e.emoji)
    }
    const handleSendClick = ()=>{

    }
   
    return(
        // chat window 
        <div className='flex flex-col h-full'>
            {/* chat header  */}
            <HeaderInfo/>



            {/* chat body  */}
            <div ref={body} className='flex-1 overflow-y-auto bg-[#E5DDD5] bg-cover bg-top bg-[url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")] py-[20px] px-[30px] scrollbar-thin scrollbar-thumb-[rgba(0,0,0,0.2)] '>
                {list.map((item,key)=>(
                    <MessageItem
                    key={key}
                    data={item}
                    user={user}/>
                ))}
            </div>

            {/* emoji area  */}

            <div>
                <EmojiPicker
                    onEmojiClick={handleEmojiClick}
                    width={'100%'}
                    height={emojiOpen ? 250 : 0 }
                    searchDisabled
                    skinTonesDisabled
                    className='overflow-y-hidden transition-all ease '/>
            </div>


            {/* chat footer  */}
            <div className='h-[62px] flex items-center '>
                {/* chat window pre  */}
                <div className='flex mx-[15px]'>
                    {emojiOpen === true && 
                    <div className='w-[40px] h-[40px] rounded-full flex justify-center items-center cursor-pointer'
                    onClick={handleCloseEmoji}>
                        <CloseIcon className='text-[#919191]'/>
                    </div>
                    }
                    
                    <div className='w-[40px] h-[40px] rounded-full flex justify-center items-center cursor-pointer' onClick={handleOpenEmoji}>
                        <EmojiEmotionsIcon className={` ${emojiOpen === true ? 'text-[#009688]': 'text-[#919191]'}`}/>
                    </div>
                   

                </div>

                {/* chat window inputarea  */}
                <div className='flex-1'>
                    <input type="text" className='w-full h-10 border-0 outline-0 bg-white rounded-[20px] text-[#4A4A4A] pl-[15px]' value={text} onChange={e => setText(e.target.value)} placeholder='Digite uma mensagem'/>
                </div>

                {/* chat window pos  */}
                
                <div className='flex mx-[15px]'>

                    {text !== '' &&
                    <div className='w-[40px] h-[40px] rounded-full flex justify-center items-center cursor-pointer' 
                    onClick={handleSendClick}>
                        <SendIcon className='text-[#919191]'/>
                    </div>
                    }

                    {text === '' &&
                        <div className='w-[40px] h-[40px] rounded-full flex justify-center items-center cursor-pointer'
                        >
                            <MicIcon className='text-[#919191]'/>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}