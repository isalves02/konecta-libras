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


  const handleHidePlaceholder = () => {
    document.querySelector('.placeholder')?.classList.add('hidden');
  }

  const opts: YouTubeProps['opts'] = {
    width: '640',
    height: '702',
    playerVars: {
      rel: 0,
      showinfo: 1,
      controls: 0,
      modestbranding: 1,
      iv_load_policy: 3,
      origin: 'http://localhost:5173/',
    }
  };


  return (
    <> 
      <div className="container-iframe w-full">
        <div className="placeholder w-full h-screen bg-blue-950 rounded-md" />

        <YouTube 
          videoId={videoID}
          id={uuid()+title}
          opts={opts}
          onReady={() => handleHidePlaceholder()}
          iframeClassName="w-full rounded-md"
        />
      </div>
    </>
  )
}