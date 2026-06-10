const TOPICS = {
  magma: {
    eyebrow: "Process 01",
    title: "Magma rises from the mantle",
    body: `
      <p>Magma begins as molten rock in the upper mantle and lower crust, typically at depths of 20–40 km beneath the surface. As tectonic plates shift, pressure decreases and rock begins to melt.</p>
      <div class="modal-facts">
        <div class="fact"><strong>1,200°C+</strong><span>Typical magma temperature</span></div>
        <div class="fact"><strong>2.5 g/cm³</strong><span>Magma is less dense than solid rock</span></div>
        <div class="fact"><strong>Buoyancy</strong><span>Drives magma upward through fractures</span></div>
      </div>
      <h3>Key mechanisms</h3>
      <ul>
        <li><strong>Decompression melting</strong> — magma forms where pressure drops, such as at mid-ocean ridges.</li>
        <li><strong>Flux melting</strong> — water lowers the melting point of rock above subduction zones.</li>
        <li><strong>Conduit systems</strong> — magma travels through dikes, sills, and vertical pipes toward the surface.</li>
      </ul>
      <p class="modal-example"><strong>Real-world example:</strong> Hawaii's Kīlauea sits over a mantle hotspot, producing a steady supply of basaltic magma that has erupted almost continuously for decades.</p>
    `
  },
  gas: {
    eyebrow: "Process 02",
    title: "Dissolved gas builds explosive pressure",
    body: `
      <p>As magma ascends, decreasing pressure allows dissolved gases — mainly water vapor, carbon dioxide, and sulfur dioxide — to expand rapidly. This is similar to opening a shaken soda bottle.</p>
      <div class="modal-facts">
        <div class="fact"><strong>5–10%</strong><span>Gas can make up this much of magma by volume</span></div>
        <div class="fact"><strong>Vesicles</strong><span>Gas bubbles trapped in cooled lava</span></div>
        <div class="fact"><strong>Viscosity</strong><span>Thick magma traps more gas</span></div>
      </div>
      <h3>Why pressure matters</h3>
      <ul>
        <li>High gas content + high viscosity = <strong>explosive eruptions</strong> (e.g., Mount St. Helens).</li>
        <li>Low gas content + low viscosity = <strong>effusive lava flows</strong> (e.g., Hawaiian shield volcanoes).</li>
        <li>Gas release can be detected by volcanologists as a warning sign before eruptions.</li>
      </ul>
      <p class="modal-example"><strong>Real-world example:</strong> The 1980 Mount St. Helens eruption released gas and ash at speeds exceeding 480 km/h, triggered by a massive landslide that suddenly depressurized the magma chamber.</p>
    `
  },
  ash: {
    eyebrow: "Process 03",
    title: "Ash, lava, and pyroclastic material escape",
    body: `
      <p>When pressure exceeds the strength of overlying rock, the volcano erupts. The style of eruption depends on magma composition, gas content, and vent geometry.</p>
      <div class="modal-facts">
        <div class="fact"><strong>30 km</strong><span>Ash plumes can reach this height</span></div>
        <div class="fact"><strong>Tephra</strong><span>Any fragmented volcanic material</span></div>
        <div class="fact"><strong>Lahar</strong><span>Mudflow triggered by ash + water</span></div>
      </div>
      <h3>Eruption products</h3>
      <ul>
        <li><strong>Lava flows</strong> — molten rock that spreads across the landscape, building new land.</li>
        <li><strong>Ash fall</strong> — fine particles that can travel thousands of kilometers and disrupt aviation.</li>
        <li><strong>Pyroclastic flows</strong> — superheated clouds of gas and rock moving at hurricane speeds.</li>
      </ul>
      <p class="modal-example"><strong>Real-world example:</strong> Iceland's Eyjafjallajökull (2010) produced an ash cloud that grounded over 100,000 flights across Europe, demonstrating how even moderate eruptions can have global impact.</p>
    `
  },
  types: {
    eyebrow: "Extended module",
    title: "Major volcano types",
    body: `
      <p>Volcanoes are classified by their shape, eruption style, and the tectonic setting in which they form. Each type tells a story about the magma beneath.</p>
      <div class="modal-facts">
        <div class="fact"><strong>Shield</strong><span>Broad, gentle slopes — Hawaii</span></div>
        <div class="fact"><strong>Stratovolcano</strong><span>Steep, layered — Fuji, Rainier</span></div>
        <div class="fact"><strong>Cinder cone</strong><span>Small, steep — Parícutin</span></div>
      </div>
      <h3>Classification overview</h3>
      <ul>
        <li><strong>Shield volcanoes</strong> form from fluid basaltic lava that flows easily, creating wide, rounded profiles.</li>
        <li><strong>Composite (stratovolcanoes)</strong> build from alternating layers of lava and ash, often producing violent eruptions.</li>
        <li><strong>Calderas</strong> are vast depressions formed when a magma chamber collapses after a massive eruption.</li>
      </ul>
      <p class="modal-example"><strong>Did you know?</strong> Olympus Mons on Mars is a shield volcano nearly three times the height of Mount Everest — the largest volcano in the solar system.</p>
    `
  },
  plates: {
    eyebrow: "Extended module",
    title: "Plate tectonics and volcanism",
    body: `
      <p>Most volcanoes occur at the boundaries of Earth's tectonic plates, where magma finds pathways to the surface. The plate setting determines eruption frequency and style.</p>
      <div class="modal-facts">
        <div class="fact"><strong>Ring of Fire</strong><span>75% of world's active volcanoes</span></div>
        <div class="fact"><strong>Subduction</strong><span>Ocean plate dives beneath continent</span></div>
        <div class="fact"><strong>Rift zones</strong><span>Plates pull apart, magma rises</span></div>
      </div>
      <h3>Three main settings</h3>
      <ul>
        <li><strong>Divergent boundaries</strong> — mid-ocean ridges and continental rifts where plates separate.</li>
        <li><strong>Convergent boundaries</strong> — subduction zones produce the most explosive volcanoes on Earth.</li>
        <li><strong>Hotspots</strong> — mantle plumes punch through plates regardless of boundary location (e.g., Yellowstone, Hawaii).</li>
      </ul>
      <p class="modal-example"><strong>Real-world example:</strong> The Pacific Ring of Fire includes over 450 volcanoes, formed where the Pacific Plate subducts beneath surrounding plates.</p>
    `
  },
  hazards: {
    eyebrow: "Extended module",
    title: "Eruption hazards and impacts",
    body: `
      <p>Volcanic eruptions pose diverse threats to communities, infrastructure, and global systems. Understanding hazards is essential for preparedness and evacuation planning.</p>
      <div class="modal-facts">
        <div class="fact"><strong>Lahars</strong><span>Can travel 100+ km downstream</span></div>
        <div class="fact"><strong>SO₂</strong><span>Gas can form acid rain</span></div>
        <div class="fact"><strong>VEI scale</strong><span>Volcanic Explosivity Index 0–8</span></div>
      </div>
      <h3>Primary hazards</h3>
      <ul>
        <li><strong>Pyroclastic flows</strong> — the deadliest volcanic hazard; nearly impossible to outrun.</li>
        <li><strong>Lava flows</strong> — slow but destroy everything in their path; temperatures exceed 1,000°C.</li>
        <li><strong>Volcanic ash</strong> — abrasive to aircraft engines, collapses roofs, and contaminates water supplies.</li>
        <li><strong>Volcanic gases</strong> — can cause respiratory illness and lower regional temperatures.</li>
      </ul>
      <p class="modal-example"><strong>Real-world example:</strong> The 1985 Nevado del Ruiz eruption in Colombia triggered lahars that killed over 23,000 people in the town of Armero — a tragedy that reshaped global volcanic hazard policy.</p>
    `
  },
  monitoring: {
    eyebrow: "Extended module",
    title: "How scientists monitor volcanoes",
    body: `
      <p>Volcanologists use a network of ground-based and satellite instruments to detect signs of unrest before eruptions. No single method is enough — data is combined for accurate forecasts.</p>
      <div class="modal-facts">
        <div class="fact"><strong>Seismometers</strong><span>Detect magma movement tremors</span></div>
        <div class="fact"><strong>INSAR</strong><span>Satellites measure ground swelling</span></div>
        <div class="fact"><strong>USGS</strong><span>Issues alert levels 1–4 in the U.S.</span></div>
      </div>
      <h3>Monitoring toolkit</h3>
      <ul>
        <li><strong>Seismic networks</strong> record earthquake swarms that indicate magma forcing its way upward.</li>
        <li><strong>Gas sensors</strong> measure sulfur dioxide and carbon dioxide flux as eruption precursors.</li>
        <li><strong>Ground deformation</strong> — GPS and satellite radar detect bulging of the volcano surface.</li>
        <li><strong>Thermal imaging</strong> reveals hot spots in craters and fissures.</li>
      </ul>
      <p class="modal-example"><strong>Real-world example:</strong> Before the 1991 Pinatubo eruption, scientists evacuated 60,000 people after detecting gas emissions and ground swelling — saving thousands of lives.</p>
    `
  }
};

