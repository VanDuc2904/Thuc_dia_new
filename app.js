// ===================== CONFIGURATION =====================

// Google Apps Script endpoint
const API_URL =
  "https://script.google.com/macros/s/AKfycbxMpgMnbKCm0ef_tK3L7C5hOC-0wgW9evlMUPeBt5xgX3neuPeGUsfvFfSmOI69WWTuTA/exec";

// Parameters metadata
const PARAM_META = {
  pH: {
    key: "pH",
    label: "pH",
    unit: "",
    format: (v) => v.toFixed(2),
  },
  temp: {
    key: "temp",
    label: "Temperature",
    unit: "°C",
    format: (v) => v.toFixed(1),
  },
  DO: {
    key: "DO",
    label: "Dissolved Oxygen (DO)",
    unit: "mg/L",
    format: (v) => v.toFixed(2),
  },
  turbidity: {
    key: "turbidity",
    label: "Turbidity",
    unit: "NTU",
    format: (v) => v.toFixed(1),
  },
  TDS: {
    key: "TDS",
    label: "TDS (Total Dissolved Solids)",
    unit: "mg/L",
    format: (v) => v.toFixed(0),
  },
};

// ===================== STANDARDS DEFINITIONS =====================

const QCVN_STANDARDS = {
  // QCVN 08-MT:2015/BTNMT – Surface water
  B1: {
    thresholds: {
      pH: { min: 6.5, max: 8.5 },
      temp: { max: 32 },
      DO: { min: 5, max: 20 },
      turbidity: { max: 5 },
      TDS: { max: 1000 },
    },
    refsText: {
      pH: "Allowed range: 6.5 – 8.5",
      temp: "Recommended: < 32°C",
      DO: "Allowed: ≥ 5 mg/L",
      turbidity: "Recommended: < 5 NTU",
      TDS: "Recommended: < 1000 mg/L",
    },
    labelShort: "QCVN 08-MT:2015/BTNMT – Column B1 (Surface water)",
  },
  B2: {
    thresholds: {
      pH: { min: 5.5, max: 9.0 },
      temp: { max: 32 },
      DO: { min: 4, max: 20 },
      turbidity: { max: 10 },
      TDS: { max: 1500 },
    },
    refsText: {
      pH: "Allowed range: 5.5 – 9.0",
      temp: "Recommended: < 32°C",
      DO: "Allowed: ≥ 4 mg/L",
      turbidity: "Recommended: < 10 NTU",
      TDS: "Recommended: < 1500 mg/L",
    },
    labelShort: "QCVN 08-MT:2015/BTNMT – Column B2 (Surface water)",
  },
  A1: {
    thresholds: {
      pH: { min: 6.0, max: 8.5 },
      temp: { max: 30 },
      DO: { min: 6, max: 20 },
      turbidity: { max: 2 },
      TDS: { max: 500 },
    },
    refsText: {
      pH: "Allowed range: 6.0 – 8.5",
      temp: "Recommended: < 30°C",
      DO: "Allowed: ≥ 6 mg/L",
      turbidity: "Recommended: < 2 NTU",
      TDS: "Recommended: < 500 mg/L",
    },
    labelShort: "QCVN 08-MT:2015/BTNMT – Column A1 (Surface water)",
  },
  A2: {
    thresholds: {
      pH: { min: 6.0, max: 8.5 },
      temp: { max: 32 },
      DO: { min: 5, max: 20 },
      turbidity: { max: 5 },
      TDS: { max: 1000 },
    },
    refsText: {
      pH: "Allowed range: 6.0 – 8.5",
      temp: "Recommended: < 32°C",
      DO: "Allowed: ≥ 5 mg/L",
      turbidity: "Recommended: < 5 NTU",
      TDS: "Recommended: < 1000 mg/L",
    },
    labelShort: "QCVN 08-MT:2015/BTNMT – Column A2 (Surface water)",
  },

  // QCVN 09:2023/BTNMT – Groundwater
  GND: {
    thresholds: {
      pH: { min: 5.5, max: 8.5 },
      temp: { max: 32 },        // practical reference
      DO: { min: 0, max: 999 }, // not regulated, always OK
      turbidity: { max: 5 },
      TDS: { max: 1500 },
    },
    refsText: {
      pH: "Allowed range: 5.5 – 8.5",
      temp: "Recommended: < 32°C (reference)",
      DO: "Not regulated – for information only",
      turbidity: "Allowed: < 5 NTU",
      TDS: "Allowed: < 1500 mg/L",
    },
    labelShort: "QCVN 09:2023/BTNMT – Groundwater",
  },

  // QCVN 01:2009/BYT – Domestic water
  DW: {
    thresholds: {
      pH: { min: 6.5, max: 8.5 },
      temp: { max: 30 },
      DO: { min: 6, max: 20 },
      turbidity: { max: 2 },
      TDS: { max: 1000 },
    },
    refsText: {
      pH: "Allowed range: 6.5 – 8.5",
      temp: "Recommended: < 30°C",
      DO: "Recommended: ≥ 6 mg/L",
      turbidity: "Allowed: < 2 NTU",
      TDS: "Allowed: < 1000 mg/L",
    },
    labelShort: "QCVN 01:2009/BYT – Domestic water",
  },
};

