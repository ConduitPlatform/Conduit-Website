import { ConduitMark } from "@/components/brand/brand-logo";

export default function DocsLoading() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center">
      <ConduitMark loading size={40} />
    </div>
  );
}
