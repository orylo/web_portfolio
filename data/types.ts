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
  thumbnail: string;
  slogan: string;
  projectDuration: string;
  projectPurpose: string;
  myRole: string;
  roleDescription: string;
  category: string[];
  toolsUsed: string[];
  projectHighlights: string;
  introduction: string;
  mainImage: string;
} 