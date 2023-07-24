import RegisterContext from '../../context/RegisterContext'

import Header from '../Header'
import {
  MainContainer,
  RegisterPageContainer,
  RegisterImage,
  RegisterHeading,
  LabelText,
  Input,
  RegisterNowBtn,
  InputContainer,
  SelectInput,
} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        name,
        topic,
        updatedName,
        updatedTopic,
        registerErr,
        updatedRegisterErr,
        updateRegisterStatus,
      } = value

      const onChangeName = event => {
        updatedName(event.target.value)
      }

      const onChangeTopic = event => {
        updatedTopic(event.target.value)
      }

      const onSubmitForm = event => {
        event.preventDefault()
        updateRegisterStatus()
        if (name !== '' && topic !== '') {
          const {history} = props
          history.replace('/')
        } else {
          updatedRegisterErr(true)
        }
      }

      return (
        <>
          <Header />
          <MainContainer>
            <RegisterPageContainer>
              <RegisterImage
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
              />
              <InputContainer onSubmit={onSubmitForm}>
                <RegisterHeading>Let us join</RegisterHeading>
                <LabelText htmlFor="name">NAME</LabelText>
                <Input
                  type="text"
                  placeholder="Your name"
                  id="name"
                  onChange={onChangeName}
                  value={name}
                />
                <LabelText htmlFor="topic">TOPICS</LabelText>
                <SelectInput id="topic" onChange={onChangeTopic} value={topic}>
                  {topicsList.map(eachOption => (
                    <option value={eachOption.id} key={eachOption.id}>
                      {eachOption.displayText}
                    </option>
                  ))}
                </SelectInput>

                <RegisterNowBtn type="submit">Register Now</RegisterNowBtn>

                {registerErr && (
                  <p style={{color: '#ff0b37', fontSize: 12, margin: 0}}>
                    Please enter your name
                  </p>
                )}
              </InputContainer>
            </RegisterPageContainer>
          </MainContainer>
        </>
      )
    }}
  </RegisterContext.Consumer>
)

export default Register
