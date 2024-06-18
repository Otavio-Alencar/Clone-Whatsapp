import { Avatar, AvatarImage } from "@/components/ui/avatar"
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
export const HeaderInfo = ()=>{
    return(
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
    )
}