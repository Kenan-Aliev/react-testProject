import { useEffect, useState } from "react";

export const useIntersected = (ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };
  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return isVisible;
};
