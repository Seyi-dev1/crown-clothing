import React,{ Component } from "react";
import MenuItem from "../menu-item/Menu-item";
import sections from "./data";
import './directory.scss'
class Directory extends Component{
    constructor(){
        super()
        this.state={
            sections:sections
        }
    }


    render(){
        return(
            <div className="directory-menu">
           { this.state.sections.map((section)=>{
                return (
                    <MenuItem
                        properties={section}
                        key={section.id}
                    />
                )
            })}
            </div>
        )
    }
}
export default Directory