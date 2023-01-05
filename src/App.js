import React, {useState,useEffect} from 'react';
import Card from './Card'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUserDetails } from './action';
import './App.css';

function App() {
  const [data,setData] = useState([]);
  const userDetails = useSelector((state)=> {
    // console.log(state.counter.data)
    return state.counter.data;
  });
  const dispatch = useDispatch()
  useEffect(()=>{
    setTimeout(()=>{
      dispatch(fetchUserDetails());
    },1000)
  },[])

  useEffect(()=>{
    setData(userDetails);
  },[userDetails])

  // https://reqres.in/api/users?page=2
  return (
    <div className="App">
      {
        data && data.length === 0? 
          <div className="spinner">
              <p className="loadingText">Loading...</p> 
              <div className="loader"></div>
          </div>
          : 
          <div>
              <Card user={data}></Card>
          </div>
      }

    </div>
  );
}

export default App;
