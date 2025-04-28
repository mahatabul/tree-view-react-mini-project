
import './App.css';
import TreeView from "./components/tree-view.jsx";
import { menuData } from './components/data.js';

function App() {
  return (
    <>
    <TreeView menu={menuData}/>
   </>
  );
}

export default App;

