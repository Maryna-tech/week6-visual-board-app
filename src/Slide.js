import { useState } from 'react';
import { data2 } from './data';

function Slide({anyslide}) {
  const[slide, setSlide] = useState(0);
  const {image, description} = data2[slide];

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

  return (<div>
    <div className='container-three'>
      <div className='btn container'>
        <button className='left' onClick={previousSlide}>◀️Previous</button>
          <img className='slide'  src={image} alt= 'inspiration'/>
          <h4>{description}</h4>
          <button className='right' onClick={nextSlide}>Next▶️</button>
          <p className='slide'>Say this every morning and every night: "I am healthy, I am wealthy I am divine.
            Everything comes to me in the perfect time.<br></br>
            I am hot, I am rich, girl I am so fine.
            Universe and me are aligned."🎇</p>
        </div>
    </div>
</div>)
}

export default Slide;
