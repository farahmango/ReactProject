import React, { useState, useEffect } from "react";

const User = () => {

  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost/reactProject/ReactProject/project/api.php")
      .then((res) =>  res.json())
      .then((result) => {
        console.log(result);
      });
  });
  return <div></div>;
};
export default User;
