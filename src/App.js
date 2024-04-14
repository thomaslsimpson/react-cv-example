import logo from './logo.svg';
import './App.css';
import CVContainer from './CVContainer.js';



function App() {
  return (
    <div>
      <CVContainer title='Header'>
        <CVContainer title='Contact' />
        <CVContainer title='About' />
      </CVContainer>
      <CVContainer title='Paths'   />
      <CVContainer title='Timeline'/>
    </div>
  );
}

export default App;
