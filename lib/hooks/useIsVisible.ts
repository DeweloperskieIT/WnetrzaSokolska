import { useEffect, useState, useCallback } from "react";
import { throttle } from "throttle-debounce";

export function useIsVisible(
  ref: React.RefObject<HTMLElement>,
  throttleTime = 100
) {
  const [isIntersecting, setIntersecting] = useState(false);
  const [observer, setObserver] = useState<IntersectionObserver | null>(null);
  const [isDisconnected, setIsDisconnected] = useState(false);

  const disconnectObserver = useCallback(() => {
    if (observer) {
      observer.disconnect();
      setObserver(null); // Clear observer state
      setIsDisconnected(true);
    }
  }, [observer]);

  useEffect(() => {
    const handleIntersect = throttle(throttleTime, ([entry]) => {
      setIntersecting(entry.isIntersecting);
    });

    const newObserver = new IntersectionObserver(handleIntersect);

    if (ref.current) {
      newObserver.observe(ref.current);
    }

    setObserver(newObserver);

    return () => {
      newObserver.disconnect();
      handleIntersect.cancel(); // Cleanup throttle function
    };
  }, [ref, throttleTime]);

  return {
    isIntersecting,
    disconnectObserver, // Return the disconnect function
  };
}
