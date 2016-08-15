var detailsYouTube = ({key, id}, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/videos', {
    part: 'snippet',
    key: key,
    id: id,
    type: 'video', 
    videoEmbeddable: 'true'
  })
  .done(({items}) => {
    if (callback) {
      callback(items[0].snippet.description);
    }
  })
  .fail(({responseJSON}) => {
    responseJSON.error.errors.forEach((err) =>
      console.error(err)
    );
  });
};