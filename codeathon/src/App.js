import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AskQuestions from './components/AskQuestions';
import AnsQuestions from './components/AnsQuestions';
import PrivateComponent from './components/PrivateComponent';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Nav from './components/Nav';
import YourQuestions from './components/YourQuestions'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
    <Routes>
      <Route element={<PrivateComponent/>}>
      <Route path="/ask" element={<AskQuestions/>}/>
      <Route path="/ans" element={<AnsQuestions/>}/>
      <Route path="/yourquestions" element={<YourQuestions/>}/>
      </Route>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
