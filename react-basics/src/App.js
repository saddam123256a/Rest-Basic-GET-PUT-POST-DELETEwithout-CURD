import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Greeting from './components/Greeting';
import HelloWorld from './components/HelloWorld';
import Student from './components/Student';
import Employee from './components/Employee';
import User from './components/User';
import EventHandling from './components/EventHandling';
import ConditionRendering from './components/ConditionRendering';

function App() {
  const skills = ['HTML', 'CSS', 'Javascript'];

  return (
    <div className="App">

    {/*<User/>*/}
    {/*<EventHandling/>*/}
    <ConditionRendering/>  
    </div>
  );
}

export default App;
