import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './User.css';
import UserService from "./UserServices";
import GroupServices from "../group/GroupServices";
import User from "./User";

// export const {Consumer, Provider} = React.createContext();
class UserComponent extends Component {
    state = {users: [], groups: []};
    userService = new UserService();
    groupService = new GroupServices();

    componentDidMount() {
        this.userService.getUsers()
            .then(res => {
                const users = res.data;
                this.setState({users})
            })
        this.groupService.getGroup()
            .then(res => {
                const groups = res.data;
                this.setState({groups})
            })
    }

    // group = () => this.state.groups.filter(value => )


    render() {
        const {users} = this.state;
        return (
            <div>
                <div className={'AddUser'}>
                    <Link to={'/user/create'}>
                        <button>Add User</button>
                    </Link>
                </div>

                <div><ul>
                    <li>ID</li>
                    <li>username</li>
                    <li>group</li>
                    <li>actions</li>
                </ul>
                </div>
                <div>
                    {users.map(value => <User item={value} key={value.id}/>)}
                </div>


            </div>
        );
    }
}

export default UserComponent;