// ====== CẤU HÌNH API ======
const API_URL = "https://script.google.com/macros/s/AKfycbxPIWXMcpByjkO1srpe-OmTDg374IJq-7qEWOCr-pr30rqs8xMSX_o0V7UkGYUXDp6RFQ/exec";
const PARAM_META = {
  pH:   { label: "pH",                     unit: "",     format: v => v.toFixed(2) },
  temp: { label: "Nhiệt độ",               unit: "°C",   format: v => v.toFixed(1) },
  DO:   { label: "Oxy hòa tan (DO)",       unit: "mg/L", format: v => v.toFixed(2) },
  turbidity: { label: "Độ đục",            unit: "NTU",  format: v => v.toFixed(1) },
  TDS:  { label: "TDS (Tổng chất rắn hòa tan)", unit: "mg/L", format: v => v.toFixed(0) }
};

// ====== QCVN 08-MT:2015/BTNMT ======
const QCVN_STANDARDS = {
  B1: {
    thresholds: {
      pH: { min: 6.5, max: 8.5 },
      temp: { min: 0, max: 32 },
      DO: { min: 5, max: 20 },
      turbidity: { min: 0, max: 5 },
      TDS: { min: 0, max: 1000 }
    },
    refsText: {
      pH: "Giới hạn cho phép: 6,5 – 8,5",
      temp: "Giới hạn khuyến nghị: < 32°C",
      DO: "Giới hạn cho phép: ≥ 5 mg/L",
      turbidity: "Giới hạn khuyến nghị: < 5 NTU",
      TDS: "Giới hạn khuyến nghị: < 1000 mg/L"
    },
    labelShort: "QCVN 08-MT:2015/BTNMT – Cột B1 (tham chiếu)"
  },
  B2: {
    thresholds: {
      pH: { min: 5.5, max: 9.0 },
      temp: { min: 0, max: 32 },
      DO: { min: 4, max: 20 },
      turbidity: { min: 0, max: 10 },
      TDS: { min: 0, max: 1500 }
    },
    refsText: {
      pH: "Giới hạn cho phép: 5,5 – 9,0",
      temp: "Giới hạn khuyến nghị: < 32°C",
      DO: "Giới hạn cho phép: ≥ 4 mg/L",
      turbidity: "Giới hạn khuyến nghị: < 10 NTU",
      TDS: "Giới hạn khuyến nghị: < 1500 mg/L"
    },
    labelShort: "QCVN 08-MT:2015/BTNMT – Cột B2 (tham chiếu)"
  },
  A1: {
    thresholds: {
      pH: { min: 6.0, max: 8.5 },
      temp: { min: 0, max: 30 },
      DO: { min: 6, max: 20 },
      turbidity: { min: 0, max: 2 },
      TDS: { min: 0, max: 500 }
    },
    refsText: {
      pH: "Giới hạn cho phép: 6,0 – 8,5",
      temp: "Giới hạn khuyến nghị: < 30°C",
      DO: "Giới hạn cho phép: ≥ 6 mg/L",
      turbidity: "Giới hạn khuyến nghị: < 2 NTU",
      TDS: "Giới hạn khuyến nghị: < 500 mg/L"
    },
    labelShort: "QCVN 08-MT:2015/BTNMT – Cột A1 (tham chiếu)"
  },
  A2: {
    thresholds: {
      pH: { min: 6.0, max: 8.5 },
      temp: { min: 0, max: 32 },
      DO: { min: 5, max: 20 },
      turbidity: { min: 0, max: 5 },
      TDS: { min: 0, max: 1000 }
    },
    refsText: {
      pH: "Giới hạn cho phép: 6,0 – 8,5",
      temp: "Giới hạn khuyến nghị: < 32°C",
      DO: "Giới hạn cho phép: ≥ 5 mg/L",
      turbidity: "Giới hạn khuyến nghị: < 5 NTU",
      TDS: "Giới hạn khuyến nghị: < 1000 mg/L"
    },
    labelShort: "QCVN 08-MT:2015/BTNMT – Cột A2 (tham chiếu)"
  }
};

let ACTIVE_STANDARD_KEY = "B1";
let ACTIVE_THRESHOLDS = QCVN_STANDARDS[ACTIVE_STANDARD_KEY].thresholds;

let currentData = { pH: NaN, temp: NaN, DO: NaN, turbidity: NaN, TDS: NaN };

