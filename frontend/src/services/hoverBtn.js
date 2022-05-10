import hover from "../assets/hover.mp3";

const hoverBtn = (mute) => {
  const hoverFx = new Audio(hover);
  if (!mute) {
    hoverFx.play();
  }
};

export default hoverBtn;
