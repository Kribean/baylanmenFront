"use client";
import { useRouter } from "next/navigation";
export default function CardPres({
  url,
  alt,
  title,
  colorBgFirstBool,
  pageDirection,
  content,
}) {
  const router = useRouter();
  return (
    <div
      className={`cursor-pointer card w-72 ${
        colorBgFirstBool ? "bg-[#94d5db]" : "bg-[#f2d77c]"
      } lg:w-96 shadow-xl `}
      onClick={() => {
        router.push(pageDirection);
      }}
    >
      <figure>
        <img src={url} alt={alt} />
      </figure>
      <div className="card-body">
        <div className="flex flex-row text-center items-center justify-center">
          <h2 className="card-title">{title}</h2>
        </div>
        <p className="text-sm">{content}</p>
      </div>
    </div>
  );
}
