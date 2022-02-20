import Items from '../component/Items';
import Searchbar from '../component/Searchbar';
import Logo from '../img/logo.png';

function App() {
  return (
    <div className="container">
      <img className='img_logo' src={Logo}></img>
      <h1>First generation, Best generation</h1>
      <Searchbar/>
      <div className="card__container">
        <Items/>
      </div>
  </div>
  );
}
export default App;
