import React from "react";
import image404 from "../assets/image404.png";

function Page404() {
  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <img
        style={{ width: "100%" }}
        src={image404}
        alt="This isn't the page you're looking for"
      />
    </div>
  );
}

export default Page404;
