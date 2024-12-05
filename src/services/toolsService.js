import axios from "axios"

export default class toolsService {
    getToolsAll() {
        return axios.get(`http://localhost:8080/api/tools/getall`)
    }

    getQuestionByLevel(level,userID) {
        return axios.get(`http://localhost:8080/api/questions/getByLevel?questionLevel=${level}&userId=${userID}`)
    }

    
}