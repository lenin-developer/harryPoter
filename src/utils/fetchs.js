export const get = async (url) => {
    try {
        const res = await fetch(url);
        if (!res.ok) return { ok: false }
        const data = await res.json();
        return { ok: true, data: [...data] }
    } catch (error) {
        console.log("ocurrio un error")
        return { ok: false }
    }
}



export const postFetch = async (url, data) => {
    try {

        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const json = await res.json()
        if (!res?.ok) return {ok: false}
        return json

    } catch (error) {
        console.log("ocurrio un error")
        return {ok: false}
    }
}