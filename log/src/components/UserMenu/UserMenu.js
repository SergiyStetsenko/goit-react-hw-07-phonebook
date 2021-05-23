import { connect } from 'react-redux'
import { authSelectors, authOperations } from '../../auth'
import avatar from '../UserMenu/unnamed.jpg'


const style = {
    continue:{
        display: "flex",
        alignItems: 'center',
    },
    name: {
        marginRight: 20,
        color: "#E84A5F",
        fontWeight: 700,
        marginLeft: 20,
        marginTop: 0,
        marginBottom: 0,
    },
    button: {
        border: " black",
        borderRadius: 10,
        padding: 10,
        
    },
    mail: {
        color: "rgb(2, 74, 95)",
        marginRight: 20,
         marginLeft: 0,
        marginTop: 0,
        marginBottom: 0,
    }
}
const UserMenu = ({ avatar,name, onLogout, email}) => (
    <div style={style.continue}>
        <img src={avatar} alt={name} width="35"/>
        <p style={style.name}>Welcome, {name}: </p>
        <p style={style.mail}>{email}</p>
        <button style={style.button} type='button' onClick={onLogout}>
            Logout
        </button>
    </div>
)

const mapStateToProps = state => ({
    name: authSelectors.getUsername(state),
    avatar: avatar,
    email:authSelectors.getUseremail(state),
})
const mapDispatchToProps = {
    onLogout: authOperations.logOut
}

export default connect(mapStateToProps,mapDispatchToProps)(UserMenu)