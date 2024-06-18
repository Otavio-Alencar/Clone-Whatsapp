import SearchIcon from '@mui/icons-material/Search';
import { Input } from '@/components/ui/input';
export const SearchItem = ()=>{
    return(
        <div className="bg-[#F6F6F6] border-b border-[#EEE] py-[5px] px-[15px] ">
            {/* search input  */}
            <div className="bg-white h-10 rounded-[20px] flex items-center px-[10px]">
              <SearchIcon className="text-[rgb(145,145,145)] text-xl cursor-pointer"/>
              <Input type='search' className="flex-1 border-0 outline-none bg-transparent ml-[10px] text-black " placeholder="Procurar ou começar uma nova conversa" />
            </div>
          </div>
    )
}