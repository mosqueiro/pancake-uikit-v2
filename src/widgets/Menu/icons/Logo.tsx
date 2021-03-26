import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#0f5f54";
  return (
    <Svg viewBox="0 0 160 26" {...props}>
      <g fill="#ffffff">
        <path d="M0 50 l0 -50 409 0 409 0 0 50 0 50 -409 0 -409 0 0 -50z m59.3 38.5 c8.1 -2.1 12.7 -4.7 19.4 -10.9 12.3 -11.4 16.8 -26.8 11.8 -40.4 l-1.4 -3.7 0 3 c-0.1 2.8 -0.8 3.4 -7.6 6.8 -4.2 2 -8.9 3.7 -10.5 3.7 -2.7 0 -3 -0.3 -3 -3.4 0 -1.8 0.5 -4.7 1.1 -6.5 0.9 -2.6 0.8 -4.1 -0.6 -7.9 -1.8 -4.5 -1.8 -4.6 -3.3 -2.4 -1 1.5 -2.5 2.2 -4.7 2.2 -2.8 0 -3.4 -0.4 -4 -2.8 -0.3 -1.5 -1.6 -4.5 -2.9 -6.6 l-2.3 -3.8 -2.6 5.6 c-1.5 3.1 -2.7 6.1 -2.7 6.6 0 0.6 -1.5 1 -3.4 1 -2.6 0 -3.6 -0.5 -4.1 -2 -0.9 -2.8 -2.1 -2.5 -3.5 1.1 -1.4 3.3 -1.5 5.9 -0.5 13.7 l0.8 5.2 -3.2 0 c-1.7 0 -6.4 -1.7 -10.6 -3.7 -6.3 -3.1 -7.5 -4.1 -7.6 -6.3 -0.1 -2.5 -0.1 -2.5 -1.4 0.5 -5.3 11.8 -0.3 28.7 11.8 40.2 6 5.7 11.3 8.7 19 10.8 6.8 1.8 9.1 1.8 16 0z m151.7 -10.7 c2.5 -1 6.4 -3.8 8.8 -6.1 4.3 -4.2 7.8 -9.4 6.9 -10.4 -0.3 -0.2 -0.8 0.5 -1.2 1.7 -1.1 3.6 -7.7 10.2 -12 12.1 -2.8 1.3 -6.4 1.9 -12 1.9 -10.2 0 -16.9 -2.9 -21.4 -9.1 -4.3 -5.9 -5.4 -10.2 -5 -20.1 0.4 -7.3 0.8 -9.1 3.4 -13.4 4.6 -7.3 10.6 -10.6 20.3 -11.2 4.3 -0.2 9.6 0.1 12 0.7 5 1.4 11.4 6.8 13.2 11.1 0.7 1.7 1.7 3 2.2 3 1.4 0 -1.2 -4 -5.9 -9.2 -11.3 -12 -28.3 -11.4 -39.9 1.5 -11 12.2 -10.9 27.4 0.2 39.7 4.5 4.9 9.5 8.1 15.4 9.6 5.2 1.4 8.6 1 15 -1.8z m71.1 -0.9 c10.3 -5.5 17.3 -16.4 17.3 -26.9 0 -14.3 -13.8 -29.1 -28.8 -30.7 -14.3 -1.6 -32.1 15.8 -31.8 31.3 0.1 10.4 9.7 23.3 20.8 28 7.8 3.3 14 2.8 22.5 -1.7z m445.5 0.5 c5.1 -2.4 10.7 -7.8 13.2 -12.5 1.2 -2.4 1.7 -3.6 1 -2.5 -6 8.6 -7.3 9.9 -12.1 12.2 -4.1 1.9 -6.9 2.4 -13 2.4 -8.9 0 -13.6 -1.6 -18.5 -6.3 -5.8 -5.5 -7.5 -10.1 -7.6 -19.7 -0.1 -10.9 1.9 -16.6 8 -21.8 5.5 -4.9 11.3 -6.6 20.7 -6 9.6 0.6 14.9 3.4 18.9 9.9 1.7 2.7 3.3 4.7 3.6 4.5 0.8 -0.8 -3.8 -7.4 -7.1 -10.2 -5.1 -4.4 -12.6 -7.4 -18.2 -7.4 -14.3 0 -28.9 15.2 -28.9 30 0 9.8 6.4 20.5 15.2 25.7 8.9 5.3 16.2 5.7 24.8 1.7z m-562.6 1.6 c0 -0.6 -6.7 -1 -18 -1 l-18 0 0 -3.8 c0 -2.1 0.5 -4.3 1.2 -5 0.7 -0.7 0.9 -1.2 0.6 -1.2 -1.3 0 -7.9 10 -7.3 11 0.8 1.4 41.5 1.4 41.5 0z m151 -27 l0 -28 12.8 0 c13.6 0 15.5 0.7 18.1 5.7 1.6 3.1 1.4 13.9 -0.3 17.1 -2 3.9 -5.1 5.1 -13.3 5.4 l-7.2 0.3 11.5 13.8 c6.3 7.5 11.7 13.7 12 13.7 0.4 0 0 -0.8 -0.7 -1.7 -0.8 -0.9 -4.2 -5 -7.6 -9.2 -4.8 -5.8 -6.3 -8.3 -6.3 -10.7 0 -2.8 0.4 -3.3 3.1 -3.9 4.3 -1 11.5 -8.2 12.7 -12.8 1.9 -7 -2.7 -16 -10 -19.6 -3.8 -1.8 -6.2 -2.1 -16.6 -2.1 l-12.2 0 0 30 c0 29.3 0 30 2 30 2 0 2 -0.7 2 -28z m81 26.5 c0 -1.3 -2.3 -1.5 -15 -1.5 l-15 0 0 -12.5 0 -12.5 15.1 0 c13.8 0 15 -0.1 14.7 -1.7 -0.3 -1.6 -2 -1.8 -15.1 -2.1 l-14.7 -0.3 0 -11.9 0 -12 15 0 c14.3 0 15 -0.1 15 -2 0 -1.9 -0.7 -2 -17 -2 l-17 0 0 30 0 30 17 0 c14.4 0 17 -0.2 17 -1.5z m47 -12.5 l0 -14 13.5 0 c12.8 0 13.5 -0.1 13.5 -2 0 -1.9 -0.7 -2 -13.5 -2 l-13.5 0 0 -12 0 -12 15 0 c14.3 0 15 -0.1 15 -2 0 -1.9 -0.7 -2 -16.5 -2 l-16.5 0 0 30 c0 26 0.2 30 1.5 30 1.3 0 1.5 -2.2 1.5 -14z m66 12.5 c0 -1.2 -1.3 -1.5 -6 -1.5 l-6 0 0 -26.5 0 -26.5 6 0 c5.3 0 6 -0.2 6 -2 0 -1.9 -0.7 -2 -14 -2 -13.3 0 -14 0.1 -14 2 0 1.8 0.7 2 6 2 l6 0 0 26.5 0 26.5 -6 0 c-4.7 0 -6 0.3 -6 1.5 0 1.3 2.2 1.5 14 1.5 11.8 0 14 -0.2 14 -1.5z m14 -21.1 l0 -22.5 3.7 0.3 c3.6 0.3 4.1 0.9 18.9 22.3 8.3 12 15.7 22.1 16.3 22.3 0.8 0.3 1.1 -8.2 1.1 -29.7 0 -29.4 0 -30.1 -2 -30.1 -1.9 0 -2 0.7 -2 22.5 l0 22.5 -3.3 0 c-3.3 0 -3.9 -0.7 -18.8 -22.5 -8.5 -12.3 -15.7 -22.4 -16.1 -22.5 -0.5 0 -0.8 13.5 -0.8 30 0 26 0.2 30 1.5 30 1.3 0 1.5 -3.2 1.5 -22.6z m52 21.7 c0 -0.5 1.6 -4.8 3.6 -9.5 l3.6 -8.7 15.1 0.3 15 0.3 3.7 9 c5.9 14.2 6.4 11.1 0.6 -3.7 -13 -33 -19 -47.8 -19.5 -47.8 -0.6 0 -24.1 58.9 -24.1 60.3 0 0.4 0.5 0.7 1 0.7 0.6 0 1 -0.4 1 -0.9z m60 -21.6 l0 -22.5 3.3 0 c3.1 0 3.9 0.9 18.7 22.5 8.5 12.3 16.1 22.5 16.8 22.5 0.9 0 1.2 -6.7 1.2 -30 0 -29.3 0 -30 -2 -30 -1.9 0 -2 0.7 -2 23 l0 23 -3.2 0 c-3.2 0 -4 -1 -19.2 -23 -8.7 -12.7 -16.2 -23 -16.7 -23 -0.5 0 -0.9 13.5 -0.9 30 0 29.3 0 30 2 30 1.9 0 2 -0.7 2 -22.5z m154 21 c0 -1.3 -2.4 -1.5 -15.5 -1.5 l-15.5 0 0 -12.5 0 -12.5 15 0 c14.3 0 15 -0.1 15 -2 0 -1.9 -0.7 -2 -15 -2 l-15 0 0 -12 0 -12 15.5 0 c14.8 0 15.5 -0.1 15.5 -2 0 -1.9 -0.7 -2 -17.5 -2 l-17.5 0 0 30 0 30 17.5 0 c14.9 0 17.5 -0.2 17.5 -1.5z m-628.5 -52.4 c1.5 -2.2 2.4 -4.5 2 -5 -0.4 -0.7 -7.5 -1.1 -20.1 -1.1 -16.6 0 -19.4 0.2 -19.4 1.5 0 1.3 2.6 1.5 17 1.5 l17 0 0 3.5 c0 1.9 0.2 3.5 0.4 3.5 0.2 0 1.6 -1.8 3.1 -3.9z m-105.4 -18.3 c-2.8 -0.6 -6 -0.6 -9 0 -4.3 0.9 -3.9 1 4.4 1 8.2 0 8.6 -0.1 4.6 -1z" />
        <path d="M39.2 52.4 c-2.5 -1.7 -3 -6.6 -1 -10.9 0.8 -1.9 1.9 -2.5 4.2 -2.5 2.8 0 3.3 0.5 4.9 4.9 0.9 2.7 1.7 6 1.7 7.5 0 2.3 -0.4 2.6 -3.8 2.6 -2.1 0 -4.8 -0.7 -6 -1.6z" />
        <path d="M54 51.4 c0 -1.5 0.8 -4.8 1.7 -7.5 1.6 -4.4 2.1 -4.9 4.8 -4.9 2.3 0 3.4 0.7 4.8 3.1 3.8 6.8 0.5 11.9 -7.7 11.9 -3.2 0 -3.6 -0.3 -3.6 -2.6z" />
        <path d="M255.3 74.5 c-8.9 -4.5 -13.3 -12.6 -13.3 -24.5 0 -11.9 4.4 -20 13.3 -24.5 4.3 -2.1 6.5 -2.5 13.9 -2.5 9.7 0 13.4 1.1 18.7 5.6 5.5 4.6 8.1 11.4 8.1 21.4 0 10 -2.6 16.8 -8.1 21.4 -5.3 4.5 -9 5.6 -18.7 5.6 -7.4 0 -9.6 -0.4 -13.9 -2.5z" />
        <path d="M587.1 53.8 c0 -1.8 1.7 -8 3.8 -13.8 3.8 -10.3 3.9 -10.5 7.2 -10.8 l3.4 -0.3 3.8 10.8 c2 5.9 3.7 12.3 3.7 14.1 l0 3.2 -11 0 -11 0 0.1 -3.2z" />
      </g>
      <g fill="#0f5f54">
        <path d="M40.3 91.5 c-7.7 -2.1 -13 -5.1 -19 -10.8 -13.7 -13 -17.8 -31.5 -10.7 -49.1 2.1 -5.4 4.3 -8.5 9.3 -13.7 7.2 -7.2 12 -10.1 20.8 -12.4 10.7 -2.8 22.4 -1.3 32.5 4.2 5.8 3.1 14.7 12.3 17.7 18.1 6.8 13.3 6.6 29.2 -0.6 42.5 -3.1 5.6 -12.6 14.8 -18.3 17.7 -9.5 4.8 -21.7 6.2 -31.7 3.5z m3.8 -45 l-1.6 -4.5 -1.4 2.7 c-1.2 2.4 -1.2 2.8 0.9 4.5 3.4 2.8 3.9 2.2 2.1 -2.7z m17 2.7 c2.5 -1.6 2.5 -1.8 1 -4.4 l-1.7 -2.6 -1.6 4.4 c-1.7 4.9 -1.5 5.2 2.3 2.6z m-6.5 -12.5 c0.4 -2.9 0 -6.4 -1.1 -10.3 l-1.8 -5.9 -1.5 3.5 c-2 4.5 -2.1 14.5 -0.3 18.9 l1.4 3.3 1.4 -2.6 c0.7 -1.4 1.6 -4.5 1.9 -6.9z m-23.7 3.4 c-1.6 -4.6 -0.4 -12.5 2.6 -17.7 1.4 -2.4 2.9 -4.4 3.3 -4.4 0.4 0 2 1.9 3.5 4.2 1.5 2.3 2.7 3.6 2.7 2.9 0 -0.6 1.3 -3.9 3 -7.2 l3 -6.1 -4.3 0.7 c-6.6 1.1 -14.8 5.8 -20 11.4 -4.1 4.4 -8.5 11.7 -7.5 12.6 0.8 0.7 14.3 7.3 14.6 7.1 0.1 -0.2 -0.3 -1.7 -0.9 -3.5z m55.1 -4.6 c0 -1.9 -5.5 -9.9 -9.5 -13.7 -4.5 -4.4 -12.7 -8.5 -18.7 -9.4 l-4.2 -0.7 2.2 3.5 c1.2 2 2.8 5.3 3.5 7.4 l1.4 3.8 2.3 -4.2 c1.3 -2.3 2.9 -4.1 3.4 -3.9 0.6 0.1 2.4 2.7 3.9 5.7 2.4 4.6 2.8 6.4 2.4 11 -0.2 3 -0.8 6.3 -1.2 7.3 -0.6 1.4 0.8 1 6.9 -2 4.2 -2 7.6 -4.2 7.6 -4.8z" />
        <path d="M193 82.7 c-24.1 -6.8 -32.3 -37.3 -15.2 -55.9 12.5 -13.5 33.8 -13.7 46 -0.4 3.4 3.7 8.2 12 8.2 14.2 0 0.2 -2.2 0.4 -4.9 0.4 -4.5 0 -5 -0.2 -6.1 -3 -1.8 -4.3 -8.2 -9.7 -13.2 -11.1 -14.2 -3.8 -28.5 6.4 -29.6 21.1 -0.5 6.8 0.8 11.3 4.9 17 5.8 8 18.4 11.3 27.4 7.1 4.3 -1.9 10.9 -8.5 12 -12 0.5 -1.7 1.4 -2.1 5.1 -2.1 5.2 0 5.3 0.5 2 7.5 -2.9 6.2 -9.6 12.7 -15.8 15.5 -5.9 2.6 -15 3.3 -20.8 1.7z" />
        <path d="M256.6 81.6 c-16.8 -7.1 -25.3 -26.5 -19.1 -43.6 2.9 -7.9 12 -17 20 -20 16.2 -5.9 34.9 1.9 42.4 17.9 3.6 7.6 3.7 20.1 0.3 27.5 -3.4 7.6 -8.4 12.9 -15.4 16.6 -5.3 2.9 -7.5 3.4 -14.3 3.7 -6.8 0.3 -8.9 0 -13.9 -2.1z m21.7 -8.9 c12.5 -5.3 18.2 -20.7 12.3 -33.2 -4.1 -8.9 -11.4 -13.5 -21.4 -13.5 -20.4 0 -31.3 22.9 -18.7 39.5 5.6 7.2 19.2 10.8 27.8 7.2z" />
        <path d="M708.9 82.6 c-10.2 -2.7 -17.1 -8.7 -21.8 -18.6 -2.2 -4.6 -2.6 -6.9 -2.6 -14 0 -10.2 2.8 -17.3 9.5 -24 15.1 -15.1 41.2 -11.4 50.4 7.2 3.6 7.1 3.4 7.8 -1.8 7.8 -4.1 0 -4.5 -0.2 -7.4 -4.9 -7.1 -11.4 -23 -13.3 -33.6 -4 -16.2 14.3 -6.2 41.9 15.2 41.9 7.4 0 14.8 -4.2 19.2 -10.7 3.2 -5.1 3.6 -5.3 7.8 -5.3 4 0 4.3 0.2 3.6 2.3 -3.4 11 -12 19.3 -23 22.2 -6.8 1.8 -9.3 1.8 -15.5 0.1z" />
        <path d="M119.6 80.5 c-2 -3 -4.2 0.7 19.1 -31.2 9 -12.2 16.3 -22.5 16.3 -22.8 0 -0.3 -7.6 -0.5 -17 -0.5 l-17 0 0 -4.5 0 -4.5 22.5 0 22.4 0 1.5 2.9 1.5 2.9 -18.4 25.4 c-10.2 13.9 -18.5 25.6 -18.5 26.1 0 0.4 8.1 0.7 18 0.7 l18 0 0 4 0 4 -23.4 0 -23.4 0 -1.6 -2.5z" />
        <path d="M309 50 l0 -33 15.3 0 c14.2 0 15.7 0.2 19.8 2.3 8.1 4.3 12.5 15.1 9.9 24.7 -1.4 5.3 -7.9 12.1 -12.9 13.6 l-3.3 0.9 8.9 10.5 c4.8 5.8 9.4 11.3 10.2 12.3 1.2 1.6 0.9 1.7 -4.7 1.7 l-6.1 0 -12.1 -14.4 c-8.6 -10.3 -12 -15.1 -12 -17 0 -2.6 0 -2.6 8.3 -2.6 8.7 0 11.2 -1.1 13.6 -5.7 2.4 -4.7 1 -11.1 -3.3 -14.5 -1.7 -1.4 -4.1 -1.8 -11.8 -1.8 l-9.8 0 0 28 0 28 -5 0 -5 0 0 -33z" />
        <path d="M360 50 l0 -33 20 0 20 0 0 5 0 5 -15 0 -15 0 0 9 0 8.9 14.8 0.3 14.7 0.3 0.3 4.8 0.3 4.7 -15 0 -15.1 0 0 9.5 0 9.5 15 0 15 0 0 4.5 0 4.5 -20 0 -20 0 0 -33z" />
        <path d="M438 50 l0 -33 19.5 0 19.5 0 0 5 0 5 -15 0 -15 0 0 9 0 9 13.5 0 13.5 0 0 5 0 5 -13.5 0 -13.5 0 0 14 0 14 -4.5 0 -4.5 0 0 -33z" />
        <path d="M479 78.5 l0 -4.5 6 0 6 0 0 -23.5 0 -23.5 -6 0 -6 0 0 -5 0 -5 17 0 17 0 0 5 0 5 -6 0 -6 0 0 23.5 0 23.5 6 0 6 0 0 4.5 0 4.5 -17 0 -17 0 0 -4.5z" />
        <path d="M518 50 l0 -33 3.8 0 3.7 0.1 15.5 22.6 15.5 22.6 0.3 -22.7 0.2 -22.6 5 0 5 0 0 33 0 33 -3.9 0 -3.9 0 -15.3 -22 c-8.3 -12.1 -15.6 -22.3 -16 -22.6 -0.5 -0.3 -0.9 9.6 -0.9 22 l0 22.6 -4.5 0 -4.5 0 0 -33z" />
        <path d="M569.3 79.8 c0.8 -1.8 6.7 -16.9 13.3 -33.5 l11.9 -30.3 3.6 0 3.6 0 12.8 32.2 c7 17.8 13 32.9 13.3 33.6 0.3 1 -0.8 1.2 -4.8 1 l-5.2 -0.3 -3.7 -9 -3.8 -9 -12 -0.3 -12.1 -0.3 -3.6 8.7 c-2 4.7 -3.6 9 -3.6 9.5 0 0.5 -2.5 0.9 -5.5 0.9 l-5.5 0 1.3 -3.2z m36.3 -27.5 c-3.4 -10.4 -7.5 -20.5 -8 -19.3 -0.3 0.8 -2.1 5.9 -4.1 11.3 l-3.5 9.7 8.1 0 c7.2 0 8 -0.2 7.5 -1.7z" />
        <path d="M629 50 l0 -33 3.9 0 3.8 0 15.9 23 15.9 22.9 0.3 -22.9 0.2 -23 5 0 5 0 0 33 0 33 -4.2 0 -4.3 0 -15.5 -22.6 -15.5 -22.5 -0.3 22.6 -0.2 22.5 -5 0 -5 0 0 -33z" />
        <path d="M752 50 l0 -33 20.5 0 20.5 0 0 5 0 5 -15.5 0 -15.5 0 0 9 0 9 15 0 15 0 0 5 0 5 -15 0 -15 0 0 9.5 0 9.5 15.5 0 15.5 0 0 4.5 0 4.5 -20.5 0 -20.5 0 0 -33z" />
      </g>
      <g fill="#6eb260">
        <path d="M51.1 84.8 c5.4 -6.7 29.7 -30.9 36.7 -36.7 5.5 -4.5 7.1 -4.2 2.5 0.6 -14.5 15 -19.7 21.1 -28.6 33 -6.1 8.2 -6.3 8.3 -10.5 8.3 l-4.4 0 4.3 -5.2z" />
        <path d="M34.3 86.4 l-3.2 -1.6 6.7 -6 c7.5 -6.8 25.8 -20.6 34.4 -26.1 8.8 -5.6 20 -11.8 20.5 -11.3 0.2 0.2 -2.7 2.5 -6.4 5.2 -11.7 8.2 -26.4 20.5 -37.4 31.1 -5.9 5.7 -10.8 10.3 -11 10.3 -0.2 0 -1.8 -0.8 -3.6 -1.6z" />
        <path d="M65 87.5 c0 -2.7 27.3 -39.4 27.8 -37.3 0.1 0.7 -2.6 5.6 -6 10.9 -3.5 5.3 -7.8 12.5 -9.7 16.1 -2.5 4.6 -4.6 7.1 -7.2 8.6 -3.9 2.3 -4.9 2.6 -4.9 1.7z" />
        <path d="M22.5 71.2 c-2.1 -3.7 -5.9 -9.7 -8.3 -13.4 -6.4 -9.8 -4.7 -10.1 2.9 -0.6 10.8 13.7 13.3 17.7 11.9 19.3 -0.7 0.8 -1.5 1.5 -1.9 1.5 -0.3 0 -2.4 -3.1 -4.6 -6.8z" />
        <path d="M28.2 65.2 c-3.3 -3.7 -8.7 -9.6 -12.1 -13.1 -3.4 -3.5 -6.1 -6.7 -6.1 -7.3 0 -1.3 8 5.4 19.2 16.1 7 6.6 8.6 8.6 7.7 9.7 -0.6 0.8 -1.5 1.4 -1.9 1.4 -0.4 0 -3.4 -3.1 -6.8 -6.8z" />
        <path d="M33.5 59.3 c-4.4 -3.6 -11.5 -9.1 -15.8 -12.1 -16.3 -11.4 -2.8 -4.9 17.5 8.5 10.6 7 11.8 8.1 9.7 9.4 -2.3 1.5 -3.1 1.1 -11.4 -5.8z" />
        <path d="M45.5 56.8 c-2.7 -1.7 -11.7 -6.5 -19.8 -10.6 -16.7 -8.4 -15.9 -7.1 -10.5 -17.4 8.7 -16.4 29.7 -25.5 47.3 -20.4 13.3 3.9 25.2 15.5 29 28.3 0.5 2 -0.8 2.9 -14.3 9.7 -8.3 4.1 -17.1 8.9 -19.8 10.6 -2.6 1.6 -5.3 3 -5.8 3 -0.6 0 -3.3 -1.5 -6.1 -3.2z m15.1 -3.9 c4.9 -2.8 13.4 -7.3 19.1 -10 l10.3 -5 -1.5 -3.7 c-4.1 -9.9 -11.8 -17.7 -22.2 -22.5 -3.9 -1.8 -6.7 -2.2 -14.8 -2.2 -8.8 0 -10.7 0.3 -15.7 2.7 -9.3 4.3 -18.2 13.8 -21.7 23 -1 2.6 -0.9 2.7 12.2 9.2 7.3 3.6 15.7 8.1 18.7 10 3 1.9 5.8 3.5 6.2 3.5 0.3 0.1 4.6 -2.2 9.4 -5z" />
      </g>
      <g fill="#ffcf4b">
        <path d="M48.3 48.8 c-2.5 -4.7 -2.8 -6.4 -2.8 -14.8 0 -8.2 0.4 -10.2 2.5 -14.4 1.4 -2.7 3 -4.9 3.5 -4.9 0.6 0 2.1 2.2 3.5 4.9 2.1 4.2 2.5 6.2 2.5 14.4 0 8.4 -0.3 10.1 -2.8 14.8 -1.5 2.8 -2.9 5.2 -3.2 5.2 -0.3 0 -1.7 -2.4 -3.2 -5.2z" />
        <path d="M34.6 42 c-2 -5 -2.1 -11 -0.2 -15.5 1.8 -4.1 2.9 -4.4 4.4 -1.1 2 4.5 2.5 9.6 1.2 14.1 -1.9 6.7 -3.4 7.4 -5.4 2.5z" />
        <path d="M64.5 43.6 c-2.3 -3.5 -2.6 -12.6 -0.6 -17.3 1.7 -4.2 2.8 -4.2 4.7 0.2 1.9 4.6 1.7 11.1 -0.4 16 l-1.8 4 -1.9 -2.9z" />
      </g>
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
