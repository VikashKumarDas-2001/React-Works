import logo from './logo.svg';
import './App.css';
import Effect from './useEffect/Effect';
import { ArrayList } from './components/firstComp/ArrayList';
import { Ref } from './userRef/Ref';
import { UseMemo } from './useMemo/UseMemo';
// import FirstComp from './components/firstComp/firstComp';

function App() {
  return (
    <div class="App">
    
       <div>
        <h1>MY NAME IS VIKASH KUMAR DAS</h1>
        {/* <FirstComp/> */}
       {/* <Effect/> */}
       {/* <ArrayList/> */}
       {/* <Ref/> */}
       <UseMemo/>
       </div>
      
    </div>
  );
}

export default App;


