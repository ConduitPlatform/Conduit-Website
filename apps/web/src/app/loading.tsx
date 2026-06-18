import { ConduitMark } from "@/components/brand/brand-logo";

export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <ConduitMark loading size={48} />
    </div>
  );
}
