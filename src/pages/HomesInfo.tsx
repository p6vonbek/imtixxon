import { NextPage } from "next";
import Header from "./Header"
import Link from "next/link";
import Img from 'next/image'
import Error from '../public/rasmlar/404error.png'


const HomesInfo:NextPage=()=>{
    return(
        <>
        <Header/>
        <div>
        <div style={{display:'flex',justifyContent:'space-around',marginTop:'30px'}}>
            <div style={{textAlign:'center',}}>
                <h1 style={{fontSize:'30px'}}>Kechirasiz hech qanday malumot topilmadi</h1>
            <Img src={Error} alt="error" style={{width:'700px',height:'400px',}}/>
            <div>
            <Link href={'/Home'}><button style={{width:'200px',height:'70px',border:'4px solid blue',borderRadius:'10px',backgroundColor:'blue',fontSize:'20px',color:'white',marginTop:'30px'}}>Back →</button></Link>
            </div>
        </div>
        </div>
        </div>
        </>
    )
}
export default HomesInfo