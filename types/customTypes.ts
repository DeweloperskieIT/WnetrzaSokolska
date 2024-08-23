import { ReactNode } from "react";
export type animationStyle = {
  in: string;
  out: string;
};

export type LocationPin = {
  name: string;
  pinClass?: string;
  img?: string;
  description?: string | React.ReactNode;
  descriptionClass?: string;
  descriptionHeader?: string;
  hoverDescription?: string;
  top: number;
  left: number;
};

export type ParagraphWithHeading = {
  heading: string;
  headingStyle?: string;
  paragraph?: string;
  paragraphStyle?: string;
};

export type ImageAlt = {
  img: string;
  alt: string;
};

export type ImageAltMergeParagraphWithHeading = ImageAlt &
  Partial<ParagraphWithHeading>;
