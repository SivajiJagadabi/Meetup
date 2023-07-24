import React from 'react'

const RegisterContext = React.createContext({
  name: '',
  topic: '',
  updatedName: () => {},
  updatedTopic: () => {},
  registerErr: false,
  updatedRegisterErr: () => {},
  isRegister: false,
  updateRegisterStatus: () => {},
})

export default RegisterContext
