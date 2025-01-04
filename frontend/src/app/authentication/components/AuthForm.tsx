'use client';

import React from 'react';
import PinkButton from '../../shared/components/PinkButton';
import InputWithLabel from './InputWithLabel'
import { AuthService } from '../services/authService';
import { redirect } from "next/navigation";

export default function AuthForm() {
  const [accessCode, setAccessCode] = React.useState<string>('');
  const [err, setErr] = React.useState<string>('');

  function inputOnChange({target}: React.ChangeEvent<HTMLInputElement>) {
    setAccessCode(target.value)
  }

  async function handleFormSubmit() {
    const isAuthorized = await AuthService.login(accessCode)

    if (isAuthorized) {
      redirect('/calendar')
    }

    if (!isAuthorized) {
      setErr('Código de acesso incorreto. Tente novamente.')
    }
  }

  return (
    <div className="bg-white flex flex-col gap-10 h-auto w-full mx-4 p-4 rounded-xl">
      <h1 className='text-2xl text-center font-bold'>Entrar</h1>
      <div>
        <InputWithLabel inputOnChange={inputOnChange}/>
        {err && <p className='text-red-600'>{err}</p>}
      </div>
      <PinkButton text={'Entrar'} onClick={handleFormSubmit}/>
    </div>
  )
}