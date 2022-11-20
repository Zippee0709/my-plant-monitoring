import React, { useState } from 'react';
import { Button, Card, Checkbox, Container, FormElement, Input, Link, Row, Spacer, Text } from '@nextui-org/react';
import { AuthInputType } from '../../types/auth.types';

const SignIn = () => {
  const [input, setInput] = useState<Pick<AuthInputType, 'email' | 'password'>>();

  const handleInputChange = (e: React.ChangeEvent<FormElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log('submit');
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
          <Button onPress={handleSubmit}>Sign In</Button>
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
