const gifSpace = document.querySelector('.gif-container');
const btn = document.querySelector('.btn-container');

async function birthdayGif() {
  try {
    const response = await fetch('https://api.giphy.com/v1/gifs/random?api_key=GNeXyRWAB7D9CGK8qsM9X214SPFpcXKw&tag=ponies&rating=G'); // This sends the request
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