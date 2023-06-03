import { useFormikContext } from "formik"
import ButtonComponent from "./ButtonComponent"
import React from "react"

interface Props {
  formik?: boolean
  label: string
  onClick?: () => void
  inverseColors?: boolean

}

const Button = ({ formik, label, onClick, inverseColors }: Props) => {

  const RenderButtonFormik = () => {
    const { submitForm } = useFormikContext()

    return <ButtonComponent onClick={submitForm} label={label} inverseColors={inverseColors} />
  }
  const RenderButton = () => {

    return <ButtonComponent onClick={onClick} label={label} inverseColors={inverseColors} />
  }
  return formik ? RenderButtonFormik() : RenderButton()
}

export default Button