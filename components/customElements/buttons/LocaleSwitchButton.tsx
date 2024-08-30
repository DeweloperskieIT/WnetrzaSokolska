"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Locales } from "@/app/dictionaries";
import Cookies from "js-cookie";

interface LocaleSwitchButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  locale: Locales;
}

const LocaleSwitchButton = ({
  children,
  className,
  locale,
  ...rest
}: LocaleSwitchButtonProps) => {
  const changeLocale = (newLocale: Locales) => {
    // Set the LANG cookie to the new locale
    Cookies.set("NEXT_LOCALE", newLocale, { expires: 365 }); // Cookie expires in 365 days

    window.location.reload();
  };

  return (
    <button
      {...rest}
      className={cn("", className)}
      onClick={() => changeLocale(locale)}
    >
      {children}
    </button>
  );
};

export default LocaleSwitchButton;
