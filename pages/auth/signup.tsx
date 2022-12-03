import React, { useContext, useState } from 'react';
import { Button, Card, Container, FormElement, Input, Link, Row, Spacer, Text } from '@nextui-org/react';
import { AuthInputType } from '../../types/auth.types';
import AuthContext from '../../contexts/auth.context';
import { toast } from 'react-toastify';
import { RequestFailedResponseType } from '../../types/clientApi.types';
import { useRouter } from 'next/router';

const SignUp = () => {
  const [showStepTwo, setShowStepTwo] = React.useState(false);
  const [input, setInput] = useState<AuthInputType>({});
  const authContext = useContext(AuthContext);
  const router = useRouter();

  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const [confirmPasswordHasError, setConfirmPasswordHasError] = useState(false);
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<FormElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!showStepTwo) {
      setShowStepTwo(true);
    } else {
      setEmailIsInvalid(!emailRegex.test(input.email ?? ''));
      setConfirmPasswordHasError(input.password !== input.confirmPassword);

      if (confirmPasswordHasError || emailIsInvalid || !authContext) {
        return;
      }
      const rep = await authContext.Register(input);
      if ((rep as RequestFailedResponseType).error) {
        // TODO : error like signin
        // toast.error('Error - register'), {
        //   position: 'top-right',
        //   autoClose: 2500,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: false,
        //   draggable: true,
        //   progress: undefined,
        //   theme: 'dark',
        // };
        return;
      }
      // TODO : add a toast when success
      router.push('/auth/signin');
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
          <Button color='success' onPress={handleSubmit}>
            {showStepTwo ? 'Sign Up' : 'Next'}
          </Button>
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
