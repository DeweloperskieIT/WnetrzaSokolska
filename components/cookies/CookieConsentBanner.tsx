"use client";

import React, { useEffect, useState } from "react";
import cookie from "js-cookie";

const CookieConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consentCookie = cookie.get("cookieConsent");

    if (!consentCookie) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    setShowBanner(false);
    cookie.set("cookieConsent", "accepted", { expires: 365 });
  };

  const handleReject = () => {
    setShowBanner(false);
    cookie.set("cookieConsent", "rejected", { expires: 365 });
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div>
      <p>
        This website uses cookies to improve your browsing experience. Ta
        streona używa plików cookies aby polepszyć oferowane usługi.
      </p>
      <p>
        Prosimy o udzielenie zgody na przechowywanie plików cookies i zbierania
        informacji analitycznych.
      </p>
      <button onClick={handleAccept}>Zgadzam się</button>
      <button onClick={handleReject}>Nie zgadzam się</button>
    </div>
  );
};

export default CookieConsentBanner;
