// TODO: Render the `App` component to the DOM
ReactDOM.render(<App
  searchYouTube={searchYouTube}
  detailsYouTube={detailsYouTube}
  APIKey={window.YOUTUBE_API_KEY}
  />, document.getElementById('app'));