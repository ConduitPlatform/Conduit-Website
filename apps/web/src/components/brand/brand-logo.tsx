import { cn } from "@/lib/utils";

const MARK = "/brand/conduit/mark.svg";
const MARK_LOADING = "/brand/conduit/mark-loading.svg";

type ConduitMarkProps = {
  loading?: boolean;
  className?: string;
  size?: number;
};

export function ConduitMark({ loading = false, className, size = 32 }: ConduitMarkProps) {
  if (loading) {
    return (
      <span
        className={cn("relative inline-flex shrink-0 items-center justify-center overflow-hidden", className)}
        style={{ width: size, height: size }}
        aria-hidden
      >
        <object
          data={MARK_LOADING}
          type="image/svg+xml"
          className="size-full motion-reduce:hidden"
          aria-hidden
        />
        <img
          src={MARK}
          alt=""
          className="hidden size-full object-contain motion-reduce:block"
          aria-hidden
        />
      </span>
    );
  }

  return (
    <span
      className={cn("inline-flex shrink-0 items-center justify-center", className)}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <img src={MARK} alt="" className="size-full object-contain" />
    </span>
  );
}

export function ConduitLogo({
  loading = false,
  className,
  size = 32,
  showLabel = true,
}: ConduitMarkProps & { showLabel?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <ConduitMark loading={loading} size={size} />
      {showLabel && <span className="font-semibold tracking-tight">Conduit</span>}
    </span>
  );
}

/** @deprecated Use ConduitMark */
export const BrandMark = ConduitMark;

/** @deprecated Use ConduitLogo */
export const BrandLogo = ConduitLogo;
