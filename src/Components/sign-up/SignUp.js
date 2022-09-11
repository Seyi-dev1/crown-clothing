import './SignUp.scss'
import { Component } from 'react'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'


class SignUp extends Component{
    constructor(){
        super()

        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }

        this.handleSubmit = async (event) => {
            event.preventDefault()

            const{displayName, email, password, confirmPassword} = this.state

            if(password!==confirmPassword){
                alert("passwords do not match")
                return
            }
            try {
                const  { user }  = await createUserWithEmailAndPassword(auth, email, password)
                console.log(user)

                await createUserProfileDocument(user, { displayName })

                this.setState(
                    {
                        displayName:'',
                        email:'',
                        password:'',
                        confirmPassword:''
                    }
                )
                
            } catch (error) {
                console.error(error)
            }
        }

        this.handleChange=(event)=>{
            const {name, value} = event.target

            this.setState((prev)=>{
                return{...prev, [name]:value}
            })
        }
    }
    
    
    render(){
        return(
            <div className="sign-up">
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={this.state.displayName}
                        handleChange={this.handleChange}
                        label='Display Name'
                        required={true}
                    />
                    <FormInput
                        type='text'
                        name='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label='Email'
                        required={true}
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='Password'
                        required={true}
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={this.state.confirmPassword}
                        handleChange={this.handleChange}
                        label='Confirm Password'
                        required={true}
                    />
                    <CustomButton
                        type='submit'
                        value='SIGN UP'
                    />
                </form>
            </div>
        )
    }
}
export default SignUp