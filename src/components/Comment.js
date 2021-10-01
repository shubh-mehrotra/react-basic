import { useEffect }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getComments } from '../Redux/actions/commentActions';

export default function Comment() {
    const dispatch = useDispatch();
    const comments = useSelector(state => state.commentReducer);

    useEffect(() => {
        dispatch(getComments());
    }, [])

    return (
        <div>
            {comments.map(comment => (
                <h1 key={comment.id}>{comment.name}</h1>
            ))}
        </div>
    )
}
