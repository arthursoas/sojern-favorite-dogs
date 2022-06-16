import React, { FC, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { ImageCheckbox } from '../../components/ImageCheckbox';
import { ImageCheckboxListContainer, PageContainer } from '../sharedStyles';

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
  const { data } = useQuery('favoriteDogImages', fecthDogImages, {
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
    <ImageCheckboxListContainer>
        {images?.map(image => (
          <ImageCheckbox
            key={image}
            imageUrl={image}
          />
        ))}
      </ImageCheckboxListContainer>
    </PageContainer>
  );
};
