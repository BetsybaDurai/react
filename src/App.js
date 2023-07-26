import './App.css';
import { render } from '@testing-library/react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  
    return (
      <div className='App'>
        <PostForm/>
      <PostList/>
      </div>

    )
  
}

export default App;
