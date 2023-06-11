'use client'

import { Fragment, useState } from 'react'
import { Transition } from '@headlessui/react'
import { Listbox } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const monthA = [
  { id: 1, name: 'Month 1' },
  { id: 2, name: 'Month 2' },
  { id: 3, name: 'Month 3' },
];

const monthB = [
    { id: 1, name: 'Month 1' },
    { id: 2, name: 'Month 2' },
    { id: 3, name: 'Month 3' },
]

const year = [
    { id: 1, name: '2023' },
    { id: 2, name: '2022' },
    { id: 3, name: '2021' },
  ]

  
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
  

function ChangeByDatesInput({ data }) {
    const [selected, setSelected] = useState(data[0])
  
    return (
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            <div className="relative mt-2 m-1">
              <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                <span className="block truncate">{selected.name}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </Listbox.Button>
  
              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {data.map((date) => (
                    <Listbox.Option
                      key={date.id}
                      className={({ active }) =>
                        classNames(
                          active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                          'relative cursor-default select-none py-2 pl-3 pr-9'
                        )
                      }
                      value={date}
                    >
                      {({ selected, active }) => (
                        <>
                          <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                            {date.name}
                          </span>
  
                          {selected ? (
                            <span
                              className={classNames(
                                active ? 'text-white' : 'text-indigo-600',
                                'absolute inset-y-0 right-0 flex items-center pr-4'
                              )}
                            >
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    )
  }

  export default function ChangeByDate ( ) {
        return (
            <div className='flex flex-row items-center'>
                <ChangeByDatesInput data={ monthA } />
                <ChangeByDatesInput data={ monthB } />
                <ChangeByDatesInput data={ year }   />
            </div>
        )
  }