
import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import store from './utils/Store';

function App() {
  return (
    <Provider store={store}>
    <div >
     <Head />
     <Body />
     


{/* 
* Head
*Body
* Sidebar
* Maincontainer
*   ButtonList
*   VIdeoContainer
*     VideoCard      
*/}
    </div>
    </Provider>
  );
}

export default App;
