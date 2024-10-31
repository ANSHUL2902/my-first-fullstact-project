import axios from "axios";
import React, { useState,useEffect } from "react";
import { Link,useParams } from "react-router-dom";
export default function ViewUser() {

const [user,setUser] = useState({
    name: '', 
    email:'',
    contact:''
})

const {userId} = useParams();

 useEffect (()=>{
loadUsers()
},[])

const loadUsers = async()=>{
    const result = await axios.get(`http://localhost:8080/user/${userId}`)
    setUser(result.data)
}




  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-3 shadow">
          <h2 className="text-center mb-4">User Details</h2>
          <div className="card">
            <div className="card-header">
                Detailes of User Id : {user.userId}
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Name : </b>
                        {user.name}
                    </li>
                    <li className="list-group-item">
                        <b>Email : </b>
                        {user.email}
                    </li>
                    <li className="list-group-item">
                        <b>contact : </b>
                        {user.contact}
                    </li>
                </ul>
            </div>
          </div>

    <Link className="btn btn-primary my-2" to={"/"}>HOME</Link>

        </div>
      </div>
    </div>
  );
}
