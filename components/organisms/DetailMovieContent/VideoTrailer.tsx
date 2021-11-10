interface VideoTrailerProps {
    trailer: {
        key: string;
    }
}
export default function VideoTrailer(props: VideoTrailerProps) {
  const { trailer } = props;

  const onClick = () => {
    document.querySelector('.overlay')?.classList.remove('active');
    const videoTrailer = document.querySelector<any>('.video-trailer')!;
    videoTrailer.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
  };

  return (
    <div className="trailer-wrapper">
      <button type="button" onClick={onClick}>
        <i className="fa fa-times" />
      </button>
      <h5 style={{ color: '#fff' }}>Video Trailer</h5>
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${trailer?.key}?version=3&enablejsapi=1`}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
        className="video-trailer"
      />
    </div>
  );
}
