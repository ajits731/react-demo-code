import logo from './logo.svg';
import './App.css';
import ClassComponent from './components/classComponent';
import FunctionalComponent from './components/functionComponent';
import Person from './common/person';
import PersonFunc from './common/personFunc';

function App() {

  const sampleFunc = () => {
    alert('I am being called');
  }

  
  return (
    <div className="App">
      <ClassComponent />
      <FunctionalComponent />
      {/* <Person name={'John'} age={10} gender={'M'} sampleFunc={sampleFunc} /> 
      <Person name={'Adam'} age={12} gender={'M'} />
      <Person name={'Eva'} age={13} gender={'F'} /> */}

      {/* <PersonFunc name={'John'} age={10} gender={'M'} /> */}
    </div>
  );
}

export default App;
