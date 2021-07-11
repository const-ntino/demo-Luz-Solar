import React from "react";
import styled from "styled-components";
import colors from "../../styles/colors";

import FinancialIcon from "../../images/icons/financialReturn.svg";
import PropertyIcon from "../../images/icons/realEstate.svg";
import PigIcon from "../../images/icons/piggy.svg";
import ToolsIcon from "../../images/icons/tools.svg";

const AdvantagesSection = () => {
  return (
    <>
      <AdvantagesContainer>
        <h2>Benefícios da energia solar</h2>
        <Advantages>
          <AdvantageBox>
            <img src={FinancialIcon} alt="Retorno rápido do valor investido" />
            <p>Retorno rápido do valor investido</p>
          </AdvantageBox>
          <AdvantageBox>
            <img src={PropertyIcon} alt="Valorização do imóvel" />
            <p>Valorização do imóvel</p>
          </AdvantageBox>
          <AdvantageBox>
            <img src={PigIcon} alt="Economia na conta de energia elétrica" />
            <p>Economia na conta de energia elétrica</p>
          </AdvantageBox>
          <AdvantageBox>
            <img src={ToolsIcon} alt="Equipamento de baixa manutenção" />
            <p>Equipamento de baixa manutenção</p>
          </AdvantageBox>
        </Advantages>
      </AdvantagesContainer>
    </>
  );
};

const AdvantagesContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 150px 0px;
  color: ${colors.black};

  height: 100vh;

  h2 {
    font-size: 50px;
    margin-bottom: 40px;
    font-weight: 600;
  }

  background-color: ${colors.lightGray};

  @media (max-width: 1200px) {
    height: fit-content;
    h2 {
      text-align: center;
    }
  }
  @media (max-width: 499px) {
    h2 {
      font-size: 38px;
      line-height: 45px;
      padding: 0px 20px;
    }
  }
`;

const Advantages = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    flex-wrap: wrap;
    max-width: 600px;
  }
`;

const AdvantageBox = styled.div`
  width: 250px;
  height: 250px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 50px;

  box-shadow: 6px -6px 21px #c5c5c5, -6px 6px 21px #ffffff;

  &::before {
    box-shadow: none;
  }

  &:hover {
    box-shadow: inset -6px 6px 21px #c5c5c5, inset 6px -6px 21px #ffffff;
    transition: box-shadow 3s ease-in-out;
  }

  p {
    margin-top: 10px;
    max-width: 160px;
  }

  margin: 20px;
`;

export default AdvantagesSection;
