'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { ToastContainer, toast } from 'react-toastify';

import components from '@/components/components';
import style from '@/styles/auth/auth.module.scss';

const { TextInputField, Button } = components.Forms;
const { HorizontalLine } = components.Layouts;

function AuthForm() {
  const [formType, setFormType] = useState<'signIn' | 'signUp'>('signIn'); // ['signIn', 'signUp']

  const emailRef = useRef<HTMLInputElement>(null);
  const confirmEmailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const signInWithEmailAndPassword = async () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (!email || !password) {
      toast.warn(`Please enter valid email and password.`, {
        autoClose: 2000,
        theme: 'dark',
      });

      return;
    }

    signIn('credentials', {
      email,
      password,
      formType: formType,
      redirect: true,
      callbackUrl: '/',
    });
  };

  const signUpWithEmailAndPassword = async () => {
    const email = emailRef.current?.value;
    const confirmEmail = confirmEmailRef.current?.value;
    const password = passwordRef.current?.value;

    if (email !== confirmEmail) {
      toast.warn(`Email and confirm email must be same.`, {
        autoClose: 2000,
        theme: 'dark',
      });

      return;
    }

    if (!email || !password) {
      toast.warn(`Please enter valid email and password.`, {
        autoClose: 2000,
        theme: 'dark',
      });

      return;
    }

    signIn('credentials', {
      email,
      password,
      formType: formType,
      redirect: true,
      callbackUrl: '/',
    });
  };

  const renderText = () => {
    if (formType === 'signIn') {
      return (
        <span className={style.havingAccount}>
          Don't have an account?{' '}
          <p
            className={style.signUp}
            onClick={() => {
              setFormType('signUp');
            }}
          >
            Sign Up
          </p>
        </span>
      );
    }

    return (
      <span className={style.havingAccount}>
        Already have an account?{' '}
        <p
          className={style.signUp}
          onClick={() => {
            setFormType('signIn');
          }}
        >
          Sign In
        </p>
      </span>
    );
  };

  return (
    <form className={style.box}>
      <TextInputField
        ref={emailRef}
        label="Email"
        name="email"
        placeholder="Enter your email"
      />
      <br />
      {formType === 'signUp' && (
        <TextInputField
          ref={emailRef}
          label="Confirm Email"
          name="email"
          placeholder="Enter your email again"
        />
      )}
      <br />
      <TextInputField
        ref={passwordRef}
        label="Password"
        name="password"
        type="password"
        placeholder="Enter your password"
      />
      {formType === 'signIn' && (
        <>
          <br />
          <Link href="/auth/forgot-password" className={style.forgot}>
            Forgot Password?
          </Link>
          <br />
        </>
      )}
      <br />
      <Button
        label={formType === 'signIn' ? 'Sign In' : 'Sign Up'}
        onClick={
          formType === 'signIn'
            ? signInWithEmailAndPassword
            : signUpWithEmailAndPassword
        }
      />
      <br />
      <HorizontalLine text="OR" />
      <Button
        icon="Google"
        label="Continue with Google"
        onClick={(e) => signIn('google')}
      />
      {renderText()}
      <ToastContainer />
    </form>
  );
}

export default AuthForm;
