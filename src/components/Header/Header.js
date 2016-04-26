import React, {Component} from 'react'
import {IndexLink, Link, browserHistory} from 'react-router'
import AppBar from 'material-ui/lib/app-bar'
import LeftNav from 'material-ui/lib/left-nav'
import MenuItem from 'material-ui/lib/menus/menu-item'
import FontIcon from 'material-ui/lib/font-icon'

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
        <LeftNav open={this.state.open}>
          <FontIcon className='muidocs-icon-action-home' onClick={this.handleToggle} >back</FontIcon>
          <IndexLink to='/'>
            <MenuItem>Home</MenuItem>
          </IndexLink>
          <Link to='/counter'>
            <MenuItem>Counter</MenuItem>
          </Link>
        </LeftNav>
      </div>
    )
  }
}

export default Header