let lastRowsData = [];
let qualityChart = null;
function formatTime(date) {
  return date.toLocaleTimeString("vi-VN", { hour12: false });
}

function formatLabelTime(raw, index) {
  if (raw == null || raw === "") return `#${index + 1}`;
  if (typeof raw === "number") return `#${index + 1}`;
  const s = String(raw).trim();

  if (s.includes("GMT") || s.includes("Indochina")) {
    const d = new Date(s);
    if (!isNaN(d.getTime())) {
      return d.toLocaleTimeString("vi-VN", { hour12: false });
    }
  }
  const m = s.match(/(\d{1,2}:\d{2}:\d{2})/);
  if (m) return m[1];
  if (s.includes(":")) return s;

  return `#${index + 1}`;
}

function getRaw(param, obj) {
  if (!obj) return undefined;
  switch (param) {
    case "pH":        return obj.pH ?? obj.ph;
    case "temp":      return obj.temp ?? obj.temperature ?? obj.Temp;
    case "DO":        return obj.DO ?? obj.do;
    case "turbidity": return obj.turbidity ?? obj.tu ?? obj.Tu;
    case "TDS":       return obj.TDS ?? obj.tds;
    default:          return obj[param];
  }
}

function getNumeric(param, obj) {
  const raw = getRaw(param, obj);
  const n = Number(raw);
  return Number.isNaN(n) ? NaN : n;
}

function updateSystemTime() {
  const el = document.getElementById("system-time");
  if (el) el.textContent = formatTime(new Date());
}

function classifyStatus(param, value) {
  const th = ACTIVE_THRESHOLDS[param];
  if (!th || Number.isNaN(value)) return { status: "good", label: "Đạt" };

  if (param === "pH") {
    if (value >= th.min && value <= th.max) return { status: "good", label: "Đạt" };
    if (value < th.min) {
      if (value >= th.min - 0.3) return { status: "warn", label: "Thấp (cận ngưỡng)" };
      return { status: "bad", label: "Thấp" };
    }
    if (value > th.max) {
      if (value <= th.max + 0.3) return { status: "warn", label: "Cao (cận ngưỡng)" };
      return { status: "bad", label: "Vượt ngưỡng" };
    }
  }

  if (param === "temp") {
    if (value <= th.max) return { status: "good", label: "Đạt" };
    if (value <= th.max + 2) return { status: "warn", label: "Cảnh báo" };
    return { status: "bad", label: "Vượt ngưỡng" };
  }

  if (param === "DO") {
    if (value >= th.min) return { status: "good", label: "Đạt" };
    if (value >= th.min - 1) return { status: "warn", label: "Cảnh báo" };
    return { status: "bad", label: "Thấp" };
  }

  if (param === "turbidity" || param === "TDS") {
    if (value <= th.max) return { status: "good", label: "Đạt" };
    if (value <= th.max * 1.2) return { status: "warn", label: "Cảnh báo" };
    return { status: "bad", label: "Vượt ngưỡng" };
  }

  return { status: "good", label: "Đạt" };
}

function updateCards() {
  Object.keys(currentData).forEach((key) => {
    const value = currentData[key];
    const valueEl = document.querySelector(`[data-value-for="${key}"]`);
    const statusEl = document.querySelector(`[data-status-for="${key}"]`);
    const barEl = document.querySelector(`[data-bar-for="${key}"]`);

    if (valueEl && !Number.isNaN(value)) {
      const meta = PARAM_META[key];
      if (meta && meta.format) valueEl.textContent = meta.format(value);
      else valueEl.textContent = value.toFixed(2);
    } else if (valueEl) {
      valueEl.textContent = "--";
    }

    if (statusEl) {
      const { status, label } = classifyStatus(key, value);
      statusEl.classList.remove("status-good", "status-warn-chip", "status-bad-chip");
      if (status === "good") statusEl.classList.add("status-good");
      else if (status === "warn") statusEl.classList.add("status-warn-chip");
      else statusEl.classList.add("status-bad-chip");
      statusEl.querySelector("span:last-child").textContent = label;
    }

    if (barEl) {
      const th = ACTIVE_THRESHOLDS[key];
      let pct = 50;
      if (!Number.isNaN(value) && th) {
        if (key === "pH") {
          const center = (th.min + th.max) / 2;
          const span = (th.max - th.min) / 2;
          pct = Math.max(0, Math.min(100, 50 + ((value - center) / span) * 30));
        } else if (key === "DO") {
          pct = Math.max(5, Math.min(100, ((value - th.min) / (th.max - th.min)) * 100));
        } else {
          pct = Math.max(5, Math.min(100, (value / (th.max || 1)) * 100));
        }
      }
      barEl.style.width = pct + "%";

      const { status } = classifyStatus(key, value);
      if (status === "good") {
        barEl.style.background = "linear-gradient(90deg, #22c55e, #22c55e)";
      } else if (status === "warn") {
        barEl.style.background = "linear-gradient(90deg, #f59e0b, #facc15)";
      } else {
        barEl.style.background = "linear-gradient(90deg, #ef4444, #f97373)";
      }
    }
  });
}

