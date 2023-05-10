import Header from "./Header"
import { NextPage } from "next";
import R from '../public/rasmlar/uy5.jpg'
import YotoqXona from '../public/rasmlar/yotoqHona.jpg'
import MehmonXona from '../public/rasmlar/MexmonXona.jpg'
import Oshxona from '../public/rasmlar/oshXona.jpg'
import Fitns from '../public/rasmlar/fitns.jpg'
import Uy4 from '../public/rasmlar/uy4.jpg'
import Uy3 from '../public/rasmlar/uy3.jpg'
import Uy2 from '../public/rasmlar/uy7.jpg'
import Uy6 from '../public/rasmlar/uy6.jpg'
import Footer from '../public/rasmlar/footer 1400.jpg'
import Img from 'next/image'
import Yordam from '../styles/yordam.module.css'

const About:NextPage=()=>{
    return(
        <>
        <Header/>
        <div>
            <div style={{border:'4px solid blue',borderRadius:'10px',backgroundColor:'blue',}}>
            <div >
                <div style={{display:"flex",justifyContent:'center'}}>
            <Img  src={R} alt="uy rasmi" style={{width:'700px', padding:'3px',height:'560px'}}/> 
            <div style={{marginTop:'150px'}}>
            <div style={{display:'flex'}}>
            <Img className={Yordam.img3}  src={YotoqXona} alt="YotoqXona" style={{ marginLeft:'50px', padding:'3px',}}/>
            <Img className={Yordam.img4}  src={MehmonXona} alt="MehmonXona" style={{ marginLeft:'50px', padding:'3px'}}/>
            </div>
            <div style={{display:"flex",marginTop:'30px'}}>
            <Img className={Yordam.img3}  src={Oshxona} alt="Oshxona" style={{ marginLeft:'50px', padding:'3px'}}/>
            <Img className={Yordam.img4}  src={Fitns} alt="Fitns" style={{ marginLeft:'50px', padding:'3px'}}/>

            </div> </div>
            </div>
             <div style={{marginTop:'50px',display:'flex',justifyContent:'center'}}>
                <div>
                <h1>Home Information</h1>
                <h3>It has two floors, three hotels, five bedrooms, <br /> and a number of other rooms.</h3>
                </div>
                <div style={{marginLeft:'200px'}}>
                <h1>Rent of the house</h1>
                <h3 style={{fontSize:'20px'}}>$100 a week. <br /> $500 a month. <br /> $1,000 a month for two months.</h3></div>
             </div>
            </div>
            </div>
            <div style={{border:'4px solid green',borderRadius:'10px',backgroundColor:'green',marginTop:'30px'}}>
            <div >
                <div style={{display:"flex",justifyContent:'center'}}>
            <div style={{marginTop:'150px'}}>
            <div style={{display:'flex'}}>
            <Img className={Yordam.img3}  src={Oshxona} alt="YotoqXona" style={{ marginLeft:'50px', padding:'3px'}}/>
            <Img className={Yordam.img4} src={Fitns} alt="MehmonXona" style={{ marginLeft:'50px', padding:'3px'}}/>
            </div>
            <div style={{display:"flex",marginTop:'30px'}}>
            <Img className={Yordam.img3}  src={YotoqXona} alt="Oshxona" style={{marginLeft:'50px', padding:'3px'}}/>
            <Img className={Yordam.img4}  src={MehmonXona} alt="Fitns" style={{ marginLeft:'50px', padding:'3px'}}/>

            </div>
             </div>
            <Img  src={Uy4} alt="uy rasmi" style={{width:'700px', padding:'3px',height:'560px',marginLeft:'30px',marginTop:'50px'}}/> 
            </div>
             <div style={{marginTop:'50px',display:'flex',justifyContent:'center'}}>
                <div>
                <h1>Home Information</h1>
                <h3>It has two floors, three hotels, five bedrooms, <br /> and a number of other rooms.</h3>
                </div>
                <div style={{marginLeft:'200px'}}>
                <h1>Rent of the house</h1>
                <h3 style={{fontSize:'20px'}}>$100 a week. <br /> $500 a month. <br /> $1,000 a month for two months.</h3></div>
             </div>
            </div>
            </div>
            <div style={{border:'4px solid palegreen',borderRadius:'10px',backgroundColor:'palegreen',marginTop:'30px'}}>
            <div >
                <div style={{display:"flex",justifyContent:'center'}}>
            <Img  src={Uy3} alt="uy rasmi" style={{width:'700px', padding:'3px',height:'560px',marginTop:'30px'}}/> 
            <div style={{marginTop:'150px'}}>
            <div style={{display:'flex'}}>
            <Img className={Yordam.img3}  src={YotoqXona} alt="YotoqXona" style={{ marginLeft:'50px', padding:'3px'}}/>
            <Img className={Yordam.img4} src={MehmonXona} alt="MehmonXona" style={{ marginLeft:'50px', padding:'3px'}}/>
            </div>
            <div style={{display:"flex",marginTop:'30px'}}>
            <Img className={Yordam.img3}  src={Oshxona} alt="Oshxona" style={{ marginLeft:'50px', padding:'3px'}}/>
            <Img className={Yordam.img4} src={Fitns} alt="Fitns" style={{ marginLeft:'50px', padding:'3px'}}/>

            </div> </div>
            </div>
             <div style={{marginTop:'50px',display:'flex',justifyContent:'center'}}>
                <div>
                <h1>Home Information</h1>
                <h3>It has two floors, three hotels, five bedrooms, <br /> and a number of other rooms.</h3>
                </div>
                <div style={{marginLeft:'200px'}}>
                <h1>Rent of the house</h1>
                <h3 style={{fontSize:'20px'}}>$100 a week. <br /> $500 a month. <br /> $1,000 a month for two months.</h3></div>
             </div>
            </div>
            </div>
            <div style={{border:'4px solid palegoldenrod',borderRadius:'10px',backgroundColor:'palegoldenrod',marginTop:'30px'}}>
            <div >
                <div style={{display:"flex",justifyContent:'center'}}>
            <div style={{marginTop:'150px'}}>
            <div style={{display:'flex'}}>
            <Img  className={Yordam.img3} src={Oshxona} alt="YotoqXona" style={{ marginLeft:'50px', padding:'3px'}}/>
            <Img  className={Yordam.img4} src={Fitns} alt="MehmonXona" style={{ marginLeft:'50px', padding:'3px'}}/>
            </div>
            <div style={{display:"flex",marginTop:'30px'}}>
            <Img  className={Yordam.img3} src={YotoqXona} alt="Oshxona" style={{ marginLeft:'50px', padding:'3px'}}/>
            <Img  className={Yordam.img4} src={MehmonXona} alt="Fitns" style={{ marginLeft:'50px', padding:'3px'}}/>

            </div>
             </div>
            <Img  src={Uy2} alt="uy rasmi" style={{width:'700px', padding:'3px',height:'560px',marginLeft:'30px',marginTop:'50px'}}/> 
            </div>
             <div style={{marginTop:'50px',display:'flex',justifyContent:'center'}}>
                <div>
                <h1>Home Information</h1>
                <h3>It has two floors, three hotels, five bedrooms, <br /> and a number of other rooms.</h3>
                </div>
                <div style={{marginLeft:'200px'}}>
                <h1>Rent of the house</h1>
                <h3 style={{fontSize:'20px'}}>$100 a week. <br /> $500 a month. <br /> $1,000 a month for two months.</h3></div>
             </div>
            </div>
            </div>
            <div style={{border:'5px solid royalblue',borderRadius:'10px',backgroundColor:'royalblue',marginTop:'30px'}}>
            <div >
                <div style={{display:"flex",justifyContent:'center'}}>
            <Img  src={Uy6} alt="uy rasmi" style={{width:'700px', padding:'3px',height:'560px',marginTop:'30px'}}/> 
            <div style={{marginTop:'150px'}}>
            <div style={{display:'flex'}}>
            <Img  className={Yordam.img3}  src={YotoqXona} alt="YotoqXona" style={{ marginLeft:'50px', padding:'3px'}}/>
            <Img  className={Yordam.img4} src={MehmonXona} alt="MehmonXona" style={{ marginLeft:'50px', padding:'3px'}}/>
            </div>
            <div style={{display:"flex",marginTop:'30px'}}>
            <Img  className={Yordam.img3} src={Oshxona} alt="Oshxona" style={{ marginLeft:'50px', padding:'3px'}}/>
            <Img  className={Yordam.img4} src={Fitns} alt="Fitns" style={{ marginLeft:'50px', padding:'3px'}}/>

            </div> </div>
            </div>
             <div style={{marginTop:'50px',display:'flex',justifyContent:'center'}}>
                <div>
                <h1>Home Information</h1>
                <h3>It has two floors, three hotels, five bedrooms, <br /> and a number of other rooms.</h3>
                </div>
                <div style={{marginLeft:'200px'}}>
                <h1>Rent of the house</h1>
                <h3 style={{fontSize:'20px'}}>$100 a week. <br /> $500 a month. <br /> $1,000 a month for two months.</h3></div>
             </div>
            </div>
            </div>
            <div>
                    <Img src={Footer} alt="uy" style={{width:'100%',height:'300px'}}/>
                </div>
        </div>
        </>
    )
}
export default About