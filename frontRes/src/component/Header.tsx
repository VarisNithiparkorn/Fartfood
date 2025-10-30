import logo from '../assets/fartfoodLogo.png'
export function Header(){
    return(
        <div className=" items-center flex justify-between w-screen h-[72px]">
            <div className=' m-1 flex items-center h-full'>
                <a href=''>
                    <img className=' w-[180px] h-[180px]' src={logo}></img>
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