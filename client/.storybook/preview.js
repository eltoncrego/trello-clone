import { addDecorator } from '@storybook/react';
import React from 'react';
import NormalizeStyles from "../src/App/NormalizeStyles";
import BaseStyles from "../src/App/BaseStyles";
import './../src/App/FontStyles.css';

const StorybookStyles = (storyFunction) => (
  <>
    <NormalizeStyles/>
    <BaseStyles/>
    {storyFunction()}
  </>
);

addDecorator(StorybookStyles);