import axios from 'axios';

//api calls

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 5,
        key: 'AIzaSyDup-8l0x-XGGU1Tm5MqLs5F_HtLSgsJ0U'
    }

});

