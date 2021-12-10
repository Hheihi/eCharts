import http from '../utils/http'

/**
 * 
 */
export default {
    saveOptions(params) {
        return http.post('/saveOptions',params)
    },
    getAllOptions(){
        return http.get('/getAllOptions')
    },
    selectOptions(params){
        return http.post('/selectOption',params)
    },
    deleteOptions(params){
        return http.get('/deleteOptions',params)
    }

}

