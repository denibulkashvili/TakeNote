import React from 'react'
import styled from 'styled-components'
import { Colors, BoxShadow } from '../shared/Styles'
import { Button, Icon } from 'antd';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { Consumer } from '../App';

const MenuWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100px;
  background: ${Colors.themeDark};
  color: ${Colors.textWhite};
  margin: 0;
  padding: 20px 40px;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${BoxShadow};

`
const UserWrapper = styled('div')`
  margin-right: 20px;
`

const ButtonGroup = Button.Group

type Props = RouteComponentProps

const TopBar: React.FC<Props> = ({ history }) => {
  

  return (
      <MenuWrapper>
          <Link to="/"><h1>TakeNote</h1></Link>
          <ButtonGroup>
            <Consumer>
              {value => value && !value.isAuthenticated && 
                <>
                  <Button>
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button>
                    <Link to="/register">Register</Link>
                  </Button>
                </>}
            </Consumer>
            <Consumer>
              {value => value && value.isAuthenticated && 
                <div style={{
                  display: "flex",
                  flexDirection: "row"
                }}>
                  <UserWrapper><Icon type="user" /> {value.username}</UserWrapper>
                  <Button onClick={() => {
                    localStorage.removeItem('token')
                    history.push('/')
                    window.location.reload()
                  }}>
                    Logout
                  </Button>
                </div>}
            </Consumer>
          </ButtonGroup>
      </MenuWrapper>
  )
}

export default withRouter(TopBar)
