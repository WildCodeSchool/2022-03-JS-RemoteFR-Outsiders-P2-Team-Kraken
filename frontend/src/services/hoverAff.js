import hoverRec from "../assets/hoveranswer.mp3";

const hoverAff = (mute) => {
  const hoverFx = new Audio(hoverRec);
  if (!mute) {
    hoverFx.play();
  }
};

export default hoverAff;
