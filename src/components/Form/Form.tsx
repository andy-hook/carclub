import React, { useCallback } from 'react'
import styled from 'styled-components'
import Button from '../Button/Button'
import ColorPicker from './ColorPicker'
import Field from './Field'
import Input from './Input'
import Range from './Range'

const StyledField = styled(Field)`
  margin-bottom: 24px;
`

type FormProps = {
  initialColor: string
}

function Form({ initialColor, ...props }: FormProps): JSX.Element {
  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    const { name, email, date, color, salary } = event.target.elements
    alert(`
      Your name is ${name.value}\n
      Your email address is ${email.value}\n
      Your date of birth is ${date.value}\n
      Your favourite colour is ${color.value}\n
      Your salary is £${salary.value}
    `)
  }, [])

  return (
    <form
      css={`
        padding: 50px;
        background-color: #f7f8fc;
        border-radius: 6px;
      `}
      onSubmit={handleSubmit}
      {...props}
    >
      <StyledField label="Name" required>
        <Input id="name" required />
      </StyledField>
      <StyledField label="Email" required>
        <Input id="email" type="email" required />
      </StyledField>
      <StyledField label="Date of birth" required>
        <Input id="date" type="date" required />
      </StyledField>
      <StyledField label="Favourite colour">
        <ColorPicker id="color" initialColor={initialColor} />
      </StyledField>
      <StyledField label="Salary">
        <Range id="salary" />
      </StyledField>
      <Button
        css={`
          margin-top: 40px;
          width: 100%;
        `}
      >
        Send details
      </Button>
    </form>
  )
}

export default Form
