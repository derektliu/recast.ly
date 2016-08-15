class VideoDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoDetails: ''
    };
  }

  componentDidMount() {
    var options = {
      key: this.props.APIKey,
      id: this.props.id
    };

    this.props.detailsYouTube(options, (newVideo) => {
      this.setState({
        videoDetails: newVideo.snippet.description
      });
    });
  }

  render() {
    return (
    <div className="video-details">{this.state.videoDetails}</div>
    );
  }
}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoDetails.propTypes = {
  details: React.PropTypes.string.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoDetails = VideoDetails;