// ====== Bảng ======
function renderTableRows(rows) {
  const tbody = document.getElementById("data-table-body");
  if (!tbody) return;
  tbody.innerHTML = "";

  const currentStandard = QCVN_STANDARDS[ACTIVE_STANDARD_KEY];
  const modeSelect = document.getElementById("table-param-select");
  const mode = modeSelect ? modeSelect.value : "all";

  const displayRows = rows.slice().reverse(); // mới nhất lên trên

  displayRows.forEach((row, idx) => {
    const tr = document.createElement("tr");

    // cột thời gian: chỉ hiển thị giờ / index để trục rõ
    const timeCell = document.createElement("td");
    timeCell.textContent = formatLabelTime(row.time, idx);
    tr.appendChild(timeCell);

    const descCell = document.createElement("td");
    const valueCell = document.createElement("td");
    const unitCell = document.createElement("td");
    const limitCell = document.createElement("td");
    const statusCell = document.createElement("td");
    const statusSpan = document.createElement("span");
    statusSpan.classList.add("status-pill");

    if (mode === "all") {
      descCell.textContent = "Thông số tổng hợp (pH, T, DO, Độ đục, TDS)";

      const pHVal   = getRaw("pH", row) ?? "";
      const tVal    = getRaw("temp", row) ?? "";
      const doVal   = getRaw("DO", row) ?? "";
      const turbVal = getRaw("turbidity", row) ?? "";
      const tdsVal  = getRaw("TDS", row) ?? "";
      valueCell.textContent =
        `pH ${pHVal} | T ${tVal}°C | DO ${doVal} mg/L | Đục ${turbVal} NTU | TDS ${tdsVal} mg/L`;
      unitCell.textContent = "";

      const statuses = [
        classifyStatus("pH",        getNumeric("pH", row)),
        classifyStatus("temp",      getNumeric("temp", row)),
        classifyStatus("DO",        getNumeric("DO", row)),
        classifyStatus("turbidity", getNumeric("turbidity", row)),
        classifyStatus("TDS",       getNumeric("TDS", row))
      ];
      let worst = "good";
      if (statuses.some(s => s.status === "bad")) worst = "bad";
      else if (statuses.some(s => s.status === "warn")) worst = "warn";

      if (worst === "good") {
        statusSpan.classList.add("ok");
        statusSpan.textContent = "Đạt";
      } else if (worst === "warn") {
        statusSpan.classList.add("warn");
        statusSpan.textContent = "Cảnh báo";
      } else {
        statusSpan.classList.add("bad");
        statusSpan.textContent = "Vượt ngưỡng";
      }
    } else {
      const meta = PARAM_META[mode];
      descCell.textContent = meta ? meta.label : mode;

      const vNum = getNumeric(mode, row);
      let display = "";
      if (!Number.isNaN(vNum) && meta && meta.format) display = meta.format(vNum);
      else {
        const raw = getRaw(mode, row);
        if (raw != null) display = String(raw);
      }
      valueCell.textContent = display;
      unitCell.textContent = meta ? meta.unit : "";

      const { status, label } = classifyStatus(mode, vNum);
      if (status === "good")      statusSpan.classList.add("ok");
      else if (status === "warn") statusSpan.classList.add("warn");
      else                        statusSpan.classList.add("bad");
      statusSpan.textContent = label;
    }

    limitCell.textContent = currentStandard
      ? currentStandard.labelShort
      : "QCVN 08-MT:2015/BTNMT";

    statusCell.appendChild(statusSpan);

    tr.appendChild(descCell);
    tr.appendChild(valueCell);
    tr.appendChild(unitCell);
    tr.appendChild(limitCell);
    tr.appendChild(statusCell);

    tbody.appendChild(tr);
  });
}

