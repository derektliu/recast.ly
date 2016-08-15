var searchYouTube = ({key, query, max = 5}, callback) => {

  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video', 
    videoEmbeddable: 'true'
  })
  .done(({items}) => {
    if (callback) {
      callback(items);
    }
  })
  .fail(({responseJSON}) => {
    responseJSON.error.errors.forEach((err) =>
      console.error(err)
    );
  });
};

//   $.ajax({
//     url: 'https://www.googleapis.com/youtube/v3/search',
//     type: 'GET',
//     data: { key: key,
//             q: query,
//             maxResults: max,
//             type: 'video', 
//             part: 'snippet',
//             videoEmbeddable: 'true'},
//     success: function({items}) {
//       if (callback) {
//         callback(items);
//       }
//     },
//     error: function(error) {
//       console.log('error!');
//     }
//   });
// };

window.searchYouTube = searchYouTube;
