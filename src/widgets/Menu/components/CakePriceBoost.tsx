import React from "react";
import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { PancakeRoundBoost } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  newcakePriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const CakePriceBoost: React.FC<Props> = ({ newcakePriceUsd }) => {
  return newcakePriceUsd ? (
    <PriceLink href="https://bscscan.com/token/0x7D3550d0B0aC3590834cA6103907CD6Dd41318f8" target="_blank">
      <PancakeRoundBoost width="24px" mr="8px" />
      <Text color="textSubtle" bold>{`$${newcakePriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(CakePriceBoost);
