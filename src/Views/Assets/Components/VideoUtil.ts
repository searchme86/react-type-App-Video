import getYouTubeID from 'get-youtube-id';

export const matchYoutubeUrl = (url: string) => {
  const standard =
    /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
  if (url.length > 1) {
  }

  if (url.match(standard)) {
    // return url.match(standard)[1];
    return true;
  }
  return false;
};

export const idOfVideo = getYouTubeID(
  'https://www.youtube.com/watch?v=Rq5SEhs9lws'
);
