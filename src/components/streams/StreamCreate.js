import React from "react";
import { Field, reduxForm  } from "redux-form";

class StreamCreate extends React.Component{
    renderInput({input, label, meta}){
        return(
                <div className="field">
                    <label>{label}</label>
                    <input {...input} />
                    <div>{meta.errors}</div>
                </div>
            ); 
        }
    onSubmit(formValues){
        console.log(formValues);
    }
   
    render(){
        return(
            <div className="ui container">
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                    <Field name="title" component={this.renderInput} label="Enter title"/>
                    <Field name="description" component={this.renderInput} label="Enter description"/>
                    <button className="ui button secondary">Submit</button>
                </form>
            </div>
        ); 
    }
}
const validate = formValues => {
    const errors = {};
    if(!formValues.title){
        return errors.title = "You must put a title";
    }
    if(!formValues.description){
        return errors.description = "You must add some description";
    }
    return errors;
};
export default reduxForm({form: "streamCreate", validate})(StreamCreate);