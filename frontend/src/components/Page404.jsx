import React from "react";
import { Link } from "react-router-dom";
import image404 from "../assets/image404.png";

function Page404({ updateTitleMain }) {
  React.useEffect(() => {
    updateTitleMain(["404", "main"]);
  }, []);

  return (
    <div>
      <div
        style={{
          maxWidth: "80%",
          margin: "0 auto",
          justifyItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            style={{
              maxwidth: "100%",
              maxHeight: "50vh",
            }}
            src={image404}
            alt="This isn't the page you're looking for"
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link to="/">
          <button
            type="button"
            className="select_button"
          >{`Retour à l'Acceuil`}</button>
        </Link>
      </div>
    </div>
  );
}

export default Page404;
