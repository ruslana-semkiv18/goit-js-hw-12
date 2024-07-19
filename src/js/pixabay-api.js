const key = "44916232-ab67e58f2cd7c4a8ed03790be";
const url = "https://pixabay.com";

axios.defaults.baseURL = url;

export function getGallery({q="", page = 1, per_page = 15}={}, loader) {
  loader.style.display = "block"; 
    return axios
    .get("api", {
      params: {
        key,
        q,
        page,
        per_page,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
      },
    }) 
      .then(({ data }) => data);   

}
