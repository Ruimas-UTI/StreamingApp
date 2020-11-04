import React from "react";
class GoogleAuth extends React.Component {
    state = { isSignedIn: null }
    componentDidMount(){
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                clientId: "800039705534-475sr1oavfafaa0petfkl304fibv9msl.apps.googleusercontent.com",
                scope: "email"
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState ({ isSignedIn: this.auth.isSignedIn.get()});
                this.auth.isSignedIn.listen(this.authStateUpdate);
                console.log(this.state);
            })
        });
    }
    authStateUpdate = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get()});
    }
    onSignInClick= () => {
        this.auth.signIn();
    }
    onSignOutClick = () => {
        this.auth.signOut();
    }
    renderAuthButton(){
        if(this.state.isSignedIn === null){
            return null;
        } else if (this.state.isSignedIn){
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
export default GoogleAuth;