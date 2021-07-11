import React from "react";
import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";

import Jump from "jump.js";

import colors from "../../styles/colors";

import { FaWhatsapp } from "react-icons/fa";

import BackgroundImage from "gatsby-background-image";

const BackgroundSection = ({ className }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          desktop: file(relativePath: { eq: "hero-2.png" }) {
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
            <ContentWrapper>
              <h1>Paineis solares para sua empresa ou residência</h1>
              <p>Energia sustentável de maneira acessível e segura</p>
              <button
                onClick={() => {
                  Jump("#contato");
                }}
              >
                <FaWhatsapp color={colors.brightWhite} size={22} />
                Solicitar orçamento
              </button>
            </ContentWrapper>
          </BackgroundImage>
        );
      }}
    />
  );
};

const ContentWrapper = styled.div`
  width: 100%;
  height: 100vh !important;
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  text-align: left;

  h1 {
    color: ${colors.brightWhite};
    font-size: 46px;
    line-height: 57px;
    font-weight: 600;
    margin-bottom: 20px;
    padding: 0px;

    max-width: 900px;
  }

  p {
    font-size: 28px;
    color: ${colors.brightWhite};
    padding: 0px;
    margin-bottom: 20px;
    max-width: none;
    line-height: 1.7rem;
  }

  button {
    text-decoration: none;
    text-align: center;

    color: ${colors.brightWhite};
    background-color: ${colors.green};
    padding: 20px 40px;
    width: 100%;
    max-width: 350px;
    border-radius: 10px;
    border: none;
    font-size: 20px;

    cursor: pointer;

    svg {
      margin-right: 5px;
      margin-bottom: -4px;
    }

    &:hover {
      background-color: ${colors.lightGreen};
    }
  }

  @media (max-width: 1300px) {
    padding-left: 40px;
    padding-right: 20px;
  }

  @media (max-width: 865px) {
    p {
      max-width: 540px;
    }
  }

  @media (max-width: 499px) {
    padding: 0px 20px;

    h1 {
      font-size: 42px;
      line-height: 48px;
    }

    p {
      font-size: 20px;
      line-height: 26px;
    }
  }

  @media (max-width: 320px) {
    padding: 0px 20px;

    h1 {
      font-size: 35px;
      line-height: 40px;
    }

    p {
      font-size: 16px;
      line-height: 22px;
    }
  }
`;

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  height: 100vh;
  background-position: bottom bottom;
  background-repeat: repeat-y;
  background-size: cover;
`;

export default StyledBackgroundSection;
