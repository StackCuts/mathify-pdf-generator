import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "../../../components/mdx";

export default function MissionLogPage() {
  const filePath = path.join(
    process.cwd(),
    "src/content/volume-1/mission-log.mdx",
  );
  const source = fs.readFileSync(filePath, "utf8");

  return (
    <main className="max-w-4xl mx-auto p-8 bg-white print:p-0 print:max-w-none">
      <div className="prose prose-lg max-w-none prose-slate">
        <MDXRemote source={source} components={mdxComponents} />
      </div>
    </main>
  );
}
