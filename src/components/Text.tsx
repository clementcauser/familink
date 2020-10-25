import React, { FC } from "react";
import { Text as RNText } from "react-native";
import styled from "styled-components";
import { TypographyKeys } from "../theme/typography";
import {
  MAP_PALETTE_VARIANTS,
  COLORS_WITH_VARIANTS_KEYS,
} from "../theme/palette";

type Props = {
  variant?: TypographyKeys;
  status?: COLORS_WITH_VARIANTS_KEYS;
};

const Text = styled(RNText)<Props>`
  font-family: ${({ theme, variant }) =>
    theme.typography[variant || "paragraph"].fontFamily};
  font-size: ${({ theme, variant }) =>
    theme.typography[variant || "paragraph"].fontSize};
  color: ${({ theme, status }) =>
    status ? MAP_PALETTE_VARIANTS[status] : theme.palette.black.dark};
`;

export default Text;
