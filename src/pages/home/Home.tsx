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

  const handleChackboxImageClick = (event: InputEvent) => {
    console.log(event);
  }

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
