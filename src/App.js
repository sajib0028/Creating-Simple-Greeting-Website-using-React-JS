import logo from './logo.svg';
import './App.css';




function App() {

  let currentDate = new Date().getHours();
  let greeting='';
  const cssStyle={ };
  
  if(currentDate >=1 && currentDate <= 11 ){
    greeting='Good Morning';
    cssStyle.color='green';
  } else if (currentDate >=12 && currentDate <=19){
    greeting="Good Afternoon";
    cssStyle.color='orange';
  } else{
    greeting="Good Night";
    cssStyle.color='black';
  }

  return (
    <div>
      <h1 className='heading'>Hi Sir ,<span style={cssStyle}> {greeting}</span></h1>
    </div>
  );
}

export default App;
