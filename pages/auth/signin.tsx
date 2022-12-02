import React, { useContext, useState } from 'react';
import { Button, Card, Checkbox, Container, FormElement, Input, Link, Row, Spacer, Text } from '@nextui-org/react';
import { AuthInputType, AuthLoginRepType } from '../../types/auth.types';
import AuthContext from '../../contexts/auth.context';
import { RequestFailedResponseType } from '../../types/clientApi.types';
import { toast } from 'react-toastify';
import Cookies from 'universal-cookie';
import { useRouter } from 'next/router';

const SignIn = () => {
  const cookies = new Cookies();
  const [input, setInput] = useState<Pick<AuthInputType, 'email' | 'password'>>();
  const authContext = useContext(AuthContext);
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<FormElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!input || !authContext) return;
    const rep = await authContext.Login(input);
    if ((rep as RequestFailedResponseType).error) {
      // TODO : repair this -> need to add <ToastContainer /> in _app.tsx,
      // TODO : but it's broken when the toast appear
      // toast.error('Error - login', {
      //   position: 'top-right',
      //   autoClose: 2500,
      // });
      return;
    }
    cookies.set('token', (rep as AuthLoginRepType).message);
    router.push('/dashboard');
  };

  return (
    <Container display='flex' alignItems='center' justify='center' css={{ minHeight: '100vh' }}>
      <Card css={{ mw: '420px', p: '20px' }}>
        <Card.Body>
          <Text
            size={24}
            weight='bold'
            css={{
              as: 'center',
              mb: '20px',
            }}
          >
            Sign in
          </Text>
          <Input
            bordered
            fullWidth
            aria-label='Email'
            color='primary'
            size='lg'
            placeholder='Email'
            name='email'
            onChange={handleInputChange}
          />
          <Spacer y={1} />
          <Input.Password
            bordered
            fullWidth
            aria-label='Password'
            color='primary'
            size='lg'
            placeholder='Password'
            name='password'
            onChange={handleInputChange}
          />
          <Spacer y={1} />
          <Row justify='space-between'>
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Text size={14}>
              <Link underline>Forgot password?</Link>
            </Text>
          </Row>
          <Spacer y={1} />
          <Button color='success' onPress={handleSubmit}>
            Sign In
          </Button>
          <Spacer y={1} />
          <Row justify='center'>
            <Text size={14}>Don&apos;t have an account yet ?</Text>
            <Spacer x={0.3} />
            <Text size={14}>
              <Link href='/auth/signup' underline>
                Sign up
              </Link>
            </Text>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SignIn;
