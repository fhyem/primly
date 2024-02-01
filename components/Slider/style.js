"use client";
import { styled } from "styled-components";

export const StyledContainer = styled("div")`
  // position: absolute;
  // bottom: 550px;
  // right: 300px;
`;

export const StyledCardHolder = styled("div")`
  display: flex;
  gap: 20px;
  position: relative;
`;
export const PrevCard = styled("div")`
  width: 200px;
  height: 300px;
  background-color: gray;
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
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
  }
`;
