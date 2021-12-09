import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';

import { Link } from 'react-router-dom';

const aTagStyle = { textDecoration: 'none', color: 'inherit' };

export const LayoutListItems = (
  <div>
    <ListSubheader inset>Layout</ListSubheader>
    <Link to="/box" style={aTagStyle}>
      <ListItem button>
        <ListItemText inset primary="Box" />
      </ListItem>
    </Link>
    <Link to="/container" style={aTagStyle}>
      <ListItem button>
        <ListItemText inset primary="Container" />
      </ListItem>
    </Link>
      <Link to="/grid" style={aTagStyle}>
        <ListItem button>
          <ListItemIcon>
            <ViewComfyIcon />
          </ListItemIcon>
            <ListItemText primary="Grid" />
        </ListItem>
      </Link>
  </div>
);

export const InputListItems = (
  <div>
    <ListSubheader inset>Inputs</ListSubheader>
    
    <Link to="/button" style={aTagStyle}>
      <ListItem button>
        <ListItemText inset primary="Button" />
      </ListItem>
    </Link>
    <ListItem button>
      <ListItemText inset primary="Button Group" />
    </ListItem>
    <ListItem button>
      <ListItemText inset primary="Checkbox" />
    </ListItem>
    <ListItem button>
      <ListItemText inset primary="Floating action button" />
    </ListItem>
    <ListItem button>
      <ListItemText inset primary="Date / Time pickers" />
    </ListItem>
    <ListItem button>
      <ListItemText inset primary="Radio" />
    </ListItem>
    <ListItem button>
      <ListItemText inset primary="Select" />
    </ListItem>
    <ListItem button>
      <ListItemText inset primary="Slider" />
    </ListItem>
    <ListItem button>
      <ListItemText inset primary="Switch" />
    </ListItem>
    <ListItem button>
      <ListItemText inset primary="Text Field" />
    </ListItem>
    <ListItem button>
      <ListItemText inset primary="Transfer List" />
    </ListItem>
  </div>
);