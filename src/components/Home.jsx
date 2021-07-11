import React from "react";
import minions1 from './Minions1.jpeg';

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={minions1}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light"><b>Home</b></h1>
            <p>Hello!  My name is Chandan H</p>
            <p>This is my REACT Assignment 1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;