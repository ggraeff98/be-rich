import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../../Common/Button/Button';

const StyledDivContainer = styled.div`
  padding: 0 20px;
  font-size: 14pt;
`;

const StyledInputsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  align-items: center;
`;

const StyledInput = styled.input`
  border-radius: 5px;
  border: none;
  padding: 5px;
  border: 1px solid #4b4b4b;
  font-size: 14pt;
  font-family: 'Barlow Condensed';
`;

const StyledButtonCalculateDiv = styled.div`
  padding: 10px 0;
  text-align: end;
`;

const inputLIst = [
  {
    label: 'Valor Desejado:',
    placeholder: 'valor em reais ex: 1500',
    type: 'number',
    step: '0.01'
  },
  {
    label: 'Tempo de Aplicação:',
    placeholder: 'valor em anos ex: 5',
    type: 'number',
    step: '0.01'
  },
  {
    label: 'Taxa de Rendimento:',
    placeholder: 'ex: 7% insira o número 7',
    type: 'number',
    step: '0.01'
  }
];

const CompoundInterest = () => {
  const [inputsState, setInputsState] = useState({
    wantedValue: 0,
    timeToApply: 0,
    tax: 0,
    finalValue: 0
  });

  const onChangeInputValue = (value, key) => {
    if (key === 'Valor Desejado:')
      setInputsState({
        ...inputsState,
        wantedValue: +value
      });
    else if (key === 'Tempo de Aplicação:')
      setInputsState({
        ...inputsState,
        timeToApply: +value
      });
    else
      setInputsState({
        ...inputsState,
        tax: +value
      });
  };

  const [buttonState, setButtonState] = useState({
    disable: true
  });

  useEffect(() => {
    setButtonState({
      disable: true
    });

    if (inputsState.wantedValue <= 0) return;
    if (inputsState.timeToApply <= 0) return;
    if (inputsState.tax <= 0) return;

    setButtonState({
      disable: false
    });
  }, [inputsState]);

  const calculateValue = () => {
    const porcentagebase100 = 1 + inputsState.tax / 100;
    const value =
      inputsState.wantedValue / Math.pow(porcentagebase100, inputsState.timeToApply);
    setInputsState({
      ...inputsState,
      finalValue: value.toFixed(1) + 1
    });
    document.body.style.zoom = 1.0;
  };

  const validateInput = (e, key) => {
    onChangeInputValue(e.target.value, key);
  };

  return (
    <StyledDivContainer>
      {inputLIst.map((item) => {
        return (
          <StyledInputsContainer key={item.label}>
            <span>{item.label}</span>
            <StyledInput
              onChange={(e) => validateInput(e, item.label)}
              step={item.step}
              type={item.type}
              placeholder={item.placeholder}
            ></StyledInput>
          </StyledInputsContainer>
        );
      })}
      <StyledButtonCalculateDiv>
        <Button
          disable={buttonState.disable}
          clicked={calculateValue}
          background={'#ffc554'}
          label={'CALCULAR'}
        ></Button>
      </StyledButtonCalculateDiv>
      <StyledInputsContainer>
        <p>Para esse valor você deve aplicar:</p>
        <span>
          <b>R$ {inputsState.finalValue ? inputsState.finalValue : ' '}</b>
        </span>
      </StyledInputsContainer>
    </StyledDivContainer>
  );
};

export default CompoundInterest;
