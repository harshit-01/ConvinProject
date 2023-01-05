import React, {useState,useEffect} from 'react';
import axios from 'axios';
import './Card.css';
import { useSelector, useDispatch } from 'react-redux'
import { fetchSingleUserDetails } from './action';

function Card({user}) {
  const [loading,setLoading] = useState(false);
  const singleUser = useSelector((state)=>{
    return state.counter.singleUser;
  })
  console.log(singleUser);
  const dispatch = useDispatch()

  return (
    <div className="container">
        {Object.keys(singleUser).length > 0?
            <div className="userCard">
                <div className="card">
                    <div className="cardHead">
                        <strong>{singleUser && singleUser.first_name? singleUser.first_name + ' ' + singleUser?.last_name: "NA"}</strong>
                    </div>
                    <div className= "line"></div>
                    <div className="cardBody">
                        <img src={singleUser.avatar} className="userImage"></img>
                        <p className="userInfo"><b>Email :</b> {singleUser?.email ? singleUser.email : "NA"}</p>
                    </div>
                </div>
            </div>
        :
            <div className="userCardSkeleton">
                <div className="cardSkeleton">
                    <div className="cardHeadSkeleton">
                        <div className="lineRect">Click on any of the button to see user details</div>
                    </div>
                    <div className= "line"></div>
                    <div className="cardBodySkeleton">
                        <img className="rectangle"></img>
                        <span>
                            <p className="rectSkeleton"></p>
                            <p className="rectSkeleton"></p>
                            <p className="rectSkeleton"></p>
                            <p className="rectSkeleton"></p>
                            <p className="rectSkeleton"></p>
                            <p className="rectSkeleton"></p>
                        </span>
                    </div>
                </div>
            </div>
        }
            <div className="userContainer" onClick={(e)=>{
                dispatch(fetchSingleUserDetails(e.target.name))
            }}>
                {
                user?.map((val,ind)=>{
                    return(
                            <button className='btn' name = {ind} key= {ind}>{ind + 1}</button> 
                    )
                })}
            </div>
    </div>
  );
}

export default Card;
