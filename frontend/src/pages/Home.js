import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function Home() {
  const [users, setUsers] = useState([]);

const {userId} = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const result = await axios.get("http://localhost:8080/users");
      setUsers(result.data);
    } catch (error) {
      console.error("Error loading users:", error);
    }
  };

const deletUser= async(userId)=>{
  await axios.delete(`http://localhost:8080/user/${userId}`)
loadUsers();
}



  return (
    <div className='container'>
      <table className="table table-striped table-hover border">
        <thead>
          <tr>
            <th scope="col">User-ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Contact</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.userId}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.contact}</td>
              <td>
              <Link type="button" className="btn btn-outline-success mx-3" to={`/viewuser/${user.userId}`}>View</Link>
              <Link  className="btn btn-outline-primary mx3" to={`/edituser/${user.userId}`}>Edit</Link>
              <button type="button" className="btn btn-outline-danger mx-3"
              
              onClick={()=>deletUser(user.userId)}
              >Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
