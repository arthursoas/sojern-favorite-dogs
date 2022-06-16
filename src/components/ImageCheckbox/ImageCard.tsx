import React, { FC } from 'react';
import { CardButton, CheckboxContainer, Image, ImageCardContainer } from './styles';

export interface ImageCardProps {
  imageUrl: string,
  buttonText?: string,
  showButton?: boolean,
  onClick?: (event: any) => void;
};

export const ImageCard: FC<ImageCardProps> = ({
  imageUrl,
  buttonText,
  showButton,
  onClick
}) => {
  const handleCardClick = (): void => {
    onClick && onClick({
      imageUrl,
      buttonText
    });
  };

  return (
    <ImageCardContainer onClick={showButton ? handleCardClick : undefined} clickable={!!showButton}>
      <Image imageUrl={imageUrl} />
      {showButton &&
        <CheckboxContainer>
          <CardButton>{buttonText}</CardButton>
        </CheckboxContainer>
      }
    </ImageCardContainer>
  );
};
