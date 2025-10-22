import type { FC } from 'react'

import type { SideMenuProps } from './SideMenu.types'

import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { clsx } from 'clsx'

import { Conditional } from '@/components/Conditional/Conditional'
import { Settings } from '@/components/Settings/Settings'
import { useStateMachine } from '@/hooks/useStateMachine'

export const SideMenu: FC<SideMenuProps> = () => {
    const [show, setShow] = useStateMachine('showSideMenu', false)

    const handleClose = (): void => {
        setShow(false)
    }

    return (
        <Conditional condition={show}>
            <div className={clsx('relative z-10', !show && 'hidden')} aria-labelledby='slide-over-title'>
                <div className='bg-opacity-75 fixed inset-0 bg-gray-500 transition-opacity' aria-hidden='true'></div>

                <div className='fixed inset-0 overflow-hidden'>
                    <div className='absolute inset-0 overflow-hidden'>
                        <div className='pointer-events-none fixed inset-y-0 left-0 flex max-w-full'>
                            <div className='pointer-events-auto relative w-screen max-w-md'>
                                <div className='flex h-full flex-col overflow-hidden bg-black py-6 shadow-xl'>
                                    <div className='px-4 sm:px-6'>
                                        <div className='my-3 text-center'>
                                            <span>Serenity Dashboard</span>
                                            <button
                                                className='float-right mr-2'
                                                onClick={() => {
                                                    handleClose()
                                                }}>
                                                <FontAwesomeIcon icon={faTimes} size={'lg'} />
                                            </button>
                                        </div>
                                    </div>
                                    <div className='relative mt-6 flex-1 px-4 sm:px-6'>
                                        <div className='my-3 p-2'>
                                            <p>
                                                Inspired by the <a href='https://momentumdash.com/'>Momentum Dash</a> extension for Chrome.
                                            </p>
                                            <p>
                                                The goal of Serenity is to create something that&apos;s similar to the extension, but more customizable, works
                                                in multiple browsers and is modifiable by the user.
                                            </p>
                                        </div>
                                        <hr />
                                        <div className='my-3 p-2'>
                                            <Settings />
                                        </div>
                                        <hr />
                                        <div className='my-3 p-2'>
                                            Imagery powered by{' '}
                                            <a href='https://unsplash.com/' title='Unsplash'>
                                                unsplash.com
                                            </a>
                                            <br />
                                            Weather powered by{' '}
                                            <a href='https://weatherapi.com/' title='Free Weather API'>
                                                WeatherAPI.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Conditional>
    )
}

export default SideMenu
