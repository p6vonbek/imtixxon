import { NextPage } from "next";
import Header from "../Header";
import Link from "next/link";


const Login:NextPage=()=>{
return(
    <header style={{backgroundColor:'blanchedalmond'}}>
        <Header/>
        <div >
            <input placeholder="name"  type="text"  style={{fontSize:'35px',textAlign:"center", marginLeft:'700px',marginTop:'150px',boxShadow:'0px 1px 24px 4px'}}/><br />
            <input placeholder="family" type="text"  style={{fontSize:'35px',textAlign:"center", marginLeft:'700px',marginTop:'50px',boxShadow:'0px 1px 24px 4px'}}/><br />
            <input placeholder="password" type="text"  style={{fontSize:'35px',textAlign:"center", marginLeft:'700px',marginTop:'50px',boxShadow:'0px 1px 24px 4px'}}/><br />
            <div style={{display:'flex',}}>
                <Link href={'https://google.com'}>
            <button style={{fontSize:'25px',textAlign:"center",border:'3px solid blue',backgroundColor:'blue',borderRadius:'10px',marginBottom:'200px', marginLeft:'650px',marginTop:'50px',width:'250px',height:'80px'}}>login</button><br />
                </Link>
            <Link href={'/Login/Sigin'}>
            <button style={{fontSize:'25px',textAlign:"center",border:'3px solid blue',backgroundColor:'blue',borderRadius:'10px',marginBottom:'200px', marginLeft:'80px',marginTop:'50px',width:'250px',height:'80px'}}>Sigin up</button><br />
            </Link>

            </div>
        </div>
    </header>
)
}

export default Login