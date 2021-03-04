import React,{useContext} from 'react'

import UsersItem from './UsersItem'

import Spinner from '../layout/Spinner'


import GithubContext from '../../context/github/gihubContext'

const Users = () => {
    
    const githubContext = useContext(GithubContext);
    const {users, loading } = githubContext;

    if(loading){
        return <Spinner/>
    }
    else{
        return (
            <div style={userStyle}>
                {users.map(user=>{
                  return  <UsersItem key={user.id} user={user}/>
                })}
            </div>
        )
    }

     
       
    }




const userStyle={
    display:"grid",
    gridTemplateColumns:'repeat(4, 1fr)',
    gridGap: '1rem',
}
export default Users
