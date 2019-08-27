import React, { useState } from 'react'
import { useMutation } from 'react-apollo';
import { TOKEN_AUTH_MUTATION } from '../views/Users/queries';
import styled from 'styled-components';
import { Form, Input, Button } from 'antd';
import { Colors } from '../shared/Styles';
import { withRouter, RouteComponentProps } from 'react-router-dom';

const Wrapper = styled('div')`
  width: 30%;
  margin: 50px auto;
  padding: 30px 30px;
  font-size: 18px;
  border: 1px solid ${Colors.themeLight};
  border-radius: 4px;
`
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};


const intialValues = {
  username: '',
  password: ''
}

type Props = {} & RouteComponentProps

const Login: React.FC<Props> = ({ history }) => {
  const [ getToken, ignoreResults ] = useMutation(TOKEN_AUTH_MUTATION)
  const [values, setValues] = useState(intialValues)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const token = await getToken({ variables: {
      username: values.username,
      password: values.password
    }})
    localStorage.setItem('token', token.data.tokenAuth.token)
    console.log({token})
    history.push('/')
    window.location.reload()
  }

  return (
    <Wrapper>
      <Form {...formItemLayout} onSubmit={(e)=>handleSubmit(e)} style={{ textAlign: "center"  }}>
        <Form.Item label="Username">
          <Input 
            placeholder="Username"
            value={values.username}
            onChange={(e) => setValues({ ...values, username: e.target.value})}
          />
        </Form.Item>
        <Form.Item label="Password">
          <Input 
            placeholder="Password"
            value={values.password}
            onChange={(e) => setValues({ ...values, password: e.target.value})}
          />
        </Form.Item>
        <Button key="submit" htmlType="submit" style={{ margin: "auto"}}>
          Login
        </Button>
      </Form>
    </Wrapper>
  )
}

export default withRouter(Login)
