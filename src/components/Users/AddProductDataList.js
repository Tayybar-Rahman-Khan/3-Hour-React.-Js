import React from 'react';
import Card from '../UI/Card';

const UserDataList = (props) => {
    return (
        <Card>
            <ul>
                <li>Electronics</li>
                <ul>
                {props.users.map((user) => 
                    user.category === 'Electronics'
                    ?
                    (
                        <li key={user.id}>
                            {user.name} {user.age} {user.college} {user.category}
                            <button onClick={() => props.onDeleteUser(user.id)}>Delete</button>
                        </li>
                    )
                    :
                    <></>
                )}
                </ul>
            </ul>
            <ul>
                <li>SkinCare</li>
                <ul>
                {props.users.map((user) => 
                    user.category === 'SkinCare'
                    ?
                    (
                        <li key={user.id}>
                            {user.name} {user.age} {user.college} {user.category}
                            <button onClick={() => props.onDeleteUser(user.id)}>Delete</button>
                        </li>
                    )
                    :
                    <></>
                )}
                </ul>
            </ul>
            <ul>
                <li>Food</li>
                <ul>
                {props.users.map((user) => 
                    user.category === 'Food'
                    ?
                    (
                        <li key={user.id}>
                            {user.name} {user.age} {user.college} {user.category}
                            <button onClick={() => props.onDeleteUser(user.id)}>Delete</button>
                        </li>
                    )
                    :
                    <></>
                )}
                </ul>
            </ul>
        </Card>
    );
};

export default UserDataList;
