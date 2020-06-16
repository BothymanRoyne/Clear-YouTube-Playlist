var qs = $$;
var getVideo = () => qs('.ytd-playlist-video-list-renderer button')[0];

function removeVideo()
{
    var video = getVideo();
    if (video)
    {
        video.click();
        setTimeout(function() {
            qs('iron-dropdown span')[0].click();            
            if(getVideo())
            {
                setTimeout(removeVideo, 100);
            }        
        }, 100);
    }
}
removeVideo();