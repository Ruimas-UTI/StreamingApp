import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {fetchStreams} from "../../actions";

class StreamList extends React.Component{
    componentDidMount(){
        this.props.fetchStreams();
    }
    renderAdmin(stream){
       if(stream.userId === this.props.currentUserId){
           return(
                <div className="right floated content">
                    <Link to={`/streams/edit/${stream.id}`} className="ui button orange">Edit</Link>
                    <button className="ui button yellow">Delete</button>
                </div>
           )
       }
    }
    renderCreatebutton(){
        if(this.props.isSignedIn){
            return (
                <div style={{textAlign: "right"}}>
                    <Link to="/streams/create" className="ui button green">
                        Create Stream
                    </Link>
                </div>
            )
        }
    }
    renderList(){
        return(
            this.props.streams.map(
                stream => {
                    return(
                        <div className="item" key={stream.id}>
                            {this.renderAdmin(stream)}
                            <i className="large middle alligned icon camera"/>
                            <div className="content">
                                {stream.title}
                            <div className="description">{stream.description}</div>
                            </div>
                        </div>
                    )
                }
            )
            
        )
    }
    render(){
        return(
            <div>
                <h2>Available Streams</h2>
                <div className="ui celled list">{this.renderList()}</div>
                {this.renderCreatebutton()}
            </div>
        )
    }
}
const mapStateToProps = state =>{ return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
}; }

export default connect(mapStateToProps, {fetchStreams}) (StreamList);