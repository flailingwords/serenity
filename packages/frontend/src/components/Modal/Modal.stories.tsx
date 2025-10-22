import type { ModalProps } from './Modal.types'
import type { StoryFn } from '@storybook/react-vite'

import { Modal } from './Modal'

export default {
    title: 'Component/Modal'
}

export const Default: StoryFn<ModalProps> = ({ closeButton }) => (
    <Modal
        title={'Default'}
        show={true}
        onHide={() => {
            console.log('callback onHide')
        }}
        closeButton={closeButton}>
        <div>This is a default modal.</div>
    </Modal>
)

Default.args = {
    closeButton: true
}

export const Alert: StoryFn = () => (
    <Modal
        title={'Alert'}
        show={true}
        onHide={() => {
            console.log('callback onHide')
        }}
        closeButton={false}
        iconStyle={'alert'}>
        <div>This is an alert modal.</div>
    </Modal>
)

export const Info: StoryFn = () => (
    <Modal
        title={'Info'}
        show={true}
        onHide={() => {
            console.log('callback onHide')
        }}
        closeButton={false}
        iconStyle={'info'}>
        <div>This is an info modal.</div>
    </Modal>
)

export const Success: StoryFn = () => (
    <Modal
        title={'Success'}
        show={true}
        onHide={() => {
            console.log('callback onHide')
        }}
        closeButton={false}
        iconStyle={'success'}>
        <div>This is a success modal.</div>
    </Modal>
)

export const Failed: StoryFn = () => (
    <Modal
        title={'Failed'}
        show={true}
        onHide={() => {
            console.log('callback onHide')
        }}
        closeButton={false}
        iconStyle={'failed'}>
        <div>This is a failed modal.</div>
    </Modal>
)
