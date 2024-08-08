import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DownloadCatalogButtonProps {
  className?: string;
}

const DownloadCatalogButton = ({ className }: DownloadCatalogButtonProps) => {
  const handleClick = () => {};

  return (
    <Button
      className={cn(
        "bg-light rounded p-4 w-[180px] text-dark  base-hover",
        className
      )}
      asChild
    >
      <a href="/documents/Katalog.pdf" download="Katalog.pdf">
        Pobierz Katalog
      </a>
    </Button>
  );
};

export default DownloadCatalogButton;
