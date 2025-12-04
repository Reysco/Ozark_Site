export function Button({
  className = "",
  variant = "default",
  size = "md",
  asChild = false,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 hover-lift";

  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-500",
    outline: "border border-slate-500 text-white hover:bg-slate-800",
  };

  const sizes = {
    sm: "h-8 px-3 text-xs",
    md: "h-10 px-4 text-sm",
    lg: "h-12 px-6 text-base",
  };

  const Comp = asChild ? "span" : "button";

  return (
    <Comp
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}
