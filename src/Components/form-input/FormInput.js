import './FormInput.scss'
const FormInput = (props)=>{
    return(
        <div className="group">
            <input className='form-input' 
            type={props.type} 
             value={props.value}
             onChange={props.handleChange}
             id={props.id}
             name={props.name}
             required={props.required}   
            />
            {
              props.label?
              <label htmlFor={props.id}
              className={`${props.value.length? 'shrink':''} form-input-label`}>
              {props.label}
              </label>
              :null
            }
        </div>
    )
}
export default FormInput