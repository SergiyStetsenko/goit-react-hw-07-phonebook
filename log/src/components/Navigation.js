import { NavLink } from 'react-router-dom'
// import React from 'react'
import { authSelectors } from '../auth';
import { connect } from 'react-redux';


const style = {
    home: {
        textDecoration: 'none',
        padding: 20,
        fontWeight: 700,
        fontSize: 20,
        color: "black",
    },
    activeLink: {
    color: '#E84A5F',
  },
}

const Navigation = ({isAuthenticated}) => (
    <div>
        <NavLink exact to="/"
            style={style.home}
            activeStyle={style.activeLink}
        >
            Главная 
        </NavLink>
        {isAuthenticated && (
      <NavLink
        to="/contacts"
        exact
        style={style.home}
        activeStyle={style.activeLink}
      >
        Контакты
      </NavLink>
    )}
        
    </div>
)


const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthrnticated(state),
});

export default connect(mapStateToProps)(Navigation);