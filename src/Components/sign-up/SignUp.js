import './SignUp.scss'
import React from 'react'
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'
import { useDispatch } from 'react-redux'
import { signUpStart } from '../../redux/user/userReducer'


const SignUp = ()=> {

        const dispatch = useDispatch()

        const [inputs, setInputs]= React.useState({
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        })
        const handleSubmit = async (event) => {
            event.preventDefault()
            dispatch(signUpStart(inputs))
        }

        const handleChange=(event)=>{
            const {name, value} = event.target

            setInputs((prev)=>{
                return{...prev, [name]:value}
            })
        }
    
    
    
    
        return(
            <div className="sign-up">
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={inputs.displayName}
                        handleChange={handleChange}
                        label='Display Name'
                        required={true}
                    />
                    <FormInput
                        type='text'
                        name='email'
                        value={inputs.email}
                        handleChange={handleChange}
                        label='Email'
                        required={true}
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={inputs.password}
                        handleChange={handleChange}
                        label='Password'
                        required={true}
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={inputs.confirmPassword}
                        handleChange={handleChange}
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
export default SignUp