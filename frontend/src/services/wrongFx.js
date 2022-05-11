import wrong from "../assets/wrong.mp3";

const wrongFx = (mute) => {
  const notgood = new Audio(wrong);
  if (!mute) {
    notgood.play();
  }
};
export default wrongFx;
