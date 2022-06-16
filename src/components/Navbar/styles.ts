import styled from 'styled-components';

export const NavbarCotainer = styled.div`
  height: 2rem;
  background-color: #e2ddd9;
  display: flex;
  gap: 2rem;
  align-items: center;
  padding: 0.5rem;
`;

export const NavbarOption = styled.label<{ bold: boolean }>`
  cursor: pointer;
  font-weight: ${(props) => props.bold ? 'bold' : 'regular'};
`;
