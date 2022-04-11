import './App.css';
import Products from './products';
import Cart from './cart';
import Games from './Games';

function App() {
  
  return (
    <>
    <div className="store-home">
    <Cart />
      <div className="store-head">
      <h1 className='store-heading'>Bretts Bin of Classics</h1>
      <h3>Ayyy Ooooo Capernicus<br></br>With the Big Shoes and Fancy Car<br />Come down to Chi Town and checkout my Games!</h3>
      </div>
    </div>
    <div className="body-container">
    <Games />
    </div> 
    </>
  );
}

export default App;
