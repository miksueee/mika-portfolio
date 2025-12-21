import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Quick instant scroll with a small delay for better UX
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' // Use instant for snappier feel
      });
    }, 0);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}