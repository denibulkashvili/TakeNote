import React from 'react'
import { Button } from './Button';

type Props = {
  setIsModalOpen: (isModalOpen: boolean) => void
}

const NoteModal: React.FC<Props> = ({ setIsModalOpen, children }) => {
  return (
    <>
      {children}
      <Button>Ok</Button> 
      <Button onClick={() => setIsModalOpen(false)}>Cancel</Button> 
    </>
  )
}

export default NoteModal
