import { useRef, useCallback } from "react";

const useFacebookPixelEvent = ({
  eventName,
  eventParams,
  runOnce = false,
}: {
  eventName: string;
  eventParams: any;
  runOnce: boolean;
}) => {
  const hasFired = useRef(false);

  const fireEvent = useCallback(() => {
    if (runOnce && hasFired.current) {
      return;
    }

    if (typeof window.fbq === "function") {
      window.fbq("trackCustom", eventName, eventParams);
      hasFired.current = true;
    } else {
      console.warn("Facebook Pixel is not initialized.");
    }
  }, [eventName, eventParams, runOnce]);

  // Reset function to allow the event to fire again if needed
  const resetFiring = useCallback(() => {
    hasFired.current = false;
  }, []);

  return { fireEvent, resetFiring };
};

export default useFacebookPixelEvent;
