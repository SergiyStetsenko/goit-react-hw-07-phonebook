import { authSelectors } from '../auth'
import AutenNav from './AutenNav'
import Navigation from './Navigation'
import { connect } from 'react-redux';
import React from 'react'
import UserMenu from './UserMenu'

const header = {
    link: {
       display: "flex",
        justifyContent: "space-between",
        padding: 20,
        borderBottom: '1px solid #2A363B',
        alignItems: "center",
    }
    
}
const Appbar = ({isAuthenticated}) => (
     <header style={header.link} >
                <Navigation />
        
        {isAuthenticated? <UserMenu/>:<AutenNav />}
                
            </header>
)
const mapStateToProps = state => ({
    isAuthenticated: authSelectors.getIsAuthrnticated(state)
})

export default connect(mapStateToProps)(Appbar)



