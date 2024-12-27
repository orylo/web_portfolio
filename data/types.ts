export interface ResultSection {
  title: string;
}

export interface ResultTitle {
  type: 'title';
  content: string;
}

export interface ResultDescription {
  type: 'description';
  content: string;
}

export interface ResultFullImage {
  type: 'fullImage';
  src: string;
}

export interface ResultTwoImages {
  type: 'twoImages';
  images: string[];
}

export interface ResultThreeImages {
  type: 'threeImages';
  images: string[];
}

export interface ResultFourImages {
  type: 'fourImages';
  images: string[];
}

export type ResultComponent = 
  | ResultTitle 
  | ResultDescription 
  | ResultFullImage 
  | ResultTwoImages 
  | ResultThreeImages 
  | ResultFourImages;

export interface ProjectResult {
  components: ResultComponent[];
}

export interface ProjectDetail {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  slogan: string;
  client: string;
  location: string;
  industry: string;
  category: string[];
  date: string;
  role: string;
  introduction: string;
  mainImage: string;
} 