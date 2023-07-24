import {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'
import RegisterContext from '../../context/RegisterContext'
import {
  HomeContainer,
  MeetHeading,
  MeetDescription,
  MeetImage,
  RegisterBtn,
} from './styledComponents'

const Home = props => {
  const onClickRegister = () => {
    const {history} = props
    history.replace('/register')
  }

  const renderRegister = () => (
    <>
      <MeetHeading>Welcome to Meetup</MeetHeading>
      <MeetDescription>Please register for the topic</MeetDescription>

      <Link to="/register">
        <RegisterBtn type="button" onClick={onClickRegister}>
          Register
        </RegisterBtn>
      </Link>

      <MeetImage
        src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
        alt="meetup"
      />
    </>
  )

  const renderRegisterSuccess = (name, topic) => (
    <>
      <MeetHeading>{`Hello ${name}`}</MeetHeading>
      <MeetDescription>{`Welcome to ${topic}`}</MeetDescription>

      <MeetImage
        src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
        alt="meetup"
      />
    </>
  )

  return (
    <RegisterContext.Consumer>
      {value => {
        const {name, topic, isRegister} = value
        return (
          <>
            <Header />
            <HomeContainer>
              {isRegister
                ? renderRegisterSuccess(name, topic)
                : renderRegister()}
            </HomeContainer>
          </>
        )
      }}
    </RegisterContext.Consumer>
  )
}

export default Home