// ===================== STATION PROFILES =====================

const STATION_PROFILES = {
  "station-01": {
    label: "Station 01 – Surface water",
    defaultStandardKey: "B1",
  },
  "station-02": {
    label: "Station 02 – Groundwater",
    defaultStandardKey: "GND",
  },
  "station-03": {
    label: "Station 03 – Domestic water",
    defaultStandardKey: "DW",
  },
};

// ===================== GLOBAL STATE =====================

// Ưu tiên nước ngầm
let activeStandardKey = "GND";
let activeThresholds = QCVN_STANDARDS[activeStandardKey].thresholds;

let currentStationKey = "station-02";

let currentData = {
  pH: NaN,
  temp: NaN,
  DO: NaN,
  turbidity: NaN,
  TDS: NaN,
};

let lastRowsData = [];
let qualityChart = null;
let multiDayChart = null;

// ===================== UTILITY FUNCTIONS =====================

function formatTimeHHMMSS(date) {
  return date.toLocaleTimeString("en-GB", { hour12: false });
}
function formatLabelTime(raw, index) {
  if (raw == null || raw === "") return `#${index + 1}`;
  return String(raw).trim(); // dùng đúng dữ liệu từ sheet
}


  const match = s.match(/(\d{1,2}:\d{2}:\d{2})/);
  if (match) return match[1];

  if (s.includes(":")) return s;

  return `#${index + 1}`;
}

function formatDateTimeLabel(row, index) {
  const datePart = row.date || row.Date || "";
  const timePart = row.time || row.Time || "";

  if (datePart && timePart) return `${datePart} ${timePart}`;
  if (datePart) return datePart;
  if (timePart) return timePart;
  return `#${index + 1}`;
}


function getRawValue(param, obj) {
  if (!obj) return undefined;
  switch (param) {
    case "pH":
      return obj.pH ?? obj.ph;
    case "temp":
      return obj.temp ?? obj.temperature ?? obj.Temp;
    case "DO":
      return obj.DO ?? obj.do;
    case "turbidity":
      return obj.turbidity ?? obj.tu ?? obj.Tu;
    case "TDS":
      return obj.TDS ?? obj.tds;
    default:
      return obj[param];
  }
}

function getNumericValue(param, obj) {
  const raw = getRawValue(param, obj);
  const n = Number(raw);
  return Number.isNaN(n) ? NaN : n;
}

// ===================== STATUS & CLASSIFICATION =====================

