import React from 'react';



const UserForm = (props) =>{
    const{name, avatar} = props;
    return(
        <div>
            <h3>{name}</h3>
            <img src={avatar} alt=""/>
        </div>
    )

}
export default UserForm;