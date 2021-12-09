import React from 'react';
import { Divider } from '@material-ui/core';
import { withStyles  } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);


const CheckboxComponent = () => {
  const [checked, setChecked] = React.useState(true);
  
  const handleChange = (event) => {
      setChecked(event.target.checked);
  };

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange2 = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <h1>CheckBox</h1>
      <p>체크박스를 사용하면 사용자가 집합에서 하나 이상의 항목을 선택할 수 있습니다.</p>
      <Divider />
      <h1>사용 예</h1>
      <h2>기본 체크박스</h2>
      <div>
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        <Checkbox
          defaultChecked
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
        <Checkbox disabled inputProps={{ 'aria-label': 'disabled checkbox' }} />
        <Checkbox disabled checked inputProps={{ 'aria-label': 'disabled checked checkbox' }} />
        <Checkbox
          defaultChecked
          indeterminate
          inputProps={{ 'aria-label': 'indeterminate checkbox' }}
        />
        <Checkbox
          defaultChecked
          color="default"
          inputProps={{ 'aria-label': 'checkbox with default color' }}
        />
        <Checkbox
          defaultChecked
          size="small"
          inputProps={{ 'aria-label': 'checkbox with small size' }}
        />
      </div>
      
      <h2 style={{marginTop: "50px"}}>FormControlLabel 체크박스</h2>
        <FormGroup row>
        <FormControlLabel
          control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
          label="Secondary"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedB}
              onChange={handleChange}
              name="checkedB"
              color="primary"
            />
          }
          label="Primary"
        />
        <FormControlLabel control={<Checkbox name="checkedC" />} label="Uncontrolled" />
        <FormControlLabel disabled control={<Checkbox name="checkedD" />} label="Disabled" />
        <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="Disabled" />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedF}
              onChange={handleChange2}
              name="checkedF"
              indeterminate
            />
          }
          label="Indeterminate"
        />
        <FormControlLabel
          control={<GreenCheckbox checked={state.checkedG} onChange={handleChange2} name="checkedG" />}
          label="Custom color"
        />
        <FormControlLabel
          control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
          label="Custom icon"
        />
        <FormControlLabel
          control={
            <Checkbox
              icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
              checkedIcon={<CheckBoxIcon fontSize="small" />}
              name="checkedI"
            />
          }
          label="Custom size"
        />
      </FormGroup>
      <Divider />
      <h1>API</h1>
      {`import Checkbox from '@material-ui/core/Checkbox'`}
    </div>
  );
};

export default CheckboxComponent;