import React from "react";
import { useState, useEffect } from 'react';
import { db } from './firebase-config';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import "./Review.css"


function Review() {
    const [newName, setNewName] = useState("")
    const [newReview, setNewReview] = useState("")
  
    const [users, setUser] = useState([])
    const usersCollecionRef = collection(db, "users")
  
    const createUser = async () => {
      await addDoc(usersCollecionRef, {name: newName, Review: newReview})
    }
  
    useEffect(() => {
  
      const getUsers = async () => {
        const data = await getDocs(usersCollecionRef);
        setUser(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
      };
  
      getUsers();
    }, []);
    
    

    return(
        <div className="Review">
        <input placeholder='Name...' onChange={(event) => {setNewName(event.target.value) ;
        }} />
        <input placeholder='Review...' onChange={(event) => {setNewReview(event.target.value);
        }} />

        <button onClick={createUser}>Write Review</button>
        {users.map((user) => {
        return (
        <div className="data">
        {" "}
          <b>Name: {user.name}</b>
          <p>Review: {user.Review}</p>
        </div>
         ); 
         })}

</div>

    )



}

export default Review;