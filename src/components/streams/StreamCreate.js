import React from "react";
import { Field, reduxForm  } from "redux-form";
import { connect } from "react-redux";
import {createStream} from "../../actions";

class StreamCreate extends React.Component{
    validationError({error, touched}){
        if(error && touched){
            return (
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            )
        }
    }
    renderInput = ({input, label, meta}) =>{
        const className = `field ${meta.error && meta.touched ? "erro r": " "}`;
        return(
                <div className={className}>
                    <label>{label}</label>
                    <input {...input} autoComplete="off" />
                    {this.validationError(meta)}
                </div>
                
            ); 
        }
    onSubmit = formValues =>{
        this.props.createStream(formValues);
    }
   
    render(){
        return(
            <div className="ui container">
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
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
         errors.title = "You must add a title";
    }
    if(!formValues.description){
         errors.description = "You must add some description";
    }
    return errors;
};
const formWrapper =  reduxForm({form: "streamCreate", validate})(StreamCreate);

export default connect(null, { createStream })(formWrapper);