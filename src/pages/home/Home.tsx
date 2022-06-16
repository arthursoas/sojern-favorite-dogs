import React, { FC, useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { ImageCheckbox } from '../../components/ImageCheckbox';

import RandomDogService from '../../services/RandomDogService';

export const Home: FC = () => {
  const IMAGES_AMOUNT: number = 6;

  const [images, setImages] = useState<string[]>();
  const randomDogService = useMemo(() => new RandomDogService(), []);
  const fecthDogImages = async (): Promise<string[]> => {
    const images = await randomDogService.getRandomDogImages(IMAGES_AMOUNT);
    return images;
  }
  const { data } = useQuery('randomDogImages', fecthDogImages, {
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  useEffect(() => {
    if (data) {
      console.log(data);
      setImages(data);
    }
  }, [data]);

  const handleChackboxImageClick = (event: InputEvent) => {
    console.log(event);
  }

  return (
    <>
      {images?.map(image => (
        <ImageCheckbox
          key={image}
          imageUrl={image}
          text='Add as favorite'
          onClick={handleChackboxImageClick}
        />
      ))}
    </>
  );
};
