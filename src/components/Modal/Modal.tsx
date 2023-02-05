import React, { ReactElement } from "react"
import { createPortal } from "react-dom"

interface modalProps {
  children: React.ReactNode
}

export const Modal = ({ children }) => {
  return (
    <>
      {createPortal(
        <div className="modal">{children}</div>,
        document.getElementById("root")
      )}
    </>
  )
}
