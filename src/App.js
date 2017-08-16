import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeComponent from './MyAwesomeComponent.js';
import AppBar from 'material-ui/AppBar';
import MoreVert from 'material-ui/svg-icons/navigation/more-vert';
import { white } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const iconStyles = {
  margin: 8,
};

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar title="Title"
            onLeftIconButtonTouchTap={this.handleToggle}
            iconElementRight={
              <IconButton tooltip="More">
                <MoreVert style={iconStyles} color={white} />
              </IconButton>
            } />
          <Drawer
            docked={false}
            width={200}
            open={this.state.open}
            onRequestChange={(open) => this.setState({ open })}>
            <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
            <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
          </Drawer>
          <Content />

        </div>
      </MuiThemeProvider>
    );
  }
}

const Content = () => {
  var style = {
    margin: "8px"
  }
  return (
    <div style={style}>
      <MyAwesomeComponent />
    </div>
  )
}

export default App;
