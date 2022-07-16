import Search from '../../src/components/Search.js';
import VideoList from '../../src/components/VideoList.js';
import VideoPlayer from '../../src/components/VideoPlayer.js';
import exampleVideoData from '../../src/data/exampleVideoData.js';
import searchYouTube from '../../src/lib/searchYouTube.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0],
      liveVideos: []
    };
  }
  // this.fetchVideos('cats');

  videoClick(event) {
    for (var i = 0; i < this.state.liveVideos.length; i++) {
      if (this.state.liveVideos[i].snippet.title === event.target.textContent) {
        this.setState({
          currentVideo: this.state.liveVideos[i]
        });
      }
    }
  }
  componentDidMount() {
    this.fetchVideos('cats');
  }

  fetchVideos(search) {
    var cb = (response) => {
      this.setState({
        // isLoading: false,
        liveVideos: response,
        currentVideo: response[0],
      });
    };
    searchYouTube(search, cb);

  }


  render() {

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search func = {this.fetchVideos.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video = {this.state.currentVideo}/>
          </div>
          <div className="col-md-5" onClick={this.videoClick.bind(this)}>
            <VideoList videos = {this.state.liveVideos}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
