import { useEffect, useContext } from "react";
import { TimerContext } from "../contexts/TimerContext";

function chrono(stop) {
  const { timer, setTimer } = useContext(TimerContext);

  useEffect(() => {
    setTimer(17);
  }, []);

  useEffect(() => {
    if (timer > 0 && stop) {
      setTimeout(() => setTimer(timer - 1), 1000);
    }
  }, [timer]);
}

export default chrono;