function classifyStatus(param, value) {
  const th = activeThresholds[param];

  if (!th || Number.isNaN(value)) return { status: "good", label: "OK" };

  if (param === "pH") {
    if (value >= th.min && value <= th.max) return { status: "good", label: "OK" };
    if (value < th.min) {
      if (value >= th.min - 0.3) return { status: "warn", label: "Low (near limit)" };
      return { status: "bad", label: "Low" };
    }
    if (value > th.max) {
      if (value <= th.max + 0.3) return { status: "warn", label: "High (near limit)" };
      return { status: "bad", label: "Above limit" };
    }
  }

  if (param === "temp") {
    if (value <= th.max) return { status: "good", label: "OK" };
    if (value <= th.max + 2) return { status: "warn", label: "Warning" };
    return { status: "bad", label: "Above limit" };
  }

  if (param === "DO") {
    if (value >= th.min) return { status: "good", label: "OK" };
    if (value >= th.min - 1) return { status: "warn", label: "Warning" };
    return { status: "bad", label: "Low" };
  }

  if (param === "turbidity" || param === "TDS") {
    if (value <= th.max) return { status: "good", label: "OK" };
    if (value <= th.max * 1.2) return { status: "warn", label: "Warning" };
    return { status: "bad", label: "Above limit" };
  }

  return { status: "good", label: "OK" };
}

// ===================== UI UPDATES =====================

function updateSystemTime() {
  const el = document.getElementById("system-time");
  if (!el) return;
  el.textContent = formatTimeHHMMSS(new Date());
}

function updateCards() {
  Object.keys(currentData).forEach((key) => {
    const value = currentData[key];

    const valueEl = document.querySelector(`[data-value-for="${key}"]`);
    const statusChip = document.querySelector(`[data-status-for="${key}"]`);
    const barEl = document.querySelector(`[data-bar-for="${key}"]`);

    if (valueEl && !Number.isNaN(value)) {
      const meta = PARAM_META[key];
      if (meta && meta.format) valueEl.textContent = meta.format(value);
      else valueEl.textContent = value.toFixed(2);
    } else if (valueEl) {
      valueEl.textContent = "--";
    }

    if (statusChip) {
      const lastSpan = statusChip.querySelector("span:last-child");
      statusChip.classList.remove("status-good", "status-warn-chip", "status-bad-chip");
      const { status, label } = classifyStatus(key, value);

      if (status === "good") statusChip.classList.add("status-good");
      else if (status === "warn") statusChip.classList.add("status-warn-chip");
      else statusChip.classList.add("status-bad-chip");

      if (lastSpan) lastSpan.textContent = label;
    }

    if (barEl) {
      const th = activeThresholds[key];
      let pct = 50;
      if (!Number.isNaN(value) && th) {
        if (key === "pH" && th.min != null && th.max != null) {
          const center = (th.min + th.max) / 2;
          const span = (th.max - th.min) / 2 || 1;
          pct = Math.max(0, Math.min(100, 50 + ((value - center) / span) * 30));
        } else if (key === "DO" && th.min != null && th.max != null) {
          pct = Math.max(
            5,
            Math.min(100, ((value - th.min) / (th.max - th.min || 1)) * 100)
          );
        } else if (th.max != null) {
          pct = Math.max(5, Math.min(100, (value / (th.max || 1)) * 100));
        }
      }
      barEl.style.width = pct + "%";

      const { status } = classifyStatus(key, value);
      if (status === "good") {
        barEl.style.background = "linear-gradient(90deg, #22c55e, #4ade80)";
      } else if (status === "warn") {
        barEl.style.background = "linear-gradient(90deg, #f59e0b, #facc15)";
      } else {
        barEl.style.background = "linear-gradient(90deg, #ef4444, #f97373)";
      }
    }
  });
}

