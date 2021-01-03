// [IMPORT] //
import axios from 'axios'


const authAxios = async () => {
    return axios.create({
        baseURL: '/pages',
        headers: {
            
        }
    })
}


async function s_home() {
    try {
        const response = await axios.create().get('/pages/')

        return response.data
    }
    catch (err) {
        return err
    }
}


export default {
    authAxios,
    s_home,
}