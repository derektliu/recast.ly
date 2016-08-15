class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      currentVideo: null,
      currentVideoDetails: ''
    };
  }

  componentDidMount() {
    this.onYouTubeSearch('kobe highlights');
  }

  onVideoChange(video) {
    var options = {
      key: this.props.APIKey,
      id: video.id.videoId
    };

    this.props.detailsYouTube(options, (videoDetails) => {
      this.setState({
        currentVideoDetails: videoDetails
      });
    });
  }

  changeVideoOnClick(newVideo) {
    this.onVideoChange(newVideo);
    this.setState({
      currentVideo: newVideo
    });
  }

  onYouTubeSearch(query) {
    var options = { 
      key: this.props.APIKey,
      query: query
    };

    this.props.searchYouTube (options, (videoData) => {
      this.onVideoChange(videoData[0]);
      this.setState({
        videos: videoData,
        currentVideo: videoData[0]
      });
    });
  }

  render() {
    return (
      <div>
        <Nav onYouTubeSearch={ this.onYouTubeSearch.bind(this) }/>
        <div className="col-md-7">
          <VideoPlayer
            video={ this.state.currentVideo }
            details={ this.state.currentVideoDetails } />
        </div>
        <div className="col-md-5">
          <VideoList
            videos={ this.state.videos }
            changeVideoOnClick={ this.changeVideoOnClick.bind(this) } />
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
