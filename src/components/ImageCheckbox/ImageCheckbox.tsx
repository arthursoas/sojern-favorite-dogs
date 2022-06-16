import React, { FC } from 'react';

export interface ImageCheckboxProps {
  imageUrl: string,
  text: string,
  onClick: (event: InputEvent) => void;
};

export const ImageCheckbox: FC<ImageCheckboxProps> = ({
  imageUrl,
  text,
  onClick
}) => {
  return (
    <>
      <div>Test</div>
    </>
  );
};