function renderTableRows(rows) {
  const tbody = document.getElementById("data-table-body");
  if (!tbody) return;

  tbody.innerHTML = "";

  const modeSelect = document.getElementById("table-param-select");
  const mode = modeSelect ? modeSelect.value : "all";

  const standardObj = QCVN_STANDARDS[activeStandardKey];
  const standardLabel = standardObj
    ? standardObj.labelShort
    : "QCVN (reference)";

  const displayRows = rows.slice().reverse();

  displayRows.forEach((row, idx) => {
    const tr = document.createElement("tr");

    const timeCell = document.createElement("td");
    timeCell.textContent = formatDateTimeLabel(row, idx);
    tr.appendChild(timeCell);

    const descCell = document.createElement("td");
    const valueCell = document.createElement("td");
    const unitCell = document.createElement("td");
    const limitCell = document.createElement("td");
    const statusCell = document.createElement("td");
    const statusSpan = document.createElement("span");
    statusSpan.classList.add("status-pill");

    if (mode === "all") {
      descCell.textContent =
        "Combined parameters (pH, Temp, DO, Turbidity, TDS)";

      const pHVal = getRawValue("pH", row) ?? "";
      const tVal = getRawValue("temp", row) ?? "";
      const doVal = getRawValue("DO", row) ?? "";
      const turbVal = getRawValue("turbidity", row) ?? "";
      const tdsVal = getRawValue("TDS", row) ?? "";

      valueCell.textContent =
        `pH ${pHVal} | T ${tVal}°C | DO ${doVal} mg/L | ` +
        `Turb ${turbVal} NTU | TDS ${tdsVal} mg/L`;
      unitCell.textContent = "";

      const statuses = [
        classifyStatus("pH", getNumericValue("pH", row)),
        classifyStatus("temp", getNumericValue("temp", row)),
        classifyStatus("DO", getNumericValue("DO", row)),
        classifyStatus("turbidity", getNumericValue("turbidity", row)),
        classifyStatus("TDS", getNumericValue("TDS", row)),
      ];

      let worst = "good";
      if (statuses.some((s) => s.status === "bad")) worst = "bad";
      else if (statuses.some((s) => s.status === "warn")) worst = "warn";

      if (worst === "good") {
        statusSpan.classList.add("ok");
        statusSpan.textContent = "OK";
      } else if (worst === "warn") {
        statusSpan.classList.add("warn");
        statusSpan.textContent = "Warning";
      } else {
        statusSpan.classList.add("bad");
        statusSpan.textContent = "Above limit";
      }
    } else {
      const meta = PARAM_META[mode];
      descCell.textContent = meta ? meta.label : mode;

      const vNum = getNumericValue(mode, row);
      let display = "";

      if (!Number.isNaN(vNum) && meta && meta.format) {
        display = meta.format(vNum);
      } else {
        const raw = getRawValue(mode, row);
        if (raw != null) display = String(raw);
      }

      valueCell.textContent = display;
      unitCell.textContent = meta ? meta.unit : "";

      const { status, label } = classifyStatus(mode, vNum);
      if (status === "good") {
        statusSpan.classList.add("ok");
      } else if (status === "warn") {
        statusSpan.classList.add("warn");
      } else {
        statusSpan.classList.add("bad");
      }
      statusSpan.textContent = label;
    }

    limitCell.textContent = standardLabel;
    statusCell.appendChild(statusSpan);

    tr.appendChild(descCell);
    tr.appendChild(valueCell);
    tr.appendChild(unitCell);
    tr.appendChild(limitCell);
    tr.appendChild(statusCell);

    tbody.appendChild(tr);
  });
}

