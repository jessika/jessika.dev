import { Sankey } from "../sankey/Sankey";
import { Link, Node } from "../sankey/types";
import sankeyDatas from "./job-search-sankey-data.json";
import { JobSearchSankeyProps } from "./types";

/**
 * Renders a Sankey Diagram of job search events.
 *
 * The diagram data in ./job-search-sankey-data.json is generated using lib/job_search/saneky-data-generator.js.
 */
export default function JobSearchSankey({
  className = "",
  height = 500,
  iterations = 100,
  width = 1024,
}: JobSearchSankeyProps) {
  const { nodes, links }: { nodes: Node[]; links: Link[] } = sankeyDatas;
  return (
    <Sankey
      className={className}
      iterations={iterations}
      nodes={nodes}
      links={links}
      width={width}
      height={height}
      colors={COLORS}
    />
  );
}

const COLORS = [
  // mid aqua
  "rgb(91,144,155)",
  // dark blue
  "rgb(23, 60, 132)",
  // light pink
  //  "rgb(225,175,162)",
  // burnt orange
  "#bf5700",
  // light gold
  "#ffbf69",
  // taupe
  "#ad8980",
  // purple
  "#6b3074",
  // dark aqua
  "#006a89",
  // dark gold
  "#d47d25",
  // dark pink
  "#be5f79",
  // mid aqua
  "rgb(91,144,155)",
];
