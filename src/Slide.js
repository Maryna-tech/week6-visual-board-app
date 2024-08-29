import { useState } from 'react';
import { data2 } from './data';

function Slide({anyslide}) {
  const[slide, setSlide] = useState(0);
  const {id2, image, description} = data2[slide];
  //console.log(data2);

const previousSlide = ()=>{
  setSlide((slide =>{
    slide--;
    if (slide<0){
      return data2.length-1;
    }
    return slide
  }))

}

const nextSlide = ()=>{
  setSlide((slide =>{
    slide++;
    if (slide>data2.length-1){
      slide=0;
    }
    return slide;
  }))
}

  return (<div key ={id2}>
    <div className='container-three'>
      <div className='btn container'>
        <arrow className='btn left' onClick={previousSlide}>◀️Previous</arrow>
          <img className='slide'  src={image}/>
          <h4>{description}</h4>
          <arrow className='btn right' onClick={nextSlide}>Next▶️</arrow>
          <p className='slide'>Say this every morning and every night: "I am healthy, I am wealthy I am divine.
            Everything comes to me in the perfect time.<br></br>
            I am hot, I am rich, girl I am so fine.
            Universe and me are aligned."🎇</p>
        </div>
    </div>
</div>)
}

export default Slide;