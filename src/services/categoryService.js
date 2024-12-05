import axios from "axios"

class categoryService {
     getCategoriesAll() {
        return axios.get(`http://localhost:8080/api/categories/getall`)
    }

    getCategoryById(categoryId) {
        return axios.get(`http://localhost:8080/api/categories/getById?categoryId=${categoryId}`)
    }

    getCategoryByTechnique(categoryTechnique) {
        return axios.get(`http://localhost:8080/api/categories/getByCategoryTechnique?categoryId=${categoryTechnique}`)
    }

    
}

export default new categoryService();