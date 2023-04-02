import React from "react";
import PropTypes from 'prop-types';

const UsersForm = (user, isUserValid, updateUserInput, addUser) => {
    return (
        <form action="">
            <div className="input-control">
                <input type="text"
                       placeholder={"Username"}
                       onChange={(event) => updateUserInput({userName: event.target.value})}
                       value={user.userName}
                />
                {!isUserValid.userName && (<p className={"error-message"}>Cannot be Empty!</p>)}
            </div>
        </form>

    )
}

export default UsersForm