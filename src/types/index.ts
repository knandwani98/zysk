export interface MenuProps {
  label: string;
  new?: boolean;
  child?: MenuProps[];
}

export interface BlogProps {
  img: string;
  label: string;
  title: string;
  description: string;
  author: {
    name: string;
    avatar: string;
    date: string;
  };
}

export interface FeatureProps {
  icons: string;
  heading: string;
  text: string;
}

export interface QuestionProps {
  title: string;
  answer: string;
  isOpen: boolean;
}
