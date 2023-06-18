"use client";
export default function Heading({
  title,
  subtitle,
  center,
  secondary,
  className,
}) {
  return (
    <div
      className={`hero__text ${className}${
        center ? "text-center" : "text-start"
      }`}
    >
      <h2 className={`hero__text-title ${secondary ? "secondary-text" : ""}`}>
        {title}
      </h2>
      <p className={`hero__text-subtitle ${secondary ? "secondary-text" : ""}`}>
        {subtitle}
      </p>
    </div>
  );
}
