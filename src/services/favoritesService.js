import axios from "axios"

export default class favoritesService {
    getByUser(userId) {
        return axios.get(`http://localhost:8080/api/favoritetools/getByUser?id=0&email=string&password=string&userName=string&favoriteTools[favoriteToolsId]=0&favoriteTools[favoriteToolsName]=string&favoriteTools[users]=string`)
    }

    static favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    // Favori ekleme
    static addFavorite(tool) {
      if (!this.isFavorite(tool)) {
        this.favorites.push(tool);
        this.saveFavorites();
      }
    }
  
    // Favoriden çıkarma
    static removeFavorite(tool) {
      this.favorites = this.favorites.filter(item => item !== tool);
      this.saveFavorites();
    }
  
    // Favori araçları kaydetme
    static saveFavorites() {
      localStorage.setItem("favorites", JSON.stringify(this.favorites));
    }
  
    // Bir araç favori mi
    static isFavorite(tool) {
      return this.favorites.includes(tool);
    }
  
    // Favori araçları alma
    static getFavorites() {
      return this.favorites;
    }
    
}
