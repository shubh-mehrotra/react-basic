export const SET_USERS = "SET_USERS";

export function getUsers() {
    return async (dispatch) => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();

        dispatch(setUsers(data));
    }
}

export const setUsers = (users = []) => {
    return {
        type: SET_USERS,
        payload: users,
    }
}