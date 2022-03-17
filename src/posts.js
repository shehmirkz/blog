import { useParams } from 'react-router-dom';
import './App.css';


function SinglePost(props) {

  let {id} = useParams();

  return (
    <div className='main-blog'>
     <h1>This is Main Page of Single Post Id No: {id}</h1>
        <div className='blog-box'>
    
        </div>
    </div>
  );
}

export default SinglePost;