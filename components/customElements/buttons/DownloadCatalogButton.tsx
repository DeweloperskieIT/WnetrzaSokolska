import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DownloadCatalogButtonProps {
  className?: string;
  catalogue?: string;
}

const DownloadCatalogButton = ({
  className,
  catalogue = "/documents/Katalog.pdf",
}: DownloadCatalogButtonProps) => {
  return (
    <Button
      className={cn(
        "bg-light rounded p-4 w-[180px] text-dark  base-hover",
        className
      )}
      asChild
    >
      <a href={catalogue} download="Katalog.pdf">
        Pobierz Katalog
      </a>
    </Button>
  );
};

export default DownloadCatalogButton;
