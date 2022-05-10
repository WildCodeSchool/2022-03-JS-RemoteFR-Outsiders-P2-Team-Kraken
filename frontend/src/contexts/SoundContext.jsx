import React, { createContext, useState } from "react";

const SoundContext = createContext();

function SoundContextProvider({ children }) {
  const [mute, setMute] = useState(true);
  /* eslint-disable */
  return (
    <SoundContext.Provider value={{ mute, setMute }}>
      {children}
    </SoundContext.Provider>
  );
  /* eslint-enable */
}

export { SoundContext, SoundContextProvider };
