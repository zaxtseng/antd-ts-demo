import { get } from '../utils/request'

const api = {
    getProductList() {
        return get('/product/list')
    }
}
export default api