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
    cookie.set("cookieConsent", "accepted", {
      expires: 365,
      sameSite: "None",
      secure: true,
    });

    // Reload the page to apply the consent changes
    window.location.reload();
  };

  const handleReject = () => {
    setShowBanner(false);
    cookie.set("cookieConsent", "rejected", {
      expires: 365,
      sameSite: "None",
      secure: true,
    });

    // Reload the page to apply the consent changes
    window.location.reload();
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="z-50 w-full h-fit p-4 sticky bottom-0 bg-dark border-t-2 border-accent1 flex-center flex-col gap-4">
      <div className=" text-accent1">
        <p className="text-sm text-center">
          Ta witryna używa plików cookies aby polepszyć oferowane usługi.
        </p>
        <p className="text-sm text-center">
          Prosimy o udzielenie zgody na przechowywanie plików cookies i
          zbierania informacji analitycznych.
        </p>
      </div>
      <div className="flex-center flex-row gap-6">
        <button
          className="p-2 bg-dark border-2 border-light text-light text-base transition-all duration-100 hover:bg-light hover:text-dark"
          onClick={handleReject}
        >
          Nie zgadzam się
        </button>
        <button
          className="p-2 bg-dark border-2 border-accent1 text-accent1 text-base transition-all duration-100 hover:bg-accent1 hover:text-dark"
          onClick={handleAccept}
        >
          Zgadzam się
        </button>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
