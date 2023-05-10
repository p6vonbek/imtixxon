import { NextPage } from "next";
import Header from "../Header";
import Link from "next/link";


const Sigin:NextPage=()=>{
return(
    <header style={{backgroundColor:'blanchedalmond'}}>
        <Header/>
        <div >
            <input placeholder="email"  type="text"  style={{fontSize:'35px',textAlign:"center", marginLeft:'700px',marginTop:'150px',boxShadow:'0px 1px 24px 4px'}}/><br />
            <input placeholder="password" type="text"  style={{fontSize:'35px',textAlign:"center", marginLeft:'700px',marginTop:'50px',boxShadow:'0px 1px 24px 4px'}}/><br />
            <Link href={'https://google.com'}>
            <button style={{fontSize:'25px',textAlign:"center",border:'3px solid blue',backgroundColor:'blue',borderRadius:'10px',marginBottom:'200px', marginLeft:'781px',marginTop:'50px',width:'250px',height:'80px'}}>Sigin</button><br />
            </Link>
        </div>
    </header>
)
}
export default Sigin
