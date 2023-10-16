import React, { Fragment, useState } from "react";
import './App.css';
import AddUser from "./components/Users/AddProduct";
import UserDataList from "./components/Users/AddProductDataList";

function App() {
  const [userData, setUserData] = useState([]);

  const handleAddUser = (uName, uAge, uCollege, category) => {
    setUserData((prevUsersData) => [
      ...prevUsersData,
      { name: uName, age: uAge, college: uCollege, category: category, id: Math.random().toString() },
    ]);
  };

  const handleDeleteUser = (userId) => {
    setUserData((prevUsersData) => prevUsersData.filter(user => user.id !== userId));
  };

  return (
    <Fragment>
      <AddUser onAddUser={handleAddUser} />
      <UserDataList users={userData} onDeleteUser={handleDeleteUser} />
    </Fragment>
  );
}

export default App;
