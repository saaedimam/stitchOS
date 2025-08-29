import dynamic from "next/dynamic";

const Overview = dynamic(() => import("../../../../../../content/docs/overview.mdx"));

export default function DocsOverview() {
  return (
    <div className="container-narrow py-16 prose prose-invert max-w-none">
      <Overview />
    </div>
  );
}
