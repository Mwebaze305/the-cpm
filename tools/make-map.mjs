// Builds the static SVG map for The CPM (Natural Earth data, public domain).
// To rebuild: npm install d3-geo@3 topojson-client@3 world-atlas@2, then run `node make-map.mjs` in this folder
// and paste map.svg.html into the map section of index.html (label positions are printed to labels.json).
import fs from "node:fs";
import { geoNaturalEarth1, geoPath, geoArea } from "d3-geo";
import { feature, mesh, merge } from "topojson-client";

const topo = JSON.parse(fs.readFileSync("node_modules/world-atlas/countries-110m.json", "utf8"));
const W = 1000;

// Great Lakes and ASEAN members (ISO 3166 numeric)
const GL = ["800", "180", "646", "108", "728", "404", "834"];
const SEA = ["096", "116", "360", "418", "458", "104", "608", "702", "764", "626", "704"];

// Frame: Atlantic coast of Africa to the western Pacific
const frame = { type: "MultiPoint", coordinates: [[-18, -36], [158, -36], [-18, 46], [158, 46], [70, 47], [70, -38]] };
const proj = geoNaturalEarth1().rotate([-70, 0]).fitWidth(W, frame);
const path0 = geoPath(proj);
const [[x0, y0], [x1, y1]] = path0.bounds(frame);
const H = Math.round(y1 - y0);
proj.translate([proj.translate()[0] - x0, proj.translate()[1] - y0]).clipExtent([[0, 0], [W, H]]);
const path = geoPath(proj).digits(1);

const countries = topo.objects.countries;
const geoms = countries.geometries;
const landPath = path(merge(topo, geoms));
const bordersPath = path(mesh(topo, countries, (a, b) => a !== b));
const glPath = path(merge(topo, geoms.filter(g => GL.includes(g.id))));
const seaPath = path(merge(topo, geoms.filter(g => SEA.includes(g.id))));
const glBorders = path(mesh(topo, countries, (a, b) => a !== b && GL.includes(a.id) && GL.includes(b.id)));
const seaBorders = path(mesh(topo, countries, (a, b) => a !== b && SEA.includes(a.id) && SEA.includes(b.id)));
const missing = [...GL, ...SEA].filter(id => !geoms.some(g => g.id === id));

const line = coords => path({ type: "LineString", coordinates: coords });
const poly = coords => path({ type: "Polygon", coordinates: [coords] });

const whiteNile = [[33.2,0.45],[33.0,1.3],[32.3,1.6],[31.5,2.2],[32.06,3.6],[31.6,4.85],[31.55,6.2],[31.4,7.5],[30.9,8.7],[30.5,9.5],[31.65,9.53],[32.2,11.0],[32.7,13.2],[32.5,15.6],[33.4,17.0],[34.0,17.7],[33.3,19.5],[32.4,18.9],[31.6,18.1],[30.48,19.17],[30.4,20.5],[31.35,21.8],[32.9,24.1],[32.6,25.7],[31.2,27.2],[31.25,30.05],[30.4,31.45]];
const blueNile = [[37.3,11.9],[38.0,10.4],[36.4,10.2],[35.1,11.2],[34.4,11.8],[33.6,13.5],[32.5,15.6]];
const mekong = [[94.6,33.4],[96.5,32.2],[97.2,31.1],[98.6,29.0],[98.9,27.5],[99.2,26.0],[100.2,24.5],[100.8,22.0],[100.1,20.35],[100.6,20.1],[102.13,19.89],[101.4,18.2],[102.6,17.97],[104.0,17.9],[104.78,17.4],[105.0,16.4],[105.8,15.1],[106.0,13.5],[106.0,12.5],[104.93,11.56],[105.5,10.6],[106.4,9.8],[106.7,9.5]];
const victoria = [[33.2,0.45],[34.1,0.3],[34.1,-0.1],[34.8,-0.35],[34.6,-1.0],[33.9,-1.5],[33.7,-2.2],[33.1,-2.6],[32.4,-2.5],[31.8,-1.9],[31.7,-1.0],[31.8,-0.3],[32.4,0.2],[33.2,0.45]];
const tanganyika = [[29.2,-3.4],[29.3,-4.5],[29.6,-5.6],[29.4,-6.4],[29.9,-7.4],[30.4,-8.0],[30.8,-8.8],[31.2,-8.6],[30.8,-7.6],[30.4,-6.8],[29.9,-6.0],[29.8,-5.0],[29.5,-4.0],[29.4,-3.3],[29.2,-3.4]];
// polygons are wound clockwise for d3 (exterior); reverse if needed
const lakePath = c => { const g = { type: "Polygon", coordinates: [c] }; return geoArea(g) > 2 * Math.PI ? poly([...c].reverse()) : poly(c); };

