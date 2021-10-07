import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import UserService from "./UserServices";
import GroupServices from "../group/GroupServices";

function User(props) {
    const [groups, setGroups] = useState([])
    const {item} = props
    const group = groups.filter(value =>value.id === item.group)
    const userService = new UserService()
    const deleteUser = async (id) =>  await userService.deleteUser(id).then(r => console.log(r.data));


    useEffect(() => {
        new GroupServices().getGroup()
            .then(res => setGroups(res.data));
    },[])

        return (
            <ul className={'value'}>
                <li>{item.id}</li> <li>{item.username}</li> <li>{group.name}</li>
                <li><Link to={`user/${item.id}/update`}>
                    <button>edit</button>
                </Link>
                <button onClick={() => deleteUser(item.id)}>delete</button></li>
            </ul>
        );
    }


export default User;