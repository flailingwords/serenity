import type { FC } from 'react'

import type { SourceCreditProps } from './SourceCredit.types'

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { BottomTextLabel } from '@/components/BottomTextLabel/BottomTextLabel'

export const SourceCredit: FC<SourceCreditProps> = () => (
    <BottomTextLabel>
        <a href='https://github.com/flailingwords/serenity' target={'_blank'} rel='noreferrer'>
            <FontAwesomeIcon icon={faGithub} size={'lg'} /> <span className='hidden text-blue-500 sm:inline'>Serenity Dashboard</span>
        </a>
    </BottomTextLabel>
)

export default SourceCredit
