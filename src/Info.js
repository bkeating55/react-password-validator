import React, {Component} from 'react'

class Info extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
      valid: true
    }
  }
  handleEmail (e) {
  this.setState({
    email: e.target.value
  })
}

handlePassword (e) {
  this.setState({
    password: e.target.value
  })
}

handlePasswordConfirmation (e) {
  this.setState({
    passwordConfirm: e.target.value
  })
}

handleSubmit (e) {
  e.preventDefault()
  this.checkValidity()
}

checkValidity () {
  if (this.state.password === this.state.passwordConfirm) {
      this.setState({ valid: true })
  } else {
    this.setState({ valid: false })
  }
}

render() {
  let validText = this.state.valid ? "Valid!" : "Passwords do not match"
  return(
    <div class="input">
      <input onChange={(e) => this.handleEmail(e)} type="text" placeholder="Email" />
      <input onChange={(e) => this.handlePassword(e)} type="text" placeholder="Password" />
      <input onChange={(e) => this.handlePasswordConfirmation(e)} type="text" placeholder="Password Confirmation" />
      <input type="submit" onClick={(e) => this.handleSubmit(e)} value="submit" />
      <p>{validText}</p>
    </div>
  );
}
}

export default Info;
