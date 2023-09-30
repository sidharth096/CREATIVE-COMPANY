import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {Link, useNavigate} from "react-router-dom"

const navigation = [
 
  { name: 'Home', Link: '/admin/home', current: true },
  { name: 'Users', Link: '/admin/users', current: false },
  { name: 'Workers', Link: '/admin/workers', current: false },
  { name: 'Designs', Link: '/admin/designs', current: false }
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const AdminHeader = () => {
  const navigate = useNavigate()
  
  const handleLogout = () => {
  };
  
  return (
      <Disclosure as="nav" className="bg-white flex justify- shadow-md px- ">
        {({ open }) => (
          <>
            <div className="mx-auto w-full px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
  
                {/* logo */}
  
                <div className="hidden sm:flex flex-shrink-0 items-center ">
                    <img
                      className="h-8 w-auto cursor-pointer"
                      src="https://res.cloudinary.com/di7nyjjfl/image/upload/f_auto,q_auto/v1/creative%20company/logo/bysy0sj7ttessvcuvut6"
                      alt="Creative Company"
                    />
                </div>
               
  
                {/* Menu items */}
  
                <div className="flex flex-1 items-center justify-center sm:items-stretch ">
                  
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link to={item.Link}>
                        <a
                          key={item.name}
                          className={classNames(
                            item.current ? ' text-black underline underline-offset-1' : 'text-black hover: hover:text-gray-400',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
  
                {/* sign in */}
  
                <div className='flex gap-3 text-white '>
                   <button className=' rounded-full bg-black text-xs text-white px-3 py-1 text-s ' onClick={handleLogout}>Logout</button>
                   
                </div>
  
  
                 {/* Profile */}
  
                {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
  
                  /* Profile dropdown *
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div> */}
              </div>
            </div>
  
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 ">
                {navigation.map((item) => (
                  <Link to={item.Link}>
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    className={classNames(
                      item.current ? ' text-white  bg-black ' : 'text-black  hover:text-gray-400',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    )
}

export default AdminHeader
