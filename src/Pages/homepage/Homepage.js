import Directory from '../../Components/directory/Directory'
import './Homepage.scss'
const Homepage = (props)=>{
    console.log(props)
    return(
        <div className="homepage">
            <Directory/>
        </div>
    )
}
export default Homepage