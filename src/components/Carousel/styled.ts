import styled from 'styled-components';

export const StyledCarousel = styled.div`
  position: relative;
  width: ${({ theme }) => theme.gallery.width}px;
  overflow: hidden;
  box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.35);
  background: ${({ theme }) => theme.gallery.background};

  &::before {
    display: block;
    content: '';
    width: 100%;
    padding-top: calc(100% / (${({ theme }) => theme.gallery.aspectRatio}));
  }
`;
