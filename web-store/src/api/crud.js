export const methods = {
    get(url) {
        return fetch(url).then(data => data.json())
    },
}
