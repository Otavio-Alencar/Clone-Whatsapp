import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';
export const ChatWindow = ()=>{
    return(
        // chat window 
        <div className='flex flex-col h-full'>
            {/* chat header  */}
            <div className='h-[60px] flex border-b border-[#CCC] justify-between items-center'>
                {/* header info  */}
                <div className='flex items-center cursor-pointer'>
                    <Avatar className='mx-[15px]'>
                        <AvatarImage src='https://www.w3schools.com/howto/img_avatar2.png'/>
                    </Avatar> 
                    <div className='text-[17px] text-black'>Bonieky</div>
                </div>
                {/* header buttons  */}
                <div className='flex items-center mr-[15px] gap-4'>
                    <div className='w-[40px] h-[40px] rounded-full flex justify-center items-center cursor-pointer'>
                        <SearchIcon className='text-[#919191]'/>
                    </div>
                    <div className='w-[40px] h-[40px] rounded-full flex justify-center items-center cursor-pointer'>
                        <AttachFileIcon className='text-[#919191]'/>
                    </div>
                    <div className='w-[40px] h-[40px] rounded-full flex justify-center items-center cursor-pointer'>
                        <MoreVertIcon className='text-[#919191]'/>
                    </div>
                </div>
            </div>
            {/* chat body  */}
            <div className='flex-1 overflow-y-auto bg-[#E5DDD5] bg-cover bg-center bg-[url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")]'>

            </div>
            {/* chat footer  */}
            <div className='h-[62px] flex items-center '>
                {/* chat window pre  */}
                <div className='flex mx-[15px]'>

                    <div className='w-[40px] h-[40px] rounded-full flex justify-center items-center cursor-pointer'>
                        <CloseIcon className='text-[#919191]'/>
                    </div>
                    
                    <div className='w-[40px] h-[40px] rounded-full flex justify-center items-center cursor-pointer'>
                        <EmojiEmotionsIcon className='text-[#919191]'/>
                    </div>

                </div>

                {/* chat window inputarea  */}
                <div className='flex-1'>
                    <input type="text" className='w-full h-10 border-0 outline-0 bg-white rounded-[20px] text-[#4A4A4A] pl-[15px]' placeholder='Digite uma mensagem'/>
                </div>

                {/* chat window pos  */}
                <div className='flex mx-[15px]'>
                    <div className='w-[40px] h-[40px] rounded-full flex justify-center items-center cursor-pointer'>
                        <SendIcon className='text-[#919191]'/>
                    </div>
                </div>
            </div>
        </div>
    )
}