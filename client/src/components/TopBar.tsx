import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Colors, BoxShadow } from '../shared/Styles'
import { Button, Icon } from 'antd';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { useQuery } from 'react-apollo';
import { ME_QUERY } from '../views/Users/queries';

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
  const { data, loading } = useQuery(ME_QUERY, {
    variables: {
      token: localStorage.getItem('token')
    }
  })
  const [user, setUser] = useState()

  useEffect(() => {
    if (data && data.me && data.me.username)  {
      setUser(data.me.username)
    }
  }, [data])

  return (
    <MenuWrapper>
        <Link to="/"><h1>TakeNote</h1></Link>
        <ButtonGroup>
          {!user && 
            <>
              <Button>
                <Link to="/login">Login</Link>
              </Button>
              <Button>
                <Link to="/register">Register</Link>
              </Button>
            </>}
          {user && 
            <div style={{
              display: "flex",
              flexDirection: "row"
            }}>
              <UserWrapper><Icon type="user" /> {user}</UserWrapper>
              <Button onClick={() => {
                localStorage.removeItem('token')
                history.push('/')
                window.location.reload()
              }}>
                Logout
              </Button>
            </div>}
        </ButtonGroup>
    </MenuWrapper>
  )
}

export default withRouter(TopBar)
