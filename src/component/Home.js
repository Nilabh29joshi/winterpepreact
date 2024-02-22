import React from "react";

const Home = ({ name, age, email, address }) => {
  return (
    <div>
      <h1>Welcome, {name}!</h1>
      <p>Your details:</p>
      <ul>
        <li>Age: {age}</li>
        <li>Email: {email}</li>
        <li>Address: {address}</li>
      </ul>
    </div>
  );
};

export default Home;
