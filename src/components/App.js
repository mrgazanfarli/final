import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import TodoCreator from './TodoCreator';
import TodoList from './TodoList';
import PostList from './PostList';
import PostSearch from './PostSearch';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <div className="row pt-4">
                        <div className="col-12">
                            <Link to="/todos" className="btn btn-primary">Todo List</Link>
                            <Link to="/posts" className="btn btn-primary ml-3">Posts</Link>
                        </div>
                        <Switch>
                            <Route path="/todos">
                                <div className="col-12 mt-5">
                                    <h3 className="text-primary mb-4">TODO List</h3>
                                    <TodoCreator />
                                    <div className="mt-4">
                                        <TodoList />
                                    </div>
                                </div>
                            </Route>
                            <Route path="/posts">
                                <div className="col-12 mt-5">
                                    <h3 className="text-primary mb-4">Posts</h3>
                                    <PostSearch />
                                    <div className="mt-4">
                                        <div>
                                            <PostList />
                                        </div>
                                    </div>
                                </div>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

export default App;