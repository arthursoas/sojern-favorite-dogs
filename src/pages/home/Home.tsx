import React, { FC, useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { ImageCheckbox } from '../../components/ImageCheckbox';

import RandomDogService from '../../services/RandomDogService';
import { CTAs, GetMoreButton, HomeContainer, ImageCheckboxListContainer } from './styles';

export const Home: FC = () => {
  const IMAGES_AMOUNT: number = 6;

  const [images, setImages] = useState<string[]>();
  const randomDogService = useMemo(() => new RandomDogService(), []);
  const fecthDogImages = async (): Promise<string[]> => {
    const images = await randomDogService.getRandomDogImages(IMAGES_AMOUNT);
    return images;
  }
  const { data, refetch } = useQuery('randomDogImages', fecthDogImages, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  useEffect(() => {
    if (data) {
      setImages(data);
    }
  }, [data]);

  const hangleGetMoreImagesClick = (_: unknown) => {
    refetch();
  };

  const handleChackboxImageClick = (event: any) => {
    console.log(event);
    if (event.checked) {
      addDogOnFavoriteList(event.imageUrl);
      return;
    }

    removeDogFromFavoriteList(event.imageUrl);
  };

  const addDogOnFavoriteList = (imageUrl: string) => {
    let favoriteDogs = window.localStorage.getItem('favorite-dogs');
    let favoriteDogsArray: string[];
    if (favoriteDogs === null || favoriteDogs === undefined) {
      favoriteDogsArray = [];
    } else {
      favoriteDogsArray = JSON.parse(favoriteDogs);
    }

    if (favoriteDogsArray.indexOf(imageUrl) === -1) {
      favoriteDogsArray.push(imageUrl);
    }

    favoriteDogs = JSON.stringify(favoriteDogsArray);
    window.localStorage.setItem('favorite-dogs', favoriteDogs);
  };

  const removeDogFromFavoriteList = (imageUrl: string) => {
    let favoriteDogs = window.localStorage.getItem('favorite-dogs');
    if (favoriteDogs === null || favoriteDogs === undefined) {
      return;
    }

    const favoriteDogsArray: string[] = JSON.parse(favoriteDogs);
    const imageIndex = favoriteDogsArray.indexOf(imageUrl);
    favoriteDogsArray.splice(imageIndex, 1);

    favoriteDogs = JSON.stringify(favoriteDogsArray);
    window.localStorage.setItem('favorite-dogs', favoriteDogs);
  };

  return (
    <HomeContainer>
      <ImageCheckboxListContainer>
        {images?.map(image => (
          <ImageCheckbox
            key={image}
            imageUrl={image}
            text='Add as favorite'
            onClick={handleChackboxImageClick}
          />
        ))}
      </ImageCheckboxListContainer>
      <CTAs>
        <GetMoreButton onClick={hangleGetMoreImagesClick}>Get more images</GetMoreButton>
      </CTAs>
    </HomeContainer>
  );
};
