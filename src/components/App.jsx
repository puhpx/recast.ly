// import Search from '../../src/components/Search.js';
// import VideoList from '../../src/components/VideoList.js';
// import VideoPlayer from '../../src/components/VideoPlayer.js';
// import exampleVideoData from '../../src/data/exampleVideoData.js';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     // console.log(props);
//   }

//   render() {
//     console.log('exa', exampleVideoData);
//     return (
//       <div>
//         <nav className="navbar">
//           <div className="col-md-6 offset-md-3">
//             <div><h5><em>search</em> view goes here</h5></div>
//           </div>
//         </nav>
//         <div className="row">
//           <div className="col-md-7">
//             <div><h5><em>videoPlayer</em> view goes here</h5></div>
//           </div>
//           <div className="col-md-5">
//             <div><h5><em>videoList</em> test </h5></div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }





var App = () => (
  <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <div><h5><em>search</em> view goes here</h5></div>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <div><h5><em>videoPlayer</em> view goes here</h5></div>
      </div>
      <div className="col-md-5">
        <div><h5><em>videoList</em> will this work</h5></div>
      </div>
    </div>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
