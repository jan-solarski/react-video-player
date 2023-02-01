import { Player } from "./components/Player";
import { VideoPlayer } from "./components/Video";

function App() {
  return (
    <div className="App">
      <Player src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
      {/*<VideoPlayer hotspots={[]} />*/}
    </div>
  );
}

export default App;