function updateChart() {
  const canvas = document.getElementById("qualityChart");
  if (!canvas || !lastRowsData.length || typeof Chart === "undefined") return;

  const select = document.getElementById("chart-param-select");
  const param = select ? select.value : "pH";
  const meta = PARAM_META[param] || { label: param, unit: "" };

  const rows = lastRowsData.slice();
  const labels = rows.map((r, i) => formatLabelTime(r.time, i));
  const data = rows.map((r) => {
    const v = getNumericValue(param, r);
    return Number.isNaN(v) ? null : v;
  });

  const ctx = canvas.getContext("2d");
  if (qualityChart) qualityChart.destroy();

  qualityChart = new Chart(ctx, {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: meta.unit ? `${meta.label} (${meta.unit})` : meta.label,
          data,
          tension: 0.35,
          pointRadius: 2,
          pointHoverRadius: 3,
          borderWidth: 2,
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          title: { display: true, text: "Time" },
          ticks: { autoSkip: true, maxTicksLimit: 8 },
          grid: { display: false },
        },
        y: {
          title: { display: true, text: meta.unit || "Value" },
          grid: { color: "rgba(148,163,184,0.25)" },
        },
      },
      plugins: {
        legend: { display: true, labels: { boxWidth: 12 } },
        tooltip: { enabled: true },
      },
      elements: {
        line: { tension: 0.35 },
        point: { radius: 2, hoverRadius: 3 },
      },
    },
  });
}

function updateMultiDayChart() {
  const canvas = document.getElementById("multiDayChart");
  if (!canvas || !lastRowsData.length || typeof Chart === "undefined") return;

  const select = document.getElementById("chart-param-select");
  const param = select ? select.value : "pH";
  const meta = PARAM_META[param] || { label: param, unit: "" };

  const rows = lastRowsData.slice(); // keep chronological order
  const labels = rows.map((r, i) => formatDateTimeLabel(r, i));
  const data = rows.map((r) => {
    const v = getNumericValue(param, r);
    return Number.isNaN(v) ? null : v;
  });

  const ctx = canvas.getContext("2d");
  if (multiDayChart) multiDayChart.destroy();

  multiDayChart = new Chart(ctx, {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: meta.unit
            ? `${meta.label} (${meta.unit}) – Multi-day`
            : `${meta.label} – Multi-day`,
          data,
          tension: 0.35,
          pointRadius: 1.5,
          pointHoverRadius: 3,
          borderWidth: 2,
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          title: { display: true, text: "Date & Time" },
          ticks: {
            autoSkip: true,
            maxTicksLimit: 10,
            maxRotation: 45,
            minRotation: 0,
          },
          grid: { display: false },
        },
        y: {
          title: { display: true, text: meta.unit || "Value" },
          grid: { color: "rgba(148,163,184,0.25)" },
        },
      },
      plugins: {
        legend: { display: true, labels: { boxWidth: 12 } },
        tooltip: { enabled: true },
      },
      elements: {
        line: { tension: 0.35 },
        point: { radius: 1.5, hoverRadius: 3 },
      },
    },
  });
}

function updateHeaderStationLabel() {
  const labelEl = document.getElementById("active-station-label");
  if (!labelEl) return;

  const profile = STATION_PROFILES[currentStationKey];
  const label = profile ? profile.label : currentStationKey;

  labelEl.innerHTML = `Active station: <strong>${label}</strong>`;
}

function updateStandardNote() {
  const noteEl = document.getElementById("standard-note");
  const standard = QCVN_STANDARDS[activeStandardKey];
  if (!noteEl || !standard) return;

  noteEl.textContent = "(reference)";
}

// ===================== STANDARD & STATION CONTROL =====================

function applyStandardToRefs() {
  const standard = QCVN_STANDARDS[activeStandardKey];
  if (!standard) return;

  const refs = standard.refsText || {};

  const pHRefEl = document.querySelector('[data-ref-for="pH"]');
  const tempRefEl = document.querySelector('[data-ref-for="temp"]');
  const DORefEl = document.querySelector('[data-ref-for="DO"]');
  const turbRefEl = document.querySelector('[data-ref-for="turbidity"]');
  const tdsRefEl = document.querySelector('[data-ref-for="TDS"]');

  if (pHRefEl && refs.pH) pHRefEl.textContent = refs.pH;
  if (tempRefEl && refs.temp) tempRefEl.textContent = refs.temp;
  if (DORefEl && refs.DO) DORefEl.textContent = refs.DO;
  if (turbRefEl && refs.turbidity) turbRefEl.textContent = refs.turbidity;
  if (tdsRefEl && refs.TDS) tdsRefEl.textContent = refs.TDS;
}

