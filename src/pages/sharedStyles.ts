import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5rem;
  align-items: center;
  text-align: center;
`;

export const ImageCardListContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 3rem;
  justify-content: center;
  flex-wrap: wrap;
`;

export const PrimaryButton = styled.button`
  height: 2rem;
  font-size: 16px;
  font-weight: bold;
  background-color: #a8a39d;
  border: 0;
  border-radius: 8px;
  padding: 0.5rem;
  cursor: pointer;
`;
