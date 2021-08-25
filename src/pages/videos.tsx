import videos from "../../videos.json";

export default function Videos() {
  return (
    <div className="space-y-12">
      <div>{videos.body}</div>

      <div className="grid gid-cols-1 md:grid-cols-2 gap-4">
        {videos.video_urls.map((video) => (
          <div className="mb-8">
            <div
              className="youtube-container mb-6"
              dangerouslySetInnerHTML={{
                __html: video.url,
              }}
            />
            <div>{video.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
