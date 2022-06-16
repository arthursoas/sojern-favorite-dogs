import React, { FC, useState } from 'react';
import { CheckboxContainer, ImageCard, ImageCheckboxContainer, TextLabel } from './styles';

export interface ImageCheckboxProps {
  imageUrl: string,
  text: string,
  onClick: (event: any) => void;
};

export const ImageCheckbox: FC<ImageCheckboxProps> = ({
  imageUrl,
  text,
  onClick
}) => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleCardClick = (): void => {
    setChecked(checked => !checked);
    onClick({
      imageUrl,
      text
    });
  }

  return (
    <ImageCheckboxContainer onClick={handleCardClick}>
      <ImageCard imageUrl={imageUrl} />
      <CheckboxContainer>
        <input type="checkbox" checked={checked} readOnly/>
        <TextLabel>{text}</TextLabel>
      </CheckboxContainer>
    </ImageCheckboxContainer>
  );
};
