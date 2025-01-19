import React, { ReactNode } from 'react'

//esse children pega o texto que fica entre as tags e não como atributo e o tipo ReactNode nos deixa passar html content por entre tags do componente
interface AlertProps{
    children: ReactNode;
    onCloseAlert:() => void;
}

const Alert = ({children, onCloseAlert}: AlertProps) => {
  return (
    <>
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
        {children}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onCloseAlert}></button>
      </div>
    </>
  )
}

export default Alert
