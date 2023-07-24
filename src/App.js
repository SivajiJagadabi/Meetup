import './App.css'
import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'
import RegisterContext from './context/RegisterContext'

// These are the lists used in the application. You can move them to any component needed.
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

class App extends Component {
  state = {
    name: '',
    topic: 'Arts and Culture',
    isRegister: false,
    registerErr: false,
  }

  updatedName = update => {
    this.setState({name: update})
  }

  updatedTopic = update => {
    this.setState({topic: update})
  }

  updateRegisterStatus = () => {
    this.setState({isRegister: true})
  }

  updatedRegisterErr = update => {
    this.setState({registerErr: update})
  }

  render() {
    const {isRegister, registerErr, name, topic} = this.state
    return (
      <RegisterContext.Provider
        value={{
          isRegister,
          name,
          topic,
          registerErr,
          updateRegisterStatus: this.updateRegisterStatus,
          updatedName: this.updatedName,
          updatedTopic: this.updatedTopic,
          updatedRegisterErr: this.updatedRegisterErr,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
