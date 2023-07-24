import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const RegisterPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 80%;
`

export const RegisterImage = styled.img`
  width: 43%;
  height: 380px;
`
export const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
`
export const RegisterHeading = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color: #334155;
  align-self: flex-start;
  margin-left: 50px;
`
export const LabelText = styled.label`
  font-size: 12px;
  font-weight: 500;
  color: #7b8794;
  margin-top: 25px;
  margin-bottom: 8px;
  align-self: flex-start;
  margin-left: 50px;
`
export const Input = styled.input`
  width: 80%;
  height: 35px;
  border-radius: 8px;
  padding: 5px;
  border: 1px solid #cbd5e1;
`

export const RegisterNowBtn = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: #3b82f6;
  color: white;
  height: 32px;
  width: 120px;
  margin-top: 20px;
  align-self: flex-start;
  margin-left: 50px;
`

export const SelectInput = styled.select`
  width: 80%;
  height: 35px;
  border-radius: 8px;
  padding: 5px;
  border: 1px solid #cbd5e1;
`
