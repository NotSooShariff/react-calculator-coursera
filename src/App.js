import Calculator from './components/Calculator'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App mt-4">
      <div className='d-flex justify-content-center'>
        <div className='d-flex'>
          <h1 className='mt-auto mb-10 text-white h1 display-1'>React Calculator</h1>
        </div>
      </div>
      <Calculator />
    </div>
  );
}

export default App;
