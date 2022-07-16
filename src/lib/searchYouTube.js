import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {

  $.ajax({
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    type: 'GET',
    data: { key: YOUTUBE_API_KEY,
      q: query, //<----- searchbar input
      part: 'snippet',
      // maxResults: 3,
      // type: 'video',
      // videoEmbeddable: true,
    },
    contentType: 'application/json',
    success: callback,
    error: function(error) {
      console.error('Request failed: ', error);
    }
  });
};
// searchYouTube('cats');
export default searchYouTube;