function setStandard(code, options = { syncSelect: true }) {
  const standard = QCVN_STANDARDS[code];
  if (!standard) return;

  activeStandardKey = code;
  activeThresholds = standard.thresholds;

  if (options.syncSelect) {
    const select = document.getElementById("standard-select");
    if (select) select.value = code;
  }

  applyStandardToRefs();
  updateStandardNote();

  updateCards();
  if (lastRowsData.length) {
    renderTableRows(lastRowsData);
    updateChart();
    updateMultiDayChart();
  }
}

function setStation(stationKey) {
  const profile = STATION_PROFILES[stationKey];
  if (!profile) return;

  currentStationKey = stationKey;

  setStandard(profile.defaultStandardKey, { syncSelect: true });
  updateHeaderStationLabel();
}

// ===================== DATA FETCHING =====================

async function fetchDataFromApi() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("HTTP " + res.status);
    const data = await res.json();

    if (data && data.latest) {
      currentData = {
        pH: getNumericValue("pH", data.latest),
        temp: getNumericValue("temp", data.latest),
        DO: getNumericValue("DO", data.latest),
        turbidity: getNumericValue("turbidity", data.latest),
        TDS: getNumericValue("TDS", data.latest),
      };
      updateCards();

      const lastUpdateEl = document.getElementById("last-update");
      if (lastUpdateEl) {
        const dateLabel = data.latest.date ? String(data.latest.date) : "";
        const timeLabel = data.latest.time ? String(data.latest.time) : "";
      
        if (dateLabel && timeLabel) lastUpdateEl.textContent = `${dateLabel} ${timeLabel}`;
        else if (dateLabel) lastUpdateEl.textContent = dateLabel;
        else if (timeLabel) lastUpdateEl.textContent = timeLabel;
        else lastUpdateEl.textContent = "";
      }


      const obsDateEl = document.getElementById("obs-date");
      if (obsDateEl && data.latest.date) {
        obsDateEl.textContent = data.latest.date;
      }
    }

    if (data && Array.isArray(data.rows)) {
      lastRowsData = data.rows.slice();
      renderTableRows(lastRowsData);
      updateChart();
      updateMultiDayChart();
    }
  } catch (err) {
    console.error("Error while calling Apps Script API:", err);
  }
}

// ===================== INITIALIZATION =====================

function initEventListeners() {
  const standardSelect = document.getElementById("standard-select");
  if (standardSelect) {
    standardSelect.addEventListener("change", (e) => {
      setStandard(e.target.value, { syncSelect: false });
    });
  }

  const tableParamSelect = document.getElementById("table-param-select");
  if (tableParamSelect) {
    tableParamSelect.addEventListener("change", () => {
      if (lastRowsData.length) renderTableRows(lastRowsData);
    });
  }

  const chartParamSelect = document.getElementById("chart-param-select");
  if (chartParamSelect) {
    chartParamSelect.addEventListener("change", () => {
      updateChart();
      updateMultiDayChart();
    });
  }

  const stationSelect = document.getElementById("station-select");
  if (stationSelect) {
    stationSelect.addEventListener("change", (e) => {
      setStation(e.target.value);
    });
  }

  // Date filter logic có thể thêm sau khi cần lọc theo khoảng ngày
}

function initDashboard() {
  updateSystemTime();
  setInterval(updateSystemTime, 1000);

  setStation(currentStationKey);

  fetchDataFromApi();
  setInterval(fetchDataFromApi, 10000);

  initEventListeners();
}

document.addEventListener("DOMContentLoaded", initDashboard);


