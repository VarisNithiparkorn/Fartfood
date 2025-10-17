import { Header } from "../component/Header";
import searchIcon from "../assets/search-icon.png"
export function Home(){
    return(
        <div className=" w-full h-screen bg-gray-100">
            <Header>

            </Header>
            <div className=" flex justify-center items-center bg-gradient-to-b from-red-900 to-red-700 border w-screen relative h-[400px]">
                <div className=" w-[70%] flex flex-col items-center h-[80%]">
                    <h1 className=" text-2xl text-white mb-2">
                        อาหารอร่อยๆทั่วโลก...
                    </h1>
                    <h1 className=" text-6xl text-white m-2">
                        ส้มตำปู ปลาร้า
                    </h1>
                    <h1 className=" text-xl text-white m-2">
                        ที่พร้อมเสิร์ฟถึงปากคุณเพียงคลิกเดียว
                    </h1>
                    <div className=" w-[45%] relative mt-5">
                        <input type="text" className=" text-[12px] border-orange-600 w-full bg-white h-[32px] rounded-2xl pl-5 pt-1 pb-1">
                        </input>
                        <canvas className=" absolute"id="myCanvas" width="500" height="300"></canvas>
                        <img className=" right-3 bottom-2 absolute w-[15px] h-[15px]" src={searchIcon}></img>
                    </div>
                </div>
                <div className=" bg-white bottom-[-300px] rounded-xl w-[60%] h-[400px] absolute">

                </div>
            </div>
        </div>
    )
}