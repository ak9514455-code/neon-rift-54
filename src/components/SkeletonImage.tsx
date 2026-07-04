import { useState } from "react";
import { cn } from "@/lib/utils";

type SkeletonImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

export function SkeletonImage({
  className,
  onLoad,
  onError,
  alt = "",
  style,
  ...props
}: SkeletonImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <div
          className="skeleton absolute inset-0 z-10"
          aria-hidden="true"
        />
      )}
      <img
        {...props}
        alt={alt}
        className={cn(
          "h-full w-full object-cover transition-opacity duration-500",
          className
        )}
        style={{ ...style, opacity: loaded ? undefined : 0 }}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
        onError={(e) => {
          setLoaded(true);
          onError?.(e);
        }}
      />
    </>
  );
}
