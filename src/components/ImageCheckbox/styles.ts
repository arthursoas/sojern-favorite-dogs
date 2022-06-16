import styled from 'styled-components';

export const ImageCardContainer = styled.div<{ clickable: boolean }>`
  width: 13rem;
  border-radius: 8px;
  background-color: #d8c8b8;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: ${(props) => props.clickable ? 'pointer' : 'default'};
`;

export const Image = styled.div<{ imageUrl: string }>`
  background-image: url(${(props) => props.imageUrl});
  height: 13rem;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
`;

export const CheckboxContainer = styled.div`
  padding: 0.5rem;
`;

export const TextLabel = styled.label`
  margin-left: 0.5rem;
`;

export const CardButton = styled.button`
  height: 2rem;
  font-size: 16px;
  background-color: #c4b6a7;
  border: 0;
  border-radius: 8px;
  padding: 0.5rem;
  cursor: pointer;
  width: 100%;
`;
