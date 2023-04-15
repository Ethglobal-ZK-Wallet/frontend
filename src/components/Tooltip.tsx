import { Transition } from '@headlessui/react'
import { Fragment, useContext, useState } from 'react'

const Tooltip = ({
  content,
  className = 'inline-flex pl-1',
  tooltipClassName = 'bottom-auto translate-y-full bg-white rounded border border-navy-blue-500 text-sm',
  children,
}: {
  content: string | React.ReactNode
  className?: string
  tooltipClassName?: string
  learnMore?: boolean
  children?: React.ReactNode
}) => {
  const [visible, setVisible] = useState(false)
  return (
    <div
      className={`group flex items-center ${className} text-xs`}
      onMouseEnter={() => {
        setVisible(true)
      }}
      onMouseLeave={() => {
        setVisible(false)
      }}
    >
      <Transition
        show={true}
        as={Fragment}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className={`absolute ${tooltipClassName} z-50 flex flex-col items-center`}>
          <span
            className={`p-4 text-sm shadow-lg leading-6 rounded-lg min-w-fit text-black`}
          >
            {content}

          </span>
        </div>
      </Transition>
      {children}
    </div>
  )
}

export default Tooltip
