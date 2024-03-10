import styled from 'styled-components';

export const CvContainer = ({ children }) => {
  return <ExperienceStyled>{children}</ExperienceStyled>;
};

const ExperienceStyled = styled.div`
  display: block;
  padding: 2rem 0;
  font-size: 1.6rem;
  border-bottom: 1px solid #000;

  h3 {
    font-size: 1.8rem;
  }

  .years {
    font-size: 1.4rem;
    margin-bottom: 3px;
  }

  a {
    border-bottom: 1px dashed #000;
  }
`;

export const WorkContainer = ({ children }) => {
  return <WorkStyled className='work'>{children}</WorkStyled>
}

const WorkStyled = styled.div`
  font-size: 3rem;
  font-weight: 500;

  @media (max-width: 440px) {
    font-size: 2rem;
  }

  a {
    background: #fff;
    padding: 1rem 0;
    display: block;
    position: relative;
    z-index: 1;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    margin-top: -1px;
    display: flex;
    align-items: center;

    &:visited:after {
      color: #000;
    }

    &:after {
      content: 'âœ“';
      position: absolute;
      right: 10px;
      color: #fff;

      @media (max-width: 440px) {
        -webkit-transform: none !important;
        transform: none !important;
        font-size: 1.5rem;
        top: 15px;
        right: 4px;
      }
    }
  }

  img {
    width: auto;
    height: 80px;
    margin-right: 10px;
  }

  em {
    font-weight: 300;
    font-size: 2rem;
    font-style: normal;
  }

  span {
    pointer-events: none;
    display: inline-block;
  }
`;