export const buttonStyle = 'lg:transition duration-1000 lg:hover:ouline-none lg:hover:brightness-90'

const Button = ({
  children,
  onClick,
  className = 'w-full py-4 lg:py-5 lg:px-8 font-bold rounded-lg overflow-hidden flex justify-center bg-neutral-400 text-black items-center',
  disableButtonStyle = ' border-none cursor-auto',
  disabled = false,
}: {
  children?: React.ReactNode
  onClick: () => void
  className?: string
  disableButtonStyle?: string
  disabled?: boolean
}) => {
  return (
    <button
      onClick={onClick}
      className={`${className} ${!disabled ? buttonStyle : disableButtonStyle}`}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
