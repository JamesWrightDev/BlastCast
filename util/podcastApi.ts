const BASE_URL:string = "https://itunes.apple.com/search?media=podcast";

const fetchFeeds = (term:string) => {
  let endpoint:string = `${BASE_URL}&term=${term}`

  fetch(endpoint)
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    return json;
  })
}

export default fetchFeeds;