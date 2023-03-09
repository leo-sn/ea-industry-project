import './App.scss';
import LeftColumn from './components/LeftColumn/LeftColumn';
import RightColumn from './components/RightColumn/RightColumn';
import CenterColumn from './components/CenterColumn/CenterColumn';

function App() {
  return (
    <div className="App">
      <div className='left-column-container'>
        <LeftColumn />
      </div>
      <div className='center-column-container'>
        <CenterColumn />
      </div>
      <div className='right-column-container'>
        <RightColumn />
      </div>
    </div>
  );
}

export default App;
