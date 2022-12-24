import axios from "axios";

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */

const getAPiUrl = () => {
    return 'https://www.instagram.com/api/v1/users/web_profile_info/';
}

export default async function requestApi(url, options) {
  const response = await axios({
    method: options?.method,
    url: `${getAPiUrl() + url}`,
    data: options.data,
    headers: {
      "Content-Type":"application/json",
      "x-csrftoken": "O3R8LdOVAIs0ZqoE2tYD4vHDFigVftun",
      "x-asbd-id": "198387",
      "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 105.0.0.11.118 (iPhone11,8; iOS 12_3_1; en_US; en-US; scale=2.00; 828x1792; 165586599)"
    }
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log('error', err);
    });
  return response;
}
