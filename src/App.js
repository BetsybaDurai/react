import logo from './logo.svg';
import './App.css';
import Greet from './components/greet'
import Welcome from './components/welcome'
import Hello from './components/hello'
import Message from './components/message';
import Counter from './components/counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import Inline from './components/inline';
import AppStyle from './components/AppStyle.css'
import Style from './components/AppStyles.module.css'
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';


function App() {
  return (
    <div className="App">

      {/* <Form/> */}
      <LifeCycleA/>
      {/* <h1 className='error'>Error</h1>
      <h1 className={Style.success}>Success</h1>

      <Inline/>
      <StyleSheet primary={true} /> */}
      {/* <NameList/> */}
      {/* <UserGreeting/> */}
      {/* <ParentComponent/> */}
      {/* <EventBind/> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick/> */}
      {/* <Counter/> */}
      {/* p tag act as children */} 
      {/* <Greet name="Betsyba" FatherName="Durai"> 
        <p>This is children props </p>       
      </Greet>
      
   
      <Welcome name="Suthiya" FatherName="Kalidos" />
       */}
         {/* <Greet name="Suthiya" FatherName="Kalidos">
        <button>Action</button>
      </Greet>
      <Welcome name="Betsyba" FatherName="Durai" /> */}
      
     
      {/* <Message/> */}
    </div>
  );
}

export default App;
