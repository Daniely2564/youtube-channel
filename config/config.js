module.exports = {
    api_key : `AIzaSyCJHEr0WzyKMMw58r3sb24K9mDw8LyP8ZI`,
    playlist : function(playlist,apikey){
        return `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=${playlist}&key=${apikey}`
    },
    javascriptPlaylist : `PLHGvDasahwZNNxNruv6jnbOi4XYgczsRj`,
    swingPlaylist: `PLHGvDasahwZPXuHYGhdMhU6Csjz1CjOi9`,
    mailer:{
        id:'danieltwlc@gmail.com',
        pass:'Qwelmm1!',
    }
}