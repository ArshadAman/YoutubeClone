const Endpoints = {
    suggestedVideos: '/related', //It will have a related video id
    search: '/search', //It has a query paramenter
    videoComments: '/commentThreads',
    videoDetail: '/video',
    channelDetails: '/channels',
    channelVideos: '/search', //Accepts channel id as patamenter
    playlistVideos: '/playlistItems', //Accepts playlist id as patamenter
    playlistDetails: '/playlists'
}

export default Endpoints;