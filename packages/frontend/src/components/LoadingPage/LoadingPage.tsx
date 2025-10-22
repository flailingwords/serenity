import type { FC } from 'react'

import type { LoadingPageProps } from './LoadingPage.types'

import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const LoadingPage: FC<LoadingPageProps> = () => (
    <div className='bg-fallback absolute top-0 right-0 bottom-0 left-0 z-auto bg-cover bg-fixed text-white' data-testid='LoadingPage'>
        <div className='absolute top-[50%] left-[50%] translate-x-1 translate-y-1'>
            <FontAwesomeIcon className='animate-pulse-spin text-stroopwafel bg-stroopwafel-ribs rounded-full text-6xl' icon={faStroopwafel} />
        </div>
    </div>
)

export default LoadingPage
