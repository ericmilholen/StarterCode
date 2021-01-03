// [IMPORT] //
import axios from 'axios'


const authAxios = async () => {
    return axios.create({
        baseURL: '/pages',
    })
}


async function s_home() {
    try {
        const returned = await authAxios.get('/')

        return (returned.data)
    } catch (err) {
        return err
    }
}


export default {
    authAxios,
    s_home,
}