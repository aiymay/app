import './App.css';
import Home from './Home';
import Elements from './Elements';
import Traditions from './Traditions';
import Customs from './Customs';
import Ancient from './Ancient';
import About from './About';
import LangController from './Language';

import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home lang={LangController}/>} />
        <Route path='/elements' element={<Elements lang={LangController}/>} />
        <Route path='/traditions' element={<Traditions lang={LangController}/>} />
        <Route path='/customs' element={<Customs lang={LangController}/>} />
        <Route path='/ancient' element={<Ancient lang={LangController}/>} />
        <Route path='/about' element={<About lang={LangController}/>} />
      </Routes>
    </div>
  );
}

export default App;
