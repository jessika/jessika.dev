import { scaleOrdinal } from "d3";
import {
  SankeyLink,
  SankeyNode,
  sankey,
  sankeyLinkHorizontal,
  sankeyLeft,
} from "d3-sankey";
import { Node, Link } from "./types";
import { useEffect, useState } from "react";
import { registerColorSchemeListener } from "../../lib/color-schemes";

/**
 * Renders a Sankey diagram using d3-sankey.
 */
export function Sankey({
  className = "",
  iterations = 10,
  width,
  height,
  nodes,
  links,
  colors,
}: {
  className?: string;
  iterations?: number;
  width: number;
  height: number;
  nodes: Node[];
  links: Link[];
  /** Colors that are assigned per node category */
  colors: string[];
}) {
  const [textColor, setTextColor] = useState("");
  useEffect(() => {
    return registerColorSchemeListener((newColorScheme) => {
      // Use setTimeout to allow the elements to update color scheme first
      setTimeout(() => {
        if (getComputedStyle) {
          const style = getComputedStyle(document.body);
          const bodyColor = style.getPropertyValue("--bs-body-color");
          setTextColor(bodyColor);
        }
      });
    });
  }, []);
  const allGroups = Array.from(new Set(nodes.map((d) => d.category))).sort();
  const colorScale = scaleOrdinal<string>().domain(allGroups).range(colors);

  const sankeyGenerator = sankey<Node, Link>()
    .nodeSort((a, b) => 0)
    .nodeWidth(20)
    .nodePadding(36)
    .extent([
      [MARGIN_X, MARGIN_Y],
      // Tweak the number to account for far-right node labels
      [width - 80, height - MARGIN_Y],
    ])
    // Use the order that nodes are in the props list
    // Tweak iterations if the links look weird
    .iterations(iterations)
    .nodeAlign(sankeyLeft)
    .nodeId((node) => node.name);

  const {
    nodes: sankeyNodes,
    links: sankeyLinks,
  }: { nodes: SankeyNode<Node, Link>[]; links: SankeyLink<Node, Link>[] } =
    sankeyGenerator({
      nodes,
      links,
    });

  const allNodes = sankeyNodes.map((node) => {
    return (
      <g key={node.index}>
        <rect
          height={node.y1! - node.y0!}
          width={sankeyGenerator.nodeWidth()}
          x={node.x0}
          y={node.y0}
          fill={colorScale(node.category)}
          fillOpacity={1}
          rx={0.9}
        />
      </g>
    );
  });
  const allLinks = sankeyLinks.map((link, i) => {
    const linkGenerator = sankeyLinkHorizontal();
    const path = linkGenerator(link) || undefined;
    return (
      <path
        key={i}
        d={path}
        stroke={colorScale((link.source as Node).category)}
        fill="none"
        strokeOpacity={0.35}
        strokeWidth={link.width}
      />
    );
  });
  const allLabels = sankeyNodes.map((node, i) => {
    return (
      <text
        key={i}
        x={node.x1! + 6}
        y={(node.y1! + node.y0!) / 2}
        dy="0.35rem"
        fill={textColor}
        textAnchor="start"
        fontSize={12}
      >
        {getNodeLabel(node)}
      </text>
    );
  });
  return (
    <div className={className}>
      <svg width={width} height={height}>
        {allLinks}
        {allNodes}
        {allLabels}
      </svg>
    </div>
  );
}

function getNodeLabel(node: Node) {
  const nodeParts = node.name.split(";");
  return `${nodeParts[nodeParts.length - 1]}: ${node.count}`;
}

const MARGIN_Y = 25;
const MARGIN_X = 5;
