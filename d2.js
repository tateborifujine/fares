class MinHeap {
  constructor() { this.h = []; }
  push(n, d) { this.h.push({ n, d }); this._up(this.h.length - 1); }
  _up(i) {
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (this.h[p].d <= this.h[i].d) break;
      [this.h[p], this.h[i]] = [this.h[i], this.h[p]];
      i = p;
    }
  }
  pop() {
    if (!this.h.length) return null;
    const top = this.h[0];
    const last = this.h.pop();
    if (this.h.length) { this.h[0] = last; this._down(0); }
    return top;
  }
  _down(i) {
    const n = this.h.length;
    while (true) {
      let l = i * 2 + 1, r = i * 2 + 2, s = i;
      if (l < n && this.h[l].d < this.h[s].d) s = l;
      if (r < n && this.h[r].d < this.h[s].d) s = r;
      if (s === i) break;
      [this.h[s], this.h[i]] = [this.h[i], this.h[s]];
      i = s;
    }
  }
}

function isAllowedSection(fareCode) {
  if (fareCode == null) return false;
  const area = Math.floor(fareCode / 100);
  return area === 1 || area === 2 || area === 3 || area === 4;
}
function isAllowedESection (fareCode) {
  if (fareCode == null) return false;
  const fareCode2 = Math.floor(fareCode / 100);
  return fareCode2 === 3;
}
function isAllowedQSection (fareCode) {
  if (fareCode == null) return false;
  const fareCode2 = Math.floor(fareCode % 100);
  return fareCode2 === 61;
}


const nodes = {};

// --- グラフ構築（i のみ参照、i が OK なら逆方向も登録） ---
for (const lineCode in sta.kana) {
  const line = sta.kana[lineCode];
  const sta2 = line.sta;

  for (let i = 0; i < sta2.length; i++) {
    const s = [...sta2[i]];
    const id = s[0]; // ★ 事務管理コード

    if (!nodes[id]) nodes[id] = { edges: [] };

    const fareCode = s[6];

    if (isAllowedSection(fareCode)) {

      if (i + 1 < sta2.length) {
        const t = structuredClone(sta2[i + 1]);
        const tid = t[0];

        let dist,dist2;
        if (typeof s[5] === "number" && typeof t[5] === "number") {
          dist = Math.abs(t[5] - s[5]);
          //dist2 = Math.abs((t[4] ?? 0) - (s[4] ?? 0));
        } else {
          dist = Math.abs((t[4] ?? 0) - (s[4] ?? 0));
        }

        // i → i+1
        nodes[id].edges.push({
          to: tid,
          dist,
          lineCode,
          fromSta: s
        });
        //t[6] = s[6];
        // i+1 → i（逆方向も許容）
        if (!nodes[tid]) nodes[tid] = { edges: [] };
        nodes[tid].edges.push({
          to: id,
          dist,
          lineCode,
          fromSta: t
        });
        nodes[tid].edges[nodes[tid].edges.length - 1].fromSta[6] = [...s][6]; //区間区分コードは順方向のもので置換
      }
    }
  }
}

function dst(startId, goalId,es,qs) {　//es関連は、大阪電車特定区間完結で経路を構成できる場合で、かつそれが最短経路でなく、かつ大阪電車特定区間経由のほうが安くなる場合の補正コード
  if (!nodes[startId] || !nodes[goalId]) return {lines:[]};
  // --- Dijkstra ---
  let es2 = "";
  let qs2 = "";
  if (es !== true && nodes[startId].edges.some(e => isAllowedESection(e.fromSta[6])) && nodes[goalId].edges.some(e => isAllowedESection(e.fromSta[6]))) es2 = dst(startId,goalId,true);
  else if (qs != 1 && nodes[startId].edges.some(e => isAllowedQSection(e.fromSta[6])) && nodes[goalId].edges.some(e => isAllowedQSection(e.fromSta[6]))) qs2 = dst(startId,goalId,false,1);
  const dist = {};
  const prev = {};
  const prevEdge = {};
  const heap = new MinHeap();

  for (const id in nodes) {
    dist[id] = Infinity;
    prev[id] = null;
    prevEdge[id] = null;
  }

  dist[startId] = 0;
  heap.push(startId, 0);

  while (true) {
    const top = heap.pop();
    if (!top) break;
    const u = top.n;
    const d = top.d;

    if (d > dist[u]) continue;
    if (u === goalId) break;

    for (const e of nodes[u].edges) {
      if (es === true && isAllowedESection(e.fromSta[6]) == false) continue;
      else if (qs == 1 && isAllowedQSection(e.fromSta[6]) == false) continue;
      const nd = d + e.dist;
      if (nd < dist[e.to]) {
        dist[e.to] = nd;
        prev[e.to] = u;
        prevEdge[e.to] = e;
        heap.push(e.to, nd);
      }
    }
  }

  if (dist[goalId] === Infinity) return {lines:[]};

  // --- 経路復元 ---
  const stationPath = [];
  const edgePath = [];

  let cur = goalId;
  while (cur) {
    stationPath.push(cur);
    edgePath.push(prevEdge[cur]);
    cur = prev[cur];
  }
  stationPath.reverse();
  edgePath.reverse();
  edgePath.shift();

  // --- 1. edgePath から路線列を抽出 ---
  const rawLines = edgePath
    .filter(e => e && e.lineCode)
    .map(e => e.lineCode);

  // --- 2. 連続する同一路線を圧縮 ---
  const lines = [];
  for (let i = 0; i < rawLines.length; i++) {
    if (i === 0 || rawLines[i] !== rawLines[i - 1]) {
      lines.push(rawLines[i]);
    }
  }

  // --- 3. フラット配列生成（最初だけ3要素、以降2要素） ---
  const flat = [];

  for (let i = 0; i < lines.length - 1; i++) {
    const currentLine = lines[i];
    const nextLine = lines[i + 1];

    for (let j = 0; j < edgePath.length - 1; j++) {
      const eNow = edgePath[j];
      const eNext = edgePath[j + 1];
      if (!eNow || !eNext) continue;

      if (eNow.lineCode === currentLine && eNext.lineCode === nextLine) {
        const adminCode = eNext.fromSta[0];

        if (i === 0) {
          flat.push(currentLine, adminCode, nextLine);
        } else {
          flat.push(adminCode, nextLine);
        }
        break;
      }
    }
  }
  dist[goalId] = customround(dist[goalId]);
    console.log(qs2)
  if (flat.length === 0) flat.push(lines[0]);
  if (typeof es2 === "object" && dist[goalId] < es2.distance && f.fare.kansen.honshu(dist[goalId],4,1) > f.fare.kansen.honshu(es2.distance,4,3));
  else if (typeof qs2 === "object" && qs2.lines.length > 0 && dist[goalId] < qs2.distance && f.fare.q(dist[goalId],dist[goalId],3) > f.fare.q(qs2.distance,qs2.distance,2)) return qs2;
  else return {
    distance: dist[goalId],
    stations: stationPath,
    lines: flat
  };
}
