import React from 'react';
import fixedIncomeCover from '../../../assets/images/fixed-income-cover.png';
import styled from 'styled-components';
import Calculator from '../../Calculators/CompoundInterest/Compoundinterest';

const StyledAboutContainer = styled.div`
  color: #4b4b4b;
  text-align: center;
`;

const StyledFixedIncomeCover = styled.img`
  width: 85%;
  max-width: 500px;
`;

const StyledDivCoverImage = styled.div`
  text-align: center;
`;

const StyledParagraph = styled.p`
  margin: 10px 20px;
  text-align: justify;
  font-size: 14pt;
`;

const StyledTitleH1 = styled.h1`
  color: #ffc554;
  margin: 10px 0;
`;

const StyledTitleH2 = styled.h2`
  color: #ffc554;
`;

const StyledTitleH3 = styled.h3`
  font-size: 16pt;
  text-align: left;
  margin: 10px 0 10px 20px;
`;

const StyledUl = styled.ul`
  text-align: justify;
  margin: 0;
  margin-right: 20px;
`;

const about = () => {
  return (
    <StyledAboutContainer>
      <StyledDivCoverImage>
        <StyledTitleH1>Renda Fixa</StyledTitleH1>
        <StyledFixedIncomeCover src={fixedIncomeCover}></StyledFixedIncomeCover>
      </StyledDivCoverImage>
      <StyledParagraph>
        &nbsp;&nbsp;&nbsp;Investimentos de renda fixa são aqueles cujos rendimentos
        são conhecidos pelo investidor no momento de aplicação e por isso leva tal
        nome.
      </StyledParagraph>
      <StyledParagraph>
        &nbsp;&nbsp;&nbsp;Nessa modalidade pode-se encontrar taxas pré e pós-fixadas,
        quando na segunda opção apesar de não saber a porcentagem exata de
        rendimento, sabe-se os fatores que podem afetá-la. Abordaremos exemplos ao
        longo dessa seção.
      </StyledParagraph>
      <StyledTitleH2>Principais Vantagens da Renda Fixa </StyledTitleH2>
      <StyledTitleH3>1. Segurança</StyledTitleH3>
      <StyledParagraph>
        &nbsp;&nbsp;&nbsp;Investimentos com valor assegurado pela Comissão de Valores
        Mobiliários (CVM) em até R$250.000. Ou seja, independente do que aconteça
        você sempre saberá que esse valor estará seguro.
      </StyledParagraph>
      <StyledTitleH3>2. Alta liquidez</StyledTitleH3>
      <StyledParagraph>
        &nbsp;&nbsp;&nbsp;Os investimentos dessa modalidade costumam disponiblizar
        para você o valor aplicado a qualquer momento. Aplicações com tempo mínimo de
        permanência previamente acordado, podem sofrer um imposto maior caso o
        investidor retire antes dessa data, a vantagem oferecida em troca disso é um
        rendimento maior para o capital investido.
      </StyledParagraph>
      <StyledTitleH3>3. Isenção de imposto de renda</StyledTitleH3>
      <StyledParagraph>
        &nbsp;&nbsp;&nbsp;A maior parte desses investimentos permitem que você retire
        a quantidade que desejar sem incidência de imposto de renda.
      </StyledParagraph>
      <StyledTitleH3>4. Previsibilidade</StyledTitleH3>
      <StyledParagraph>
        &nbsp;&nbsp;&nbsp;O investidor consegue criar uma projeção do valor que terá
        em determinando tempo, sendo assim podendo definir qual a quantidade de
        dinheiro que deve ser investida a fim de obter o valor desejado.
      </StyledParagraph>
      <StyledParagraph>Calculadora:</StyledParagraph>
      <Calculator></Calculator>
      <StyledTitleH2>Principais Desvantagens da Renda Fixa </StyledTitleH2>
      <StyledTitleH3>1. Baixa Rentabiliddade</StyledTitleH3>
      <StyledParagraph>
        &nbsp;&nbsp;&nbsp;Por ser uma modalidade de baixo risco se faz necessário
        abrir mão da rentabilidiade, investimentos de renda fixa não irão apresentar
        ganhos expressivos. A liquidez costuma ser inversamente proporcional ao
        rendimento, normamelmente quanto maior o tempo maior que seu dinehiro ficar
        investido e não ser resgatado, maior a rentabilidade disponível.
      </StyledParagraph>
      <StyledTitleH3>2. Entender Taxas</StyledTitleH3>
      <StyledParagraph>
        &nbsp;&nbsp;&nbsp;Algumas taxas podem ser cobradas de acordo com a liquidez
        esperada no momento do investimento. Algumas taxas que pode-se encontrar
        nessa modalidade:
      </StyledParagraph>
      <StyledUl>
        <li>Administração;</li>
        <li>Entrada ou Retirada do investimento;</li>
        <li>
          Imposto sobre Operações Financeiras (IOF), caso o resgate seja feito dentro
          de 30 dias;
        </li>
        <li>Percentual dos rendimentos para o impostos de renda.</li>
      </StyledUl>
      <StyledTitleH3>3. Pode exigir valores altos</StyledTitleH3>
      <StyledParagraph>
        &nbsp;&nbsp;&nbsp;O mesmo conceito explicado na item 1 anterior vale para
        esse, comumente quanto maior o valor mínimo inicial de investimento, maior a
        rentabilidade disponível.
      </StyledParagraph>
      <StyledParagraph>
        &nbsp;&nbsp;&nbsp;Por exemplo, se a instituição exigir R$ 50.000 para iniciar
        uma aplicação, o investidor pode não conseguir comprar outros produtos para
        diversificar. E investir todo o capital em apenas uma opção não é
        recomendado.
      </StyledParagraph>
      <StyledTitleH3>Exemplos de Investimentos:</StyledTitleH3>
      <StyledUl>
        <li>CDB - Certificado de Depósito Bancário;</li>
        <li>CRA - Certificado de Recebíveis do Agronegócio;</li>
        <li>CRI - Certificado de Recebíveis Imobiliários;</li>
        <li>LCA - Letra de Crédito do Agronegócio;</li>
        <li>LCI - Letra de Crédito Imobiliário.</li>
      </StyledUl>
    </StyledAboutContainer>
  );
};

export default about;
