import { useState } from 'react'
import downIcon from '../assets/images/icon-arrow-down.svg'

type AccordionProps = {
  data: Array<{ id: number; question: string; answer: string }>
}

const Accordion = ({ data }: AccordionProps) => {
  const [selected, setSelected] = useState<null | number>(null)

  const toggleSelected = (id: number) => {
    if (selected === id) {
      return setSelected(null)
    }
    setSelected(id)
  }

  return (
    <>
      <div className='px-6 lg:p-0'>
        {data.map((item) => {
          return (
            <div key={item.id} className='border-b py-4'>
              <div
                className=' flex cursor-pointer items-center justify-between'
                onClick={() => toggleSelected(item.id)}
              >
                <h4
                  className={`text-sm text-neutralText-veryDarkGrayishBlue hover:text-primaryText-softRed ${
                    item.id === selected &&
                    'font-bold hover:text-neutralText-veryDarkGrayishBlue'
                  }`}
                >
                  {item.question}
                </h4>
                <img
                  src={downIcon}
                  alt='down icon'
                  className={`${
                    item.id === selected && 'rotate-180 transition duration-300'
                  }`}
                />
              </div>
              <p
                className={`mt-4 text-xs text-neutralText-darkGrayishBlue ${
                  item.id !== selected && 'hidden'
                }`}
              >
                {item.answer}
              </p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Accordion
