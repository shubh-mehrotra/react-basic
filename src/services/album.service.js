function service(params) {
    const getAlbums = () => {
        return fetch("https://jsonplaceholder.typicode.com/albums")
        .then(res => res.json())
        .then(data => data)
        .catch(error => error)
    }

    return {
        getAlbums
    }
}

const albumService = service();

export default albumService;