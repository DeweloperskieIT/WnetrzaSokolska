export type animationStyle = {
  in: string;
  out: string;
};

export type LocationPin = {
  pinColor: string;
  name: string;
  img?: string;
  description: string;
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
