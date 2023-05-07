import Header from "./Header"
import MainPage from "./MainPage"

export default function Home(){
  return (
    <>
    <div style={{position:'absolute',zIndex:499, width:'100%'}}>
    <Header />
  </div>
  <div>
<MainPage/>
  </div>
  </>
  ) 
}
