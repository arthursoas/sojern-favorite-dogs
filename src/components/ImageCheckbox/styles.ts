import styled from 'styled-components';

export const ImageCheckboxContainer = styled.div`
  width: 13rem;
  border-radius: 8px;
  background-color: #d8c8b8;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
`;

export const ImageCard = styled.div<{ imageUrl: string }>`
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