const TOPIC_ORDER = ["magma", "gas", "ash", "types", "plates", "hazards", "monitoring"];

const backdrop = document.getElementById("modalBackdrop");
const modal = document.getElementById("scienceModal");
const modalEyebrow = document.getElementById("modalEyebrow");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const closeBtn = document.getElementById("modalClose");
const prevBtn = document.getElementById("modalPrev");
const nextBtn = document.getElementById("modalNext");

let currentTopic = null;
let lastFocused = null;

function openModal(topicId) {
  const topic = TOPICS[topicId];
  if (!topic) return;

  currentTopic = topicId;
  lastFocused = document.activeElement;

  modalEyebrow.textContent = topic.eyebrow;
  modalTitle.textContent = topic.title;
  modalBody.innerHTML = topic.body;

  backdrop.hidden = false;
  requestAnimationFrame(() => backdrop.classList.add("is-open"));
  modal.focus();
  document.body.style.overflow = "hidden";
}

function closeModal() {
  backdrop.classList.remove("is-open");
  document.body.style.overflow = "";
  setTimeout(() => {
    backdrop.hidden = true;
    currentTopic = null;
    if (lastFocused) lastFocused.focus();
  }, 280);
}

function navigateTopic(direction) {
  const index = TOPIC_ORDER.indexOf(currentTopic);
  const nextIndex = (index + direction + TOPIC_ORDER.length) % TOPIC_ORDER.length;
  openModal(TOPIC_ORDER[nextIndex]);
}

document.querySelectorAll("[data-open]").forEach((trigger) => {
  trigger.addEventListener("click", () => openModal(trigger.dataset.open));
});

closeBtn.addEventListener("click", closeModal);
prevBtn.addEventListener("click", () => navigateTopic(-1));
nextBtn.addEventListener("click", () => navigateTopic(1));

backdrop.addEventListener("click", (event) => {
  if (event.target === backdrop) closeModal();
});

document.addEventListener("keydown", (event) => {
  if (backdrop.hidden) return;
  if (event.key === "Escape") closeModal();
  if (event.key === "ArrowLeft") navigateTopic(-1);
  if (event.key === "ArrowRight") navigateTopic(1);
});
