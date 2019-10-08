const getResource = async(url) => {
    const res = await fetch(url);
    if (!res.ok){
        throw new Error(`could not fetch ${url}, recived ${res.status}`)
    }
    const body = await res.json();
    return body;
}
getResource('https://swapi.co/api/people/154545444qwerwqer5')
    .then((body) => {
        console.log(body);
    })
    .catch((err) => {
        console.error('could not fetch', err);
    })