import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    username: "@avinash17",
    body: "Teach me how you debug stuff without crying, seriously. I open DevTools and get anxiety.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    username: "@krishna06",
    body: "Bro, tell me the truth… are you actually studying for UPSC or just using it as an excuse to ghost everyone?",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    username: "@avinash17",
    body: "Your UI is clean, but your variable names... bro, what is temp2finalFixed? 💀",
    img: "https://avatar.vercel.sh/john",
  },
  {
    username: "@vivek04",
    body: "Bro be like ‘it’s just a classification task’ and then drops a 400-line PyTorch script 😭",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    username: "@parth08",
    body: "I saw your charts and I still don't know if you're a genius or just addicted to gambling…",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    username: "@krishna06",
    body: "You left the startup grind for SSC prep… proud of you, but damn, I didn’t see that plot twist coming 📚.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  username,
  body,
}: {
  img: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-48 mb-2 w-72 cursor-pointer overflow-hidden rounded-2xl border p-8",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <p className="text-xs font-medium dark:text-white/60">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-md">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:25s]">
        {firstRow.map((review, idx) => (
          <ReviewCard key={`msg-${idx}`} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:25s]">
        {secondRow.map((review, idx) => (
          <ReviewCard key={`msg-${idx}`} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
