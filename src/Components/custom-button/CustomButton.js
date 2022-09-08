import './CustomButton.scss'
const CustomButton =(props)=>{
    return(
        <button className={`${props.isGoogleSignIn?'google-sign-in':''} custom-button`} type={props.type} onClick={props.onclick}>
        {props.value}
        </button>
    )
}
export default CustomButton