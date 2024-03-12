import './Larva.css';
import grass from './grass.png';

function Larva() {
  return (
    <div>
      <img src={grass} className="grass" alt="logo" />
      <div className="grass-bg"></div>
    </div>
  );
}

export default Larva;
