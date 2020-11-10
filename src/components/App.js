import React from "react";
import {Router, Route} from "react-router-dom";
import Header from "./Header";
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import history from "../history";

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <Header/>
                <Route path="/" exact component={StreamList}/>
                <Route path="/streams/create" exact component={StreamCreate}/>
                <Route path="/streams/show" exact component={StreamShow}/>
                <Route path="/streams/edit/:id" exact component={StreamEdit}/>
                <Route path="/streams/delete/:id" exact component={StreamDelete}/>
            </Router>
        </div>
    )
}

export default App;