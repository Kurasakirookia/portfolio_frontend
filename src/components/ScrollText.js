import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "../css/horizontal_scroll.css";

const ScrollText = ({ triggerId }) => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const portalRoot = document.getElementById("scroll-portal-root");
    if (!portalRoot) return;

    const triggerElement = document.getElementById(triggerId);
    if (!triggerElement) return;

    const handleScroll = () => {
      const rect = triggerElement.getBoundingClientRect();
      const inView = rect.top <= window.innerHeight && rect.bottom >= 0;
      setVisible(inView);

      if (inView && leftRef.current && rightRef.current) {
        const offset = window.scrollY - triggerElement.offsetTop;
        leftRef.current.style.transform = `translateX(${offset}px)`;
        rightRef.current.style.transform = `translateX(${-offset}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [triggerId]);

  if (!visible) return null;

  return createPortal(
    <div className="scroll-fixed-wrapper">
      <div className="text-line left-to-right" ref={leftRef}>
        TENACIOUS • NERD • 2025
      </div>
      <div className="text-line right-to-left" ref={rightRef}>
        NERD • TENACIOUS • 2025
      </div>
    </div>,
    document.getElementById("scroll-portal-root")
  );
};

export default ScrollText;
