"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("", className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

interface AccordionTriggerProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {
  showChevron?: boolean;
  chevron?: React.ReactNode;
  openStateChildren?: React.ReactNode;
}

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>(
  (
    {
      className,
      children,
      showChevron = false,
      chevron,
      openStateChildren,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
      <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
          onClick={() => setIsOpen((previous) => !previous)}
          ref={ref}
          className={cn(
            "flex flex-1 items-center justify-between mb-4 font-medium transition-all [&[data-state=open]>img]:rotate-90 [&[data-state=open]>svg]:rotate-180",
            className
          )}
          {...props}
        >
          {openStateChildren
            ? isOpen
              ? openStateChildren
              : children
            : children}
          {showChevron && { chevron }
            ? chevron
            : showChevron && (
                <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
              )}
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
    );
  }
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-light text-base transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
