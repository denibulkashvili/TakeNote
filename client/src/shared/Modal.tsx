import React from 'react'
import { Modal as ModalWrapper } from 'antd';

type Props = {
  title: string
  isVisible: boolean
}

const Modal: React.FC<Props> = ({ title, isVisible, children }) => {

  console.log({isVisible})
  return (
    <ModalWrapper
      title={title}
      visible={isVisible}
      footer={null}
      closable={false}
    >
      {children}
    </ModalWrapper>
  )
}

export default Modal
