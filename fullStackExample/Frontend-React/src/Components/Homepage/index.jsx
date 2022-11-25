import React from 'react'
import Layout from '../Layout'
import Navigation from '../Navigation'
import { loggedInUser } from '../../request/userRequests'


export default function Homepage(){

    
    return(
        <Layout>
            {loggedInUser ? <h1>Homepage</h1>:<h1>access denied</h1>}
        </Layout>
    )
}