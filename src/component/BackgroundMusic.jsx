import { useEffect } from "react";

const BackgroundMusic = () => {
  useEffect(() => {
    const audio = new Audio("./GTA.mp3");
    audio.loop = true;

    const playAudio = () => {
      audio.play();
      document.removeEventListener("click", playAudio);
    };

    document.addEventListener("click", playAudio);

    const toggleMute = () => {
      audio.muted = !audio.muted;
    };

    // Wait for DOM to load before selecting '.Sound'
    setTimeout(() => {
      const soundIcon = document.querySelector(".Sound");
      if (soundIcon) {
        soundIcon.addEventListener("click", toggleMute);
      }
    }, 0);

    return () => {
      document.removeEventListener("click", playAudio);
      const soundIcon = document.querySelector(".Sound");
      if (soundIcon) {
        soundIcon.removeEventListener("click", toggleMute);
      }
    };
  }, []);

  return null;
};

export default BackgroundMusic;
