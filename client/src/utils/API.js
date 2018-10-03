import axios from "axios";

export default {
    getAppts: function (params) {
        return axios.get("/api/appointments")
    },
    saveAppointment: function (appointmentData) {
        return axios.post("http://localhost:3001/api/appointments", appointmentData);
    },
    createProvider: function (providerData) {
        console.log("api here");
        return axios.post("/api/provider", providerData);
    }
}


// export default {
//   // Gets articles from the NYT API
//   getArticles: function(params) {
//     return axios.get("/api/nyt", { params: filterParams(params) });
//   },
//   // Gets all saved articles
//   getSavedArticles: function() {
//     return axios.get("/api/articles");
//   },
//   // Deletes the saved article with the given id
//   deleteArticle: function(id) {
//     return axios.delete("/api/articles/" + id);
//   },
//   // Saves an article to the database
//   saveArticle: function(articleData) {
//     return axios.post("/api/articles", articleData);
//   }
// };

//, { params: params }