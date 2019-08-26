import React, { useState } from 'react'
import { useMutation } from 'react-apollo';
import { CREATE_USER_MUTATION } from '../views/Users/queries';
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
  password: '',
  confirmPassword: ''
}

type Props = {} & RouteComponentProps

const Register: React.FC<Props> = ({ history }) => {
  const [values, setValues] = useState(intialValues)
  const [ createUser, ignoreResults ] = useMutation(CREATE_USER_MUTATION)
  
  const handleCreateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await createUser({ variables: {
      username: values.username,
      password: values.password,
    }})
    if (!res.errors) {
      history.push('/login')
    }
  }
  return (
    <Wrapper>
      <Form {...formItemLayout} onSubmit={(e)=>handleCreateUser(e)} style={{ textAlign: "center"  }}>
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
        <Form.Item label="Confirm Password">
          <Input 
            placeholder="Confirm Password"
            value={values.confirmPassword}
            onChange={(e) => setValues({ ...values, confirmPassword: e.target.value})}
          />
        </Form.Item>
        <Button key="submit" htmlType="submit" style={{ margin: "auto"}}>
          Register
        </Button>
      </Form>
    </Wrapper>
  )
}

export default withRouter(Register)
