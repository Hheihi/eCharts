import http from '../utils/http'

/**
 * 
 */
export default {
    getGoodList() {
        return http.get('/goods')
    }
}

