import Input from "../../shared/components/Input";

type InputWithLabelProps = {
  inputOnChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function InputWithLabel({inputOnChange}: InputWithLabelProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-gray-500 font-bold" htmlFor="">Digite o código de acessso</label>
      <Input onChange={inputOnChange}/>
    </div>
  )
}