import React, {Component} from 'react'
import {IndexLink, Link, browserHistory} from 'react-router'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import AppBar from 'material-ui/AppBar'
import FontIcon from 'material-ui/FontIcon'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {open: false}
  }

  handleToggle = () => this.setState({open: !this.state.open})

  render() {
    return (
      <div>
        <AppBar
          title='Regrinder'
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <Drawer open={this.state.open}>
          <FontIcon className='muidocs-icon-action-home' onClick={this.handleToggle} >back</FontIcon>
          <IndexLink to='/'>
            <MenuItem>Home</MenuItem>
          </IndexLink>
          <Link to='/counter'>
            <MenuItem>Counter</MenuItem>
          </Link>
        </Drawer>
      </div>
    )
  }
}

export default Header
