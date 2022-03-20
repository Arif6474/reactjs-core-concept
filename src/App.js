
import { useEffect, useState } from 'react';
import './App.css';

function App() {

// const Products = [
//   {name: 'iphone', price: 12000},
//   {name: 'laptop', price: 10000},
//   {name: 'tablet', price: 1200},
//   {name: 'watch', price: 5000}
// ]

  return (
    <div className="App">

{/* <Counter></Counter> */}
{/* <ExternalUser></ExternalUser>  */}
<LoadComments></LoadComments>


     {/* {
       Products.map(product =>  <Product name={product.name} price={product.price} ></Product>)
     }
       */}
    </div>
  );

function LoadComments (){
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(data => setComments(data))
  }, [])
  return(
    <div>
      <h3>Comments {comments.length}</h3>
      {
        comments.map(comment => <Comment name={comment.name} body={comment.body}></Comment> )
      }
    </div>
  )
}
function Comment(props) {
  return(
    <div>
      <h3>name: {props.name}</h3>
      <p>{props.body}</p>
    </div>
  )
}



function ExternalUser (){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then (data => setUsers(data))
  }, [])
  return (
    <div>
      <h2>External User</h2>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}
function User (props) {
  return (
    <div style={{border: '2px solid red', padding: '20px', margin: '20px' , backgroundColor: 'yellowgreen', borderRadius: '10px'}}>
      <h3>name: {props.name}</h3>
      <p>email: {props.email}</p>
    </div>
  )
}









function Counter (){
  const [count, setCount] = useState(0);
  const IncreaseCount = () =>setCount(count+1);
  const DecreaseCount = () =>setCount(count-1);
  return (
    <div>
      <h1> Count: {count} </h1>
      <button onClick={IncreaseCount}>Increase</button>
      <button onClick={DecreaseCount}>Decrease</button>
    </div>
  )
}



  // function Product (props) {
  //   console.log(props);
  //   return (
  //     <div className="product">
  //     <h1>name: {props.name} </h1>
  //       <p>price: {props.price}</p>
  //     </div>
  //   )
  // }
}

export default App;
