// [IMPORT] //
import axios from 'axios'


async function s_() {
    try {
        const response = await axios.create().get('/pages/')

        return response.data
    }
    catch (err) {
        return err
    }
}

async function s_about() {
    try {
        const response = await axios.create().get('/pages/about')

        return response.data
    }
    catch (err) {
        return err
    }
}


export default {
    s_,
    s_about,
}
