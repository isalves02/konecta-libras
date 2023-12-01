import { useState, useEffect } from "react";
import { VideoProps } from "../../../interfaces/GeneralProps";
import uuid from "react-uuid";
import YouTube, { YouTubeProps } from "react-youtube";

export function Video({ url, title }:VideoProps) {
  const [videoID, setVideoID] = useState('')

  useEffect(() => {
    if (url) {
      const getVideoProps = url.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/)
      if (getVideoProps) {
        const videoID = getVideoProps[2]
        setVideoID(videoID)
      }
    }

    const handleResize = () => {
      const iframeProportionHeight = () => {
        const iframe = document.querySelector('iframe')
        const container = document.querySelector('.container-iframe')
        
        if (container && iframe) {
          const proportion = container.clientWidth * 9 / 16;
          iframe.height = `${proportion}`;
        }
      }

      iframeProportionHeight()
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [url])



  const opts: YouTubeProps['opts'] = {
    width: '640',
    height: '702',
    playerVars: {
      modestbranding: 1,
      rel: 0,
      showinfo: 1,
      iv_load_policy: 3,
      controls: 0,
    }
  };


  return (
    <> 
      <div className="container-iframe w-full">
        <YouTube 
          videoId={videoID}
          id={uuid()+title}
          opts={opts}
          iframeClassName="w-full rounded-md"
        />
      </div>
    </>
  )
}