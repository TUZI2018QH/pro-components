import type { SpinProps } from 'antd-v4';
import { Spin } from 'antd-v4';
import React from 'react';

const PageLoading: React.FC<SpinProps & any> = ({
  isLoading,
  pastDelay,
  timedOut,
  error,
  retry,
  ...reset
}) => (
  <div style={{ paddingTop: 100, textAlign: 'center' }}>
    <Spin size="large" {...reset} />
  </div>
);

export default PageLoading;
