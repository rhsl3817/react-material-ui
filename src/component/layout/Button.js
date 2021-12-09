import React from 'react';
import { Button } from '@material-ui/core';

const BoxComponent = () => {
  return (
    <div>
      <h1>Button</h1>
      <p>Button 은 높이 및 채우기 사용으로 구분되는 강조 표시입니다. 여기에는 앱의 기본 작업이 포함됩니다.</p>
      <Divider />
      <h1>사용 예</h1>
      <Box component="span" m={1}>
        {`<Box component="span" m={1}></Box>`}
      </Box>
      <Divider />
      <h1>API</h1>
      {`import Box from '@material-ui/core/Box'`}
    </div>
  );
};

export default BoxComponent;