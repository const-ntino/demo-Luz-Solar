import React, { useState } from "react";
import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
import colors from "../../styles/colors";

import urlencode from "urlencode";
import { FaWhatsapp } from "react-icons/fa";
import BackgroundImage from "gatsby-background-image";

const BackgroundSection = ({ className }) => {
  const [inputName, setInputName] = useState("");
  const [inputType, setInputType] = useState("");
  const [inputValue, setInputValue] = useState("");

  let wppLink = `https://wa.me/{process.env.PHONE_NUMBER}?text=${urlencode(
    `Nome: ${inputName} Tipo de projeto: ${inputType} Consumo médio: ${inputValue}`
  )}`;

  const submitForm = (e) => {
    e.preventDefault();
    console.log(wppLink);

    const win = window.open(wppLink, "_blank");
    if (win != null) {
      win.focus();
    }
  };

  return (
    <StaticQuery
      query={graphql`
        query {
          desktop: file(relativePath: { eq: "contact.jpg" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={(data) => {
        const imageData = data.desktop.childImageSharp.fluid;
        return (
          <BackgroundImage
            Tag="section"
            className={className}
            fluid={imageData}
            backgroundColor={`#040e18`}
          >
            <ContentWrapper id="contato">
              <LeftContent>
                <h2>
                  Temos uma solução <strong>sob medida</strong> para cada tipo
                  de projeto
                </h2>
              </LeftContent>
              <MiddleEmptyContent />
              <RightContent>
                <form onSubmit={submitForm}>
                  <h3>Faça uma simulação sem compromisso</h3>
                  <input
                    placeholder="Nome"
                    required
                    onChange={(e) => {
                      setInputName(e.target.value);
                    }}
                    value={inputName}
                  />

                  <input
                    placeholder="Consumo médio de energia"
                    required
                    onChange={(e) => {
                      setInputValue(e.target.value);
                    }}
                    value={inputValue}
                  />

                  <select
                    id="dropmenu"
                    required
                    onBlur={(e) => {
                      setInputType(e.target.value);
                    }}
                  >
                    <option value="">Tipo de projeto</option>
                    <option value="Comercial">Comercial</option>
                    <option value="Residencial">Residencial</option>
                  </select>

                  <button type="submit">
                    <FaWhatsapp color={colors.brightWhite} size={22} />
                    Faça um orçamento
                  </button>
                </form>
              </RightContent>
            </ContentWrapper>
          </BackgroundImage>
        );
      }}
    />
  );
};

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  background-position: bottom bottom;
  background-repeat: repeat-y;
  background-size: cover;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100vh;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 28px;
    color: ${colors.brightWhite};
    padding: 0px;
    margin-bottom: 20px;
    max-width: none;
  }

  @media (max-width: 1200px) {
    padding: 0px 40px;
  }

  @media (max-width: 950px) {
    flex-direction: column;
  }

  @media (max-width: 499px) {
    padding: 0px 20px;
    h2 {
      font-size: 38px;
      line-height: 45px;
      padding: 0px;
    }
    min-height: 100vh;
    height: fit-content;
  }

  @media (max-width: 320px) {
    padding: 80px 20px;
  }
`;

const LeftContent = styled.div`
  h2 {
    width: 100%;
    max-width: 410px;
    font-weight: 400;
    font-size: 40px;

    strong {
      font-weight: 600;
    }
  }

  @media (max-width: 950px) {
    h2 {
      text-align: center;
      margin-bottom: 40px;
      max-width: 405px;
    }
  }

  @media (max-width: 499px) {
    h2 {
      font-size: 35px;
      line-height: 43px;
      padding: 0px;
    }
  }

  @media (max-width: 320px) {
    h2 {
      font-size: 31px;
      line-height: 40px;
    }
  }
`;

const MiddleEmptyContent = styled.div`
  width: 100%;
  max-width: 50px;

  @media (max-width: 499px) {
    display: none;
  }
`;

const RightContent = styled.div`
  border-radius: 5px;

  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  position: relative;
  z-index: 1;
  background: inherit;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    background: inherit;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
    filter: blur(10px);

    margin: -20px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    width: 100%;
    max-width: 450px;

    margin: 0px;
    padding: 40px;

    color: white;

    h2 {
      margin-bottom: 20px;
    }

    input {
      color: white;
      width: 100%;
      background: transparent;
      -webkit-appearance: none;

      padding: 15px 5px 15px 5px;
      outline: none;

      border: none;
      border-bottom: 1px solid white;

      ::placeholder {
        color: ${colors.brightWhite};
        opacity: 1;
      }

      + input {
        margin-top: 10px;
      }
    }

    select {
      width: 100%;
      color: white;
      border: none;

      margin-top: 10px;
      padding: 15px 5px 15px 5px;
      border-bottom: 1px solid white;

      background: transparent;
    }

    option {
      color: black;
    }

    button {
      text-decoration: none;
      text-align: center;

      color: ${colors.brightWhite};
      background-color: ${colors.green};
      padding: 20px 40px;
      width: 100%;
      border-radius: 10px;
      border: none;
      font-size: 20px;

      margin-top: 20px;

      cursor: pointer;

      svg {
        margin-right: 5px;
        margin-bottom: -4px;
      }

      &:hover {
        background-color: ${colors.lightGreen};
      }
    }
  }

  @media (max-width: 499px) {
    form button {
      padding: 18px 20px 20px 20px;
    }
  }

  @media (max-width: 320px) {
    form {
      margin: 0px;
      padding: 15px;

      h3 {
        margin: 15px 0px;
      }

      input {
        padding: 15px 5px 15px 5px;
      }

      button {
        padding: 15px 13px;

        font-size: 18px;

        margin: 30px 0px 20px 0px;
      }
    }
  }
`;

export default StyledBackgroundSection;
