let atem = {tl:{},atm:false};
let auto = { d: [], f: { box: {} }, t: { fst: [], tf: true, k: 0, kiro: 0 }, r: [], l: [], r2: [] ,his:{}};
[auto.com, atem.com] = [new Array(7), new Array(7)];
atem.com[1] = sta.allkana2.slice(sta.allkana2.findIndex(e => e == "ウチウソ"),sta.allkana2.findIndex(e => e == "セキホ") + 1);
atem.com[1] = atem.com[1].concat([...Array(atem.com[1].length)].map((_, ir) => [...Array(sta.kana[atem.com[1][ir]].sta.length)].map((_2, ir2) => sta.kana[atem.com[1][ir]].sta[ir2].slice(0, 3))).flat(Infinity));
auto.com[1] = new RegExp(`${[...Array(atem.com[1].length)].map((_, ir) => `^${atem.com[1][ir]}$`).join("|")}`, "i");
atem.com[5] = sta.allkana2.slice(sta.allkana2.findIndex(e => e == "ヨサン"), sta.allkana2.findIndex(e => e == "ヨト") + 1).concat(["ヒサセソ", "ヒサセ", "ウノ"]);
atem.com[5] = atem.com[5].concat([...Array(atem.com[5].length)].map((_, ir) => [...Array(sta.kana[atem.com[5][ir]].sta.length)].map((_2, ir2) => sta.kana[atem.com[5][ir]].sta[ir2].slice(0, 3))).flat(Infinity));
auto.com[5] = new RegExp(`${[...Array(atem.com[5].length)].map((_, ir) => `^${atem.com[5][ir]}$`).join("|")}`, "i");
atem.com[6] = sta.allkana2.slice(sta.allkana2.findIndex(e => e == "カコシ"), sta.allkana2.findIndex(e => e == "キツト") + 1).concat(["キユシ", "ニキシ"]);
atem.com[6] = atem.com[6].concat([...Array(atem.com[6].length)].map((_, ir) => [...Array(sta.kana[atem.com[6][ir]].sta.length)].map((_2, ir2) => sta.kana[atem.com[6][ir]].sta[ir2].slice(0, 3))).flat(Infinity));
auto.com[6] = new RegExp(`${[...Array(atem.com[6].length)].map((_, ir) => `^${atem.com[6][ir]}$`).join("|")}`, "i");
auto.f.com = (v) => {
    if (auto.com[1].test(v)) {
        if (/^140106$|^新函館北斗$|^セカハホ$/.test(v)) return 99;
        else return 1;
    } else if (auto.com[5].test(v)) return 5;
    else if (auto.com[6].test(v)) {
        if (/^910101$|^910144$|^910103$|^910106$|^門司港$|^門司$|^小森江$|^小倉$|^モシモコ$|^モシコモ$|^モシモシ$|^モシコラ$/.test(v)) return 99;
        else return 6;
    } else return 99;
}; auto.f.ex3 = (fst, fin, ksta) => {
    atem.data2 = JSON.parse(JSON.stringify(data2));
    try {
        if (Array.isArray(ksta) == false) {
            if (ksta == "") ksta == [];
            else ksta == [ksta];
        } if (ksta.length == 0) auto.f.ex2(fst, fin);
        else {
            auto.cr10 = [];
            auto.cr12 = [auto.f.ex2(fst, ksta, false), auto.f.ex2(ksta, fin, false)];
            for (let i = 0; i < auto.cr12[0].length; i++) {
                atem.cr11 = auto.cr12[0][i][1].split("-");
                for (let i2 = 0; i2 < auto.cr12[1].length; i2++) {
                    atem.cr21 = auto.cr12[1][i2][1].split("-");
                    //console.log(atem.cr11.at(-1), atem.cr21[0], JSON.parse(JSON.stringify(atem.cr11)), JSON.parse(JSON.stringify(atem.cr21)));
                    if (atem.cr11.at(-1) == atem.cr21[0]) {
                        if (atem.cr11.length > 1 && atem.cr21.length > 1 && atem.cr11.at(-2) == atem.cr21[1]) continue;
                        atem.cr12 = `${atem.cr11.slice(0, -1).join("-")}-${auto.cr12[1][i2][1]}`;
                        if (atem.cr12.charAt(0) == "-") atem.cr12 = atem.cr12.substring(1, atem.cr12.length);
                    } else atem.cr12 = `${auto.cr12[0][i][1]}-${ksta}-${auto.cr12[1][i2][1]}`;
                    try {
                        analy.f(fst.toString(), fin.toString(), atem.cr12, 1, false, false);
                        calc(1);
                        if (temp.dup == false && data3.findIndex(e => e[0] == ksta || e[1] == ksta || e[2] == ksta || (typeof e[6] == "number" && e[6] == ksta)) != -1) auto.cr10.push([customround(temp.c.kiro[0][0] + temp.c.kiro[0][1] + temp.sres[0]), atem.cr12]);
                    } catch (e) {
                        continue;
                    }
                }
            }
            auto.cr10.sort(function (ia, ib) { return ia[0] - ib[0] });
            if (auto.cr10.length > 50) auto.cr10 = auto.cr10.slice(0, 50);
            auto.f.view(fst, fin, auto.cr10);
        }
    } catch (e) {
        console.error(e);
        document.getElementById("keiroinfo").innerHTML = "検索に失敗したようです。ごめんなさい。";
    } data2 = JSON.parse(JSON.stringify(atem.data2));
};
auto.f.ex2 = (fst, fin, m) => {
    if (m == undefined) m = true;
    atem.com2 = [auto.f.com(fst), auto.f.com(fin)];
    if ((atem.com2[0] == 6 && atem.com2[1] == 1) || (atem.com2[0] == 1 && atem.com2[1] == 6)) {
        auto.re = false;
        if (atem.com2[0] == 1 && atem.com2[1] == 6) {
            auto.cr2 = [auto.f.ex(fin, "小倉"), , auto.f.ex("新函館北斗", fst)];
            auto.re = true;
        } else auto.cr2 = [auto.f.ex(fst, "小倉"), , auto.f.ex("新函館北斗", fin)];
        if (auto.cr2[0].length > 7) auto.cr2[0] = auto.cr2[0].slice(0, 7);
        auto.cr2[1] = [
            [1991.9, "シンカ-440101-トホシ-220895-キタシ", 3],/*全区間新幹線*/
            [1991.9, "カコシ-910103-サンヨ-610145-トウカ-440101-トホシ-220895-キタシ", 5],/*全区間在来線
            [1991.9,"カコシ-910103-サンヨ-610145-トウカ-440101-トホシ-220895-キタシ",5]*/
        ]; auto.cr = [];
        for (let i = 0; i < auto.cr2[0].length; i++) {
            atem.cr1 = auto.cr2[0][i][1].split("-");
            for (let i2 = 0; i2 < auto.cr2[1].length; i2++) {
                if (atem.cr1.at(-1) == auto.cr2[1][i2][1].split("-")[0]) atem.cr11 = `${atem.cr1.slice(0, -1).join("-")}-${auto.cr2[1][i2][1]}`;
                else atem.cr11 = `${auto.cr2[0][i][1]}-910106-${auto.cr2[1][i2][1]}`;
                for (let i3 = 0; i3 < auto.cr2[2].length; i3++) {
                    auto.cr.push([customround(auto.cr2[1][i2][0] + auto.cr2[0][i][0] + auto.cr2[2][i3][0]), `${atem.cr11}-140106-${auto.cr2[2][i3][1]}`]);
                    auto.cr[auto.cr.length - 1].push(auto.cr.at(-1)[1].split("-").length);
                    if (auto.re) auto.cr[auto.cr.length - 1][1] = auto.cr[auto.cr.length - 1][1].split("-").reverse().join("-");
                }
            }
        }
        auto.cr.sort(function (ia, ib) { return ia[0] - ib[0] });
        if (auto.cr.length > 50) auto.cr = auto.cr.slice(0, 50);
        if (m) auto.f.view(fst, fin, auto.cr);
        else return auto.cr;
        //return auto.cr;
    } else {
        if (m) auto.f.view(fst, fin, auto.f.ex(fst, fin));
        else {
            auto.f.ex(fst, fin);
            return auto.r;
        }
    }
};
auto.f.ex = (fst, fin) => {
    [auto.r, auto.t.i1, auto.t.fst, auto.r2, auto.r3] = [[], 0, sta.allkana2.filter(e => sta.kana[e].sta.findIndex((e2) => e2[0] == fst || e2[1] == fst || e2[2] == fst) != -1).concat(sta.allskana.filter(e => sta.skana[e].sta.findIndex((e2) => e2[0] == fst || e2[1] == fst || e2[2] == fst) != -1)), [], []];
    //if (fst.toString().types() != 0) fst = auto.f.stc(fst)[0];
    //if (fin.toString().types() != 0) fin = auto.f.stc(fin)[0];
    //auto.t.dst = customround(dst(fst,fin).distance);
    for (let i = 0; i < auto.t.fst.length; i++) {
        if (isNaN(auto.t.fst[i])) atem.i5 = sta.kana[auto.t.fst[i]].sta;
        else atem.i5 = sta.skana[auto.t.fst[i]].sta;
        atem.i4 = atem.i5.find(e => e[0] == fst || e[1] == fst || e[2] == fst);
        auto.d = [[0, [[atem.i4[0], atem.i4[4], auto.t.fst[i]]]]];
        [auto.t.k, auto.t.kiro, auto.l] = [0, 0, []];
        while (auto.t.tf == true) {
            auto.r3.push(JSON.parse(JSON.stringify(auto.d)));
            if (auto.d.length == 1 && auto.d[0][1].length == 0) break;
            if (auto.d.at(-1)[1].length == 0) {
                while (auto.d.at(-1)[1].length == 0 && auto.d.length != 0) {
                    auto.t.k--;
                    auto.d.pop();
                    auto.l.pop();
                    if (auto.d.length == 0) break;
                    auto.d[auto.d.length - 1][1].shift();
                } if (auto.d.length == 0) break;
            } auto.t.l = auto.d.at(-1)[1][0][2];
            if (isNaN(auto.t.l)) atem.i5 = sta.kana[auto.t.l].sta;
            else atem.i5 = sta.skana[auto.t.l].sta;
            atem.i3 = atem.i5.findIndex(e => e[0] == fin || e[1] == fin || e[2] == fin);
            if (atem.i3 != -1) {
                if (auto.d.length > 1) {
                    try {
                        atem.i6 = sta.kana[auto.l.at(-1)].sta.find(e => e[0] == auto.d.at(-2)[1][0][0])[4];
                    } catch (e) {
                        atem.i6 = sta.skana[auto.l.at(-1)].sta.find(e => ((e[0] == auto.d.at(-2)[1][0][0]) || (e[6].toString().length > 5 && e[6] == auto.d.at(-2)[1][0][0])))[4];
                    }
                } else atem.i6 = 0;
                atem.i4 = atem.i5.find(e => (e[0] == auto.d.at(-1)[1][0][0] || (isNaN(e[6]) == false && e[6].toString().length > 5 && e[6] == auto.d.at(-1)[1][0][0])));
                if (auto.d.length > 1) auto.r.push([customround(auto.d.at(-1)[0] + Math.abs(auto.d.at(-1)[1][0][1] - atem.i6) + Math.abs(atem.i5[atem.i3][4] - atem.i4[4])), [...Array(auto.d.length)].map((_, ir) => `${auto.d[ir][1][0][0]}-${auto.d[ir][1][0][2]}`).join("-").split("-").slice(1)]);
                else auto.r.push([customround(auto.d.at(-1)[0] + Math.abs(atem.i5[atem.i3][4] - atem.i4[4])), [...auto.l].concat(auto.t.l)]);
                auto.d[auto.d.length - 1][1].shift();
                if (auto.d.at(-1)[1].length == 0) {
                    auto.d.pop();
                    auto.l.pop();
                    auto.t.k--;
                    if (auto.d.length == 0) break;
                    auto.d[auto.d.length - 1][1].shift();
                }
            } else {
                if (auto.t.k > 2) {
                    if (auto.d.length > 1) {
                        try {
                            atem.i4 = sta.kana[auto.l.at(-1)].sta.find(e => e[0] == auto.d.at(-2)[1][0][0])[4];
                        } catch (e) {
                            atem.i4 = sta.skana[auto.l.at(-1)].sta.find(e => ((e[0] == auto.d.at(-2)[1][0][0]) || (e[6].toString().length > 5 && e[6] == auto.d.at(-2)[1][0][0])))[4];
                        } atem.i4 = Math.abs(auto.d.at(-1)[1][0][1] - atem.i4);
                    } else atem.i4 = 0;
                    auto.r2.push([auto.d.at(-1)[0] + atem.i4, [...Array(auto.d.length)].map((_, ir) => `${auto.d[ir][1][0][0]}-${auto.d[ir][1][0][2]}`).join("-"), auto.d.at(-1)[1][0][0]]);
                    auto.d[auto.d.length - 1][1].shift();
                    if (auto.d.at(-1)[1].length == 0) {
                        auto.d.pop();
                        auto.l.pop();
                        auto.t.k--;
                        if (auto.d.length == 0) break;
                        auto.d[auto.d.length - 1][1].shift();
                    }
                } else {
                    if (auto.d.at(-1)[1].length == 0) {
                        auto.d.pop();
                        auto.l.pop();
                        auto.t.k--;
                        if (auto.d.length == 0) break;
                        auto.d[auto.d.length - 1][1].shift();
                    } else {
                        if (auto.d.length > 1) {
                            try {
                                atem.i4 = sta.kana[auto.l.at(-1)].sta.find(e => e[0] == auto.d.at(-2)[1][0][0])[4];
                            } catch (e) {
                                atem.i4 = sta.skana[auto.l.at(-1)].sta.find(e => ((e[0] == auto.d.at(-2)[1][0][0]) || (e[6].toString().length > 5 && e[6] == auto.d.at(-2)[1][0][0])))[4];
                            } atem.i4 = Math.abs(auto.d.at(-1)[1][0][1] - atem.i4);
                        } else atem.i4 = 0;
                        auto.d.push([auto.d.at(-1)[0] + atem.i4, auto.f.set(auto.t.l, auto.l.at(-1), auto.d.at(-1)[1][0][0])]);
                        auto.l.push(auto.t.l);
                        auto.t.k++;
                    }
                }
            } atem.fst = false;
        }
    } if (auto.r.length < 4) {
        auto.t.i1 = 0;
        auto.t.fin = sta.allkana2.filter(e => sta.kana[e].sta.findIndex((e2) => e2[0] == fin || e2[1] == fin || e2[2] == fin) != -1).concat(sta.allskana.filter(e => sta.skana[e].sta.findIndex((e2) => e2[0] == fin || e2[1] == fin || e2[2] == fin) != -1));
        for (let i = 0; i < auto.t.fin.length; i++) {
            if (isNaN(auto.t.fin[i])) atem.i5 = sta.kana[auto.t.fin[i]].sta;
            else atem.i5 = sta.skana[auto.t.fin[i]].sta;
            atem.i4 = atem.i5.find(e => e[0] == fin || e[1] == fin || e[2] == fin);
            [auto.d, auto.t.k, auto.t.kiro, auto.l] = [[[0, [[atem.i4[0], atem.i4[4], auto.t.fin[i]]]]], 0, 0, []];
            while (auto.t.tf == true) {
                if (auto.d.length == 1 && auto.d[0][1].length == 0) break;
                if (auto.d.at(-1)[1].length == 0) {
                    while (auto.d.at(-1)[1].length == 0 && auto.d.length != 0) {
                        auto.t.k--;
                        auto.d.pop();
                        auto.l.pop();
                        if (auto.d.length == 0) break;
                        auto.d[auto.d.length - 1][1].shift();
                    } if (auto.d.length == 0) break;
                } auto.t.l = auto.d.at(-1)[1][0][2];
                if (isNaN(auto.t.l)) atem.i5 = sta.kana[auto.t.l].sta;
                else atem.i5 = sta.skana[auto.t.l].sta;
                atem.i3 = auto.r2.flatMap((_, i) => (_[1].split("-").at(-1) == auto.t.l ? i : []));
                if (atem.i3.length > 0) {
                    if (auto.d.length > 1) {
                        try {
                            atem.i6 = sta.kana[auto.l.at(-1)].sta.find(e => e[0] == auto.d.at(-2)[1][0][0])[4];
                        } catch (e) {
                            atem.i6 = sta.skana[auto.l.at(-1)].sta.find(e => ((e[0] == auto.d.at(-2)[1][0][0]) || (e[6].toString().length > 5 && e[6] == auto.d.at(-2)[1][0][0])))[4];
                        } try {
                            atem.i8 = sta.kana[auto.t.l].sta.find(e => e[0] == auto.d.at(-1)[1][0][0])[4];
                        } catch (e) {
                            atem.i8 = sta.skana[auto.t.l].sta.find(e => ((e[0] == auto.d.at(-1)[1][0][0]) || (e[6].toString().length > 5 && e[6] == auto.d.at(-1)[1][0][0])))[4];
                        }
                    } else {
                        [atem.i6, atem.i7] = [0, 0];
                    } atem.i4 = atem.i5.find(e => e[0] == auto.d.at(-1)[1][0][0]);
                    for (let i2 = 0; i2 < atem.i3.length; i2++) {
                        if (auto.d.length > 1) {
                            try {
                                atem.i7 = sta.kana[auto.t.l].sta.find(e => e[0] == auto.r2[atem.i3[i2]][2])[4];
                            } catch (e) {
                                atem.i7 = sta.skana[auto.t.l].sta.find(e => ((e[0] == auto.r2[atem.i3[i2]][2]) || (e[6].toString().length > 5 && e[6] == auto.r2[atem.i3[i2]][2])))[4];
                            } atem.i7 = Math.abs(atem.i8 - atem.i7);
                        } else atem.i7 = 0;
                        auto.r.push([customround(auto.d.at(-1)[0] + auto.r2[atem.i3[i2]][0] + Math.abs(auto.d.at(-1)[1][0][1] - atem.i6) + atem.i7), auto.r2[atem.i3[i2]][1].split("-").slice(0, -1).concat([...Array(auto.d.length)].map((_, ir) => `${auto.d[ir][1][0][0]}-${auto.d[ir][1][0][2]}`).join("-").split("-").reverse()).slice(1, -1)]);
                    }
                }
                if (auto.t.k > 2) {
                    auto.d[auto.d.length - 1][1].shift();
                    if (auto.d.at(-1)[1].length == 0) {
                        auto.d.pop();
                        auto.l.pop();
                        auto.t.k--;
                        if (auto.d.length == 0) break;
                        auto.d[auto.d.length - 1][1].shift();
                    }
                } else {
                    if (auto.d.at(-1)[1].length == 0) {
                        auto.d.pop();
                        auto.l.pop();
                        auto.t.k--;
                        if (auto.d.length == 0) break;
                        auto.d[auto.d.length - 1][1].shift();
                    } else {
                        if (auto.d.length > 1) {
                            try {
                                atem.i4 = sta.kana[auto.l.at(-1)].sta.find(e => e[0] == auto.d.at(-2)[1][0][0])[4];
                            } catch (e) {
                                atem.i4 = sta.skana[auto.l.at(-1)].sta.find(e => ((e[0] == auto.d.at(-2)[1][0][0]) || (e[6].toString().length > 5 && e[6] == auto.d.at(-2)[1][0][0])))[4];
                            } atem.i4 = Math.abs(auto.d.at(-1)[1][0][1] - atem.i4);
                        } else atem.i4 = 0;
                        auto.d.push([auto.d.at(-1)[0] + atem.i4, auto.f.set(auto.t.l, auto.l.at(-1), auto.d.at(-1)[1][0][0])]);
                        auto.l.push(auto.t.l);
                        auto.t.k++;
                    }
                } atem.fst = false;
            }
        }
    } auto.r.sort(function (ia, ib) { return (ia[0] - ib[0]) });
    [auto.r, auto.r3] = [auto.r.filter(e => ([...new Set(e[1])].length == e[1].length && auto.r[0][0] * 2 > e[0])), {}]
    for (let i = 0; i < auto.r.length; i++) {
        atem.i11 = auto.r[i][1].filter((e, ir) => ir % 2 == 0).join("-");
        if (auto.r[i][0].toString() in auto.r3) {
            if (atem.i11 in auto.r3[auto.r[i][0].toString()]) {
                //console.log(["シンカ","440131","トウカ"].every(kw => auto.r[i][1].includes(kw)));
                //console.log(JSON.parse(JSON.stringify(auto.r[i][1])));
                if (auto.r3[auto.r[i][0].toString()][atem.i11].length < 1 || (atem.atm && ["シンカ","440131","トウカ"].every(kw => auto.r[i][1].includes(kw)))) auto.r3[auto.r[i][0].toString()][atem.i11].push([auto.r[i][1].join("-"), auto.r[i][1].length]);
            } else auto.r3[auto.r[i][0].toString()][atem.i11] = [[auto.r[i][1].join("-"), auto.r[i][1].length]];
        } else {
            auto.r3[auto.r[i][0].toString()] = {};
            auto.r3[auto.r[i][0].toString()][atem.i11] = [[auto.r[i][1].join("-"), auto.r[i][1].length]];
        }
    } [auto.r4, auto.r] = [Object.keys(auto.r3).sort(function (ia, ib) { return (Number(ia) - Number(ib)) }), []];
    for (let i = 0; i < auto.r4.length; i++) {
        atem.i11 = Object.values(auto.r3[auto.r4[i]]).sort(function (ia, ib) { return ia[0][1] - ib[0][1] });
        for (let i3 = 0; i3 < atem.i11.length; i3++) {
            auto.r.push([auto.r4[i] - 0, atem.i11[i3][0][0]]);
            if (atem.i11[i3].length > 1 && ["シンカ","440131","トウカ"].every(kw => atem.i11[i3][1][0].includes(kw))) auto.r.push([auto.r4[i] - 0, atem.i11[i3][1][0]]);
        }
    } if (auto.r.length > 150) auto.r = auto.r.slice(0, 150);
    for (let i = 0; i < auto.r.length; i++) {
        try {
            analy.f(fst, fin, auto.r[i][1], 1, false, false);
            calc(1);
            if (temp.dup) {
                auto.r.splice(i, 1);
                i--;
            }
        } catch (e) {
            auto.r.splice(i, 1);
            i--;
        }
    } return auto.r;
}; auto.f.view = (fst, fin, r) => {
    atem.dom = [];
    if (r.length == 0) {
        document.getElementById("keiroinfo").innerHTML = "候補が見つかりませんでした。ごめんなさい。";
    } else {
        console.log(...auto.r);
        for (let i = 0; i < r.length; i++) {
            //console.log(r[i]);
            try {
                if (Array.isArray(r[i])) r[i] = r[i][1];
                analy.f(fst, fin, r[i], 1, false, false);
                calc2(1);
                if (temp.dup) continue;
                atem.kanacre = analy.cre();
                atem.expkeiyu = exp.keiyu(atem.kanacre).join("・");
                if (/新幹線・(上野|熊谷|本庄早稲田)・新幹線|(東京|上野|大宮)・新幹線・(大宮|上野|東京)/.test(atem.expkeiyu)) continue;
                else if (/内浦湾線・函館線・(内浦湾線|千歳線)/.test(atem.expkeiyu)) continue;
                atem.dom.push(`<tr onclick="auto.f.load('${fst}','${fin}','${atem.kanacre.join("-")}')"><td>${customround(temp.c.kiro[0][0] + temp.c.kiro[0][1] + temp.sres[0])}</td><td>${temp.res}</td><td>${atem.expkeiyu}</td></tr>`);
            } catch (e) {
                console.error(e);
            }
        } atem.dom = `<table>${atem.dom.join("")}</table>`;
        document.getElementById("keiroinfo").innerHTML = atem.dom;
    } return atem.dom;
}; auto.f.load = (fst, fin, r) => {
    if (confirm("読み込んでよろしいですか？")) {
        analy.f(fst, fin, r, 0);
        auto.f.box.close();
        if (typeof hosei !== "undefined" && hosei.tf) hosei.f.dom.cre(); //補正禁止用チェックボックス再生成
    }
}; auto.f.set = (v, vb, vs) => {
    if (isNaN(v)) atem.i1 = sta.kana[v].sta;
    else atem.i1 = sta.skana[v].sta;
    atem.i2 = [];
    for (let i = 0; i < atem.i1.length; i++) {
        if (atem.i1[i][3] != false && atem.i1[i][0] != vs) {
            for (let i2 = 0; i2 < atem.i1[i][3].length; i2++) {
                if (atem.i1[i][3][i2] != vb) {
                    if (atem.i1[i][0].toString().length == 7 && isNaN(atem.i1[i][6]) == false && atem.i1[i][6].toString().length == 6) atem.i2.push([atem.i1[i][6], atem.i1[i][4], atem.i1[i][3][i2]]);
                    else atem.i2.push([atem.i1[i][0], atem.i1[i][4], atem.i1[i][3][i2]]);
                }
            }
        }
    } return atem.i2;
}; auto.f.box.close = () => {
    document.getElementsByClassName("autobox")[0].style.display = "none";
}; auto.f.box.open = () => {
    document.getElementsByClassName("autobox")[0].style.display = "inline";
}; auto.f.box.openclose = () => {
    if (document.getElementsByClassName("autobox")[0].style.display == "inline") auto.f.box.close();
    else auto.f.box.open();
}; auto.f.box.reverse = () => {
    [document.getElementById("keiro_fst").value, document.getElementById("keiro_fin").value] = [document.getElementById("keiro_fin").value, document.getElementById("keiro_fst").value];
}; auto.f.box.ex = () => {
    if (document.getElementById("keiro_keiyusta").value == "口座") {
        auto.f.kouza(document.getElementById("keiro_fst").value, document.getElementById("keiro_fin").value);
    } else if (document.getElementById("kinko").checked) auto.f.ex4(document.getElementById("keiro_fst").value, document.getElementById("keiro_fin").value, document.getElementById("keiro_keiyusta").value);
    else auto.f.ex3(document.getElementById("keiro_fst").value, document.getElementById("keiro_fin").value, document.getElementById("keiro_keiyusta").value);
}; auto.f.kouza = (fst,fin) => {
    atem.data2 = JSON.parse(JSON.stringify(data2));
    if (fst.toString().types != 0) fst = auto.f.stc(fst)[0];
    if (fin.toString().types != 0) fin = auto.f.stc(fin)[0];
    fst -= 0;
    fin -= 0;
    if (fst.toString().types() == 0 && fin.toString().types() == 0) {
        console.log(fst,fin,356);
        getkouza(fst,fin)
        .then(r => {
            if (r.length == 0) {
                document.getElementById("keiroinfo").innerHTML = "候補が見つかりませんでした。ごめんなさい。";
            } else {
                console.log(r);
                auto.r2 = [];
                atem.dom = [];
                for (let i = 0;i < r.length;i++) {
                    try {
                        //console.log(r[i].kana);
                        analy.f(r[i].fst,r[i].fin,r[i].kana,1,false,false);
                        calc2(1);
                        atem.dom.push(`<tr onclick="auto.f.load('${r[i].fst}','${r[i].fin}','${r[i].kana}')"><td>経${r[i].num}</td><td>${customround(temp.c.kiro[0][0] + temp.c.kiro[0][1] + temp.sres[0])}</td><td>${temp.res}</td><td>${r[i].keiro}</td></tr>`);
                    } catch (e) {
                        console.error(e);
                        console.log(i,r[i].num);
                    }
                } data2 = JSON.parse(JSON.stringify(atem.data2));
                atem.dom = `<table>${atem.dom.join("")}</table>`;
                document.getElementById("keiroinfo").innerHTML = atem.dom;
            }
     /*else {
        for (let i = 0; i < r.length; i++) {
            //console.log(r[i]);
            if (Array.isArray(r[i])) r[i] = r[i][1];
            analy.f(fst, fin, r[i], 1, false, false);
            calc2(1);
            if (temp.dup) continue;
            atem.kanacre = analy.cre();
            atem.expkeiyu = exp.keiyu(atem.kanacre).join("・");
            if (/新幹線・(上野|熊谷|本庄早稲田)・新幹線|(東京|上野|大宮)・新幹線・(大宮|上野|東京)/.test(atem.expkeiyu)) continue;
            else if (/内浦湾線・函館線・(内浦湾線|千歳線)/.test(atem.expkeiyu)) continue;
            atem.dom.push(`<tr onclick="auto.f.load('${fst}','${fin}','${atem.kanacre.join("-")}')"><td>${customround(temp.c.kiro[0][0] + temp.c.kiro[0][1] + temp.sres[0])}</td><td>${temp.res}</td><td>${atem.expkeiyu}</td></tr>`);
        } */
        })
    } else {
        document.getElementById("keiroinfo").innerHTML = "候補が見つかりませんでした。ごめんなさい。";
    }
};
sta.allkana_s = sta.allkana2.slice(0,sta.allkana2.findIndex(e => e == "シンカ"));//新幹線を除くJR線のすべてのカナコード
auto.f.stc = (v) => {
    if (v == "") return 0;
    let re2 = true;
    for (let i2 = 0;i2 < sta.allkana2.length;i2++) {
        let i3 = sta.kana[sta.allkana2[i2]].sta.findIndex(e => (e[0] == v || e[1] == v || e[2] == v));
        if (i3 == -1) continue;
        else {
            return sta.kana[sta.allkana2[i2]].sta[i3];
        }
    }
    for (let i4 = 0;i4 < sta.allskana.length;i4++) {
        let i3 = sta.skana[sta.allskana[i4]].sta.findIndex(e => (e[0] == v || e[1] == v || e[2] == v));
        if (i3 == -1) continue;
        else {
            return sta.skana[sta.allskana[i4]].sta[i3];
        }
    }
}
auto.f.ex4 = (fst, fin,m) => { //近郊区間内完結用
    [auto.his,auto.r, auto.t.i1, auto.r2, auto.r3,] = [{},[], 0, [], []];
    auto.t.fst = fst;
    auto.t.fin = fin;
    let stas = [auto.t.fst,auto.t.fin];
    if (auto.t.fst.toString().types() != 0) stas[0] = auto.f.stc(auto.t.fst)[0];
    if (auto.t.fin.toString().types() != 0) stas[1] = auto.f.stc(auto.t.fin)[0];
    if (stas[0].toString().types() == 0 && stas[1].toString().types() == 0) {
        let pat = [];
        auto.dstr = [];
        [auto.t.fstl3,auto.t.finl3] = [[],[]];
        if (stas[0].toString().length == 7) {
            auto.t.fstl = sta.allskana.find(e => sta.skana[e].sta.some((e2) => e2[0] == stas[0] || e2[1] == stas[0] || e2[2] == stas[0]));
            auto.t.fstl2 = sta.allskana2.filter(e => sta.skana2[e].code == auto.t.fstl);
            auto.t.fstl3 = [...new Array(auto.t.fstl2.length)].map((_,ir) => [sta.skana2[auto.t.fstl2[ir]].sta,auto.t.fstl2[ir]]);
        } else auto.t.fstl3 = [[stas[0],""]];
        if (stas[1].toString().length == 7) {
            auto.t.finl = sta.allskana.find(e => sta.skana[e].sta.some((e2) => e2[0] == stas[1] || e2[1] == stas[1] || e2[2] == stas[1]));
            auto.t.finl2 = sta.allskana2.filter(e => sta.skana2[e].code == auto.t.finl);
            auto.t.finl3 = [...new Array(auto.t.finl2.length)].map((_,ir) => [sta.skana2[auto.t.finl2[ir]].sta,auto.t.finl2[ir]]);
        } else auto.t.finl3 = [[stas[1],""]];
        for (let i = 0;i < auto.t.fstl3.length;i++) {
            for (let i2 = 0;i2 < auto.t.finl3.length;i2++) {
                let dstr2 = dst(auto.t.fstl3[i][0],auto.t.finl3[i2][0]);
                if (dstr2.lines.length > 0) auto.dstr.push(`${(auto.t.fstl3[i][1] == "")? "":`${auto.t.fstl3[i][1]}-${sta.skana2[auto.t.fstl3[i][1]].sta}-`}${dstr2.lines.join("-")}${(auto.t.finl3[i2][1] == "")?"":`-${sta.skana2[auto.t.finl3[i2][1]].sta}-${auto.t.finl3[i2][1]}`}`);
            }
        } for (let i = 0;i < auto.dstr.length;i++) {
            let dstr2 = auto.dstr[i];
            if (dstr2.startsWith("シンカ")) dstr2 = stas[0] + "-" + dstr2;
            if (dstr2.endsWith("シンカ")) dstr2 += "-" + stas[1];
            let rep = dstr2.replace(/(610147|610116|610155)-シンカ-(610147|610116|610155)/,"トウカ");//.replace(/(610609|610619|610623)-シンカ-(610609|610619|610623)/,"サンヨ");
            if (dstr2 != rep) {
                auto.dstr.splice(i,0,rep.replaceAll("トウカ-トウカ","トウカ"));
                i++;
            }
        } 
        if (m != 2) auto.f.view(stas[0],stas[1],auto.dstr);
        else {
        if (auto.dstr.length == 1) return auto.dstr[0].split("-");
        else if (auto.dstr.length == 0) return [];
        auto.t.ds = new Array(auto.dstr.length);
        for (let i = 0;i < auto.dstr.length;i++) {
            console.log(`${stas[0]}-${auto.dstr[i]}-${stas[1]}`);
            analy.f(stas[0],stas[1],auto.dstr[i],1);
            calc2(1);
            if (temp.dup) auto.t.ds[i] = 9999999999;
            else auto.t.ds[i] = temp.res;
        } console.log(minindex(auto.t.ds));
        return auto.dstr[minindex(auto.t.ds)].split("-");
        } return [];
    }
    return [];
    /*try {
    for (let i = 0;i < auto.t.fst.length;i++) {
        atem.i1 = sta.kana[auto.t.fst[i]].sta.find((e2) => e2[0] == fst || e2[1] == fst || e2[2] == fst);
        if (atem.i1[6] == void 0) continue;
        else auto.t.com = atem.i1[6].toString().at(-2);
        break;
    }
    for (let i = 0; i < auto.t.fst.length; i++) {
        if (isNaN(auto.t.fst[i])) atem.i5 = sta.kana[auto.t.fst[i]].sta;
        else atem.i5 = sta.skana[auto.t.fst[i]].sta;
        atem.i4 = atem.i5.find(e => e[0] == fst || e[1] == fst || e[2] == fst);
        [auto.d, auto.t.k, auto.t.kiro, auto.l] = [[[0, [[atem.i4[0], atem.i4[4], auto.t.fst[i]]]]], 0, 0, []];
        while (auto.t.tf == true) {
            auto.r3.push(JSON.parse(JSON.stringify(auto.d)));
            if (auto.d.length == 1 && auto.d[0][1].length == 0) break;
            if (auto.d.at(-1)[1].length == 0) {
                while (auto.d.at(-1)[1].length == 0 && auto.d.length != 0) {
                    auto.t.k--;
                    auto.d.pop();
                    auto.l.pop();
                    if (auto.d.length == 0) break;
                    auto.d[auto.d.length - 1][1].shift();
                } if (auto.d.length == 0) break;
            } auto.t.l = auto.d.at(-1)[1][0][2];
            if (isNaN(auto.t.l)) atem.i5 = sta.kana[auto.t.l].sta;
            else atem.i5 = sta.skana[auto.t.l].sta;
            atem.i3 = atem.i5.findIndex(e => e[0] == fin || e[1] == fin || e[2] == fin);
            if (atem.i3 != -1) {
                if (auto.d.length > 1) {
                    try {
                        atem.i6 = sta.kana[auto.l.at(-1)].sta.find(e => e[0] == auto.d.at(-2)[1][0][0])[4];
                    } catch (e) {
                        atem.i6 = sta.skana[auto.l.at(-1)].sta.find(e => ((e[0] == auto.d.at(-2)[1][0][0]) || (e[6].toString().length > 5 && e[6] == auto.d.at(-2)[1][0][0])))[4];
                    }
                } else atem.i6 = 0;
                atem.i4 = atem.i5.find(e => (e[0] == auto.d.at(-1)[1][0][0] || (isNaN(e[6]) == false && e[6].toString().length > 5 && e[6] == auto.d.at(-1)[1][0][0])));
                if (auto.d.length > 1) auto.r.push([customround(auto.d.at(-1)[0] + Math.abs(auto.d.at(-1)[1][0][1] - atem.i6) + Math.abs(atem.i5[atem.i3][4] - atem.i4[4])), [...Array(auto.d.length)].map((_, ir) => `${auto.d[ir][1][0][0]}-${auto.d[ir][1][0][2]}`).join("-").split("-").slice(1)]);
                else auto.r.push([customround(auto.d.at(-1)[0] + Math.abs(atem.i5[atem.i3][4] - atem.i4[4])), [...auto.l].concat(auto.t.l)]);
                auto.d[auto.d.length - 1][1].shift();
                if (auto.d.at(-1)[1].length == 0) {
                    auto.d.pop();
                    auto.l.pop();
                    auto.t.k--;
                    if (auto.d.length == 0) break;
                    auto.d[auto.d.length - 1][1].shift();
                }
            } else {
                if (auto.t.k > 3) {
                    if (auto.d.length > 1) {
                        try {
                            atem.i4 = sta.kana[auto.l.at(-1)].sta.find(e => e[0] == auto.d.at(-2)[1][0][0])[4];
                        } catch (e) {
                            atem.i4 = sta.skana[auto.l.at(-1)].sta.find(e => ((e[0] == auto.d.at(-2)[1][0][0]) || (e[6].toString().length > 5 && e[6] == auto.d.at(-2)[1][0][0])))[4];
                        } atem.i4 = Math.abs(auto.d.at(-1)[1][0][1] - atem.i4);
                    } else atem.i4 = 0;
                    auto.r2.push([auto.d.at(-1)[0] + atem.i4, [...Array(auto.d.length)].map((_, ir) => `${auto.d[ir][1][0][0]}-${auto.d[ir][1][0][2]}`).join("-"), auto.d.at(-1)[1][0][0]]);
                    auto.d[auto.d.length - 1][1].shift();
                    if (auto.d.at(-1)[1].length == 0) {
                        auto.d.pop();
                        auto.l.pop();
                        auto.t.k--;
                        if (auto.d.length == 0) break;
                        auto.d[auto.d.length - 1][1].shift();
                    }
                } else {
                    if (auto.d.at(-1)[1].length == 0) {
                        auto.d.pop();
                        auto.l.pop();
                        auto.t.k--;
                        if (auto.d.length == 0) break;
                        auto.d[auto.d.length - 1][1].shift();
                    } else {
                        if (auto.d.length > 1) {
                            try {
                                atem.i4 = sta.kana[auto.l.at(-1)].sta.find(e => e[0] == auto.d.at(-2)[1][0][0])[4];
                            } catch (e) {
                                atem.i4 = sta.skana[auto.l.at(-1)].sta.find(e => ((e[0] == auto.d.at(-2)[1][0][0]) || (e[6].toString().length > 5 && e[6] == auto.d.at(-2)[1][0][0])))[4];
                            } atem.i4 = Math.abs(auto.d.at(-1)[1][0][1] - atem.i4);
                        } else atem.i4 = 0;
                        auto.d.push([auto.d.at(-1)[0] + atem.i4, auto.f.set2(auto.t.l, auto.l.at(-1), auto.d.at(-1)[1][0][0])]);
                        auto.l.push(auto.t.l);
                        auto.t.k++;
                    }
                }
            } atem.fst = false;
        }
    } 
    if (auto.r.length < 100000) {
        auto.his = {};
        auto.t.i1 = 0;
        auto.t.fin = sta.allkana_s.filter(e => sta.kana[e].sta.findIndex((e2) => e2[0] == fin || e2[1] == fin || e2[2] == fin) != -1).concat(sta.allskana.filter(e => sta.skana[e].sta.findIndex((e2) => e2[0] == fin || e2[1] == fin || e2[2] == fin) != -1));
        for (let i = 0; i < auto.t.fin.length; i++) {
            if (isNaN(auto.t.fin[i])) atem.i5 = sta.kana[auto.t.fin[i]].sta;
            else atem.i5 = sta.skana[auto.t.fin[i]].sta;
            atem.i4 = atem.i5.find(e => e[0] == fin || e[1] == fin || e[2] == fin);
            [auto.d, auto.t.k, auto.t.kiro, auto.l] = [[[0, [[atem.i4[0], atem.i4[4], auto.t.fin[i]]]]], 0, 0, []];
            while (auto.t.tf == true) {
                if (auto.d.length == 1 && auto.d[0][1].length == 0) break;
                if (auto.d.at(-1)[1].length == 0) {
                    while (auto.d.at(-1)[1].length == 0 && auto.d.length != 0) {
                        auto.t.k--;
                        auto.d.pop();
                        auto.l.pop();
                        if (auto.d.length == 0) break;
                        auto.d[auto.d.length - 1][1].shift();
                    } if (auto.d.length == 0) break;
                } auto.t.l = auto.d.at(-1)[1][0][2];
                if (isNaN(auto.t.l)) atem.i5 = sta.kana[auto.t.l].sta;
                else atem.i5 = sta.skana[auto.t.l].sta;
                atem.i3 = auto.r2.flatMap((_, i) => (_[1].split("-").at(-1) == auto.t.l ? i : []));
                if (atem.i3.length > 0) {
                    if (auto.d.length > 1) {
                        try {
                            atem.i6 = sta.kana[auto.l.at(-1)].sta.find(e => e[0] == auto.d.at(-2)[1][0][0])[4];
                        } catch (e) {
                            atem.i6 = sta.skana[auto.l.at(-1)].sta.find(e => ((e[0] == auto.d.at(-2)[1][0][0]) || (e[6].toString().length > 5 && e[6] == auto.d.at(-2)[1][0][0])))[4];
                        } try {
                            atem.i8 = sta.kana[auto.t.l].sta.find(e => e[0] == auto.d.at(-1)[1][0][0])[4];
                        } catch (e) {
                            atem.i8 = sta.skana[auto.t.l].sta.find(e => ((e[0] == auto.d.at(-1)[1][0][0]) || (e[6].toString().length > 5 && e[6] == auto.d.at(-1)[1][0][0])))[4];
                        }
                    } else {
                        [atem.i6, atem.i7] = [0, 0];
                    } atem.i4 = atem.i5.find(e => e[0] == auto.d.at(-1)[1][0][0]);
                    for (let i2 = 0; i2 < atem.i3.length; i2++) {
                        if (auto.d.length > 1) {
                            try {
                                atem.i7 = sta.kana[auto.t.l].sta.find(e => e[0] == auto.r2[atem.i3[i2]][2])[4];
                            } catch (e) {
                                atem.i7 = sta.skana[auto.t.l].sta.find(e => ((e[0] == auto.r2[atem.i3[i2]][2]) || (e[6].toString().length > 5 && e[6] == auto.r2[atem.i3[i2]][2])))[4];
                            } atem.i7 = Math.abs(atem.i8 - atem.i7);
                        } else atem.i7 = 0;
                        auto.r.push([customround(auto.d.at(-1)[0] + auto.r2[atem.i3[i2]][0] + Math.abs(auto.d.at(-1)[1][0][1] - atem.i6) + atem.i7), auto.r2[atem.i3[i2]][1].split("-").slice(0, -1).concat([...Array(auto.d.length)].map((_, ir) => `${auto.d[ir][1][0][0]}-${auto.d[ir][1][0][2]}`).join("-").split("-").reverse()).slice(1, -1)]);
                    }
                }
                if (auto.t.k > 2) {
                    auto.d[auto.d.length - 1][1].shift();
                    if (auto.d.at(-1)[1].length == 0) {
                        auto.d.pop();
                        auto.l.pop();
                        auto.t.k--;
                        if (auto.d.length == 0) break;
                        auto.d[auto.d.length - 1][1].shift();
                    }
                } else {
                    if (auto.d.at(-1)[1].length == 0) {
                        auto.d.pop();
                        auto.l.pop();
                        auto.t.k--;
                        if (auto.d.length == 0) break;
                        auto.d[auto.d.length - 1][1].shift();
                    } else {
                        if (auto.d.length > 1) {
                            try {
                                atem.i4 = sta.kana[auto.l.at(-1)].sta.find(e => e[0] == auto.d.at(-2)[1][0][0])[4];
                            } catch (e) {
                                atem.i4 = sta.skana[auto.l.at(-1)].sta.find(e => ((e[0] == auto.d.at(-2)[1][0][0]) || (e[6].toString().length > 5 && e[6] == auto.d.at(-2)[1][0][0])))[4];
                            } atem.i4 = Math.abs(auto.d.at(-1)[1][0][1] - atem.i4);
                        } else atem.i4 = 0;
                        auto.d.push([auto.d.at(-1)[0] + atem.i4, auto.f.set2(auto.t.l, auto.l.at(-1), auto.d.at(-1)[1][0][0])]);
                        auto.l.push(auto.t.l);
                        auto.t.k++;
                    }
                } atem.fst = false;
            }
        }
    } auto.r.sort(function (ia, ib) { return (ia[0] - ib[0]) });
    [auto.r, auto.r3] = [auto.r.filter(e => ([...new Set(e[1])].length == e[1].length && auto.r[0][0] * 2 > e[0])), {}]
    for (let i = 0; i < auto.r.length; i++) {
        atem.i11 = auto.r[i][1].filter((e, ir) => ir % 2 == 0).join("-");
        if (auto.r[i][0].toString() in auto.r3) {
            if (atem.i11 in auto.r3[auto.r[i][0].toString()]) {
                if (auto.r3[auto.r[i][0].toString()][atem.i11].length < 1) auto.r3[auto.r[i][0].toString()][atem.i11].push([auto.r[i][1].join("-"), auto.r[i][1].length]);
            } else auto.r3[auto.r[i][0].toString()][atem.i11] = [[auto.r[i][1].join("-"), auto.r[i][1].length]];
        } else {
            auto.r3[auto.r[i][0].toString()] = {};
            auto.r3[auto.r[i][0].toString()][atem.i11] = [[auto.r[i][1].join("-"), auto.r[i][1].length]];
        }
    } [auto.r4, auto.r] = [Object.keys(auto.r3).sort(function (ia, ib) { return (Number(ia) - Number(ib)) }), []];
    for (let i = 0; i < auto.r4.length; i++) {
        atem.i11 = Object.values(auto.r3[auto.r4[i]]).sort(function (ia, ib) { return ia[0][1] - ib[0][1] });
        for (let i3 = 0; i3 < atem.i11.length; i3++) auto.r.push([auto.r4[i] - 0, atem.i11[i3][0][0]]);
    } if (auto.r.length > 150) auto.r = auto.r.slice(0, 150);
    for (let i = 0; i < auto.r.length; i++) {
        try {
            analy.f(fst, fin, auto.r[i][1], 1, false, false);
            calc(1);
            if (temp.dup) {
                auto.r.splice(i, 1);
                i--;
            }
        } catch (e) {
            auto.r.splice(i, 1);
            i--;
        }
    } } catch (e) {
        console.error(e);
        auto.r = [];
    }
    if (auto.r.length > 15) auto.r = auto.r.slice(0,15);
    for (let i3 = 0;i3 < auto.tl.length;i3++) {
        if (auto.t.fin.includes(auto.tl[i3].l)) {
            atem.i22 = sta.kana[auto.tl[i3].l].sta.findIndex(e => e[0] == fin || e[1] == fin || e[2] == fin);
            if (atem.tl[auto.tl[i3].l][0] < atem.i22 && atem.i22 < atem.tl[auto.tl[i3].l][1]);
            else if (auto.t.fst.includes(auto.tl[i3].l)) {
                atem.i21 = sta.kana[auto.tl[i3].l].sta.findIndex(e => e[0] == fst || e[1] == fst || e[2] == fst);
                if (atem.i21 < atem.tl[auto.tl[i3].l][0] && atem.tl[auto.tl[i3].l][1] < atem.i22) auto.r.unshift(`${auto.tl[i3].l}-${auto.tl[i3].sta[0]}-${auto.tl[i3].l2}-${auto.tl[i3].sta[1]}-${auto.tl[i3].l}`);
                else if (atem.i22 < atem.tl[auto.tl[i3].l][0] && atem.tl[auto.tl[i3].l][1] < atem.i21) auto.r.unshift(`${auto.tl[i3].l}-${auto.tl[i3].sta[1]}-${auto.tl[i3].l2}-${auto.tl[i3].sta[0]}-${auto.tl[i3].l}`);
                else if (atem.i21 < atem.tl[auto.tl[i3].l][0] && atem.tl[auto.tl[i3].l][1] == atem.i22) auto.r.unshift(`${auto.tl[i3].l}-${auto.tl[i3].sta[0]}-${auto.tl[i3].l2}`);
                else if (atem.i22 == atem.tl[auto.tl[i3].l][0] && atem.tl[auto.tl[i3].l][1] < atem.i21) auto.r.unshift(`${auto.tl[i3].l}-${auto.tl[i3].sta[1]}-${auto.tl[i3].l2}`);
            } else {
                for (let i = 0;i < auto.r.length;i++) {
                    if (Array.isArray(auto.r[i])) auto.r[i] = auto.r[i][1];
                    atem.r9 = auto.r[i].split("-");
                    if (atem.r9.length < 3) continue;
                    else if (atem.r9.at(-1) == auto.tl[i3].l) {
                        atem.i23 = sta.kana[auto.tl[i3].l].sta.findIndex(e => e[0] == atem.r9.at(-2));
                        if (atem.i22 < atem.tl[auto.tl[i3].l][0] && atem.tl[auto.tl[i3].l][1] < atem.i23) auto.r.unshift(`${auto.r[i]}-${auto.tl[i3].sta[1]}-${auto.tl[i3].l2}-${auto.tl[i3].sta[0]}-${auto.tl[i3].l}`);
                        else if (atem.i22 > atem.tl[auto.tl[i3].l][1] && atem.tl[auto.tl[i3].l][0] > atem.i23) auto.r.unshift(`${auto.r[i]}-${auto.tl[i3].sta[0]}-${auto.tl[i3].l2}-${auto.tl[i3].sta[1]}-${auto.tl[i3].l}`);
                        else continue;
                        break;
                    }
                }
            }
        }
    }
    auto.f.view(fst,fin,auto.r);
    //return auto.r;*/
}; auto.tl = [{l:"カコシ",sta:[910115,910133],l2:"チクホ"},{l:"シンエ",sta:[301121,301150],l2:"エチコ"}];
for (let i = 0;i < auto.tl.length;i++) {
    atem.tl[auto.tl[i].l] = [sta.kana[auto.tl[i].l].sta.findIndex(e => e[0] == auto.tl[i].sta[0]),sta.kana[auto.tl[i].l].sta.findIndex(e => e[0] == auto.tl[i].sta[1])];
}; auto.f.set2 = (v, vb, vs) => {
    if (isNaN(v)) atem.i1 = sta.kana[v].sta;
    else atem.i1 = sta.skana[v].sta;
    atem.i2 = [];
    atem.i12 = atem.i1.findIndex((e) => e[0] == vs || e[6] == vs);
    for (let i = 0; i < atem.i1.length; i++) {
        if (isNaN(v) && ((i < atem.i12 && (atem.i1[i][6].toString().at(-2) == auto.t.com) == false) || (i > atem.i12 && (atem.i1[i - 1][6].toString().at(-2) == auto.t.com) == false))) continue;
        else if (atem.i1[i][0].toString() in auto.his && Math.abs(atem.i1[atem.i12][4] - atem.i1[i][4]) + auto.d.at(-1)[0] > auto.his[atem.i1[i][0].toString()]) continue;
        else auto.his[atem.i1[0].toString()] = customround(Math.abs(atem.i1[atem.i12][4] - atem.i1[i][4]) + auto.d.at(-1)[0]);       
        if (atem.i1[i][3] != false && atem.i1[i][0] != vs) {
            for (let i2 = 0; i2 < atem.i1[i][3].length; i2++) {
                if (atem.i1[i][3][i2] == vb || sta.shinka.includes(atem.i1[i][3][i2])) continue;
                if (atem.i1[i][0].toString().length == 7 && isNaN(atem.i1[i][6]) == false && atem.i1[i][6].toString().length == 6) atem.i2.push([atem.i1[i][6], atem.i1[i][4], atem.i1[i][3][i2]]);
                else atem.i2.push([atem.i1[i][0], atem.i1[i][4], atem.i1[i][3][i2]]);
            }
        }
    } return atem.i2;
};/*
auto.f.ex4("与野","北浦和");
*/
auto.f.sta = (v2,m) => {
    atem.i91 = [];
    let v = v2.match(/[ぁ-んー]+|[^ぁ-んー]+/g) || []; //ひらがなとそれ以外で分割
    if (m == void 0) m = 0;
    //console.log(v);
    for (let i3 = 0;i3 < v.length;i3++) {
        atem.i91.push({});
        atem.i93 = ho(v[i3]) ? 8 : 1;
        if (atem.i93 == 8) v[i3] = v[i3].normalize('NFC'); //「が」等の濁点付きの文字を１文字に揃える
        for (let i = 0;i < sta.allkana.length;i++) {
            atem.i94 = (sta.allkana[i].typec() == 2) ? "skana" : "kana";
            for (let i2 = 0;i2 < sta[atem.i94][sta.allkana[i]].sta.length;i2++) {
                if (typeof sta[atem.i94][sta.allkana[i]].sta[i2][atem.i93] != "string") console.log(i,i2,sta.allkana[i],sta[atem.i94][sta.allkana[i]].sta[i2][1]);
                else if (sta[atem.i94][sta.allkana[i]].sta[i2][atem.i93].indexOf(v[i3]) > -1) {
                    if (sta[atem.i94][sta.allkana[i]].sta[i2][0] in atem.i91[i3]) {
                        if (Array.isArray(atem.i91[i3][sta[atem.i94][sta.allkana[i]].sta[i2][0]].d[3]) == false) atem.i91[i3][sta[atem.i94][sta.allkana[i]].sta[i2][0]].d[3] = [sta.allkana[i]];
                        else if (atem.i91[i3][sta[atem.i94][sta.allkana[i]].sta[i2][0]].d[3].includes(sta.allkana[i]) == false) {
                            atem.i91[i3][sta[atem.i94][sta.allkana[i]].sta[i2][0]].d[3].push(sta.allkana[i]);
                        }
                    } else {
                        atem.i91[i3][sta[atem.i94][sta.allkana[i]].sta[i2][0]] = {d:JSON.parse(JSON.stringify(sta[atem.i94][sta.allkana[i]].sta[i2])),l:sta.allkana[i]};
                    }
                }
            }
        } 
    } //console.log(JSON.parse(JSON.stringify(atem.i91)));
    if (v.length == 1) atem.i91 = atem.i91[0];
    else atem.i91 = gco(...atem.i91);
    atem.i92 = Object.keys(atem.i91); 
    atem.sta = {i0:[],i1:[],i2:[]};
    atem.i93 = ho(v[0]) ? 8 : 1;
    for (let i = 0;i < atem.i92.length;i++) {
        let i95 = atem.i91[atem.i92[i]].d[atem.i93];
        if (i95.charAt(0) == "(") i95 = i95.replace(/^\([^)]+\)/, ""); //(信)黒井のようなものを黒井にする。先頭に対しだけ有効。
        if (i95 == v2) atem.sta.i0.push(atem.i91[atem.i92[i]]);
        else if (i95.startsWith(v[0])) atem.sta.i1.push(atem.i91[atem.i92[i]]);
        else atem.sta.i2.push(atem.i91[atem.i92[i]]);
    } 
    if (atem.i93 == 8) {
        atem.sta.i1.sort((a,b) => a.d[atem.i93].localeCompare(b.d[atem.i93], 'ja'));
        atem.sta.i2.sort((a,b) => a.d[atem.i93].localeCompare(b.d[atem.i93], 'ja'));
    }
    //console.log(atem.sta);
    atem.sta.i3 = atem.sta.i0.concat(atem.sta.i1,atem.sta.i2);
    atem.sta.str = "";
    for (let i = 0;i < atem.sta.i3.length;i++) {
        if (Array.isArray(atem.sta.i3[i].d[3])) {
            if (atem.sta.i3[i].l.typec() == 2);
        } if (m == 0) {
            atem.sta.str += `
                <div class="sest_row" data-code="${atem.sta.i3[i].d[0]}" tabindex="0">
                    <div class="sest_stcode">${atem.sta.i3[i].d[0]}</div>
                    <div class="sest_stname">
                        <span style="font-size:130%;">${atem.sta.i3[i].d[1]}</span><br class="br-sp">
                        <span style="font-size:90%;"> ${atem.sta.i3[i].d[8]}</span>
                    </div>
                    <div class="sest_stname2">　${sta[(atem.sta.i3[i].l.typec() == 2) ? "skana" : "kana"][atem.sta.i3[i].l].name}${Array.isArray(atem.sta.i3[i].d[3]) ? "｜" +  [...Array(atem.sta.i3[i].d[3].length)].map((_,ir) => (atem.sta.i3[i].d[3][ir].typec() == 2) ? sta.skana[atem.sta.i3[i].d[3][ir]].name : sta.kana[atem.sta.i3[i].d[3][ir]].name).join("｜") : ""}</div>
                </div>
            `;
        } else {
            atem.sta.str += `
            <li class="suggestion-item" tabindex="0" data-str="${atem.sta.i3[i].d[1]}">${atem.sta.i3[i].d[1]}<br>
                <span class="s90">　${sta[(atem.sta.i3[i].l.typec() == 2) ? "skana" : "kana"][atem.sta.i3[i].l].name}${Array.isArray(atem.sta.i3[i].d[3]) ? "｜" +  [...Array(atem.sta.i3[i].d[3].length)].map((_,ir) => (atem.sta.i3[i].d[3][ir].typec() == 2) ? sta.skana[atem.sta.i3[i].d[3][ir]].name : sta.kana[atem.sta.i3[i].d[3][ir]].name).join("｜") : ""}</span>
            </li>
            `;
        }
    } if (m == 0) document.getElementById("sest_sta1").innerHTML = atem.sta.str;
    else return atem.sta.str;
    atem.selectstcode = [0,(atem.sta.i3.length > 0) ? atem.sta.i3[0].d[0] : 440101]; //困ったら適当に東京ぶちこんどく
    if (atem.sta.i3.length > 0 && m == 0) auto.f.line(0);
    return atem.i91;
}
auto.f.line = (i) => {
    atem.line = {str:""};
    atem.line.i1 = [atem.sta.i3[i].l].concat(Array.isArray(atem.sta.i3[i].d[3]) ? [...atem.sta.i3[i].d[3]] : []);
    for (let i2 = 0;i2 < atem.line.i1.length;i2++) {
        let [i24,i25] = ["kana",atem.line.i1[i2]];
        if (i25.typec() == 2) i24 = "skana";
        atem.line.str += `
            <div class="sest_row" data-code="${atem.line.i1[i2]}" tabindex="0">
                <div class="s130" style="grid-column: span 2;">${sta[i24][i25].name}</div>
                <div class="s90 sest_stname2">${sta[i24][i25].sta[0][1]}-${sta[i24][i25].sta.at(-1)[1]}</div>
            </div>
        `;
    } document.getElementById("sest_sta2").innerHTML = atem.line.str;
    sest_sta1.getElementsByClassName("sest_row")[atem.selectstcode[0]].style.backgroundColor = ""; //デフォルト値に戻す
    atem.selectstcode[0] = i;
    sest_sta1.getElementsByClassName('sest_row')[i].style.backgroundColor = "#54F1A0";
}
function ho(str) { //HiraganaOnly
    const hiraganaRegex = /^[ぁ-んー]*$/;
    return hiraganaRegex.test(str);
}
const gco = (...obs) => //getCommonOneLiner
    Object.fromEntries(
        Object.entries(obs[0] || {}).filter(([k]) => obs.every(o => k in o))
    );
