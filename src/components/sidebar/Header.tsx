import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, AvatarImage } from '../ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { ModeToggle } from '../toggleTheme';


type Props = {
    user: {
        id:number,
        avatar: string,
        name:string
    }
    handleNewChat: ()=>void
}
export const Header = ({user,handleNewChat}: Props)=>{
    return(
        <header className="h-[60px] flex justify-between items-center py-0 px-[15px] ">
              {/* avatar  */}
              
              <Avatar className='cursor-pointer'>
                <AvatarImage src={user.avatar}/>
              </Avatar>
              {/* header buttons  */}
              <div className="flex">
                <div className='w-[40px] h-[40px] rounded-full flex justify-center items-center cursor-pointer'>
                    <DonutLargeIcon className='text-[#919191]'/>
                </div>
                <div className='w-[40px] h-[40px] rounded-full flex justify-center items-center cursor-pointer' onClick={handleNewChat}>
                    <ChatIcon className='text-[#919191]'/>
                </div>
                <div className='w-[40px] h-[40px] rounded-full flex justify-center items-center cursor-pointer'>

                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <MoreVertIcon className='text-[#919191]'/>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>Novo Grupo</DropdownMenuItem>



                            <DropdownMenuItem>
                                <ModeToggle>
                                    tema
                                </ModeToggle>
                            </DropdownMenuItem>




                            <DropdownMenuItem>Desconectar</DropdownMenuItem>
                            <DropdownMenuSeparator/>
                            <DropdownMenuItem>Baixar o WhatsApp para windows</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
              </div>
          </header>
    )
}