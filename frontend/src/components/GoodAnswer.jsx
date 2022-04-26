import React from "react";

function GoodAnswer() {
  return (
    <div className="modal__answer__content">
      <h1>CSS Only Modal</h1>
      <p>
        You can use the :target pseudo-className to create a modals with Zero JavaScript. Enjoy!
      </p>
      <div className="modal__answer__footer">
        Made with love, by me and my friends.
      </div>
      <a href="/" className="modal__answer__close">
        &times
      </a>
    </div>
  );
}

export default GoodAnswer;
