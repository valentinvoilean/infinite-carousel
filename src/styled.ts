import styled from 'styled-components';
import img from './images/full-bloom.png';

export const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${img});
  flex-direction: column;
`;

export const StyledTitle = styled.h1`
  font-family: Roboto;
  font-weight: 100;
  font-size: 45px;
`;

export const StyledLink = styled.a`
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
  display: block;
  margin-top: 50px;
  text-align: right;
  width: ${({ theme }) => theme.gallery.width}px;

  :hover {
    color: rgba(0, 0, 0, 0.7);
    text-decoration: underline;
  }
`;
