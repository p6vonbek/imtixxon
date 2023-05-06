import { FC } from "react";
import Link from "next/link";
import Styles from "../pages/Hedrs/Headrs.module.scss"


const HowlLong:FC=()=>{
    return(
        <header  style={{marginLeft:'500px'}}>
            <nav>
            <Link className={Styles.link}  href={'/'}><h1>Home</h1></Link>
            <Link  className={Styles.link}  href={'/'}><h1>kkkkkkk</h1></Link>
            </nav>
       </header>
    )
}
export default HowlLong