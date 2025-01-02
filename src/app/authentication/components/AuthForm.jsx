import PinkButton from '../../shared/components/PinkButton';
import InputWithLabel from './InputWithLabel'

export default function AuthForm() {
  return (
    <div className="bg-white flex flex-col gap-10 h-auto w-full mx-4 p-4 rounded-xl">
      <h1 className='text-2xl text-center font-bold'>Entrar</h1>
      <InputWithLabel />
      <PinkButton text={'Entrar'}/>
    </div>
  )
}