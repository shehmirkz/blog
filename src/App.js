import './App.css';
import Blog from './blog';
import Nav from './Nav';
import SinglePost from './posts';
import {BrowserRouter as Router, Switch, Route, Routes, Link} from 'react-router-dom';

function App(props) {

  return (
    <Router>
      <Nav />
    <div className="App">
      <h1>Welcome to Blogs Website</h1>
      <Routes>
        <Route path="/blog" element={<Blog />} />  
        <Route path="/posts/:id" element={<SinglePost />} />  
     </Routes>
    </div>
    
    </Router>
  );
}

export default App;
