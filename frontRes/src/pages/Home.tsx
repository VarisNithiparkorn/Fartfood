import { Header } from "../component/Header";
import searchIcon from "../assets/search-icon.png"
import { getAllItems } from "../utils/fetchUtil";
import { useEffect, useState } from "react";

export function Home(){
    interface Countries{
        _id:string
    }
    const url:string = import.meta.env.VITE_APP_URL
    let [countries,setCountries] = useState<Countries[]>([])
    let [categories,setCategories] = useState<string[]>([])
    let [country,setCountry] = useState<string>("Thailand")
    useEffect(()=>{
        getAllItems(url+'/api/menues/all-countries').then(
            (datas:any)=>  {setCountries(datas)
            }
        )
        getAllItems(url+'/api/menues/all-categories').then(
            (data:any) =>{
                setCategories(data)
                console.log(data)
            }
        )
    },[])
    const changeCountry = (country:string) =>{
        setCountry(country)
    }
    return(
        
        <div className=" w-full h-screen bg-gray-100">
            <Header>

            </Header>
            <div className=" flex justify-center items-center bg-gradient-to-b from-red-900 to-red-700 border w-screen relative h-[400px]">
                <div className=" w-[70%] flex flex-col items-center h-[80%]">
                    <h1 className=" text-2xl text-white mb-2">
                        อาหารอร่อยๆทั่วโลก...
                    </h1>
                    <h1 className=" overflow-hidden text-6xl text-white m-2">
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
                <div className="p-2 bg-white bottom-[-300px] rounded-xl w-[60%] h-[400px] absolute flex flex-col items-center">
                    <div className=" p-2 w-[90%] flex justify-around">
                        {countries.map((c,i)=>(
                        <div onClick={()=>changeCountry(c._id)} className={`
    group w-[10%] flex flex-col justify-center items-center
    ${c._id === country 
        ? "border-red-600 p-2 border-b-4" 
        : "border-red-600 p-2 hover:border-b-4"
    }
  `} key={i.toString()}>
                                <img className= {c._id === country ?" relative bottom-1  mt-3 w-[40px] h-[40px]": " relative group-hover:bottom-1  mt-3 w-[40px] h-[40px]"} src={'/Icon/' + c._id + '.png'}></img>
                            <p className=" text-[14px] mt-4">
                                {c._id}
                            </p>
                        </div>
                    ))}
                    </div>
                    <div className=" p-5 w-full h-full flex flex-wrap justify-around">
                        {categories.map(c => 
                            <div key={c}  style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/${country}/${c}.jpg')`,
                        }} className={`w-[24%] relative h-[40%] border bg-cover bg-center rounded-xl`}>
                                <p className=" absolute top-12 left-3 text-white font-bold">{c}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}