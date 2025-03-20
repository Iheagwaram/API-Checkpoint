import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setListOfUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>User List</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {listOfUsers.map((user) => (
          <li 
            key={user.id} 
            style={{ 
              border: "1px solid #ccc", 
              padding: "10px", 
              margin: "10px", 
              borderRadius: "5px", 
              backgroundColor: "#f9f9f9" 
            }}
          >
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
