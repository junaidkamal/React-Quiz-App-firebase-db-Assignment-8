import React from 'react'
import { TextField } from '@mui/material'

const NewTextarea = (props: any) => {
    const { onChange, rows, label, value } = props
  return (
    <>
      <TextField
  label={label}
  rows={rows ?? 3}
  value={value}
  variant="standard"
  color="warning"
  focused
  onChange={onChange}
  fullWidth={true}
  multiline={true}
/>
    </>
  )
}

export default NewTextarea;
