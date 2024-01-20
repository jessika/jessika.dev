/**
 * A node in the Sankey diagram.
 *
 * <p>name: Unique name to identify this node. Display name is also generated from this.
 * <p>category: All nodes with the same category will have the same color.
 * <p>count: Count that will be displayed next to the display name for this node.
 *
 * @typedef {!{
 *     name: string,
 *     category: string,
 *     count: number,
 * }}
 */
let Node;

/**
 * A link in the Sankey diagram. Connects two nodes.
 * <p>source: Node name of the link's source
 * <p>target: Node name of the link's target
 * <p>value: Weighted value of this link.
 *
 * @typedef {!{
 *     source: string,
 *     target: string,
 *     value: number,
 * }}
 */
let Link;

module.exports = { Node, Link };
