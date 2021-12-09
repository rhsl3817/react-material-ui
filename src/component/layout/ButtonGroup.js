import React from 'react';
import { Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const ButtopGroupComponent = () => {
  const classes = useStyles()
  return (
    <div>
      <h1>Button Group</h1>
      <p>버튼 그룹은 구성 요소는 관련 버튼을 그룹화하는 데 사용할 수 있습니다.</p>
      <Divider />
      <h1>사용 예</h1>
      <h2>기본 버튼 그룹</h2>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <h2 style={{marginTop: "50px"}}>수직 버튼</h2>
        <div className={classes.root}>
        <ButtonGroup
          orientation="vertical"
          color="primary"
          aria-label="vertical outlined primary button group"
        >
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <ButtonGroup
          orientation="vertical"
          color="primary"
          aria-label="vertical contained primary button group"
          variant="contained"
        >
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <ButtonGroup
          orientation="vertical"
          color="primary"
          aria-label="vertical contained primary button group"
          variant="text"
        >
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </div>
      <Divider />
      <h1>API</h1>
      {`import ButtonGroup from '@material-ui/core/ButtonGroup''`}
    </div>
  );
};

export default ButtopGroupComponent;