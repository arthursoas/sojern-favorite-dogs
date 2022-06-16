import React, { FC, useState } from 'react';
import { CheckboxContainer, ImageCard, ImageCheckboxContainer, TextLabel } from './styles';

export interface ImageCheckboxProps {
  imageUrl: string,
  text?: string,
  showCheckbox?: boolean,
  onClick?: (event: any) => void;
};

export const ImageCheckbox: FC<ImageCheckboxProps> = ({
  imageUrl,
  text,
  showCheckbox,
  onClick
}) => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleCardClick = (): void => {
    const checkStatus = !checked;
    setChecked(checkStatus);
    onClick && onClick({
      checked: checkStatus,
      imageUrl,
      text
    });
  };

  return (
    <ImageCheckboxContainer onClick={showCheckbox ? handleCardClick : undefined} clickable={!!showCheckbox}>
      <ImageCard imageUrl={imageUrl} />
      {showCheckbox &&
        <CheckboxContainer>
          <input type="checkbox" checked={checked} readOnly/>
          <TextLabel>{text}</TextLabel>
        </CheckboxContainer>
      }
    </ImageCheckboxContainer>
  );
};
