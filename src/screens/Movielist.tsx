import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import CustomStatusBar from '../component/CustomStatus/CustomStatusBar';
import Header from '../component/Header/Header';
import movielistController from './movielist.controller';
import styles from './movelist.style';
import Input from '../component/Input/Input';
import Tooltip from 'rn-tooltip';
import imageIndex from '../assets';
const Movielist = () => {
  const {
    movieData,
    paginateData,
    setPageNumber,
    pageNumber,
    setShowSearch,
    showSearch,
    search,
    filterSearch,
    exitFromApp,
    removeSearch,
    images,
  } = movielistController();
  const renderImages = (img: any) => {
    let image = img.replace(/\.[^/.]+$/, '');
    if (images.includes(img)) {
      //@ts-ignore
      return <Image source={imageIndex[image]} style={styles.imageStyle} />;
    } else {
      return (
        <Image
          source={imageIndex.placeholder_for_missing_posters}
          style={styles.imageStyle}
        />
      );
    }
  };
  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <Header
        title="Romantic Comedy"
        onBack={() => exitFromApp()}
        onSearch={() => setShowSearch(!showSearch)}
      />
      {showSearch && (
        <Input
          placeholder="Search"
          onChangeText={filterSearch}
          value={search}
          showClose={showSearch}
          onClose={() => {
            removeSearch();
          }}
        />
      )}
      <FlatList
        data={movieData}
        numColumns={3}
        testID="flat-list"
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          if (!search) {
            setPageNumber(pageNumber + 1);
            paginateData(pageNumber + 1);
          }
        }}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.nodataLabel}>No Data Available</Text>
          </View>
        )}
        contentContainerStyle={styles.listcontentContainer}
        renderItem={({item, index}: any) => (
          <View style={styles.content}>
            {item?.name?.length > 10 ? (
              <Tooltip
                actionType="press"
                overlayColor="rgba(0,0,0,0.4)"
                height={60}
                containerStyle={styles.toolTipStyle}
                popover={
                  <Text style={[styles.posterName, {marginTop: 0}]}>
                    {item?.name}
                  </Text>
                }>
                {renderImages(item['poster-image'])}

                <Text style={styles.posterName} numberOfLines={1}>
                  {item?.name}
                </Text>
              </Tooltip>
            ) : (
              <>
                {renderImages(item['poster-image'])}

                <Text style={styles.posterName} numberOfLines={1}>
                  {item?.name}
                </Text>
              </>
            )}
          </View>
        )}
      />
    </View>
  );
};

export default Movielist;
