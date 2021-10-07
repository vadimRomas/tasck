import React, {Component} from 'react';
import GroupServices from "./GroupServices";
import {Link} from "react-router-dom";
import '../user/User.css'
import GroupMap from "./GroupMap";

class GroupComponent extends Component {
    state = {groups: []};
    groupService = new GroupServices();

    componentDidMount() {
        this.groupService.getGroup()
            .then(res => {
                const groups = res.data;
                this.setState({groups})
            })
    }




    render() {
        const {groups} = this.state
        return (
            <div>
                <Link to={'/group/create'}>
                    <button>Add Group</button>
                </Link>
                <div>
                    <ul>
                        <li>ID</li>
                        <li className={'name'}>name</li>
                        <li>description</li>
                        <li>actions</li>
                    </ul>
                </div>

                {groups.map(value => <GroupMap key={value.id} item={value}/>
                )}
            </div>
        );
    }

}

export default GroupComponent;