let sest = {f:{dom:{}}};
sest.f.dom.close = () => {
    document.getElementById("sestbox").style.display = "none";
};
sest.f.dom.open = () => {
    document.getElementById("sestbox").style.display = "inline";
};
sest.f.dom.openclose = () => {
    if (document.getElementById("sestbox").style.display == "inline") sest.f.dom.close();
    else sest.f.dom.open();
} 
let timeoutId;
window.addEventListener('load',function() {
    document.getElementById("sest_textbox1").addEventListener('input', (e) => {
        clearTimeout(timeoutId); // 前のタイマーを一度キャンセルいたしますの
        timeoutId = setTimeout(() => { // 150ミリ秒（0.15秒）だけ、入力の手が止まるのを待ちますわ
            auto.f.sta(e.target.value,0);
        }, 150);
    });
    document.querySelectorAll('.keiro_sta_input').forEach((input,indexinput) => {
        const list = input.nextElementSibling; // 自分のすぐ隣にあるリストを取得します
        input.addEventListener('input', () => {
            const value = input.value.trim();
            if (!value) {
                list.style.display = 'none';
                return;
            } clearTimeout(timeoutId); // 前のタイマーを一度キャンセルいたしますの
            timeoutId = setTimeout(() => { // 150ミリ秒（0.15秒）だけ、入力の手が止まるのを待ちますわ
                list.innerHTML = auto.f.sta(value,1);
                list.style.display = "block";
            }, 150);
        });
        input.addEventListener('keydown',(e) => {
            if (e.key == "Tab" && e.shiftKey && indexinput > 0) {
                e.preventDefault();
                document.getElementsByClassName("keiro_sta_input")[indexinput - 1].focus();
            }
        });
        // 候補を選択した時の処理
        list.addEventListener('click', (e) => {
            //if (e.target.classList.contains('suggestion-item')) {
                input.value = e.target.closest('.suggestion-item').dataset.str;
                list.style.display = 'none';
            //}
        });
        list.addEventListener('keydown', (e) => {
            // 押されたのが Enter キー（またはテンキーの Enter）か確認いたします
            if (e.key === "Enter") {
                // 現在フォーカスが当たっている li 要素を特定します
                const item = e.target.closest('.suggestion-item');
                if (item) {
                    // Enterによる「決定」を、通常のクリックと同じ挙動として処理させますわ
                    // ブラウザの標準動作（フォーム送信など）を念のため抑制いたします
                    e.preventDefault();
                    input.value = item.dataset.str;
                    list.style.display = 'none';
                }
            } else if (e.key == "Tab") {
                const item = e.target.closest('.suggestion-item');
                const item2 = list.querySelectorAll('.suggestion-item');
                const item3 = Array.from(item2);
                const itemi = item3.indexOf(item);
                if (item3.length - 1 == itemi) {
                    e.preventDefault();
                    input.focus();
                }
            }
        });
    });
    document.addEventListener('click', (e) => { // どこか外側をクリックしたら全てのリストを閉じる
        if (!e.target.closest('.search-wrapper')) {
            document.querySelectorAll('.suggestion-box').forEach(b => b.style.display = 'none');
        }
    });
    let sest_sta1 = document.getElementById("sest_sta1");
    let sest_sta2 = document.getElementById("sest_sta2");
    let pdc = {x:0,y:0};
    document.addEventListener('pointerdown',(e) => {
        pdc = {x:e.clientY,y:e.clientY};
    })
    sest_sta1.addEventListener('pointerup', (e) => {
        if (Math.abs(e.clientY - pdc.y) > 12) return 0; //12px以上移動していた場合スクロールと判断
        // クリックされた場所から一番近い「.sest_row」を探します
        const row = e.target.closest('.sest_row');
        if (row) {
            // 行全体に対しての発火処理
            const code = row.dataset.code;
            console.log(`選択コード ${code} `);
            if (row.dataset.code.types() == 0) {
                const rows = Array.from(sest_sta1.querySelectorAll('.sest_row')); //何番目の.sest_rowか探す
                atem.selectstcode[1] = Number(code);
                auto.f.line(rows.indexOf(row));
            }
        }
    });
    auto.f.sta2 = (code) => {
        //console.log(`選択コード ${code} `);
        enter(0,0,0,[[code]]);
        enter(0,1,0,[[code],[atem.selectstcode[1]]]);
        sest.f.dom.close();
        if (sets.mr_seni) mr.f.dom.open();
    }
    sest_sta2.addEventListener('pointerup', (e) => {
        if (Math.abs(e.clientY - pdc.y) > 12) return 0; //12px以上移動していた場合スクロールと判断
        const row = e.target.closest('.sest_row');
        if (row) {
            const code = row.dataset.code;
            auto.f.sta2(code);
        }
    });
    sest_sta1.addEventListener('keydown', (e) => {
        // 現在フォーカスが当たっている要素を取得いたします
        const selectedRow = document.activeElement;
        // その要素が本当に sest_row かどうかを確認なさって
        if (e.key == "Enter") {
            if (selectedRow && selectedRow.classList.contains('sest_row')) {
                sest_sta2.getElementsByClassName("sest_row")[0].focus();
            } 
        } else if (e.key == "Tab") {
            // Grid内の全行を取得します
            const rows = Array.from(sest_sta1.querySelectorAll('.sest_row'));
            if (rows.length === 0) return;
            /*if (e.shiftKey && document.activeElement == rows[0]) { // Shift + Tab（逆送り）で、最初の行にいる場合
                e.preventDefault();
            } else */if (!e.shiftKey && document.activeElement == rows.at(-1)) { // 通常の Tab で、最後の行にいる場合
                e.preventDefault();
                document.getElementById("sest_textbox1").focus();
            } 
        }
    });
    document.getElementById("sest_textbox1").addEventListener("keydown",(e) => {
        if (e.key == "Tab" && e.shiftKey && sest_sta1.getElementsByClassName("sest_row").length > 0) { //Shift+Tabの場合特殊実装
            e.preventDefault();
            sest_sta1.getElementsByClassName("sest_row")[sest_sta1.getElementsByClassName("sest_row").length - 1].focus();
        }
    });
    sest_sta2.addEventListener('keydown', (e) => {
        const selectedRow = document.activeElement;
        if (e.key == "Enter") {
            if (selectedRow && selectedRow.classList.contains('sest_row')) {
                if (event.shiftKey) sest_sta1.getElementsByClassName("sest_row")[atem.selectstcode[0]].focus();
                else {
                    auto.f.sta2(e.target.closest(".sest_row").dataset.code);
                }
            }
        } else if (e.key == 'Tab') {
            const rows = Array.from(sest_sta2.querySelectorAll('.sest_row')); // grid内の全行を取得します
            if (rows.length === 0) return;
            if (e.shiftKey && selectedRow == rows[0]) { // Shift + Tab（逆送り）で、最初の行にいる場合
                e.preventDefault();
                rows.at(-1).focus();
            } else if (!e.shiftKey && selectedRow == rows.at(-1)) { // 通常の Tab で、最後の行にいる場合
                e.preventDefault();
                rows[0].focus();
            }
        }
    });
    sest_sta1.addEventListener('focusin', (e) => {
        // フォーカスが当たった要素が .sest_row かどうかを確認いたします
        const row = e.target.closest('.sest_row');
        if (row) {
            //console.log("取得した行:", row); 
            const rows = Array.from(sest_sta1.querySelectorAll('.sest_row')); //何番目の.sest_rowか探す
            const rowId = rows.indexOf(row); 
            auto.f.line(rowId);
            //const rows = Array.from(sest_sta1.querySelectorAll('.sest_row')); //何番目の.sest_rowか探す
            atem.selectstcode[1] = Number(row.dataset.code);
        }
    });
    let mr_sta1 = document.getElementById("mr_sta1");
    let mr_sta2 = document.getElementById("mr_sta2");
    mr_sta1.addEventListener('focusin', (e) => {
        const row = e.target.closest('.mr_row');
        if (row) {
            const rows = Array.from(mr_sta1.querySelectorAll('.mr_row')); //何番目の.mr_rowか探す
            let rowId2 = rows.indexOf(row);
            let rowId = (rowId2 - (rowId2 % 2)) / 2;
            const rowls = (row.dataset.ls == "l") ? "i1" : "i3";
            const row2 = Array.from(mr.te[rowls][rowId]);
            mr.te.i11 = row2;
            mr.te.i10 = "";
            mr.te.i12 = "";
            if (mr.gd.tf && row.dataset.ls == "s" && rowId2 > 0) {
                mr.te.gd1 = sta[(mr.te["i1"][rowId - 1].value.typec() == 2) ? "skana" : "kana"][mr.te["i1"][rowId - 1].value];
                mr.te.gd2 = mr.te.gd1.sta.filter(e => Array.isArray(e[3]));
                mr.te.i10 = "";
                for (let i = 0;i < mr.te.gd2.length;i++) {
                    if (mr.te["i3"][rowId - 1].value == mr.te.gd2[i][0]) continue;
                    else if (Number.isFinite(mr.te.gd2[i][6]) && mr.te["i3"][rowId - 1].value == mr.te.gd2[i][6]) continue;
                    for (let i2 = 0;i2 < mr.te.gd2[i][3].length;i2++) {
                        mr.te.i10 += `
                            <div class="mr_row" tabindex="0" data-ls="g" data-code="${(mr.te["i1"][rowId - 1].value.typec() == 2 && Number.isFinite(mr.te.gd2[i][6])) ? mr.te.gd2[i][6] : mr.te.gd2[i][0]}" data-code2="${mr.te.gd2[i][3][i2]}">
                                <div class="sest_stcode">${sta[(mr.te.gd2[i][3][i2].typec() == 2) ? "skana" : "kana"][mr.te.gd2[i][3][i2]].name}(${mr.te.gd2[i][1]}接続)</div>
                            </div>`;
                    }
                } mr.te.i12 = mr.te[rowls][rowId].selectedIndex;
                mr.te.ns20 = mr.te.i12 - 1;
            }
            else {
                for (let i2 = 0;i2 < row2.length;i2++) {
                    if (mr.te[rowls][rowId].options[i2].hidden) continue;
                    else if (mr.te[rowls][rowId].options[i2].selected) {
                        mr.te.i12 = (row.dataset.ls == "l") ?  i2 - 1 : i2;
                        mr.te.ns20 = i2 - 1;
                    }
                    mr.te.i10 += `
                        <div class="mr_row" tabindex="0" data-ls="${row.dataset.ls}" data-code="${mr.te[rowls][rowId].options[i2].value}" ${mr.te[rowls][rowId].options[i2].selected ? `style="background-color:rgba(41,237,136,0.9)"` : ""}>
                            <div class="sest_stcode">${mr.te[rowls][rowId].options[i2].innerHTML}</div>
                        </div>`;
                }
            }
            try {
                if (mr.te.ns2 === "");
                else document.querySelector("#mr_sta1").getElementsByClassName("mr_row")[mr.te.ns2].style.backgroundColor = "";
                document.querySelector("#mr_sta1").getElementsByClassName("mr_row")[rowId2].style.backgroundColor = "rgba(41, 237, 136, 0.9)";
            } catch (e) {
                console.log(e);
            }
            mr.te.ns = rowId;
            mr.te.ns2 = rowId2;
            document.getElementById("mr_sta2").innerHTML = mr.te.i10;
            if (mr.te.i12 == "");
            else if (document.getElementById("mr_sta2").clientHeight < document.querySelector("#mr_sta2").getElementsByClassName("mr_row")[mr.te.i12].offsetTop) document.getElementById("mr_sta2").scrollTop = document.querySelector("#mr_sta2").getElementsByClassName("mr_row")[mr.te.i12].offsetTop - document.getElementById("mr_sta2").clientHeight / 2;
            //auto.f.line(rowId);
            //atem.selectstcode[1] = Number(row.dataset.code);
        }
    });
    mr_sta2.addEventListener('pointerup', (e) => {
        if (Math.abs(e.clientY - pdc.y) > 12) return 0; //12px以上移動していた場合スクロールと判断
        const row = e.target.closest('.mr_row');
        if (row) {
            const rows = Array.from(mr_sta2.querySelectorAll('.mr_row')); //何番目の.sest_rowか探す
            let rowId = rows.indexOf(row);
            //let rowId2 = (rowId - (rowId % 2)) / 2;
            let rowId2 = mr.te.ns;
            mr.f.ne(row,rows,rowId,rowId2);
        }
    });
    mr.f.ne = (row,rows,rowId,rowId2) => {
        //console.log(row,rows,rowId,rowId2);
        if (row.dataset.ls == "g") {
            mr.te.i13 = Array.from(mr.te.i3[rowId2]);
            enter(rowId2,1,0,[[mr.te.i1[rowId2 - 1].value],[mr.te.i3[rowId2 - 1].value,],[row.dataset.code,mr.te.i13.findIndex(e => e.value == row.dataset.code) - 1]]);
            /*let i26 = mr_sta1.getElementsByClassName("mr_row").length;
            let i27 = mr_sta2.scrollTop;
            mr.f.dom.open();
            if (i26 == mr_sta1.getElementsByClassName("mr_row").length) mr_sta2.scrollTop = i27;*/
            console.log(rowId2);
            enter(rowId2,0,0,[[row.dataset.code2]]);
            mr.f.dom.open();
        } else if (row.dataset.ls == "l") {
            enter(rowId2,0,0,[[row.dataset.code]]);
            mr.f.dom.open();
        } else {
            mr.te.i13 = Array.from(mr.te.i3[rowId2]);
            if (rowId2 == 0) {
                enter(0,1,0,[[mr.te.i1[rowId2].value],[row.dataset.code]]);
                mr.f.dom.open(false);
            } else {
                enter(rowId2,1,0,[[mr.te.i1[rowId2 - 1].value],[mr.te.i3[rowId2 - 1].value,],[row.dataset.code,mr.te.i13.findIndex(e => e.value == row.dataset.code) - 1]]);
                let i26 = mr_sta1.getElementsByClassName("mr_row").length;
                let i27 = mr_sta2.scrollTop;
                mr.f.dom.open();
                if (i26 == mr_sta1.getElementsByClassName("mr_row").length) mr_sta2.scrollTop = i27;
            }
        }
    }
    mr_sta2.addEventListener('focusin', (e) => {
        const row = e.target.closest('.mr_row');
        if (row) {
            const rows = Array.from(mr_sta2.querySelectorAll('.mr_row')); //何番目の.sest_rowか探す
            let rowId = rows.indexOf(row);
            let rowId2 = mr.te.ns20;
            try {
                if (mr.te.ns20 === "");
                else document.querySelector("#mr_sta2").getElementsByClassName("mr_row")[rowId2].style.backgroundColor = "";
                document.querySelector("#mr_sta2").getElementsByClassName("mr_row")[rowId].style.backgroundColor = "rgba(41, 237, 136, 0.9)";
            } catch (e) {
                console.log(e);
            }
            mr.te.ns20 = rowId;
        }
    });mr_sta2.addEventListener('keydown',(e) => {
        const selectedRow = document.activeElement;
        if (e.key == "Enter") {
            if (e.shiftKey) mr_sta1.getElementsByClassName("mr_row")[mr.te.ns2].focus();
            else if (selectedRow && selectedRow.classList.contains('mr_row')) {
                const row = document.activeElement;
                const rows = Array.from(mr_sta2.querySelectorAll('.mr_row')); //何番目の.sest_rowか探す
                let rowId = rows.indexOf(row);
                let rowId2 = mr.te.ns;
                /*mr.te.ns = mr_sta1.getElementsByClassName("mr_row").length - 1;
                mr.te.ns2 = (mr.te.ns - (mr.te.ns % 2)) / 2;*/
                mr.te.ns21 = mr_sta1.getElementsByClassName("mr_row").length;
                mr.f.ne(row,rows,rowId,rowId2);
                
                if (mr.te.ns21 == mr_sta1.getElementsByClassName("mr_row").length);
                else {
                    Array.from(mr_sta1.querySelectorAll('.mr_row')).at(-1).focus();
                    //Array.from(mr_sta2.querySelectorAll('.mr_row'))[0].focus();
                }
            }
        } else if (e.key == 'Tab') {
            const rows = Array.from(mr_sta2.querySelectorAll('.mr_row')); // grid内の全行を取得します
            if (rows.length === 0) return;
            if (e.shiftKey && selectedRow == rows[0]) { // Shift + Tab（逆送り）で、最初の行にいる場合
                e.preventDefault();
                rows.at(-1).focus();
            } else if (!e.shiftKey && selectedRow == rows.at(-1)) { // 通常の Tab で、最後の行にいる場合
                e.preventDefault();
                rows[0].focus();
            }
        }
    });
    mr_sta1.addEventListener('keydown',(e) => {
        const selectedRow = document.activeElement;
        if (e.key == "Enter") {
            if (selectedRow && selectedRow.classList.contains('mr_row')) {
                const rowls = (selectedRow.dataset.ls == "l") ? "i1" : "i3";
                console.log(rowls);
                try {
                    mr_sta2.querySelectorAll('.mr_row')[(mr.te[rowls][mr.te.ns].selectedIndex == 0) ? 0 : mr.te[rowls][mr.te.ns].selectedIndex - 1].focus();
                } catch (e) {
                    mr_sta2.querySelectorAll('.mr_row')[0].focus();
                }
            }
        } else if (e.key == 'Tab') {
            const rows = Array.from(mr_sta1.querySelectorAll('.mr_row')); // grid内の全行を取得します
            if (rows.length === 0) return;
            if (e.shiftKey && selectedRow == rows[0]) { // Shift + Tab（逆送り）で、最初の行にいる場合
                e.preventDefault();
                rows.at(-1).focus();
            } else if (!e.shiftKey && selectedRow == rows.at(-1)) { // 通常の Tab で、最後の行にいる場合
                e.preventDefault();
                rows[0].focus();
            }
        }
    });
});
let mr = {f:{dom:{},guide:{}},te:{ns:"",ns2:"",ns20:""},gd:{tf:false}};
mr.f.dom.close = () => {
    document.getElementById("mrbox").style.display = "none";
    if (typeof hosei !== "undefined" && hosei.tf) hosei.f.dom.cre(); //補正禁止用チェックボックス再生成
};
mr.f.dom.open = (sc) => {
    document.getElementById("mrbox").style.display = "inline";
    mr.te.i1 = document.getElementsByClassName("selectline")[0].getElementsByClassName("line2");
    mr.te.i3 = document.getElementsByClassName("selectline")[0].getElementsByClassName("sta2");
    if (mr.te.i3.length == 0) enter(0,0,0,[["トウホ"]]); //まだ最初の路線を選択していない場合はとりあえず東北本線を選択
    mr.te.i2 = "";
    for (let i = 0;i < mr.te.i3.length;i++) {
        mr.te.i2 += `
            <div class="mr_row" tabindex="0" data-ls="s">
                <div class="sest_stcode">　　　${mr.te.i3[i].options[mr.te.i3[i].selectedIndex].innerHTML}</div>
            </div>
        `; if (i > mr.te.i1.length - 1) break;
        mr.te.i2 += `
            <div class="mr_row" tabindex="0" data-ls="l">
                <div class="sest_stcode">${(mr.te.i1[i].value == "") ? "路線を選択" : (sta[(mr.te.i1[i].value.typec() == 2) ? "skana" : "kana"][mr.te.i1[i].value].name2)}</div>
            </div>
        `;
    } document.getElementById("mr_sta1").innerHTML = mr.te.i2;
    if (sc !== false) {
        document.getElementById("mr_sta1").scrollTop = document.getElementById("mr_sta1").scrollHeight;
        document.querySelector("#mr_sta1").getElementsByClassName("mr_row")[document.querySelector("#mr_sta1").getElementsByClassName("mr_row").length - 1].focus();
    }
};
mr.f.dom.openclose = () => {
    if (document.getElementById("mrbox").style.display == "inline") mr.f.dom.close();
    else mr.f.dom.open();
};
mr.f.pop = () => { //1路線削除用
    mr.te.i1 = document.getElementsByClassName("selectline")[0].getElementsByClassName("line2");
    mr.te.i3 = document.getElementsByClassName("selectline")[0].getElementsByClassName("sta2");
    if (mr.te.i1.length > 1) {
        if (mr.te.i1.length == mr.te.i3.length - 1) {
            mr.te.i1[mr.te.i1.length - 1].selectedIndex = 0;
            if (data2.length == mr.te.i1.length) data2.pop();
            mr.te.i3[mr.te.i3.length - 1].remove();
            mr.te.ns2--;
        } else if (mr.te.i1.length == mr.te.i3.length) {
            if (mr.te.i3[mr.te.i3.length - 1].selectedIndex != 0) data2.pop();
            mr.te.i3[mr.te.i3.length - 1].selectedIndex = 0;
            mr.te.i1[mr.te.i1.length - 1].remove();
            mr.te.ns2--;
        } if (document.getElementById("mrbox").style.display == "inline") mr.f.dom.open();
    }
};mr.f.gd = {};
mr.f.gd.change = () => {
    if (mr.gd.tf) {
        document.getElementById("mr_gd_tf").checked = false;
        mr.gd.tf = false;
    } else {
        document.getElementById("mr_gd_tf").checked = true;
        mr.gd.tf = true;
    }
}
function minindex(arr) {
  return arr.length ? arr.indexOf(Math.min(...arr)) : 0; //おかしいなら0を回答
}
let pp = {f:{dom:{}},t:{i1:[]}};
pp.f.cre = (m,d,pn,da,m2,fs) => {
    if (data2.length == 0) {
        alert("経路が未入力です。");
        return false;
    }
    calc4();
    pp.t.valid = [...temp.i56];
    if (temp.dup && !confirm("連絡運輸範囲を逸脱しているか、重複駅が存在していると判定されましたが、それでもよろしいですか？")) return false;
    pp.t.i1 = [data2[0].sta[0][1]];
    for (let i = 0;i < data2.length;i++) {
        if (data2[i].line == "ヨサン" && data2[i].sta.some(e => e[0] == 701486) && data2[i].sta.some(e => e[0] == 701464)) pp.t.i1.push("予讃本線（内子経由）");
        else if (data2[i].line == "オオサ1") {
            if (i < data2.length - 1 && data2[i + 1].line == "オオサ2") {
                if (data2[i + 1].sta[0][0] == 610130) pp.t.i1.push("環状線　内");
                else pp.t.i1.push("環状線　外");
                pp.t.i1.push(data2[i + 1].sta.at(-1)[1]);
                i++;
                continue;
            } else {
                if (data2[i].sta[0][4] - data2[i].sta.at(-1)[4] > 0) pp.t.i1.push("環状線　内");
                else pp.t.i1.push("環状線　外");
            }
        } else if (data2[i].line == "オオサ2") {
            if (i < data2.length - 1 && data2[i + 1].line == "オオサ1") {
                if (data2[i + 1].sta[0][0] == 610130) pp.t.i1.push("環状線　外");
                else pp.t.i1.push("環状線　内");
                pp.t.i1.push(data2[i + 1].sta.at(-1)[1]);
                i++;
                continue;
            } else {
                if (data2[i].sta[0][4] - data2[i].sta.at(-1)[4] < 0) pp.t.i1.push("環状線　内");
                else pp.t.i1.push("環状線　外");
            }
        } else if (data2[i].line == "トウホ4") {
            pp.t.i1.push("埼京線");
            if (i < data2.length - 1 && data2[i + 1].line == "アカハ") {
                pp.t.i1.push(data2[i + 1].sta.at(-1)[1]);
                i++;
                continue;
            }
        } else if (data2[i].line == "アカハ") {
            pp.t.i1.push("埼京線");
            if (i < data2.length - 1 && data2[i + 1].line == "トウホ4") {
                pp.t.i1.push(data2[i + 1].sta.at(-1)[1]);
                i++;
                continue;
            }
        } else if (data2[i].line == "トウホ2" && i < data2.length - 1 && data2[i + 1].line == "ヤマテ2" && data2[i + 1].sta[1][0] == 441021) {
            pp.t.i1.push("京浜東北線",data2[i + 1].sta.at(-1)[1]);
            if (i < data2.length - 2 && data2[i + 2].line == "トウホ" && data2[i + 2].sta[1][0] == 441004) i += 2;
            else i++;
            continue;
        } else if (data2[i].line == "ヤマテ2" && i < data2.length - 1 && data2[i + 1].line == "トウホ2" && data2[i].sta.at(-2)[0] == 441021) {
            pp.t.i1.push("京浜東北線",data2[i + 1].sta.at(-1)[1]);
            i++;
            continue;
        } else if (data2[i].line == "ヤマテ1" && i < data2.length - 2 && data2[i + 1].line == "チユト" && data2[i + 2].line == "ヤマテ2") {
            pp.t.i1.push("山手線　外",data2[i + 2].sta.at(-1)[1]);
            i += 2;
            continue;
        } else if (data2[i].line == "ヤマテ2" && i < data2.length - 2 && data2[i + 1].line == "チユト" && data2[i + 2].line == "ヤマテ1") {
            pp.t.i1.push("山手線　内",data2[i + 2].sta.at(-1)[1]);
            i += 2;
            continue;
        } else if (data2[i].line == "トウホ2") pp.t.i1.push("京浜東北線"); 
        else pp.t.i1.push(sta[(data2[i].line.typec() == 2)　? "skana" : "kana"][data2[i].line].name);
        pp.t.i1.push(data2[i][("sta3" in data2[i]) ? "sta3" : "sta"].at(-1)[1]);
    } pp.t.i2 = [...new Array(pp.t.i1.length)].map((_,ir) => `<div>${(ir % 2 == 0) ? "　　" : ""}${pp.t.i1[ir]}</div>`);
    pp.t.i2.shift();
    pp.t.i2.pop();
    pp.t.i2 = `<!doctype html>
    <html lang="ja">
    <head>
      <meta charset="UTF-8">
      <title>印刷用ページ｜${pp.t.i1[0]}→${pp.t.i1.at(-1)}</title>
      <style>
        body {
          font-family: system-ui, sans-serif;
          padding:5px;
          font-size:${(fs != "") ? fs + "%" : "100%"};
          ${(da != 1) ? `column-count: ${da};column-gap: 18px;` : ""}
        }
      </style>
    </head>
    <body>
    ${(m2 != 2) ? `<div>区間：${pp.t.i1[0]}→${pp.t.i1.at(-1)}</div>
    <div>日付：${m ?? "　"}月${d ?? "　"}日から有効</div>
    <div>人員種別：${ptmap4[ptype]}${pn ?? "１"}名</div>` : ""}
    ${(m2 == 1) ? `<div>
    営業㌔：${customround(temp.c.kiro[0][0] + temp.c.kiro[0][1] + temp.sres[0])}km
    ${(temp.c.skiro.length > 0) ? `<br>（うちJR線${customround(temp.c.kiro[0][0] + temp.c.kiro[0][1])}km、社線${temp.sres[0]}km）` : ""}<br>
    運賃計算㌔：${customround(temp.c.kiro[0][0] + temp.c.kiro[0][2] + temp.sres[0])}km
    ${(temp.c.skiro.length > 0) ? `<br>（うちJR線${customround(temp.c.kiro[0][0] + temp.c.kiro[0][2])}km、社線${temp.sres[0]}km）` : ""}
    </div>
    <div>
    運賃：${temp.res}円${(temp.c.skiro.length > 0) ? `（うち社線${temp.sres[1]}円）` : ""}
    </div>
    <div>
    有効期間：${pp.t.valid[0]}日間${(pp.t.valid[1] == "") ? "" : `（${pp.t.valid[1]}）`}<br>
    途中下車：${(pp.t.valid[2]) ? "可" : "不可"}
    </div>` : ""}
    ${(m2 != 2) ? `経路：<br>` : ""}
      ${pp.t.i2.join("")}
      <script>
        window.onload = function() {
          history.replaceState(null, '', location.href);
          window.print();
          window.close();
        };
      <\/script>
    </body>
    </html>`;
    const w = window.open('', '_blank');
    w.document.open();
    w.document.write(pp.t.i2);
    w.document.close();
}
pp.f.cre2 = () => {
    pp.f.cre(pp.f.em(document.getElementById("pp_m").value),pp.f.em(document.getElementById("pp_d").value),pp.f.em(document.getElementById("pp_num").value),document.getElementById("pp_da").value,document.getElementById("pp_m2").value,document.getElementById("pp_fs").value);
};pp.f.em = (v) => {
    if (v == "") return void 0;
    else if (v < 10 && v >= 0) return tofull(v);
    else return v;
    return (v == "") ? void 0 : v;
};pp.f.dom.open = () => {
    document.getElementById("ppbox").style.display = "inline";
    document.getElementById("pp_ptype").innerHTML = ptmap3[ptype];
    guide.s_el = 1;
};pp.f.dom.close = () => {
    document.getElementById("ppbox").style.display = "none";
    guide.s_el = 0;
};
