let b = {f:{all:{},dom:{},cache:{},n:{select:{}},box2:{}},t:[440102],d2:[],k:[],c:{},max:4,def:{max:4},e:{},n:{n:0,a:[],s:[]}};
let temp3 = {i:false,sf:[]};
b.f.moto = () => {
    document.getElementById("b_dd").innerHTML = `${temp.sf[0][1]}→${temp.sf[1][1]}`;
    document.getElementById("b_dk").innerHTML = exp.keiyu().join("·");
    document.getElementById("b_df").innerHTML = temp.res;
};b.f.sum = (v) => {
    return v.reduce(function(i1,i2){
        return i1 + i2;
    },0);
};b.f.cre = () => {
    b.d2 = JSON.parse(JSON.stringify(data2));
    b.k = [{fst:b.d2[0].sta[0][0],r:[]}];
    temp3.i2 = [0,0];
    temp3.i = false;
    for (let i = 0;i < b.d2.length;i++) {
        if ("sta3" in b.d2[i] || b.d2[i].sta3 == void 0) b.d2[i].sta3 = b.d2[i].sta; //主に社線用（社線ではsta3は作成しないため）
        if (temp3.i) {
            b.k.push({fst:b.d2[i].sta3[0][0],r:[b.d2[i].line]});
            temp3.i2[0]++;
            temp3.i = false;
        } else b.k[temp3.i2[0]].r.push(b.d2[i].line);
        for (let i2 = 0;i2 < b.d2[i].sta3.length;i2++) {
            if (b.d2[i].sta3[i2][0] == b.t[temp3.i2[1]] || b.d2[i].sta3[i2][1] == b.t[temp3.i2[1]] || b.d2[i].sta3[i2][2] == b.t[temp3.i2[1]]) {
                b.k[temp3.i2[0]].fin = b.d2[i].sta3[i2][0];
                if (i2 == b.d2[i].sta3.length - 1) temp3.i = true;
                else {
                    b.k.push({fst:b.d2[i].sta3[i2][0],r:[b.d2[i].line]});
                    temp3.i2[0]++;
                } temp3.i2[1]++;
            }
        } if (!temp3.i && i != b.d2.length - 1) b.k[temp3.i2[0]].r.push(b.d2[i].sta3[b.d2[i].sta3.length - 1][0]);
    } b.k[temp3.i2[0]].fin = b.d2[b.d2.length - 1].sta3[b.d2[b.d2.length - 1].sta3.length -1][0];
    return JSON.parse(JSON.stringify(b.k));
};b.f.calc = (m,n) => {
    if (n > 2) {
        temp3.r = [];
        temp3.sf = new Array((b.t.length + 1) * 2);
        temp3.r.push(b.c[`${data2[0].sta[0][0]}-${b.t[0]}`].k);
        [temp3.sf[0],temp3.sf[1]] = [b.c[`${data2[0].sta[0][0]}-${b.t[0]}`].sf[0],b.c[`${data2[0].sta[0][0]}-${b.t[0]}`].sf[1]];
        for (let i = 0;i < b.t.length - 1;i++) {
            temp3.r.push(b.c[`${b.t[i]}-${b.t[i + 1]}`].k);
            [temp3.sf[(i + 1) * 2],temp3.sf[(i + 1) * 2 + 1]] = [b.c[`${b.t[i]}-${b.t[i + 1]}`].sf[0],b.c[`${b.t[i]}-${b.t[i + 1]}`].sf[1]];
        }
        temp3.r.push(b.c[`${b.t.at(-1)}-${data2.at(-1).sta.at(-1)[0]}`].k);
        [temp3.sf[temp3.sf.length - 2],temp3.sf[temp3.sf.length - 1]] = [b.c[`${b.t.at(-1)}-${data2.at(-1).sta.at(-1)[0]}`].sf[0],b.c[`${b.t.at(-1)}-${data2.at(-1).sta.at(-1)[0]}`].sf[1]];
        return temp3.r;
    } else if (m == undefined) m = 0;
    temp3.k = b.f.cre();
    temp3.r = [];
    [temp3.info,temp3.kana,temp3.kiro,temp3.sf11] = [[],[],[],[]];
    if (m == 0) temp3.b = JSON.parse(JSON.stringify(data2));
    for (let i = 0;i < temp3.k.length;i++) {
        if (`${temp3.k[i].fst}-${temp3.k[i].fin}` in b.c) { //キャッシュを利用
            temp3.r.push(b.c[`${temp3.k[i].fst}-${temp3.k[i].fin}`].k);
        } else {
            analy.f(temp3.k[i].fst,temp3.k[i].fin,temp3.k[i].r.join("-"),1,false,false);
            temp3.r.push(calc2(1));
            if (m == 0) {
                temp3.info.push(JSON.parse(JSON.stringify(info.v)));
                temp3.kana.push(analy.cre());
                temp3.kiro.push([JSON.parse(JSON.stringify(temp.c.kiro)),temp.sres[0]]);
                temp3.sf11.push([data2[0].sta[0][0],data2[0].sta[0][1]],[data2.at(-1).sta.at(-1)[0],data2.at(-1).sta.at(-1)[1]]);
            } b.c[`${temp3.k[i].fst}-${temp3.k[i].fin}`] = {k:temp3.r.at(-1),sf:JSON.parse(JSON.stringify(temp.sf))};//キャッシュを生成
        } [temp3.sf[i * 2],temp3.sf[i * 2 + 1]] = [b.c[`${temp3.k[i].fst}-${temp3.k[i].fin}`].sf[0],b.c[`${temp3.k[i].fst}-${temp3.k[i].fin}`].sf[1]];
    } if (m == 0) {
        data2 = JSON.parse(JSON.stringify(temp3.b));
        calc2();
        console.log(`分割前運賃:${temp.res}円`);
    } //console.log(`分割後運賃:${b.f.sum(temp3.r)}円`);
    return temp3.r;
};b.f.all.calc = () => {
    b.f.cache.delete();
    calc2();
    if (data3.length < 3) {
        alert("通過駅数が少なすぎるため、分割できません.");
        return false;
    } console.log(`分割前運賃:${temp.res}円`);
    b.f.moto();
    temp3.sf = JSON.parse(JSON.stringify(temp.sf));
    temp3.b = JSON.parse(JSON.stringify(data2));
    temp3.b2 = JSON.parse(JSON.stringify(data3));
    temp3.r2 = [];
    b.max = b.def.max;
    if (temp3.b2.length < 6) {
        b.max = 3;
        document.getElementsByClassName("b_re")[2].innerHTML = "通過駅数が少なすぎるため、分割できません.";
    } if (temp3.b2.length < 5) {
        b.max = 2;
        document.getElementsByClassName("b_re")[1].innerHTML = "通過駅数が少なすぎるため、分割できません.";
    } if (temp3.b2.length > 100) {
        b.max = 3;
        document.getElementsByClassName("b_re")[2].innerHTML = "通過駅数が多すぎるため、計算を省略します.";
    } if (temp3.b2.length > 160) {
        b.max = 2;
        document.getElementsByClassName("b_re")[1].innerHTML = "通過駅数が多すぎるため、計算を省略します.";
    } for (let i = 1;i < b.max;i++) {
        temp3.set = [...Array(i)].map((_, ir) => ir + 1);
        temp3.r2.push([]);
        toho:for (let i2 = 1;i2 < 999999;i2++) {
            while (temp3.set.at(-1) >= temp3.b2.length - i) {
                temp3.set.pop();
                if (temp3.set.length == 0) break toho;
                temp3.set[temp3.set.length - 1]++;
            } while (temp3.set.length < i) temp3.set.push(temp3.set.at(-1) + 1);
            data2 = JSON.parse(JSON.stringify(temp3.b));
            b.t = [...Array(i)].map((_,ir) => temp3.b2[temp3.set[ir]][0]);
            //console.log(JSON.parse(JSON.stringify(temp3.set)),i);
            temp3.r2[temp3.r2.length - 1].push([[b.f.calc(1,i),0],[[...Array(i)].map((_,ir) => [temp3.b2[temp3.set[ir]][0],temp3.b2[temp3.set[ir]][1]])],JSON.parse(JSON.stringify(temp3.sf))]);
            temp3.r2[temp3.r2.length - 1][temp3.r2[temp3.r2.length - 1].length - 1][0][1] = b.f.sum(temp3.r2[temp3.r2.length - 1][temp3.r2[temp3.r2.length - 1].length - 1][0][0]);
            temp3.set[temp3.set.length - 1]++;
        };temp3.r2[temp3.r2.length - 1] = temp3.r2.at(-1).sort(function(i,i2){
            return i[0][1] - i2[0][1];
        });
    };[temp3.r3,temp3.r4] = [[],"<table>"];
    for (let i2 = 0;i2 < temp3.r2.length;i2++) {
        temp3.r3.push([]);
        for (let i = 0;i < temp3.r2[i2].length;i++) {
            if (i != 0 && temp3.r2[i2][i][0][1] == temp3.r2[i2][i - 1][0][1]) temp3.r3[temp3.r3.length - 1][temp3.r3[temp3.r3.length - 1].length - 1].push(temp3.r2[i2][i]);
            else temp3.r3[temp3.r3.length - 1].push([temp3.r2[i2][i]]);
        }
    } data2 = JSON.parse(JSON.stringify(temp3.b));
    for (let i3 = 0;i3 < temp3.r3.length;i3++) {
        for (let i = 0;i < temp3.r3[i3].length;i++) {
            temp3.r4 = "<table>";
            for (let i2 = 0;i2 < temp3.r3[i3][i][0][1][0].length + 1;i2++) {
                temp3.r4 += `<tr><td>${temp3.r3[i3][i][0][2][i2 * 2][1]}</td>`;
                temp3.r4 += `<td>${temp3.r3[i3][i][0][2][i2 * 2 + 1][1]}</td>`;
                temp3.r4 += `<td>${temp3.r3[i3][i][0][0][0][i2]}</td></tr>`;
            } temp3.r4 += `<tr><td colspan="2">合計</td><td>${temp3.r3[i3][i][0][0][1]}</td></tr>`;
            temp3.r5 = [];
            for (let i2 = 1;i2 < temp3.r3[i3][i].length;i2++) temp3.r5.push([...Array(temp3.r3[i3][i][i2][1][0].length)].map((_, ir) => temp3.r3[i3][i][i2][1][0][ir][1]).join("·"));
            temp3.r4 += `</table>`;
            if (temp3.r5.length > 0) temp3.r4 += `<div>${temp3.r5.join("、")}で分割しても同額</div>`;
            document.getElementsByClassName("b_re")[i3].innerHTML = temp3.r4;
            break;
        }
    }
};b.f.cache.delete = () => {
    b.c = {};
};b.f.dom.close = () => {
    document.getElementsByClassName("setting")[2].style.display = "none";
};b.f.dom.open = () => {
    document.getElementsByClassName("setting")[2].style.display = "inline";
    b.f.n.select.cre();
};b.f.dom.openclose = () => {
    if (document.getElementsByClassName("setting")[2].style.display == "inline") b.f.dom.close();
    else b.f.dom.open();
};b.f.n.push = (v) => {
    if (v != -1 && b.n.a.length != 0) v = b.n.a.findIndex(e => e == v);
    b.n.n++;
    b.e.i1 = document.createElement("div");
    b.e.i1.className = "b_n_c";
    if (document.getElementsByClassName("b_n_c").length - 1 == v) {
        document.getElementById("b_n").appendChild(b.e.i1);
        b.n.a.push(b.n.n);
    } else {
        b.n.a.splice(v + 1,0,b.n.n);
        document.getElementById("b_n").insertBefore(b.e.i1, document.getElementsByClassName("b_n_c")[v + 1]);
    } b.e.i1 = document.createElement("input");
    b.e.i1.className = "b_te";
    b.e.i1.type = "text";
    document.getElementsByClassName("b_n_c")[v + 1].appendChild(b.e.i1);
    b.e.i1 = document.createElement("input");
    b.e.i1.className = "b_t_push";
    b.e.i1.type = "button";
    b.e.i1.value = "追加";
    b.e.i1.setAttribute('onclick', `b.f.n.push(${b.n.n})`);
    document.getElementsByClassName("b_n_c")[v + 1].appendChild(b.e.i1);
    b.e.i1 = document.createElement("input");
    b.e.i1.className = "b_t_delete";
    b.e.i1.type = "button";
    b.e.i1.value = "削除";
    b.e.i1.setAttribute('onclick', `b.f.n.delete(${b.n.n})`);
    document.getElementsByClassName("b_n_c")[v + 1].appendChild(b.e.i1);
};b.f.n.delete = (v) => {
    if (b.n.a.length == 1) {
        alert("分割駅数を0にすることはできません。");
        return false;
    } v = b.n.a.findIndex(e => e == v);
    b.n.a.splice(v,1);
    document.getElementsByClassName("b_n_c")[v].remove();
};b.f.n.calc = () => {
    [b.t,b.c] = [[],[]];
    b.f.n.select.get();
    for (let i = 0;i < b.n.a.length;i++) {
        if (document.getElementsByClassName("b_te")[i].value.replace(/\s+/g, "") == "") continue;//空白なら追加しない
        b.t.push(document.getElementsByClassName("b_te")[i].value);
    } calc2();
    b.f.moto();
    b.f.cre(0);
    b.f.calc(0,0);
    [temp3.info2,temp3.kiro2,temp3.kana2,temp3.sf2,temp3.sf12,temp3.r12,temp3.r4] = [JSON.parse(JSON.stringify(temp3.info)),JSON.parse(JSON.stringify(temp3.kiro)),JSON.parse(JSON.stringify(temp3.kana)),JSON.parse(JSON.stringify(temp3.sf)),JSON.parse(JSON.stringify(temp3.sf11)),JSON.parse(JSON.stringify(temp3.r)),"<table>"];
    for (let i2 = 0;i2 < temp3.r.length;i2++) temp3.r4 += `<tr><td>${temp3.sf[i2 * 2][1]}</td><td>${temp3.sf[i2 * 2 + 1][1]}</td><td>${temp3.r[i2]}</td><td><input type="button" value="INFO" onclick="b.f.n.info(${i2})"></td></tr>`;
    temp3.r4 += `<tr><td colspan="2">合計</td><td>${b.f.sum(temp3.r)}</td></tr></table>`;
    document.getElementsByClassName("b_n_r")[0].innerHTML = temp3.r4;
};b.f.n.info = (v) => {
    info.box.open(`発駅:${temp3.sf2[v * 2][1]}/${(temp3.sf2[v * 2][0].toString().length == 6) ? "△" : ""}${temp3.sf2[v * 2][0]}(${temp3.sf12[v * 2][1]}/${(temp3.sf12[v * 2][0].toString().length == 6) ? "△" : ""}${temp3.sf12[v * 2][0]})<br>着駅:${temp3.sf2[v * 2 + 1][1]}/${(temp3.sf2[v * 2 + 1][0].toString().length == 6) ? "△" : ""}${temp3.sf2[v * 2 + 1][0]}(${temp3.sf12[v * 2 + 1][1]}/${(temp3.sf12[v * 2 + 1][0].toString().length == 6) ? "△" : ""}${temp3.sf12[v * 2 + 1][0]})<br>営業㌔:${customround(temp3.kiro2[v][0][0][0] + temp3.kiro2[v][0][0][1])}km<br>運賃計算㌔:${customround(temp3.kiro2[v][0][0][0] + temp3.kiro2[v][0][0][2])}km<br>社線営業㌔:${temp3.kiro2[v][1]}km<br>合計営業㌔:${customround(temp3.kiro2[v][0][0][0] + temp3.kiro2[v][0][0][1] + temp3.kiro2[v][1])}km<br>運賃:${temp3.r[v]}円<br>疑似ｶﾅｺｰﾄﾞ:${temp3.kana2[v].join("-")}<br>経由:${exp.keiyu(temp3.kana2[v]).join("·")}<br><input type="button" onclick="b.f.n.set(${v})" value="この経路の読込"><br>INFO:<br>${[...Array(temp3.info2[v].length)].map((_,ir) => temp3.info2[v][ir][1]).join("<br>")}`);
};b.f.n.set = (v,m) => {//もしmがtrueなら読込確認を省略
    if (v !== false && !confirm("読み込んでよろしいですか？")) return false;
    analy.f(temp3.sf12[v * 2][0],temp3.sf12[v * 2 + 1][0],temp3.kana2[v].join("-"),0);
};b.f.n.select.cre = () => {
    if (data3.length == 0) {
        calc2();
        if (data3.length == 0) return false;
        b.f.moto();
    } document.getElementById("b_sta").innerHTML = "";
    for (let i = 0;i < data3.length;i++) {
        b.e.i1 = document.createElement("option");
        b.e.i1.value = data3[i][0];
        b.e.i1.innerHTML = data3[i][1];
        b.e.i1.setAttribute('value2', data3[i][1]);
        document.getElementById("b_sta").appendChild(b.e.i1);
    };b.f.n.select.set();
};b.f.n.select.r = () => {
    document.getElementById("b_n").innerHTML = "";
    b.n.n = 0;
    b.n.a = [];
    if (b.n.s.length == 0) {
        b.f.n.push(-1);
        return false;
    } for (let i = -1;i < b.n.s.length - 1;i++) {
        b.f.n.push(i);
        document.getElementsByClassName("b_te")[i + 1].value = b.n.s[i + 1][1];
    } document.getElementsByClassName("b_te")[0].value = b.n.s[0][1];
};b.f.n.select.get = (m) => {
    b.n.s = [];
    for (let i = 0;i < document.getElementById("b_sta").selectedOptions.length;i++){
        b.n.s.push([document.getElementById("b_sta").selectedOptions[i].value,document.getElementById("b_sta").selectedOptions[i].innerHTML]);
        console.log(document.getElementById("b_sta").selectedOptions[i].value);
    } if (m != 0) b.f.n.select.r();
};b.f.n.select.set = () => {
    for (let i = 0;i < document.getElementsByClassName("b_te").length;i++) {
        if (document.getElementsByClassName("b_te")[i].value.replace(/\s+/g, "") == "") continue;//空白なら追加しない
        temp3.i4 = [document.getElementById("b_sta").querySelector(`option[value="${document.getElementsByClassName("b_te")[i].value}"]`),document.getElementById("b_sta").querySelector(`option[value2="${document.getElementsByClassName("b_te")[i].value}"]`)]
        if (temp3.i4[0] != null) temp3.i4[0].selected = true;
        else if (temp3.i4[1] != null) temp3.i4[1].selected = true;
    } 
};b.f.box2.close = (m) => {
    if (!m && !confirm("本当に更新せず戻りますか？入力後のデータは消えてしまいます。")) return false; 
    document.getElementsByClassName("b_box2")[0].style.display = "none";
    if (m) b.f.n.select.set();//変更を反映する場合
};b.f.box2.open = () => {
    b.f.n.select.get();
    document.getElementsByClassName("b_box2")[0].style.display = "inline";
};