let edit = { f: { kana: {}, box: {} ,box2:{}}, temp: {}, t: [] };
let etem = {};
edit.f.kana.cre = () => {
    if (data2.length == 0) return [];
    etem.i1 = [];
    for (let i = 0; i < data2.length; i++) {
        if ("sta3" in data2[i]) etem.i1.push(data2[i].sta3[0][0], data2[i].line);
        else if (isNaN(data2[i].line) == false && typeof data2[i].sta[0][6] == "number" && data2[i].sta[0][6].toString().length > 5) etem.i1.push(data2[i].sta[0][6], data2[i].line);
        else etem.i1.push(data2[i].sta[0][0], data2[i].line);
    } if ("sta3" in data2.at(-1)) etem.i1.push(data2.at(-1).sta3.at(-1)[0]);
    else if (isNaN(data2.at(-1).line) == false && typeof data2.at(-1).sta.at(-1)[6] == "number" && data2.at(-1).sta[0][6].toString().length > 5) etem.i1.push(data2.at(-1).sta.at(-1)[6]);
    else etem.i1.push(data2.at(-1).sta.at(-1)[0]);
    return etem.i1;
};
edit.f.box.open = () => {
    document.getElementById("editbox").style.display = "inline";
    try {
        setting.f.close();
    } catch (e) {
        console.error(e);
    } edit.t = edit.d = edit.f.kana.cre();
    if (edit.t.length == 0) {
        document.getElementById("editbox3").innerHTML = "経路が未入力です。";
        return false;
    } etem.dom = [];
    for (let i = 0; i < edit.t.length - 1; i++) {
        etem.t2 = "";
        if (i > 1) {
            if (edit.t[i - 1] in sta.kana) {
                etem.t3 = sta.kana[edit.t[i - 1]].sta.filter(e => Array.isArray(e[3]) && e[3].includes(edit.t[i + 1]));
                if (etem.t3.length > 1) etem.t2 = `<select id="editselect${i}" onchange="edit.f.change(${i})">${[...Array(etem.t3.length)].map((_, ir) => `<option value="${etem.t3[ir][0]}"${edit.f.sameselect(etem.t3[ir][0], edit.t[i])}>${etem.t3[ir][1]}</option>`).join("")}</select>`;
            } else {
                etem.t3 = sta.skana[edit.t[i - 1]].sta.filter(e => Array.isArray(e[3]) && e[3].includes(edit.t[i + 1]));
                if (etem.t3.length > 1) etem.t2 = `<select id="editselect${i}" onchange="edit.f.change(${i})">${[...Array(etem.t3.length)].map((_, ir) => {if (typeof etem.t3[ir][6] == "number" && etem.t3[ir][6].toString().length > 5) {return `<option value="${etem.t3[ir][6]}"${edit.f.sameselect(etem.t3[ir][6], edit.t[i])}>${etem.t3[ir][1]}</option>`} else {return `<option value="${etem.t3[ir][0]}"${edit.f.sameselect(etem.t3[ir][0], edit.t[i])}>${etem.t3[ir][1]}</option>`}}).join("")}</select>`;
            }
        } if (edit.t[i + 1] in sta.kana) {
            if (etem.t2.length == 0) etem.dom.push(`<div>${sta.kana[edit.t[i + 1]].sta.find(e => e[0] == edit.t[i])[1]}</div>`);
            else etem.dom.push(`<div>${etem.t2}</div>`);
            etem.dom.push(`<div>${sta.kana[edit.t[i + 1]].name2}</div>`);
        } else {
            if (etem.t2.length == 0) etem.dom.push(`<div>${sta.skana[edit.t[i + 1]].sta.find(e => e[0] == edit.t[i] || (e[6].toString().length > 5 && e[6] == edit.t[i]))[1]}</div>`);
            else etem.dom.push(`<div>${etem.t2}</div>`);
            etem.dom.push(`<div>${sta.skana[edit.t[i + 1]].name2}</div>`);
        } i++;
    } if (edit.t.at(-2) in sta.kana) etem.dom.push(`<div>${sta.kana[edit.t.at(-2)].sta.find(e => e[0] == edit.t.at(-1))[1]}</div>`);
    else etem.dom.push(`<div>${sta.skana[edit.t.at(-2)].sta.find(e => e[0] == edit.t.at(-1) || (e[6].toString().length > 5 && e[6] == edit.t.at(-1)))[1]}</div>`);
    document.getElementById("editbox3").innerHTML = etem.dom.join("");
    hosei.f.save();
}; edit.f.box.close = () => {
    if (document.getElementById("editbox_checkbox").checked || confirm("更新を反映しますか？")) {
        edit.f.reflect();
    } else if (!confirm("この画面を本当に終了しますか？")) return false;
    document.getElementById("editbox").style.display = "none";
}; edit.f.change = (v) => {
    edit.d[v] = document.getElementById(`editselect${v}`).options[document.getElementById(`editselect${v}`).selectedIndex].value;
}; edit.f.sameselect = (v, v2) => {
    if (v == v2) return " selected";
    else return "";
}; edit.f.reflect = () => {
    if (data2.length == 0) return false;
    analy.f(data2[0].sta[0][0], data2.at(-1).sta.at(-1)[0], edit.d.slice(1, -1).join("-"), 0, false, false);
    hosei.f.load();  
}; let data2b = []; 
edit.f.kana.sp = (v) => {
    if (v == void 0) v = [];
    else if (!Array.isArray(v)) v = JSON.parse(v);
    etem.k1 = [[(data2b[0].sta[0][6] ?? 0).toString().length >= 6 ? data2b[0].sta[0][6] : data2b[0].sta[0][0]]];
    etem.kn = 0;
    for (let i = 0;i < data2b.length;i++) {
        etem.k1[etem.k1.length - 1].push(data2b[i].line);
        for (let i2 = 0;i2 < data2b[i].sta.length;i2++) {
            if (data2b[i].sta[i2][0] == v[etem.kn] || (data2b[i].line.typec() == 2 && data2b[i].sta.at(-1)[6].toString().length >= 6 && data2b[i].sta[i2][6] == v[etem.kn])) {
                if (i == 0 && i2 == 0) etem.k1 = [[]];
                etem.k1[etem.k1.length - 1].push(v[etem.kn]);
                if (data2b[i].sta.length - 1 == i2) etem.k1.push([]);
                else etem.k1.push([v[etem.kn],data2b[i].line]);
                etem.kn++;
            }
        } etem.k1[etem.k1.length - 1].push((data2b[i].line.typec() == 2 && data2b[i].sta.at(-1)[6].toString().length >= 6) ? data2b[i].sta.at(-1)[6] : data2b[i].sta.at(-1)[0]);
    } //if (etem.k1.at(-1).at(-1) == v.at(-1)) etem.k1[etem.k1.length - 1].push(v.at(-1));
    console.log(etem.k1);
    return etem.k1;
}; edit.f.kana.ins = (v) => {
    if (v == void 0) {
        if (data2.length == 0) {
            alert("経路が未入力です。");
            return false;
        } else v = [(data2[0].sta[0][6] ?? 0).toString().length >= 6 ? data2[0].sta[0][6] : data2[0].sta[0][0],(data2.at(-1).sta.at(-1)[6] ?? 0).toString().length >= 6 ? data2.at(-1).sta.at(-1)[6] : data2.at(-1).sta.at(-1)[0]];
    } else if (!Array.isArray(v)) v = JSON.parse(v);
    edit.f.kana.sp([v[0],v[1]]);
    if (etem.k1.length == 1) {
        etem.k1.unshift([]);
        etem.k1.push([]);
    } else if (etem.k1.length == 2) etem.k1.push([]);
    else if (etem.k1.length != 3) console.log("長さが３ではないのでエラー吐く可能性が高いっぽい？");
    etem.k1[1] = edit.f.kana.cre();
    etem.k2 = etem.k1[0].slice(0,-1).concat(...etem.k1[1],...etem.k1[2].slice(1));
    etem.k3 = [etem.k2[0]];
    for (let i = 1;i < etem.k2.length - 1;i++) {
        console.log(i,etem.k2[i]);
        if (etem.k2[i] == etem.k2[i + 2]) {
            etem.k3.push(etem.k2[i]);
            if (i + 4 < etem.k2.length && etem.k2[i] == etem.k2[i + 4]) i += 4;
            else i += 2;
        } else etem.k3.push(etem.k2[i]);
    } etem.k3.push(etem.k2.at(-1));
    try {
        analy.f(etem.k3[0], etem.k3.at(-1), etem.k3.slice(1, -1).join("-"), 0, false, false);
        edit.f.box2.close();
    } catch (e) {
        console.error(e);
        alert("正常に挿入することができませんでした。");
    }
}; edit.f.kana.daback = () => {
    if (data2.length == 0) {
        alert("経路が未入力です。");
        return false;
    } data2b = JSON.parse(JSON.stringify(data2));
    edit.d2b = {code:analy.cre()};
    edit.d2b.ki = exp.keiyu(edit.d2b.code).join('•');
    if (edit.d2b.ki == "") edit.d2b.ki = "ー";
    document.getElementById("nek1").innerHTML = data2b[0].sta[0][1];
    document.getElementById("nek2").innerHTML = data2b.at(-1).sta.at(-1)[1];
    document.getElementById("nek3").innerHTML = edit.d2b.ki;
    edit.f.box2.close();
}; edit.f.kana.daback_load = () => {
    analy.f(data2b[0].sta[0][0],data2b.at(-1).sta.at(-1)[0],edit.d2b.code.join("-"),0);
    edit.f.box2.close();
};
edit.f.box2.open = () => {
    document.getElementById("edit2box").style.display = "inline";
}; edit.f.box2.close = () => {
    document.getElementById("edit2box").style.display = "none";
}; edit.f.box2.openclose = () => {
    if (document.getElementById("edit2box").style.display == "inline") document.getElementById("edit2box").style.display = "none";
    else document.getElementById("edit2box").style.display = "inline";
}