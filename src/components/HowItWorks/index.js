import React from "react";
import styled from "styled-components";
import colors from "../../styles/colors";

import MorningIcon from "../../images/icons/morning.svg";
import AfternoonIcon from "../../images/icons/afternoon.svg";
import NightIcon from "../../images/icons/night.svg";

const HowItWorksSection = () => {
  return (
    <>
      <HowItWorks>
        <h2> Como funciona um Sistema de Energia Solar?</h2>
        <HowItWorksContainer>
          <HowItWorksContainerBox>
            <HowItWorksContainerBoxHeader>
              <img src={MorningIcon} alt="Ícone do Sol" />
              <h3 style={{ color: colors.yellow }}>Período da manhã</h3>
            </HowItWorksContainerBoxHeader>

            <p>
              No início da manhã a usina solar já começa a alimentar os
              equipamentos elétricos conectados à rede
            </p>
          </HowItWorksContainerBox>

          <HowItWorksContainerBox>
            <HowItWorksContainerBoxHeader>
              <img src={AfternoonIcon} alt="Ícone do Sol a tarde" />
              <h3 style={{ color: colors.orange }}>Durante toda a tarde</h3>
            </HowItWorksContainerBoxHeader>

            <p>
              A energia produzida é utilizada para alimentar o consumo local e o
              excedente é disponibilizado para a concessionária de energia
              gerando créditos de consumo
            </p>
          </HowItWorksContainerBox>

          <HowItWorksContainerBox>
            <HowItWorksContainerBoxHeader>
              <img src={NightIcon} alt="Ícone da Lua" />
              <h3 style={{ color: colors.blue }}>Na parte da noite</h3>
            </HowItWorksContainerBoxHeader>

            <p>
              O consumo de energia vem da rede elétrica da concessionária local,
              mas seu custo é abatido pelo saldo de créditos gerado durante o
              dia
            </p>
          </HowItWorksContainerBox>
        </HowItWorksContainer>
      </HowItWorks>
    </>
  );
};

const HowItWorks = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 150px 0px;
  color: ${colors.black};

  h2 {
    font-size: 50px;
    margin-bottom: 70px;
    font-weight: 600;
  }

  background-color: ${colors.white};

  @media (max-width: 1200px) {
    h2 {
      font-size: 40px;
      text-align: center;
      max-width: 600px;
      padding: 0px 20px;
    }

    height: fit-content;
  }

  @media (max-width: 499px) {
    h2 {
      font-size: 38px;
      line-height: 45px;
      padding: 0px 30px;
    }
  }
  @media (max-width: 320px) {
    h2 {
      font-size: 35px;
    }
  }
`;

const HowItWorksContainer = styled.div`
  width: 100%;
  max-width: 1200px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const HowItWorksContainerBox = styled.div`
  width: 100%;
  max-width: 33%;
  height: 100%;
  max-height: 250px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  border-radius: 50px;

  h3 {
    font-size: 20px;
    margin-bottom: 20px;
  }

  p {
    max-width: 290px;
    font-size: 16px;
  }

  margin: 20px;

  @media (max-width: 1200px) {
    flex-direction: column;
    max-width: 300px;

    margin-bottom: 80px;
  }
`;

const HowItWorksContainerBoxHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
    margin: 0px;
    margin-left: 5px;
  }

  margin-bottom: 20px;
`;

export default HowItWorksSection;
