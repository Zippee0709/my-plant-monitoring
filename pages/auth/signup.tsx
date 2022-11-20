import React, { useState } from 'react';
import { Button, Card, Container, FormElement, Input, Link, Row, Spacer, Text } from '@nextui-org/react';
import { AuthInputType } from '../../types/auth.types';

const SignUp = () => {
  const [showStepTwo, setShowStepTwo] = React.useState(false);
  const [input, setInput] = useState<AuthInputType>({});

  const handleInputChange = (e: React.ChangeEvent<FormElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!showStepTwo) {
      setShowStepTwo(true);
    } else {
      //TODO(): submit form
    }
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
            Sign up
          </Text>
          {showStepTwo ? (
            <>
              <Row justify='space-between'>
                <Input
                  bordered
                  fullWidth
                  aria-label='First Name'
                  color='primary'
                  size='lg'
                  placeholder='First Name'
                  name='firstname'
                  onChange={handleInputChange}
                />
                <Spacer x={1} />
                <Input
                  bordered
                  fullWidth
                  aria-label='Last Name'
                  color='primary'
                  size='lg'
                  placeholder='Last Name'
                  name='lastname'
                  onChange={handleInputChange}
                />
              </Row>
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
              <Input.Password
                bordered
                fullWidth
                aria-label='Confirm Password'
                color='primary'
                size='lg'
                placeholder='Confirm password'
                name='confirmPassword'
                onChange={handleInputChange}
              />
            </>
          ) : (
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
          )}
          <Spacer y={1} />
          <Button onPress={handleSubmit}>{showStepTwo ? 'Sign Up' : 'Next'}</Button>
          <Spacer y={1} />
          <Row justify='center'>
            <Text size={14}>Already have an account ?</Text>
            <Spacer x={0.3} />
            <Text size={14}>
              <Link href='/auth/signin' underline>
                Sign In
              </Link>
            </Text>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SignUp;
