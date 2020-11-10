import React from "react";
import Modal from "../modal";
import history from "../../history";
import {fetchStream, deleteStream} from "../../actions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class StreamDelete extends React.Component{
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }
    renderActions = () =>{
        return(
            <>
                <button onClick={()=> this.props.deleteStream(this.props.match.params.id)} className="ui button red">Delete</button>
                <Link to="/" className="ui button grey">Cancel</Link>
            </>
        );
    }
    onDismiss = () => {
        history.push("/");
    }
    renderContent(){
        if(!this.props.stream){
            return "Are you sure you want to delete the stream?"
        }
        return `Are you sure you want to delete the stream: ${this.props.stream.title}`
    }
    render() {
        return (
        <div>
            <Modal
              title="Delete Stream"
              content={this.renderContent()}
              actions={this.renderActions()}
              onDismiss={this.onDismiss} 
            />
        </div>
        )
    }
}
const mapStateToProps = (state, ownProps) =>{
    return { stream: state.streams[ownProps.match.params.id]   }
}
export default connect(mapStateToProps ,{fetchStream, deleteStream}) (StreamDelete);