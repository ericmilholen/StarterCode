// [IMPORT] //
import axios from 'axios'


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
    s_home,
}
