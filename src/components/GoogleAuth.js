import React from "react";
import { SignIn, SignOut  } from "../actions";
import {connect} from "react-redux";
class GoogleAuth extends React.Component {
    componentDidMount(){
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                clientId: "800039705534-475sr1oavfafaa0petfkl304fibv9msl.apps.googleusercontent.com",
                scope: "email"
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.authStateUpdate(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.authStateUpdate);
                console.log(this.props);
            })
        });
    }
    authStateUpdate = (isSignedIn) => {
        if(isSignedIn){
            this.props.SignIn(this.auth.currentUser.get().getId());
        } else { 
            this.props.SignOut();
        }
    }
    onSignInClick= () => {
        this.auth.signIn();
    }
    onSignOutClick = () => {
        this.auth.signOut();
    }
    renderAuthButton(){
        if(this.props.isSignedIn === null){
            return null;
        } else if (this.props.isSignedIn){
            return(
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon"/>
                    Sign Out!
                </button>
            )
        } else {
            return(
                <button onClick={this.onSignInClick} className="ui green google button">
                    <i className="google icon"/>
                    Sign In!
                </button>
            )
        }
    }
    render(){
        return <div>{this.renderAuthButton()}</div>
    }
}
const mapStateToProps = (state) => {
    const { isSignedIn, userId } = state.auth;
    return { isSignedIn, userId }
} 

export default connect(mapStateToProps, {SignIn, SignOut})(GoogleAuth);