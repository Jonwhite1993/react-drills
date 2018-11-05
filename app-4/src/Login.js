import React, {Component} from 'react'

class Login extends Component{
    constructor(){
        super()
        this.state = {
            username: '',
            password: '',
        }
        this.handleLogin = this.handleLogin.bind(this)
    }
    handleUsername(username){
        this.setState({
            username: username
        })
    }
    handlePassword(password){
        this.setState({
            password: password
        })
    }
    handleLogin(){
        alert(`username: ${this.state.username} password: ${this.state.password}`)
    }
    render(){
        return(
            <div>
            <input onChange={(e) => this.handleUsername(e.target.value)} type='text'/>
            <input onChange={(e) => this.handlePassword(e.target.value)} type='text'/>
            <button onClick={this.handleLogin}>Login</button>
            </div> 
        )
    }
}
export default Login