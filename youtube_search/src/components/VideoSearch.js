import React, { useState, useRef, useEffect } from 'react';
// import youtube from '../api/youtube';

// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=[YOUR_API_KEY] HTTP/1.1

const VideoSearch = (props) => {

    const [searchTerm, setSearchTerm] = useState('cat videos');

    const inputEl = useRef(null);

    const onSubmit = async (evt) => {
        evt.preventDefault();
        props.onSearch(searchTerm);
    }

    useEffect(() => {
        inputEl.current.focus();
    });

    return(
        <div>
            <form className="ui form" onSubmit={onSubmit}>
                <div className="field">
                    <input ref={inputEl} value={searchTerm} type="text" 
                        placeholder="Search videos..." 
                        onChange={ (e) => setSearchTerm(e.target.value) } />
                </div>                    
            </form>
            
        </div>
    )
}

// class VideoSearch extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             searchTerm: ''
//         }

        
//     }

//     onSearchTermChange = (evt) => {
//         const term = evt.target.value;

//         this.setState({
//             searchTerm: term
//         });
//     }

//     onSubmit = async (evt) => {
//         evt.preventDefault();
//         this.props.onSearch(this.state.searchTerm);
//     }

//     render() {
//         return (
//             <div>
//                 <form className="ui form" onSubmit={this.onSubmit}>
//                     <div className="field">
//                         <input value={this.state.searchTerm} type="text" 
//                             placeholder="Search videos..."
//                             onChange={this.onSearchTermChange} />
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }


export default VideoSearch