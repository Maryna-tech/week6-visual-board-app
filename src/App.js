import { useState } from 'react';
import { data} from './data';
import './App.css';
import Slide from './Slide';

function App(){
  const[goals, setGoals] = useState(data);
  //console.log(data);
  
  const removeGoal =(id)=>{
    let newGoals = goals.filter(goal=>goal.id!==id);
    setGoals(newGoals)
  }

  return(<div>
      <header>
        <h1>My Vision Board 👁️‍🗨️{goals.length} goals</h1>
      </header>
      <p className='motto'>Bring your ideas to life</p>
      {goals.map((item =>{
        const{id, goal, imageUrl} = item;
    
    return(<div key ={id}>

      <div className="container">
        <img className='item' src = {imageUrl} alt="goal"width="290px" height="400px"/> 
        <p>{goal}</p>
        <button onClick={() =>removeGoal(id)}>Get it 🗸 </button>
        </div>
          </div>)
      }))}
    <div className='container-two'>
    <button className="done"onClick={()=>setGoals([])}>Delete all ❌</button>
    <p className='motto'>IF YOU CAN DREAM IT, YOU CAN DO IT! If not now...then when? YES YOU CAN!</p>
    </div>

    <div className='container-three'>
        <h3>MY DAILY INSPIRATIONAL SLIDERS</h3>
        <Slide anyslide={Slide}/>
    </div>
    <footer>
        <p>Copyright © 2024 Maryna Garaieva.</p>
        <p>Made with ♥ in Scotland</p>
    </footer>
  </div>
  );
}

export default App;
