import React from 'react';
import { Button, Divider } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

const ButtonComponent = () => {
  return (
    <div>
      <h1>Button</h1>
      <p>Button 버튼을 사용하면 탭 한 번으로 작업을 수행하고 선택할 수 있습니다.</p>
      <Divider />
      <h1>사용 예</h1>
      <h2>Contained Buttons</h2>
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>

      <h2 style={{marginTop: '50px'}}>Text Buttons</h2>
      <Button>Default</Button>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text-buttons" color="primary">
        Link
      </Button>

      <h2 style={{marginTop: '50px'}}>Outlined Buttons</h2>
      <Button variant="outlined">Default</Button>
      <Button variant="outlined" color="primary">
        Primary
      </Button>
      <Button variant="outlined" color="secondary">
        Secondary
      </Button>
      <Button variant="outlined" disabled>
        Disabled
      </Button>
      <Button variant="outlined" color="primary" href="#outlined-buttons">
        Link
      </Button>
      
      <h2 style={{marginTop: '50px'}}>Handling clicks</h2>
        <Button onClick={() => { alert('clicked') }}>Click me</Button>

      <h2 style={{marginTop: '50px'}}>Size</h2>
        <Button variant="contained" size="small" color="primary" style={{margin: 'theme.spacing(1)'}}>
          Small
        </Button>
        <Button variant="contained" size="medium" color="primary" style={{margin: 'theme.spacing(1)'}}>
          Medium
        </Button>
        <Button variant="contained" size="large" color="primary" style={{margin: 'theme.spacing(1)'}}>
          Large
        </Button>

      <h2 style={{marginTop: '50px'}}>Buttons with icons and label</h2>
        <Button
          variant="contained"
          color="secondary"
          style={{margin: 'theme.spacing(1)'}}
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
        {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
        <Button
          variant="contained"
          color="primary"
          style={{margin: 'theme.spacing(1)'}}
          endIcon={<Icon>send</Icon>}
        >
          Send
        </Button>
        <Button
          variant="contained"
          color="default"
          startIcon={<CloudUploadIcon />}
          style={{margin: 'theme.spacing(1)'}}
        >
          Upload
        </Button>
        <Button
          variant="contained"
          disabled
          color="secondary"
          style={{margin: 'theme.spacing(1)'}}
          startIcon={<KeyboardVoiceIcon />}
        >
          Talk
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{margin: 'theme.spacing(1)'}}
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="large"
          style={{margin: 'theme.spacing(1)'}}
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
      <p style={{marginBottom: '50px'}}></p>
      <Divider />
      <h1>API</h1>
      {`import Box from '@material-ui/core/Button'`}
    </div>
  );
};

export default ButtonComponent;