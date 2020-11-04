export  const SignIn = (userId) => {
    return {
        type:"SIGN_IN",
        payload: userId
    }
}
export  const SignOut = () => {
    return {
        type:"SIGN_OUT"
    }
}
