import React from 'react';
import styled from 'styled-components';

const StylePageContainer = styled.div`
  text-align: center;
`;

const StyledRelatedVideoContainer = styled.div`
  margin-bottom: 20px;
`;

const StyledTitleH1 = styled.h1`
  color: #ffc554;
  margin: 10px 0;
`;

const fixedIncomeRelatedVideos = () => {
  const allRelatedVideos = [
    {
      author: 'O Primo Rico',
      src: 'https://www.youtube.com/embed/uhhpYwp2kL0'
    },
    {
      author: 'Me Poupe!',
      src: 'https://www.youtube.com/embed/ysm9ZJ6O67w'
    },
    {
      author: 'Jovens de negócio',
      src: 'https://www.youtube.com/embed/Bi_j9IdOgzc'
    }
  ];

  return (
    <StylePageContainer>
      <StyledTitleH1>Vídeos Relacionados</StyledTitleH1>
      {allRelatedVideos.map((item) => {
        return (
          <StyledRelatedVideoContainer key={item.src}>
            <iframe
              title={item.src}
              width="95%"
              height="100%"
              src={item.src}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>Créditos: {item.author}</p>
          </StyledRelatedVideoContainer>
        );
      })}
    </StylePageContainer>
  );
};

export default fixedIncomeRelatedVideos;
