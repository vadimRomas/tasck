import React, {Component} from 'react';
import {Link} from "react-router-dom";

class GroupMap extends Component {

    deleteGroup = async (id) => {
        try {
            await this.groupService.deleteGroup(id)
        } catch (er) {
            alert('спочатку видали користувачів з цієї групи')
        }
    }

    render() {
        const {item} = this.props
        return (
            <ul className={'value'}>
                <li>{item.id}</li>
                <li>{item.name}</li>
                <li>{item.description}</li>
                <li>
                    <Link to={`group/${item.id}/update`}>
                        <button>edit</button>
                    </Link>
                    <button onClick={() => this.deleteGroup(item.id)}>delete</button>
                </li>
            </ul>
        );
    }
}

export default GroupMap;