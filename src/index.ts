import * as d3 from "d3";

// Define types for our data
interface Node extends d3.SimulationNodeDatum {
  id: string;
  name: string;
}

interface Link extends d3.SimulationLinkDatum<Node> {
  source: string | Node;
  target: string | Node;
}

// Sample data
const nodes: Node[] = [
  { id: "1", name: "Node A" },
  { id: "2", name: "Node B" },
  { id: "3", name: "Node C" },
  { id: "4", name: "Node D" },
  { id: "5", name: "Node E" },
];

const links: Link[] = [
  { source: "1", target: "2" },
  { source: "1", target: "3" },
  { source: "2", target: "4" },
  { source: "3", target: "4" },
  { source: "4", target: "5" },
];

// Get SVG dimensions
const svgElement = document.getElementById("visualization");
if (!svgElement) {
  throw new Error("Visualization element not found");
}
const width = svgElement.clientWidth || 1200;
const height = svgElement.clientHeight || 600;

// Select SVG
const svg = d3
  .select("#visualization")
  .attr("width", width)
  .attr("height", height);

// Create force simulation
const simulation = d3
  .forceSimulation(nodes)
  .force(
    "link",
    d3
      .forceLink(links)
      .id((d: any) => d.id)
      .distance(100),
  )
  .force("charge", d3.forceManyBody().strength(-300))
  .force("center", d3.forceCenter(width / 2, height / 2))
  .force("collide", d3.forceCollide().radius(40));

// Create links
const link = svg
  .append("g")
  .selectAll("line")
  .data(links)
  .enter()
  .append("line")
  .attr("class", "link")
  .attr("stroke-width", 2);

// Create nodes
const node = svg
  .append("g")
  .selectAll("circle")
  .data(nodes)
  .enter()
  .append("circle")
  .attr("class", "node")
  .attr("r", 30)
  .attr("fill", (d: any, i: number) => {
    const colors = ["#667eea", "#764ba2", "#f093fb", "#4facfe", "#00f2fe"];
    return colors[i % colors.length];
  })
  .call(drag(simulation));

// Create node labels
const labels = svg
  .append("g")
  .selectAll("text")
  .data(nodes)
  .enter()
  .append("text")
  .attr("class", "node-label")
  .text((d: any) => d.name);

// Update positions on simulation tick
simulation.on("tick", () => {
  link
    .attr("x1", (d: any) => d.source.x)
    .attr("y1", (d: any) => d.source.y)
    .attr("x2", (d: any) => d.target.x)
    .attr("y2", (d: any) => d.target.y);

  node.attr("cx", (d: any) => d.x).attr("cy", (d: any) => d.y);

  labels.attr("x", (d: any) => d.x).attr("y", (d: any) => d.y + 5);
});

// Drag functionality
function drag(simulation: d3.Simulation<Node, undefined>) {
  function dragstarted(event: d3.D3DragEvent<SVGCircleElement, Node, Node>) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    event.subject.fx = event.x;
    event.subject.fy = event.y;
  }

  function dragged(event: d3.D3DragEvent<SVGCircleElement, Node, Node>) {
    event.subject.fx = event.x;
    event.subject.fy = event.y;
  }

  function dragended(event: d3.D3DragEvent<SVGCircleElement, Node, Node>) {
    if (!event.active) simulation.alphaTarget(0);
    event.subject.fx = null;
    event.subject.fy = null;
  }

  return d3
    .drag<SVGCircleElement, Node>()
    .on("start", dragstarted)
    .on("drag", dragged)
    .on("end", dragended);
}
