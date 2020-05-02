const BASE_URL:string = "https://itunes.apple.com/search?media=podcast";

const fetchFeeds = async (term:string) => {
  try{
    let endpoint:string = `${BASE_URL}&term=${term}`;
    const result = await fetch(endpoint);
    const response = await result.json();

    return response
  }catch(error){
    console.log(error);
  }

}

export default fetchFeeds;