import type { Video } from "@/lib/projects";

/**
 * A recorded walkthrough in the same window frame as the screenshots. The file only loads when someone presses play
 * (preload none, a poster first), so the page stays light. The videos have captions burned in and no sound.
 */
export function DemoVideo({ video, caption }: { video: Video; caption?: string }) {
  return (
    <figure className="min-w-0">
      <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-[0_24px_48px_-28px_rgb(16_32_27/0.35)]">
        <div className="flex items-center gap-1.5 border-b border-line px-3 py-2.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
        </div>
        <video
          src={video.src}
          poster={video.poster}
          controls
          playsInline
          preload="none"
          width={1920}
          height={1080}
          aria-label={video.title}
          className="block aspect-video h-auto w-full bg-ink"
        />
      </div>
      <figcaption className="mt-3 text-sm text-muted">
        {caption ?? video.title} · {video.duration} · captions on screen, no sound
      </figcaption>
    </figure>
  );
}
