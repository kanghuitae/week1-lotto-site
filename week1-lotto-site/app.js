const drawButton = document.querySelector("#draw-button");
const copyButton = document.querySelector("#copy-button");
const clearButton = document.querySelector("#clear-button");
const numberList = document.querySelector("#number-list");
const bonusBall = document.querySelector("#bonus-ball");
const drawTime = document.querySelector("#draw-time");
const drawCount = document.querySelector("#draw-count");
const statusMessage = document.querySelector("#status-message");
const historyList = document.querySelector("#history-list");

const history = [];
let latestDraw = null;
let totalDraws = 0;

function pickLottoNumbers() {
  const pool = Array.from({ length: 45 }, (_, index) => index + 1);

  for (let index = pool.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [pool[index], pool[swapIndex]] = [pool[swapIndex], pool[index]];
  }

  const numbers = pool.slice(0, 6).sort((a, b) => a - b);
  const bonus = pool[6];
  return { numbers, bonus };
}

function getRangeClass(number) {
  if (number <= 10) return "range-a";
  if (number <= 20) return "range-b";
  if (number <= 30) return "range-c";
  if (number <= 40) return "range-d";
  return "range-e";
}

function formatTime(date) {
  return new Intl.DateTimeFormat("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);
}

function renderNumbers(draw) {
  numberList.innerHTML = "";

  draw.numbers.forEach((number) => {
    const item = document.createElement("li");
    item.className = `ball ${getRangeClass(number)}`;
    item.textContent = number;
    numberList.append(item);
  });

  bonusBall.className = `bonus-ball ${getRangeClass(draw.bonus)}`;
  bonusBall.textContent = draw.bonus;
}

function renderHistory() {
  historyList.innerHTML = "";

  if (history.length === 0) {
    const empty = document.createElement("li");
    empty.className = "empty-history";
    empty.textContent = "아직 저장된 번호가 없습니다.";
    historyList.append(empty);
    return;
  }

  history.forEach((draw, index) => {
    const item = document.createElement("li");
    item.className = "history-item";

    const title = document.createElement("strong");
    title.textContent = `${index + 1}. ${draw.createdAt} ·`;

    const text = document.createElement("span");
    text.textContent = `번호 ${draw.numbers.join(", ")} + Bonus ${draw.bonus}`;

    item.append(title, text);
    historyList.append(item);
  });
}

function updateStatus(message) {
  statusMessage.textContent = message;
}

function drawNumbers() {
  const createdAtDate = new Date();
  const draw = {
    ...pickLottoNumbers(),
    createdAt: formatTime(createdAtDate),
  };

  latestDraw = draw;
  totalDraws += 1;
  history.unshift(draw);
  history.splice(5);

  renderNumbers(draw);
  renderHistory();

  drawTime.dateTime = createdAtDate.toISOString();
  drawTime.textContent = draw.createdAt;
  drawCount.textContent = String(totalDraws);
  copyButton.disabled = false;
  updateStatus("새 번호를 생성했습니다.");
}

async function copyLatestDraw() {
  if (!latestDraw) return;

  const text = `Lucky Six: ${latestDraw.numbers.join(", ")} + Bonus ${latestDraw.bonus}`;

  try {
    await copyText(text);
    updateStatus("번호를 클립보드에 복사했습니다.");
  } catch {
    updateStatus(text);
  }
}

async function copyText(text) {
  if (navigator.clipboard?.writeText && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      // Continue to the selection fallback below.
    }
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.top = "0";
  textarea.style.left = "0";
  textarea.style.opacity = "0";
  document.body.append(textarea);
  textarea.focus();
  textarea.select();

  const copied = document.execCommand("copy");
  textarea.remove();

  if (!copied) {
    throw new Error("Clipboard copy failed");
  }
}

function clearHistory() {
  history.splice(0);
  latestDraw = null;
  totalDraws = 0;

  numberList.innerHTML = Array.from({ length: 6 }, () => '<li class="ball empty">?</li>').join("");
  bonusBall.className = "bonus-ball empty";
  bonusBall.textContent = "?";
  drawTime.removeAttribute("datetime");
  drawTime.textContent = "아직 추첨 전";
  drawCount.textContent = String(totalDraws);
  copyButton.disabled = true;
  renderHistory();
  updateStatus("기록을 지웠습니다.");
}

drawButton.addEventListener("click", drawNumbers);
copyButton.addEventListener("click", copyLatestDraw);
clearButton.addEventListener("click", clearHistory);

renderHistory();
