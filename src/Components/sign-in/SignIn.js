import React from 'react';
import CustomButton from '../custom-button/CustomButton';
import FormInput from '../form-input/FormInput';
import {  auth, provider }  from '../../firebase/firebase.utils';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import './SignIn.scss'
import { useNavigate } from 'react-router-dom';


const SignIn = () => {

    const [inputs, setInputs] = React.useState({
        email:'',
        password:''
    })

    const navigate = useNavigate()
   

  const handleSubmit = async (event)=>{
        event.preventDefault()
        const{ email, password } = inputs

        try {
            await signInWithEmailAndPassword(auth, email, password)
            setInputs({email:'', password:''})
            navigate(-1)
        } catch (error) {
            console.log(error)
        }
    }
    
   const handleSubmit2 = async ()=>{
        try {
            await signInWithPopup(auth, provider)
            navigate(-1)
        } catch (error) {
            console.log(error)
        }
    }

  const  handleChange = (event)=>{
        const { name, value } = event.target
        setInputs((prev)=>{
            return{...prev, [name]:value}
        })
    }

    
        return(
            <div className="sign-in">
                <h2>I already have an acount</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={handleSubmit}>
                    <FormInput id={'email'} type={"email"} name={'email'} label={'Email'}
                    value={inputs.email} handleChange={handleChange} required={true}/>
                     <FormInput id={'password'} type={"password"} name={'password'} label={'Password'}
                    value={inputs.password} handleChange={handleChange} required={true}/>
                    <div className='buttons'>
                    <CustomButton type='submit' value='SIGN IN'/>
                    <CustomButton type='button' value='SIGN IN WITH GOOGLE' onclick={handleSubmit2}
                        isGoogleSignIn={true}
                    />
                    </div>
                </form>
            </div>
        )
    }

export default SignIn