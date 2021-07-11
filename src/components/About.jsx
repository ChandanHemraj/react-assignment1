import React from "react";
import minions2 from './Minions2.jpeg';
function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={minions2}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light"><b>About</b></h1>
            <p>
              Minions are a species of tiny yellow henchmen; they look like unusually dressed Mike and Ike candies. They're earnestly driven by the desire to serve an evil boss, though they often screw up because they're selfish, easily distracted, and generally inept.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;