import { useEffect } from "react";
import axios from "axios";

function verifUrl(urlToConfirm) {
  useEffect(() => {
    axios
      .get(urlToConfirm, {
        validateStatus: (status) => {
          return status < 500; // Resolve only if the status code is less than 500
        },
      })
      .then((response) => {
        console.warn({ response });
        if (response.status === 404) {
          console.warn("ereur 404");
          return false;
        }
        console.warn("tout est ok");
        return urlToConfirm;
      });
  }, []);
  return "toto";
}

export default verifUrl;
