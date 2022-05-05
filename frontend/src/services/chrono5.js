import { useEffect, useContext } from "react";
import { Timer5Context } from "../contexts/Timer5Context";

function chrono5(stop) {
  const { timer5, setTimer5 } = useContext(Timer5Context);

  useEffect(() => {
    setTimer5(25);
  }, []);

  useEffect(() => {
    if (timer5 > 0 && stop) {
      setTimeout(() => setTimer5(timer5 - 1), 1000);
    }
  }, [timer5]);
}

export default chrono5;
