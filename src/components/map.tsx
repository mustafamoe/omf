import { DetailedHTMLProps, HTMLAttributes } from "react";

export function Map({
  src,
  ...props
}: { src: string } & DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) {
  return (
    <div {...props}>
      <iframe
        src={src}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full border-none"
      />
    </div>
  );
}
