import React, { FC, useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { ImageCard } from '../../components/ImageCheckbox';

import RandomDogService from '../../services/RandomDogService';
import { ImageCardListContainer, PageContainer, PrimaryButton } from '../sharedStyles';

export const Home: FC = () => {
  const IMAGES_AMOUNT: number = 6;

  const [images, setImages] = useState<string[]>();
  const randomDogService = useMemo(() => new RandomDogService(), []);
  const fecthDogImages = async (): Promise<string[]> => {
    const images = await randomDogService.getRandomDogImages(IMAGES_AMOUNT);
    return images;
  }
  const { data, refetch, isFetching } = useQuery('randomDogImages', fecthDogImages, {
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
    const added = tryAddDogOnFavoriteList(event.imageUrl);

    if (added) {
      toast.success('Dog added to your favorite list!');
      return;
    }

    toast.warning('Dog already on your favorite list!');
  };

  const tryAddDogOnFavoriteList = (imageUrl: string): boolean => {
    let favoriteDogs = window.localStorage.getItem('favorite-dogs');
    let favoriteDogsArray: string[];
    if (favoriteDogs === null || favoriteDogs === undefined) {
      favoriteDogsArray = [];
    } else {
      favoriteDogsArray = JSON.parse(favoriteDogs);
    }

    if (favoriteDogsArray.indexOf(imageUrl) === -1) {
      favoriteDogsArray.push(imageUrl);
      favoriteDogs = JSON.stringify(favoriteDogsArray);
      window.localStorage.setItem('favorite-dogs', favoriteDogs);

      return true;
    }

    return false;
  };

  return (
    <PageContainer>
      <h1>🐶 Select your favorite dogs</h1>
      <ImageCardListContainer>
        {isFetching &&
          <h3>Loading...</h3>
        }
        {!isFetching && images?.map(image => (
          <ImageCard
            key={image}
            imageUrl={image}
            buttonText='Add as favorite'
            onClick={handleChackboxImageClick}
            showButton
          />
        ))}
      </ImageCardListContainer>
      <PrimaryButton onClick={hangleGetMoreImagesClick}>Show me more dogs</PrimaryButton>
    </PageContainer>
  );
};
