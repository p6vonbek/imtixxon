import { NextPage } from "next";
import Img from 'next/image'
import R from '../public/rasmlar/R.jpg'
import Link from "next/link";


const MainPage:NextPage=()=>{
    return(
        <>
        
        <div>
        <div  >
            <Img className="R" src={R} alt="uy rasmi" style={{width:'1500px',height:'900px'}}/>  
            
          </div>
          <div>
            <Link href={'/Home'}><button style={{border:'4px solid blue',borderRadius:'10px', color:'white',
            width:'500px',height:'150px',backgroundColor:'blue',marginLeft:'500px',fontSize:'25px',position:'absolute',zIndex:111}}>Please click →            </button></Link>
          </div>
        </div>
        </>
    )
}
export default MainPage