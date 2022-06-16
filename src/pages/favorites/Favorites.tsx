import React, { FC, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { ImageCard } from '../../components/ImageCheckbox';
import { ImageCardListContainer, PageContainer } from '../sharedStyles';

export const Favorites: FC = () => {
  const [images, setImages] = useState<string[]>();
  const fecthDogImages = (): string[] => {
    let favoriteDogs = window.localStorage.getItem('favorite-dogs');
    let favoriteDogsArray: string[];
    if (favoriteDogs === null || favoriteDogs === undefined) {
      favoriteDogsArray = [];
    } else {
      favoriteDogsArray = JSON.parse(favoriteDogs);
    }

    return favoriteDogsArray;
  }
  const { data, isFetching } = useQuery('favoriteDogImages', fecthDogImages, {
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  useEffect(() => {
    if (data) {
      setImages(data);
    }
  }, [data]);

  return (
    <PageContainer>
      <h1>❤️ Your favorite dogs are here</h1>
      <ImageCardListContainer>
        {isFetching &&
          <h3>Loading...</h3>
        }
        {!isFetching &&
          <>
            {images?.length === 0 &&
              <h3>You don't have favorite dogs yet</h3>
            }
            {images?.length !== 0 && images?.map(image => (
              <ImageCard
                key={image}
                imageUrl={image}
              />
            ))}
          </>
        }
      </ImageCardListContainer>
    </PageContainer>
  );
};
