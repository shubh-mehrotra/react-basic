function service() {
    const getAllComments = () => {
        return fetch("https://jsonplaceholder.typicode.com/comments")
        .then(res => res.json())
        .then(data => data)
        .catch(error => error)
    }

    return {
        getAllComments
    }
}

export const commentService = service();