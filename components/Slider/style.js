"use client";
import { styled } from "styled-components";

export const StyledContainer = styled("div")`
  // position: absolute;
  // bottom: 550px;
  // right: 300px;
  width: 100%;
  display: flex;
`;

export const StyledCardHolder = styled("div")`
  // display: flex;
  // gap: 20px;
  // position: relative;
  // width: 100%;
`;
export const PrevCard = styled("div")`
  width: 200px;
  height: 300px;
  background-color: gray;
  position: absolute;
  left: 0;
  top: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
  }
`;
export const CurrentCard = styled("div")`
  width: 250px;
  height: 350px;
  background-color: gray;
  position: absolute;
  left: 110px;
  z-index: 3;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
  }
`;
export const NextCard = styled("div")`
  width: 200px;
  height: 300px;
  background-color: gray;
  position: absolute;
  top: 0;
  left: 260px;
  z-index: 2;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
  }
`;
