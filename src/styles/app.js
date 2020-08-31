import styled from "styled-components";
import background from "../assets/img/background.png";

export const Container = styled.div`
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  @media screen and (max-width: 1024px) {
    height: auto;
    width: auto;
  }
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  overflow-y: hidden;
`;

export const ScreenHolder = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;

  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse;
    align-items: center;
  }

  > img {
    height: 600px;
    width: 520px;

    @media screen and (max-width: 550px) {
      height: 400px;
      width: 320px;
    }
  }

  > div {
    margin-left: 50px;
    @media screen and (max-width: 1024px) {
      margin: 20px;
    }

    > img,
    a > img {
      height: 90px;

      @media screen and (max-width: 550px) {
        height: 60px;
      }
    }

    > h1 {
      font-family: "Montserrat";
      font-style: italic;
      color: #fff;
    }

    > ul {
      list-style: outside;
      color: #fff;
      font-family: "Montserrat";
      margin: 10px 20px;
      align-self: center;
      margin-bottom: 100px;
      @media screen and (max-width: 1024px) {
        margin-bottom: 0px;
      }

      > li {
        margin: 10px 0px;
      }
    }
  }
`;
