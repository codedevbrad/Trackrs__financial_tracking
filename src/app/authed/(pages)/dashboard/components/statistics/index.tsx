import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import { CursorArrowRaysIcon, EnvelopeOpenIcon, UsersIcon } from '@heroicons/react/24/outline'

const stats = [
  { id: 2, name: 'Predicted Income'  , stat: '3460', icon: UsersIcon, change: '£1,200', changeType: 'increase' },
  { id: 3, name: 'Expenses', stat: '1546', icon: EnvelopeOpenIcon, change: '5.4%', changeType: 'increase' },
  { id: 4, name: 'Balance' , stat: '1914', icon: CursorArrowRaysIcon, change: '3.2%', changeType: 'decrease' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


function CurrentDateComponent ( ) {
  return (
    <div className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
        <dt>
            <div className="absolute rounded-md bg-indigo-500 p-3">
              <UsersIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <p className="ml-16 truncate text-sm font-medium text-gray-500">
              Current date
            </p>
        </dt>

        <dd className="ml-16 flex items-baseline">
            <p className="text-2xl font-semibold text-gray-900"> 
              March, 2023.
            </p>
        </dd>
    </div>
  )
}


function FinanceCard ({ item , key } ) {
    return (
      <div key={ key } className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
          <dt>
              <div className="absolute rounded-md bg-indigo-500 p-3">
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500">
                 {item.name}
              </p>
          </dt>
          <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
              <p className={classNames(
                  item.changeType === 'increase' ? 'text-green-600' : 'text-red-600',
                  'ml-2 flex items-baseline text-sm font-semibold'
                )}
              >
                {item.changeType === 'increase' ? (
                  <ArrowUpIcon className="h-5 w-5 flex-shrink-0 self-center text-green-500" aria-hidden="true" />
                ) : (
                  <ArrowDownIcon className="h-5 w-5 flex-shrink-0 self-center text-red-500" aria-hidden="true" />
                )}

                <span className="sr-only"> {item.changeType === 'increase' ? 'Increased' : 'Decreased'} by </span>
                {item.change}
              </p>
              <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
                <div className="text-sm">
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    View all
                      <span className="sr-only"> 
                       {item.name} stats
                      </span>
                  </a>
                </div>
              </div>
          </dd>
      </div>
    )
}

export default function Statistics( ) {
  return (
    <div>
      <h3 className="text-base font-semibold leading-6 text-gray-900">Last 30 days</h3>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        <CurrentDateComponent />
        {stats.map( ( item ) => (
           <FinanceCard item={ item } key={ item.id } />
        ))}
      </div>
    </div>
  )
}
