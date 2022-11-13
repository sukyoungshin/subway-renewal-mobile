import { useState } from "react";

export const useLoadingSpinner = () => {
  const [loaded, setLoaded] = useState(false);
  const onLoad = () => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  };

  return { loaded, onLoad };
};
