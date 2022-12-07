import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'
const Auth = () => {
    return (
        <div className="Auth">
            <div className="a-left">
                <img src={Logo} alt=""/>
                <div className="WebName">
                    <h1>SavyTech Developers</h1>
                    <h6>Equitable Tech. Solutions</h6>
                </div>
            </div>

            <SignUp/>
        </div>
    )
}

function Login(){
    return (
        <div className="a-right">
            <form action="" className="InfoFormL authForm">

                <h3>Login</h3>

                <div>
                    <input type="text" placeholder="User Name" className="InfoInput" name='userName' />
                </div>
                <div>
                    <input type="text" placeholder="Password" className="InfoInput" name='password' />
                </div>
                <button className="button infoButton" type="submit">Login</button>
                <div>
                    <span style={{fontSize: '12px'}}>Don't have an account?</span><a style={{textDecoration: 'None'}} href="#">SignUp</a>
                </div>
            </form>
        </div>
    )
}

function SignUp(){
    return (
        <div className="a-rigth">
            <form action="" className="InfoForm authForm">

                <h3>SignUp</h3>

                <div>
                    <input type="text" placeholder="First Name" className="InfoInput" name='firstName' />
                    <input type="text" placeholder="Last Name" className="InfoInput" name='lastName' />
                </div>
                <div>
                    <input type="text" placeholder="User Name" className="InfoInput" name='userName' />
                </div>
                <div>
                    <input type="text" placeholder="Password" className="InfoInput" name='password' />
                    <input type="text" placeholder="Confirm Password" className="InfoInput" name='confirmPassword' />
                </div>
                <div>
                    <span style={{fontSize: '12px'}}>Already have an account?</span><a href="#">Login</a>
                </div>
                <button className="button infoButton" type="submit">SignUp</button>
            </form>
        </div>
    )
}

export default Auth
