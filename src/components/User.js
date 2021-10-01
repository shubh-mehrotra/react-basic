import { useEffect }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUsers } from '../Redux/actions/userActions';

export default function User() {
    const dispatch = useDispatch();
    const users = useSelector(state => state.userReducer);

    useEffect(() => {
        dispatch(getUsers());
    }, [])

    return (
        <div>
            {users.map(user => (
                <Link to={`/users/${user.id}`} key={user.id}>
                    <h1>{user.name}</h1>
                </Link>
            ))}

            {users.length == 0 ? 'No users' : ''}
        </div>
    )
}
