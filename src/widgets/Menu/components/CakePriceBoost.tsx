import React from "react";
import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { PancakeRoundBoost } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  cakePriceUsd?: number;
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

const CakePriceBoost: React.FC<Props> = ({ cakePriceUsd }) => {
  // const newcakePriceUsd = 0;

  const api = "https://finance.zcore.network/lp";
  const [newcakePriceUsd, setData] = useState("0.000");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api);
        const response_json = await response.json();
        setData(response_json.lp_price);
      } catch (error) {
        console.error("Unable to fetch price data:", error);
      }
    };

    fetchData();
  }, [setData]);

  return cakePriceUsd ? (
    <PriceLink href="https://zefi.zcore.network/ifo">
      <PancakeRoundBoost width="24px" mr="8px" />
      <Text color="textSubtle" bold>{`$${newcakePriceUsd}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(CakePriceBoost);
