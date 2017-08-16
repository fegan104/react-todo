import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import MoreVert from 'material-ui/svg-icons/navigation/more-vert'
import { white } from 'material-ui/styles/colors'
import IconButton from 'material-ui/IconButton'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Home from './Home/Home.js'
import Canada from './Canada/Canada.js'
import UnitedStates from './UnitedStates/UnitedStates.js'
import { Switch, Route, Link } from 'react-router-dom'

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

            <MenuItem onClick={this.handleClose}>
              <Link to="/">Home</Link>
            </MenuItem>

            <MenuItem onClick={this.handleClose}>
              <Link style={{width: "100%"}} to="/canada">Canada</Link>
            </MenuItem>

            <MenuItem onClick={this.handleClose}>
              <Link to="/united-states">United States</Link>
            </MenuItem>
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
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/canada' component={Canada} />
        <Route path='/united-states' component={UnitedStates} />
      </Switch>
    </div>
  )
}

export default App;
