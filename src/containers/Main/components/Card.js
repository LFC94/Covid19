import React, { memo } from "react";

import PropTypes from "prop-types";
import { Card as CardMain } from "../../../components";

import { LabelStyled, ValueStyled, CardContentStyled } from "./style";

function Card({ value, label, color }) {
  return (
    <CardMain>
      <CardContentStyled color={color}>
        <ValueStyled>{value}</ValueStyled>
        <LabelStyled>{label}</LabelStyled>
      </CardContentStyled>
    </CardMain>
  );
}

export default memo(Card);
