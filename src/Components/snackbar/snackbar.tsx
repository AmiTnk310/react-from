import React from 'react'
import "./snackBar.css"
interface IProps{
    message:string
}
const Snackbar = ({message}:IProps) => {
    return(
        <div className='snack'>
            {message}
        </div>
    )
}
export default Snackbar;