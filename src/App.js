import './App.css';
import FunctionalComponent from './components/functionComponent';
import ListsComponent from './components/ListsAndKeys';
import RenderComponent from './components/conditionRendering';
import PureComponent from './components/pureComponent';
import ClassComponent from './components/classComponent';

function App() {
  
  return (
    <div className="App">
      <ClassComponent />
      {/* <FunctionalComponent /> */}
      {/* <ListsComponent /> */}
      {/* <RenderComponent /> */}
      {/* <PureComponent elements={[3,2]} /> */}
    </div>
  );
}

export default App;
