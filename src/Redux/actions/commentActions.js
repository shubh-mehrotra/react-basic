import { commentService } from "../../services/comment.service";

export const TEST_VALUE = "TEST_VALUE";
export const SET_COMMENTS = "SET_COMMENTS";

export function getComments() {
    return async (dispatch) => {
        const comments = await commentService.getAllComments();

        dispatch(setComments(comments));
    }
}

export const setComments = (comments = []) => {
    return {
        type: SET_COMMENTS,
        payload: comments,
    }
}