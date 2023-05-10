import { NextPage } from "next";
import Header from "./Header"
import Img from 'next/image'
import R from '../public/rasmlar/img.jpg'
import Footer from '../public/rasmlar/footer 1400.jpg'




const Cottages:NextPage=()=>{
    return(
        <>
        <Header/>
        <div >
            <div style={{width:'100%',height:'300px',border:'2px solid palegoldenrod',borderRadius:'20px',display:'flex',textAlign:'center',backgroundColor:'palegoldenrod',marginTop:'20px'}}>
                <Img src={R} alt="#" style={{width:'300px',height:'300px'}}/>
            <div style={{marginLeft:'200px',display:'flex'}}>
            <div>
            <h1>25 bedrooms</h1>   
            <h2>Table tennis</h2> 
            <h2>Pool</h2>
            <h2>Sauna</h2>
            </div>
            <hr style={{marginLeft:'150px'}}/>
            <div style={{marginLeft:'200px'}}>
                <div style={{display:'flex'}}>
            <h1>Weekdays <br />200$</h1>  
            <h1 style={{marginLeft:'150px'}}>Friday <br />400$</h1> 
             </div>
             <div style={{display:'flex',marginTop:'15px'}}>
            <h1> Saturday <br />600$</h1>  
            <h1 style={{marginLeft:'150px'}}>Sunday <br />600$</h1> 
             </div>
            </div>  
            </div>  
            </div>  
            <div style={{width:'100%',height:'300px',border:'2px solid palegoldenrod',borderRadius:'20px',display:'flex',textAlign:'center',backgroundColor:'palegoldenrod',marginTop:'20px'}}>
                <Img src={R} alt="#" style={{width:'300px',height:'300px'}}/>
            <div style={{marginLeft:'200px',display:'flex'}}>
            <div>
            <h1>25 bedrooms</h1>   
            <h2>Table tennis</h2> 
            <h2>Pool</h2>
            <h2>Sauna</h2>
            </div>
            <hr style={{marginLeft:'150px'}}/>
            <div style={{marginLeft:'200px'}}>
                <div style={{display:'flex'}}>
            <h1>Weekdays <br />200$</h1>  
            <h1 style={{marginLeft:'150px'}}>Friday <br />400$</h1> 
             </div>
             <div style={{display:'flex',marginTop:'15px'}}>
            <h1> Saturday <br />600$</h1>  
            <h1 style={{marginLeft:'150px'}}>Sunday <br />600$</h1> 
             </div>
            </div>  
            </div>  
            </div>  
            <div style={{width:'100%',height:'300px',border:'2px solid palegoldenrod',borderRadius:'20px',display:'flex',textAlign:'center',backgroundColor:'palegoldenrod',marginTop:'20px'}}>
                <Img src={R} alt="#" style={{width:'300px',height:'300px'}}/>
            <div style={{marginLeft:'200px',display:'flex'}}>
            <div>
            <h1>25 bedrooms</h1>   
            <h2>Table tennis</h2> 
            <h2>Pool</h2>
            <h2>Sauna</h2>
            </div>
            <hr style={{marginLeft:'150px'}}/>
            <div style={{marginLeft:'200px'}}>
                <div style={{display:'flex'}}>
            <h1>Weekdays <br />200$</h1>  
            <h1 style={{marginLeft:'150px'}}>Friday <br />400$</h1> 
             </div>
             <div style={{display:'flex',marginTop:'15px'}}>
            <h1> Saturday <br />600$</h1>  
            <h1 style={{marginLeft:'150px'}}>Sunday <br />600$</h1> 
             </div>
            </div>  
            </div>  
            </div> 
            <div style={{width:'100%',height:'300px',border:'2px solid palegoldenrod',borderRadius:'20px',display:'flex',textAlign:'center',backgroundColor:'palegoldenrod',marginTop:'20px'}}>
                <Img src={R} alt="#" style={{width:'300px',height:'300px'}}/>
            <div style={{marginLeft:'200px',display:'flex'}}>
            <div>
            <h1>25 bedrooms</h1>   
            <h2>Table tennis</h2> 
            <h2>Pool</h2>
            <h2>Sauna</h2>
            </div>
            <hr style={{marginLeft:'150px'}}/>
            <div style={{marginLeft:'200px'}}>
                <div style={{display:'flex'}}>
            <h1>Weekdays <br />200$</h1>  
            <h1 style={{marginLeft:'150px'}}>Friday <br />400$</h1> 
             </div>
             <div style={{display:'flex',marginTop:'15px'}}>
            <h1> Saturday <br />600$</h1>  
            <h1 style={{marginLeft:'150px'}}>Sunday <br />600$</h1> 
             </div>
            </div>  
            </div>  
            </div>   
            <div> 
            <div style={{display:'flex',justifyContent:'space-evenly', color:'black',fontSize:'20px',backgroundColor:'rgb(909, 230, 241)',boxShadow:'0px 1px 55px 8px',width:'100%',height:'300px',paddingTop:'100px'}}>
                <div>
                    <h1>oddiy sayt</h1>
                    <h3>uylar</h3>
                    <h3>katejlar</h3>
                    <h3>uy jihozlari</h3>
                </div>
                <div>
                    <h3>telefon nomerlar:</h3>
                    <h3>telefon nomerlar:</h3>                    
                </div>
                <div>
                    <h2>+998 97 777 77 77</h2>
                    <h2>+998 90 777 77 77</h2>
                </div>
            </div>
          
          </div>        
        </div>
        </>
    )
}

export default Cottages