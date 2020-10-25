import React from "react";
import { TouchableOpacity, Dimensions } from "react-native";
import styled from "styled-components/native";

import {
  COLORS_WITH_VARIANTS_KEYS,
  MAP_PALETTE_VARIANTS,
} from "../theme/palette";
import { Task } from "../types";
import Text from "./Text";

const Wrapper = styled.View<{
  color?: COLORS_WITH_VARIANTS_KEYS;
}>`
  border-radius: 20px;
  padding: 12px 16px;
  background-color: ${({ color, theme }) =>
    color ? MAP_PALETTE_VARIANTS[color] : theme.palette.grey.light};
`;

const CategoryTitle = styled(Text).attrs({
  status: "white-light",
})`
  margin-top: 10px;
  font-family: "poppins_medium";
  font-size: 14px;
`;

type Props = {
  task: Task;
  onSelect?: (task: Task) => void;
};

const TaskItem = ({ task, onSelect }: Props) => {
  const { title, category } = task;

  return (
    <TouchableOpacity onPress={() => onSelect && onSelect(task)}>
      <Wrapper color={category?.color}>
        <Text variant="h5" status="white-light" numberOfLines={1}>
          {title}
        </Text>
        {category?.title && <CategoryTitle>{category.title}</CategoryTitle>}
      </Wrapper>
    </TouchableOpacity>
  );
};

export default TaskItem;
