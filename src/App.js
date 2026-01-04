import {useState} from 'react';
import './App.css';
import Repos from './components/repository';

function App() {
  const [name,setName] = useState('');
  const [repos,setRepos] = useState([]);
  return (
    <div className="App">
      <form onSubmit={(e) => {
        e.preventDefault();
        if(name !== ''){
          fetch(`https://api.github.com/users/${name}/repos`)
          .then(res => res.json())
          .then(data => setRepos(data));
          setName('');
        }
      }} >
        <input type='text' value={name} placeholder='Enter Github Name' onChange={(e) => setName(e.target.value)}/>
        <input type='submit' value='Send'/>
      </form>
      <Repos repos={repos}/>
    </div>
  );
}

export default App;
