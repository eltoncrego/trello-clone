import React from 'react';
import NormalizeStyles from './NormalizeStyles';
import BaseStyles from './BaseStyles';
import './FontStyles.css';

import { featureFlags } from '../Shared/Constants/FeatureFlags';
import Playground from '../Shared/Components/Playground/Playground';
import Routes from './Routes';

const App = () => (
  <>
    <NormalizeStyles/>
    <BaseStyles/>
    {featureFlags.playground ? <Playground/> : <Routes/>}
  </>
);

export default App;