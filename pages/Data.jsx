import { useRef } from 'react';
export default function CatFriends(){

  const firstCatRef = useRef(null);
  const secondCatRef = useRef(null);
  const thirdCatRef = useRef(null);
  
  function handleScrollToFirstCat() {
    firstCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  function handleScrollToSecondCat() {
    secondCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  function handleScrollToThirdCat() {
    thirdCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  return(
    <>
    <div>

      <ul style={{display:'flex',justifyContent:'center'}}>
        <li>
          <img  style={{width:'600px',height:'500px'}}
            src="https://th.bing.com/th/id/OIP.0qV8zT5CWnZSZMX0DDDuWQHaE7?pid=ImgDet&rs=1"
            alt="Tom"
            ref={firstCatRef}/>
        </li>
        <li>
          <img style={{width:'600px',height:'500px'}}
            src="https://th.bing.com/th/id/OIP.0qV8zT5CWnZSZMX0DDDuWQHaE7?pid=ImgDet&rs=1"
            alt="Maru"
            ref={secondCatRef}
          />
        </li>
        <li>
          <img style={{width:'600px',height:'500px'}}
            src="https://th.bing.com/th/id/OIP.0qV8zT5CWnZSZMX0DDDuWQHaE7?pid=ImgDet&rs=1"
            alt="Jellylorum"
            ref={thirdCatRef}
          />
        </li>
      </ul>
      <div style={{display:'flex',justifyContent:'center'}}>   
         <button onClick={handleScrollToFirstCat}  style={{borderRadius:'50%',width:'10px',height:'10px',color:'red'}}></button>
         <button onClick={handleScrollToSecondCat} style={{borderRadius:'50%',width:'10px',height:'10px',color:'red'}}></button>
         <button onClick={handleScrollToThirdCat}  style={{borderRadius:'50%',width:'10px',height:'10px',color:'red'}}></button>
      </div>
    </div>
  </>
  );
}
 