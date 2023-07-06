import {ImageSourcePropType} from 'react-native';

export interface MovielistProps {
  movieData: Array<MovieDataProps>;
  paginateData: (page: number) => void;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  pageNumber: number;
  showSearch: boolean;
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  search: string;
  filterSearch: (text: string) => void;
  exitFromApp: () => void;
  removeSearch: () => void;
  images: Array<string>;
}

export interface MovieDataProps {
  name: string;
  ['poster-image']: string;
}
