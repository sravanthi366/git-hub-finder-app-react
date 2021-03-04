import React,{useState,useContext} from 'react'

import GithubContext from '../../context/github/gihubContext'

import AlertContext from '../../context/alert/alertContext'



const Search = () => {
    
    const githubContext = useContext(GithubContext)
    const alertContext = useContext(AlertContext)

 const [text,setText] = useState('')

   
    const onSubmit = e => {
        e.preventDefault()
        if(text===''){
            alertContext.showAlert('please enter something','light')
        }
        else{

            githubContext.searchUsers(text);
           setText('')
        }
       
    }
   const onChange = e =>setText(e.target.value)
    
        
        return (
            <div>
        <form onSubmit= {onSubmit} className='form'>
            <input 
            type='text' 
            name ='text' 
            placeholder='Search users...'
            value = {text}
            onChange={onChange}/>
            <input 
            type = 'submit' 
            value='Search' 
            className='btn btn-dark btn-block'/>
        </form>
        {githubContext.users.length>0 &&(<button onClick={githubContext.clearUsers} className='btn btn-light btn-block'>Clear
</button>)}


            </div>
        )
    }
     


export default Search
