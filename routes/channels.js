const config = require('../config/config');
const router = require('express').Router();
const request = require('request');

// Get List from Playlist
router.get('/playlist/:playlist',(req,res)=>{
    let playlist = '';
    let type = req.params.playlist+'';
    switch(type){
        case 'javascript':{
            playlist = config.javascriptPlaylist;
            break;
        }
        case 'swing':{
            playlist = config.swingPlaylist;
            break;
        }
        case 'node':{
            playlist = config.nodePlaylist;
            break;
        }
    }
    request(config.playlist(playlist,config.api_key),(err,response)=>{
        let items = JSON.parse(response.body).items;
        res.render('channel/index',{
            type,
            language:type.slice(0,1).toUpperCase()+type.substring(1),
            section:{
                title:'Introduction',
                items,
            },
        });
    })
});

//Play Video
router.route('/play/:lang/:pos/:id')
    .get((req,res)=>{
        let playlist = '';
        let type = req.params.lang;
        switch(req.params.lang){
            case 'javascript':{
                playlist = config.javascriptPlaylist;
                break;
            }
            case 'swing':{
                playlist = config.swingPlaylist;
                break;
            }
            case 'node':{
                playlist = config.nodePlaylist;
                break;
            }
        }
        request(config.playlist(playlist,config.api_key),(err,response)=>{
            let items = JSON.parse(response.body).items;
            let video = items[req.params.pos];
            res.render('channel/play',{
                video,
                type,
                videoId:req.params.id,
                section:{
                    title:'Introduction',
                    items,
                },
                language:type.slice(0,1).toUpperCase()+type.substring(1),
            });
        })
    })
;

module.exports = router;