const capitals = {
  gl: [[32.58,0.35],[15.27,-4.33],[30.06,-1.95],[29.93,-3.43],[31.58,4.85],[36.82,-1.29],[35.74,-6.17]],
  sea: [[114.94,4.94],[104.92,11.56],[106.85,-6.21],[102.63,17.97],[101.69,3.14],[96.13,19.76],[120.98,14.6],[103.82,1.35],[100.5,13.75],[125.57,-8.56],[105.85,21.03]]
};

// Link across the Indian Ocean, from Lake Victoria to the lower Mekong
const a = proj([32.6, -1.0]), b = proj([104.5, 12.8]), c = proj([70, -22]);
const arc = `M${a[0].toFixed(1)},${a[1].toFixed(1)} Q${c[0].toFixed(1)},${c[1].toFixed(1)} ${b[0].toFixed(1)},${b[1].toFixed(1)}`;

const eqY = proj([70, 0])[1];
const pct = (lon, lat) => { const p = proj([lon, lat]); return { x: +(p[0] / W * 100).toFixed(2), y: +(p[1] / H * 100).toFixed(2) }; };
const labels = {
  greatlakes: pct(27, -21),
  sea: pct(112, -16.5),
  nile: pct(35, 21),
  mekong: pct(105, 28),
  ocean: pct(72, -30),
  equator: pct(-8, 0)
};

const dots = (list, cls) => list.map(([lon, lat]) => { const [x, y] = proj([lon, lat]); return `<circle class="${cls}" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2.6"></circle>`; }).join("");

const svg = `<svg class="world" viewBox="0 0 ${W} ${H}" role="img" aria-label="World map highlighting the Great Lakes countries of Africa and the countries of Southeast Asia, with the Nile and the Mekong, linked across the Indian Ocean" data-i18n-attr="aria-label:map.aria">
          <rect class="sea-bg" width="${W}" height="${H}"></rect>
          <line class="equator" x1="0" y1="${eqY.toFixed(1)}" x2="${W}" y2="${eqY.toFixed(1)}"></line>
          <path class="land" d="${landPath}"></path>
          <path class="borders" d="${bordersPath}"></path>
          <path class="region" d="${glPath}"></path>
          <path class="region" d="${seaPath}"></path>
          <path class="region-borders" d="${glBorders}"></path>
          <path class="region-borders" d="${seaBorders}"></path>
          <path class="lake" d="${lakePath(victoria)}"></path>
          <path class="lake" d="${lakePath(tanganyika)}"></path>
          <path class="river" d="${line(whiteNile)}"></path>
          <path class="river river-minor" d="${line(blueNile)}"></path>
          <path class="river" d="${line(mekong)}"></path>
          <path class="route" d="${arc}" pathLength="1"></path>
          <g class="capitals">${dots(capitals.gl, "cap")}${dots(capitals.sea, "cap")}</g>
          <circle class="node" cx="${a[0].toFixed(1)}" cy="${a[1].toFixed(1)}" r="6"></circle>
          <circle class="node" cx="${b[0].toFixed(1)}" cy="${b[1].toFixed(1)}" r="6"></circle>
        </svg>`;

fs.writeFileSync("map.svg.html", svg);
fs.writeFileSync("labels.json", JSON.stringify({ W, H, labels }, null, 1));
console.log("size", svg.length, "H", H, "missing", missing, labels);
