import correct from "../assets/correct.mp3";

const goodFx = (mute) => {
  const good = new Audio(correct);
  if (!mute) {
    good.play();
  }
};
export default goodFx;
