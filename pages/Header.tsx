import Link from "next/link";
import { FC } from "react";
import Styles from "../pages/Hedrs/Headrs.module.scss"



const Header:FC=()=>{
    return<header className={Styles.header}>
        <nav>
            <Link className={Styles.link}  href={'/'}>Main page</Link>
            <Link className={Styles.link}  href={'/Home'}>Home</Link>
            <Link className={Styles.link}  href={'/Houses'}>Houses</Link>
            <Link className={Styles.link}  href={'/Cottages'}>Cottages</Link>
            <Link className={Styles.link}  href={'/HomesInfo'}>Homes Info</Link>
            <Link className={Styles.link}  href={'/Like'}>❤️</Link>
            <Link className={Styles.link}  href={'./Login/Login'}>Login.</Link>
        </nav>
    </header>
}
export default Header