'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { ToastContainer, toast } from 'react-toastify';

import components from '@/components/components';
import style from '@/styles/auth/auth.module.scss';

const { TextInputField, Button } = components.Forms;

function AuthForm() {
  const emailRef = useRef<HTMLInputElement>(null);
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

    console.log(`Signed in successfully with ${email} and ${password}`);
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
      <br />
      <TextInputField
        ref={passwordRef}
        label="Password"
        name="password"
        type="password"
        placeholder="Enter your password"
      />
      <br />
      <Link href="/auth/forgot-password" className={style.forgot}>
        Forgot Password?
      </Link>
      <br />
      <br />
      <Button label="Sign In" onClick={signInWithEmailAndPassword} />
      <br />
      <br />
      <br />
      <Button
        icon="Google"
        label="Continue with Google"
        onClick={(e) => signIn('google')}
      />
      <ToastContainer />
    </form>
  );
}

export default AuthForm;
