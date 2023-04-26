import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button(props: ButtonProps) {
  const { ...rest } = props
  return <button className="bg-orange-600 rounded-md px-4 py-2" {...rest} />
}
