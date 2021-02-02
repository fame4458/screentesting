import React, { useState } from "react";
import AnotherButton from "../components/Question4/AnotherButton";
import Box from "../components/Question4/Box";
import Button from "../components/Question4/Button";
import Profile from "../components/Question4/Profile";

export default function Question4() {
  const [data, setdata] = useState([
    { count: 523, text: "Posts" },
    { count: 1387, text: "Likes" },
    { count: 146, text: "Follower" },
  ]);

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-8">
          <Profile name="Anakin Skywalker" position="jedi" />
          <div class="d-grid gap-2 col-6 mx-auto">
            <Button text="Follow" />
            <Button text="Message" />
          </div>
        </div>
        <div className="col-4 d-grid">
          {data.map((data, index) => (
            <Box text={data.text} count={data.count} key={index} />
          ))}
        </div>
      </div>
      {/* <AnotherButton /> */}
    </div>
  );
}
