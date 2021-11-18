import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import './App.css';
import AddTasks from "./Components/TaskForm/AddTaskForm";
import MainTargetList from "./Components/OkrComponents/MainTargetList/MainTargetList";
import HomePage from "./Components/HomePage/Home";
import EditTaskList from "./Components/TaskForm/EditTaskForm";
import Login from "./Auth/Containers/login";
import Logout from "./Auth/Containers/logout";
import TeamsList from "./Components/Teams/TeamsList";

class App extends Component {
    render() {
        const {history} = this.props

        return (
            <div className='container'>
                <Switch>
                    <Route history={history} exact path='/' component={HomePage} />
                    <Route history={history} path='/home' component={HomePage} />
                    <Route history={history} path='/login' component={Login} />
                    <Route history={history} path='/logout' component={Logout} />
                    <Route history={history} path='/my_okr' component={MainTargetList} />
                    <Route history={history} path='/add_okr' component={AddTasks} />
                    <Route history={history} path='/edit_okr' component={EditTaskList} />
                    <Route history={history} path='/teams' component={TeamsList} />
                </Switch>
            </div>
        );
    }
}

export default App
