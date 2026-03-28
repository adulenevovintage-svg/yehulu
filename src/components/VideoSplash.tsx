import { useEffect, useRef } from 'react';

interface VideoSplashProps {
  onVideoEnd: () => void;
  videoUrl: string;
}

const VideoSplash = ({ onVideoEnd, videoUrl }: VideoSplashProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video play failed:", error);
      });
    }
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        onEnded={onVideoEnd}
        muted
        playsInline
        autoPlay
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button 
        onClick={onVideoEnd}
        className="absolute bottom-8 right-8 bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full backdrop-blur-md transition-all text-sm font-medium border border-white/20"
      >
        Skip Intro
      </button>
    </div>
  );
};

export default VideoSplash;
