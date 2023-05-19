// import { Provider } from 'react-redux';
import ClassCounter from './components/ClassCounter';
import ClassCounterValue from './components/ClassCounterValue';
import FunctionCounter from './components/FunctionCounter';
import FunctionCounterValue from './components/FunctionCounterValue';
import Parent from './components/parent';
import Scroll from './components/Scroll';
// import store from './redux/store';


function App() {
  return (
    <div >
      <div className='flex'>
        <ClassCounterValue/>
        <FunctionCounterValue />
      </div>
        <ClassCounter />
        <FunctionCounter />
        <Scroll/>
        <Parent/>
  </div>
  
  );
}

export default App;
