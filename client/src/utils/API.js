import axios from "axios";

export default {
    getAppts: function (params) {
        return axios.get("/api/appointments", params)
    },
    saveAppointment: function (appointmentData) {
        return axios.post("/api/appointments", appointmentData);
    },
    createProvider: function (providerData) {
        return axios.post("/api/provider", providerData);
    },
    createClient: function (clientData) {
        return axios.post("/api/client", clientData);
    },
    getIsProvider: function (id) {
        return axios.get("/api/provider/" + id);
    },
    getProviderInfo: function (id) {
        return axios.get("api/provider/" + id);
    },
    getIsClient: function (id) {
        return axios.get("/api/client/" + id);
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