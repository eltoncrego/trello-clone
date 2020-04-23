import React from 'react';
import { StyledPlayground } from './PlaygroundStyles';

export const Playground = ({ componentToRender }) => (
  <StyledPlayground>
    {componentToRender()}
  </StyledPlayground>
);