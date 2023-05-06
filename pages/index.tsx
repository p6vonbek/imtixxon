import Header from "./Header"
import MainPage from "./MainPage"

export default function Home(){
  return (
    <>
    <div style={{position:'absolute',zIndex:499}}>
    <Header />
  </div>
  <div>
<MainPage/>
  </div>
  </>
  ) 
}
