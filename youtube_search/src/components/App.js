import React, { useState, useEffect } from 'react';
import VideoSearch from './VideoSearch';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';
import youtube from '../api/youtube';

const App = (props) => {

    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [term, setTerm] = useState('cat videos');

    const onVideoSelect = (video) => {
        setSelectedVideo(video);
    }

    const onSearch = async (term) =>{
        const response = await youtube.get('/search', { params: {q:term}});
        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
    }

    useEffect(() => {
        onSearch(term);
    }, []);

    useEffect(() => {
        onSearch(term);
    }, [term]);

    return(
        <div className="ui grid container">
            <div className="row">
                <div className="column">
                    <VideoSearch onSearch={(term) => setTerm(term) }/>
                </div>                    
            </div>
            <div className="row">
                <div className="ten wide column">
                    <VideoPlayer selectedVideo={selectedVideo} />
                </div>
                <div className="six wide column">
                    <VideoList videos={videos}
                        onVideoSelect={onVideoSelect} />
                </div>
            </div>
        </div>
    )
}

// class App extends React.Component{

//     state = {
//         videos: [],
//         selectedVideo: null,
//         term: 'cat videos'

//     }

//     componentDidMount() {
//         this.onSearch(this.state.term);
//     }

//     componentDidUpdate(prevProps, prevState) {
//         if (this.state.term !== prevState) {
//             this.onSearch(this.state.term);
//         }
//     }

//     onSearch = async (term) =>{
//         const response = await youtube.get('/search', { params: {q:term}})
//         this.setState({
//             videos: response.data.items,
//             selectedVideo: response.data.items[0]
//         });
//     }

//     onVideoSelect = (video) => {
//         this.setState({
//             selectedVideo: video
//         });
//     }

//     render(){
//         return(
//             <div className="ui grid container">
//                 <div className="row">
//                     <div className="column">
//                         <VideoSearch onSearch={(term) => this.setState({ term: term })}/>
//                     </div>                    
//                 </div>
//                 <div className="row">
//                     <div className="ten wide column">
//                         <VideoPlayer selectedVideo={this.state.selectedVideo} />
//                     </div>
//                     <div className="six wide column">
//                         <VideoList videos={this.state.videos}
//                             onVideoSelect={this.onVideoSelect} />
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }



export default App