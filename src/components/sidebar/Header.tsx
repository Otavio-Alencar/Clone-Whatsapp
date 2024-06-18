import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
export const Header = ()=>{
    return(
        <header className="h-[60px] flex justify-between items-center py-0 px-[15px] ">
              {/* avatar  */}
              <img className="w-[40px] h-[40px] rounded-full cursor-pointer" src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />
              {/* header buttons  */}
              <div className="flex">
                <div className='w-[40px] h-[40px] rounded-full flex justify-center items-center cursor-pointer'>
                    <DonutLargeIcon className='text-[#919191]'/>
                </div>
                <div className='w-[40px] h-[40px] rounded-full flex justify-center items-center cursor-pointer'>
                    <ChatIcon className='text-[#919191]'/>
                </div>
                <div className='w-[40px] h-[40px] rounded-full flex justify-center items-center cursor-pointer'>
                    <MoreVertIcon className='text-[#919191]'/>
                </div>
              </div>
          </header>
    )
}