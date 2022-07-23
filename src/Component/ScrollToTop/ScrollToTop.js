import React, { useEffect, useState } from "react";
import "./ScrollToTop.css";
import EjectSharpIcon from '@material-ui/icons/EjectSharp'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className='scroll-to-top'>
      {isVisible && (
        <div onClick={scrollToTop} className='back-top-container'>
          <span>
            <EjectSharpIcon />
          </span>
        </div>
      )}
    </div>
  )
}
