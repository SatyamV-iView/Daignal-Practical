import {useEffect, useState} from 'react';
import {Alert, BackHandler} from 'react-native';
import pageoneData from '../const/pageoneData.json';
import pagethreeData from '../const/pagethreeData.json';
import pagetwoData from '../const/pagetwoData.json';
import {MovieDataProps, MovielistProps} from './movielist.interface';
const movielistController = (): MovielistProps => {
  const [movieData, setMovieData] = useState<Array<MovieDataProps>>([]);
  const [search, setSearch] = useState<string>('');
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [searchData, setSearchData] = useState<Array<MovieDataProps>>([]);
  const images = [
    'poster1.jpg',
    'poster2.jpg',
    'poster3.jpg',
    'poster4.jpg',
    'poster5.jpg',
    'poster6.jpg',
    'poster7.jpg',
    'poster8.jpg',
    'poster9.jpg',
    'poster_that_is_missing.jpg',
  ];
  useEffect(() => {
    /** Initally loads the first page json data */
    setMovieData(pageoneData.page['content-items'].content);
    setSearchData(pageoneData.page['content-items'].content);
  }, []);
  const exitFromApp = () => {
    Alert.alert('Exit App', 'Confirm Exit?', [
      {
        text: 'No',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Yes', onPress: () => BackHandler.exitApp()},
    ]);
  };
  const removeSearch = () => {
    setShowSearch(!showSearch);
    setSearch('');
    setMovieData(pageoneData.page['content-items'].content);
    setSearchData(pageoneData.page['content-items'].content);
  };
  const paginateData = (page: number) => {
    /** Handle the pagination */

    if (page <= 3) {
      if (page == 2) {
        setMovieData([
          ...movieData,
          ...pagetwoData.page['content-items'].content,
        ]);
        setSearchData([
          ...movieData,
          ...pagetwoData.page['content-items'].content,
        ]);
      } else if (page == 3) {
        setMovieData([
          ...movieData,
          ...pagethreeData.page['content-items'].content,
        ]);
        setSearchData([
          ...movieData,
          ...pagethreeData.page['content-items'].content,
        ]);
      }
    }
  };

  const filterSearch = (text: string) => {
    setSearch(text);
    const filerData = searchData.filter(item => {
      const itemData = `${item.name}`;
      const textData = text.toLowerCase();
      return itemData.toLowerCase().includes(textData);
    });
    setMovieData(filerData);
  };

  return {
    movieData,
    paginateData,
    setPageNumber,
    pageNumber,
    setShowSearch,
    showSearch,
    setSearch,
    search,
    filterSearch,
    exitFromApp,
    removeSearch,
    images,
  };
};

export default movielistController;
