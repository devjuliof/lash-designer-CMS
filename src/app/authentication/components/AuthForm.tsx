'use client';

import React from 'react';
import PinkButton from '../../shared/components/PinkButton';
import InputWithLabel from './InputWithLabel'
import auth from '../services/auth';

export default function AuthForm() {
  const [accessCode, setAccessCode] = React.useState<string>('')

  console.log(accessCode)
  function inputOnChange({target}: React.ChangeEvent<HTMLInputElement>) {
    setAccessCode(target.value)
  }

  return (
    <div className="bg-white flex flex-col gap-10 h-auto w-full mx-4 p-4 rounded-xl">
      <h1 className='text-2xl text-center font-bold'>Entrar</h1>
      <InputWithLabel inputOnChange={inputOnChange}/>
      <PinkButton text={'Entrar'} onClick={() => auth(accessCode)}/>
    </div>
  )
}