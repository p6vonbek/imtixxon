import { NextPage } from "next";
import Header from './Header';
import Img from "next/image";
import R from '../public/rasmlar/R.jpg';
import Basseyn from '../public/rasmlar/uy5.jpg';
import UyCha from '../public/rasmlar/uy3.jpg';
import Uy4 from '../public/rasmlar/uy4.jpg';
import Uy6 from '../public/rasmlar/uy6.jpg';
import Uy7 from '../public/rasmlar/uy7.jpg';
import Uy8 from '../public/rasmlar/uy8.jpg';
import UyBasseyn from '../public/rasmlar/footer 1400.jpg';
import Link from "next/link";
import Yordam from '../styles/yordam.module.css'

const HomePage:NextPage=()=>{
    return(
        <header>
     <Header/>
     <div>
     <div>
        <div style={{display:'flex',justifyContent:'space-around'}}>
            <div >
                <div style={{textAlign:'center'}}>
                    <h1 style={{position:'absolute',zIndex:12 ,marginTop:'300px',marginLeft:'-100px'}}>Welcome to our <br /> website</h1>
                    <h2 style={{position:'absolute',zIndex:12,marginTop:'390px',marginLeft:'-130px'}}>We are happy with your visit</h2>
                    <div style={{display:'flex',position:'absolute',zIndex:12,marginTop:'450px'}}>
                        <div>
            <Img className={Yordam.ber} src={Basseyn} alt="Basseyn" style={{border:'3px solid white',borderRadius:'3px',marginLeft:'-300px'}}/>
                        </div>
                        <div>
            <Img className={Yordam.ber1} src={UyCha} alt="UyCha" style={{border:'3px solid white',borderRadius:'3px' ,marginLeft:'-60px'}}/>  
                        </div>
                        <div>
            <Img className={Yordam.ber} src={Uy4} alt="Uy4" style={{border:'3px solid white',borderRadius:'3px',marginLeft:'30px'}}/>  
                        </div>
                    </div>
                </div>
                </div>
        </div>
           <div>
            <Img className="R" src={R} alt="uy rasmi" style={{width:'100%',height:'900px',}}/>  
            
          </div>
        </div>
        </div>
        <div style={{backgroundColor:'palegoldenrod'}}>
            <div style={{marginTop:'100px',}}>
                <h1>Popular in the catalog</h1>
            </div>
            <div style={{display:'flex',justifyContent:'center'}}>
                <div style={{marginTop:'50px', marginLeft:'50px'}}>
            <Img className={Yordam.img} src={Basseyn} alt="Basseyn" style={{border:'4px solid white',borderRadius:'5px'}}/>
            <div  style={{marginTop:'10px',marginLeft:'50px'}}>
                <div style={{display:'flex'}}>
                <h3>Home information on the pass  ↓</h3>
            <Link href={'/Like'} style={{textDecoration:'none',marginTop:"20px",marginLeft:"20px"}}>❤️</Link>
            </div>
            <button style={{width:'150px', height:'50px',border:'3px solid blue',marginLeft:'80px',borderRadius:'5px',backgroundColor:'blue',marginTop:'20px'}}>
               <Link href={'/Houses'} style={{color:'white', fontSize:'20px', textDecoration:'none'}}>Batch   😎</Link> 
               </button>

                </div>  
                </div>
                <div style={{marginTop:'50px',marginLeft:'100px'}}>
            <Img className={Yordam.img1} src={Uy4} alt="Basseyn" style={{border:'4px solid white',borderRadius:'5px'}}/>
            <div  style={{marginTop:'10px',marginLeft:'50px'}}> 
            <div style={{display:'flex'}}>
            <h3>Home information on the pass  ↓</h3>
            <Link href={'/Like'} style={{textDecoration:'none',marginTop:"20px",marginLeft:"20px"}}>❤️</Link>
            </div> 
            <button style={{width:'150px', height:'50px',border:'3px solid blue',marginLeft:'80px',borderRadius:'5px',backgroundColor:'blue',marginTop:'20px'}}>
               <Link href={'/Houses'} style={{color:'white', fontSize:'20px', textDecoration:'none'}}>Batch   😎</Link> 
               </button>

                </div>  
                </div>
                <div style={{marginTop:'50px',marginLeft:'100px'}}>
            <Img className={Yordam.img2} src={UyCha} alt="Basseyn" style={{border:'4px solid white',borderRadius:'5px'}}/>
            <div  style={{marginTop:'10px',marginLeft:'50px'}}>  
            <div style={{display:'flex'}}>
            <h3>Home information on the pass  ↓</h3>
            <Link href={'/Like'} style={{textDecoration:'none',marginTop:"20px",marginLeft:"20px"}}>❤️</Link>
            </div>
            <button style={{width:'150px', height:'50px',border:'3px solid blue',marginLeft:'80px',borderRadius:'5px',backgroundColor:'blue',marginTop:'20px'}}>
               <Link href={'/Houses'} style={{color:'white', fontSize:'20px', textDecoration:'none'}}>Batch  😎</Link> 
               </button>

                </div>  
                </div>
            </div>
            <div style={{display:'flex',justifyContent:'center'}}>
                <div style={{marginTop:'150px', marginLeft:'50px'}}>
            <Img className={Yordam.img} src={Uy6} alt="Basseyn" style={{border:'4px solid white',borderRadius:'5px'}}/>
            <div  style={{marginTop:'10px',marginLeft:'50px'}}> 
            <div style={{display:'flex'}}>
            <h3>Home information on the pass  ↓</h3>
            <Link href={'/Like'} style={{textDecoration:'none',marginTop:"20px",marginLeft:"20px"}}>❤️</Link>
            </div> 
            <button style={{width:'150px', height:'50px',border:'3px solid blue',marginLeft:'80px',borderRadius:'5px',backgroundColor:'blue',marginTop:'20px'}}>
               <Link href={'/Houses'} style={{color:'white', fontSize:'20px', textDecoration:'none'}}>Batch  😎</Link> 
               </button>

                </div>  
                </div>
                <div style={{marginTop:'150px',marginLeft:'100px'}}>
            <Img className={Yordam.img1} src={Uy7} alt="Basseyn" style={{border:'4px solid white',borderRadius:'5px'}}/>
            <div  style={{marginTop:'10px',marginLeft:'50px'}}> 
            <div style={{display:'flex'}}>
            <h3>Home information on the pass  ↓</h3>
            <Link href={'/Like'} style={{textDecoration:'none',marginTop:"20px",marginLeft:"20px"}}>❤️</Link>
            </div> 
            <button style={{width:'150px', height:'50px',border:'3px solid blue',marginLeft:'80px',borderRadius:'5px',backgroundColor:'blue',marginTop:'20px'}}>
               <Link href={'/Houses'} style={{color:'white', fontSize:'20px', textDecoration:'none'}}>Batch  😎</Link> 
               </button>

                </div>  
                </div>
                <div style={{marginTop:'150px',marginLeft:'100px'}}>
            <Img className={Yordam.img2} src={Uy8} alt="Basseyn" style={{border:'4px solid white',borderRadius:'5px'}}/>
            <div  style={{marginTop:'10px',marginLeft:'50px'}}>
                <div style={{display:'flex'}}>
                <h3 >Home information on the pass  ↓</h3>
            <Link href={'/Like'} style={{textDecoration:'none',marginTop:"20px",marginLeft:"40px",color:'white'}}>❤️</Link>
            </div>
            <button style={{width:'150px', height:'50px',border:'3px solid blue',marginLeft:'80px',borderRadius:'5px',backgroundColor:'blue',marginTop:'20px'}}>
               <Link href={'/Houses'} style={{color:'white', fontSize:'20px', textDecoration:'none'}}>Batch 😎</Link> 
               </button>
               
                </div>  
                </div>
              
            </div>
            <div> 
                 <div  style={{marginTop:'50px',display:'flex',justifyContent:'center'}}>
                    <Link href={'/Houses'}><button 
                    style={{width:'150px',height:'60px',backgroundColor:'#F4683F',border:'4px solid #F4683F',borderRadius:"10px",color:'white'}}>Go to directory</button></Link>
                </div>
            </div>
            <div>
                <div style={{margin:'100px 0px 0px 150px'}}>
                <h1>We can arrange for you</h1>
                </div>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <div style={{margin:'50px 100px 50px 150px'}}>
                        <Link href={'/HomesInfo'}><button style={{width:'200px',fontSize:'20px',height:'80px',border:'5px solid white',borderRadius:'5px',backgroundColor:'#FFFFF',boxShadow:'0px 8px 83px'}}>Catering</button></Link>
                    </div>
                    <div style={{margin:'50px 150px 50px 150px'}}>
                        <Link href={'/HomesInfo'}><button style={{width:'200px',fontSize:'20px',height:'80px',border:'5px solid white',borderRadius:'5px',backgroundColor:'#FFFFF',boxShadow:'0px 8px 83px'}}>Visiting chef</button></Link>
                    </div>
                    <div style={{margin:'50px 150px 50px 150px'}}>
                        <Link href={'/HomesInfo'}><button style={{width:'200px',fontSize:'20px',height:'80px',border:'5px solid white',borderRadius:'5px',backgroundColor:'#FFFFF',boxShadow:'0px 8px 83px'}}>Buffet</button></Link>
                    </div>
                </div>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <div style={{margin:'50px 100px 50px  150px'}}>
                        <Link href={'/HomesInfo'}><button style={{width:'200px',fontSize:'20px',height:'80px',border:'5px solid white',borderRadius:'5px',backgroundColor:'#FFFFF',boxShadow:'0px 8px 83px'}}>
Show program</button></Link>
                    </div>
                    <div style={{margin:'50px 150px 50px 150px'}}>
                        <Link href={'/HomesInfo'}><button style={{width:'200px',fontSize:'20px',height:'80px',border:'5px solid white',borderRadius:'5px',backgroundColor:'#FFFFF',boxShadow:'0px 8px 83px'}}>Transfer</button></Link>
                    </div>
                    <div style={{margin:'50px 150px 50px 150px'}}>
                        <Link href={'/HomesInfo'}><button style={{width:'200px',fontSize:'20px',height:'80px',border:'5px solid white',borderRadius:'5px',backgroundColor:'#FFFFF',boxShadow:'0px 8px 83px'}}>Turnkey events</button></Link>
                    </div>
                </div>
                <div>
                <div  style={{marginTop:'40px',display:'flex',justifyContent:'center'}}>
                    <Link href={'/Houses'}><button 
                    style={{width:'150px',height:'60px',backgroundColor:'#F4683F',border:'4px solid #F4683F',borderRadius:"10px",color:'white'}}>Learn more</button></Link>
                </div>
                </div>
            </div>
            <div style={{marginTop:'31px'}}>
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
            </div>

        </header>
    )
}

export default HomePage


