import './App.css';
import Resume from './Container/Resume';
import 'font-awesome/css/font-awesome.min.css';
import { print } from './Utility/Print';

function App() {
  return (
    <div className="App">
      <Resume />
      <div onClick={print} className='d-flex print-button'>
        <i className='fa fa-print'></i>
        Print
      </div>
    </div>
  );
}

export default App;
