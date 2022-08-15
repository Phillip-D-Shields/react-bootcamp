
import './App.css';

import Lottery from './components/Lottery';

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title="Mega Lotto" numBalls={2} maxValue={100} />
      <Lottery title="yr moms house" numBalls={10} maxValue={69} />
    </div>
  );
}

export default App;
