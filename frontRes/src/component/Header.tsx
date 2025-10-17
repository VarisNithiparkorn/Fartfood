import logo from '../assets/fartfoodLogo.png'
import text from '../assets/FartFoodText.png'
export function Header(){
    return(
        <div className=" items-center flex justify-between w-screen h-[72px]">
            <div className=' p-5 flex items-center h-full'>
                <a href=''>
                    <img className=' w-[80px] h-[80px]' src={logo}></img>
                </a>
                <a href=''>
                    <img className=' w-[120px] h-[120px]' src={text}></img>
                </a>
            </div>
            <div className=' m-5 p-5 h-full'>
                <button className=' pl-1 pr-1 pb-0.5 pt-0.5 text-[16px] w-[80px]  border'>
                    sigin
                </button>
            </div>
        </div>
    )
}