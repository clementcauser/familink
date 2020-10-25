import React, { useContext, useEffect } from "react";
import styled from "styled-components/native";
import {
  COLORS_WITH_VARIANTS_KEYS,
  MAP_PALETTE_VARIANTS,
} from "../theme/palette";
import { SafeAreaColorContext } from "../contexts/SafeAreaProvider";
import { Task } from "../types";
import Text from "./Text";

const SwipeHandler = styled.View`
  width: 33%;
  margin: auto;
  background-color: ${({ theme }) => theme.palette.grey.dark};
  height: 7px;
  margin-bottom: 10px;
  border-radius: 10px;
`;

const Wrapper = styled.View<{
  color?: COLORS_WITH_VARIANTS_KEYS;
}>`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 20px;
  background-color: ${({ color, theme }) =>
    color ? MAP_PALETTE_VARIANTS[color] : theme.palette.grey.light};
  min-height: 300px;
  max-height: 95%;
`;

const Title = styled(Text)`
  margin-bottom: 20px;
`;

type Props = {
  task: Task;
};

const DetailledTaskItem = ({ task }: Props) => {
  const { title, category, description } = task;
  const { setSafeAreaColor, safeAreaColor } = useContext(SafeAreaColorContext);

  useEffect(() => {
    setSafeAreaColor({
      ...safeAreaColor,
      bottom: category?.color || "grey-light",
    });
  }, []);

  return (
    <>
      <SwipeHandler />
      <Wrapper color={category?.color}>
        <Title variant="h3" status="white-light">
          {title}
        </Title>
        <Text status="white-light">{description}</Text>
      </Wrapper>
    </>
  );
};

export default DetailledTaskItem;
