function fetchImages(name, page) {
   const API = {
       KEY_API: '29396920-d4426056c3f6851287cd3980f',
       BASE_URL: 'https://pixabay.com/api/',
       per_page: 12,
       image_type: 'photo',
       orientation: 'horizontal',
   }
 


 const searchURL = `${API.BASE_URL}?q=${name}&page=${page}&key=${API.KEY_API}&image_type=${API.image_type}&orientation=${API.orientation}&per_page=${API.per_page}`;

   return fetch(searchURL)
     .then(response => {
       if (response.ok) {
         return response.json();
       }
       return Promise.reject(new Error('Nothing !'));
     })
}


export const API = {
 fetchImages
};
