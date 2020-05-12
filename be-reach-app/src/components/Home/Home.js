import React, { useContext } from 'react';
import maisRicoCapa from '../../assets/images/capa-site-mais-rico.png';
import styled from 'styled-components';
import maisRicoLogo from '../../assets/images/logo-mais-rico-laranja.png';
import Button from '../Common/Button/Button';
import { TEXT_GREY } from '../../constants/styleConstants';
import { LateralMenuContext } from '../../contexts/lateral-menu-context';

const StyledHomeContainer = styled.div`
  color: ${TEXT_GREY};
  text-align: justify;
`;

const StyledLogo = styled.img`
  height: 80px;
  width: 160px;
  padding: 10px 0px;
  margin-left: -10px;
`;

const StyledCoverImage = styled.img`
  height: 100%;
  margin-left: -10px;
  width: calc(100% + 20px);
  max-width: 650px;
`;

const StyledSentecesParagraph = styled.p`
  font-size: 16pt;
  margin-bottom: 10px;
`;

const StyledTextContainer = styled.div`
  text-align: center;
`;

const StyledButtonContainer = styled.div`
  position: absolute;
  margin-top: 15px;
`;

const StyledCoverImageContainer = styled.div`
  display: flex;
  float: right;
  margin-top: 15px;
`;

const Home = () => {
  const lateralMenuContext = useContext(LateralMenuContext);

  const onClickKnowMore = () => {
    lateralMenuContext.onToggleLateralMenu();
  };

  return (
    <StyledHomeContainer>
      <StyledTextContainer>
        <StyledLogo src={maisRicoLogo}></StyledLogo>
        <StyledSentecesParagraph>
          Estamos aqui para simplificar o mundo dos investimentos e provar que
          <b> quem quer enriquece!</b>
        </StyledSentecesParagraph>
        <StyledSentecesParagraph>
          Encontre aqui tudo que você precisa para ver na prática como fazer isso.
        </StyledSentecesParagraph>
      </StyledTextContainer>
      <StyledButtonContainer>
        <Button clicked={onClickKnowMore} label={'SAIBA MAIS'}></Button>
      </StyledButtonContainer>
      <StyledCoverImageContainer>
        <StyledCoverImage src={maisRicoCapa}></StyledCoverImage>
      </StyledCoverImageContainer>
    </StyledHomeContainer>
  );
};

export default Home;
