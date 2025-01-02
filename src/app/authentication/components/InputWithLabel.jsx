import Input from "../../shared/components/Input";

export default function InputWithLabel() {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-gray-500 font-bold" htmlFor="">Digite o código de acessso</label>
      <Input />
    </div>
  )
}