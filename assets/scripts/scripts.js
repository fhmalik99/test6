const gifSpace = document.querySelector('.gif-container');
const btn = document.querySelector('.btn-container');

async function birthdayGif() {
  try {
    const response = await fetch('https://api.giphy.com/v1/gifs/random?api_key=6nEJCRS2EJefRHlOFzA0qLjJG1gbkXvQ&tag=birthday&rating=G'); // This sends the request
    if (response.ok) { // This handles a successful response
      let jsonResponse = await response.json();
      gifSpace.innerHTML = `<img src="${jsonResponse.data.image_url}">`;
      return jsonResponse;
    }
    throw new Error('Request failed!');
  }
  catch (error) {
    console.log(error);
  }
};

birthdayGif();