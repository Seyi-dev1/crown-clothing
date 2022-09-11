import React from 'react';
import CustomButton from '../custom-button/CustomButton';
import FormInput from '../form-input/FormInput';
import { googleHandler, auth }  from '../../firebase/firebase.utils';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './SignIn.scss'


class SignIn extends React.Component{
    constructor(){
        super()

        this.state={
            email:'',
            password:''
        }
    }

     handleSubmit = async (event)=>{
        event.preventDefault()
        const{ email, password } = this.state

        try {
            await signInWithEmailAndPassword(auth, email, password)
            this.setState({email:'', password:''})
        } catch (error) {
            console.log(error)
        }
    }
    handleChange = (event)=>{
        const { name, value } = event.target
        this.setState((prev)=>{
            return{...prev, [name]:value}
        })
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an acount</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput id={'email'} type={"email"} name={'email'} label={'Email'}
                    value={this.state.email} handleChange={this.handleChange} required={true}/>
                     <FormInput id={'password'} type={"password"} name={'password'} label={'Password'}
                    value={this.state.password} handleChange={this.handleChange} required={true}/>
                    <div className='buttons'>
                    <CustomButton type='submit' value='SIGN IN'/>
                    <CustomButton type='button' value='SIGN IN WITH GOOGLE' onclick={googleHandler}
                        isGoogleSignIn={true}
                    />
                    </div>
                </form>
            </div>
        )
    }
}
export default SignIn