// ====== Biểu đồ ======
function updateChart() {
  const canvas = document.getElementById("qualityChart");
  if (!canvas || !lastRowsData.length || typeof Chart === "undefined") return;

  const select = document.getElementById("chart-param-select");
  const param = select ? select.value : "pH";
  const meta = PARAM_META[param] || { label: param, unit: "" };

  const rows = lastRowsData.slice();
  const labels = rows.map((r, i) => formatLabelTime(r.time, i)); // chỉ giờ / index
  const data = rows.map(r => {
    const v = getNumeric(param, r);
    return Number.isNaN(v) ? null : v;
  });

  const ctx = canvas.getContext("2d");
  if (qualityChart) qualityChart.destroy();

  qualityChart = new Chart(ctx, {
    type: "line",
    data: {
      labels,
      datasets: [{
        label: meta.unit ? `${meta.label} (${meta.unit})` : meta.label,
        data,
        tension: 0.35,
        pointRadius: 2,
        pointHoverRadius: 3,
        borderWidth: 2,
        fill: false
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          title: { display: true, text: "Thời gian" },
          ticks: { autoSkip: true, maxTicksLimit: 8 },
          grid: { display: false }
        },
        y: {
          title: { display: true, text: meta.unit || "Giá trị" },
          grid: { color: "rgba(148,163,184,0.25)" }
        }
      },
      plugins: {
        legend: { display: true, labels: { boxWidth: 12 } },
        tooltip: { enabled: true }
      },
      elements: {
        line: { tension: 0.35 },
        point: { radius: 2, hoverRadius: 3 }
      }
    }
  });
}

// ====== Gọi API ======
async function fetchDataFromApi() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("HTTP " + res.status);
    const data = await res.json();

    if (data && data.latest) {
      currentData = {
        pH:        getNumeric("pH",        data.latest),
        temp:      getNumeric("temp",      data.latest),
        DO:        getNumeric("DO",        data.latest),
        turbidity: getNumeric("turbidity", data.latest),
        TDS:       getNumeric("TDS",       data.latest)
      };
      updateCards();

      const lastUpdateEl = document.getElementById("last-update");
      if (lastUpdateEl) {
        if (data.latest.date) {
          lastUpdateEl.textContent = `${data.latest.date} ${formatLabelTime(data.latest.time, 0)}`;
        } else {
          lastUpdateEl.textContent = formatTime(new Date());
        }
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
    }
  } catch (err) {
    console.error("Lỗi khi gọi API Apps Script:", err);
  }
}

// ====== Đổi chuẩn QCVN ======
function setStandard(code) {
  const standard = QCVN_STANDARDS[code];
  if (!standard) return;
  ACTIVE_STANDARD_KEY = code;
  ACTIVE_THRESHOLDS = standard.thresholds;

  const refs = standard.refsText || {};
  const pHRefEl   = document.querySelector('[data-ref-for="pH"]');
  const tempRefEl = document.querySelector('[data-ref-for="temp"]');
  const DORefEl   = document.querySelector('[data-ref-for="DO"]');
  const turbRefEl = document.querySelector('[data-ref-for="turbidity"]');
  const tdsRefEl  = document.querySelector('[data-ref-for="TDS"]');

  if (pHRefEl   && refs.pH)        pHRefEl.textContent   = refs.pH;
  if (tempRefEl && refs.temp)      tempRefEl.textContent = refs.temp;
  if (DORefEl   && refs.DO)        DORefEl.textContent   = refs.DO;
  if (turbRefEl && refs.turbidity) turbRefEl.textContent = refs.turbidity;
  if (tdsRefEl  && refs.TDS)       tdsRefEl.textContent  = refs.TDS;

  updateCards();
  if (lastRowsData.length > 0) renderTableRows(lastRowsData);
}

// ====== Khởi động ======
document.addEventListener("DOMContentLoaded", () => {
  updateSystemTime();
  setInterval(updateSystemTime, 1000);

  setStandard(ACTIVE_STANDARD_KEY);

  const standardSelect = document.getElementById("standard-select");
  if (standardSelect) {
    standardSelect.addEventListener("change", (e) => {
      setStandard(e.target.value);
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
    });
  }

  fetchDataFromApi();
  setInterval(fetchDataFromApi, 10000);
});

