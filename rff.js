let rff = {f:{c:{hal:{}},nyu:{}},d:{sr:530},dom:{}};//rff.d.srは、座席指定料金
rff.d.nowseason = 2;//1は閑散期、2は通常期、3は繁忙期、4は最繁忙期
rff.d.season = [[],["閑散期",-200],["通常期",0],["繁忙期",200],["最繁忙期",400]];
let rtem = {i1:{dsr2:""},flag1:{},sk:{},d:{}};
rff.d.al= [ //A特急料金
    [1,50,1290],
    [51,100,1730],
    [101,150,2390],
    [151,200,2730],
    [201,300,2950],
    [301,400,3170],
    [401,500,3490],
    [501,600,3830]
];
rff.d.al1 = [ //A特急料金（JR北海道）
    [1,25,850],
    [1,50,1160],
    [51,100,1680],
    [101,150,2360]
];
rff.d.bl = [
    [],[],[ //B特急料金（2/JR東日本）
        [1,50,1050],
        [51,100,1480],
        [101,150,1890],
        [151,200,2290],
        [201,300,2510],
        [301,400,2730],
        [401,9999,3070]
    ],[ //B特急料金（3/JR東海）
        [1,50,1190],
        [51,100,1530],
        [101,150,1970],
        [151,200,2290],
        [201,300,2510],
        [301,400,2730],
        [401,9999,3070]
    ],[],[],[ //B特急料金（6/JR九州）
        [1,25,1030],
        [26,50,1280],
        [51,75,1530],
        [76,100,1730],
        [101,150,2330],
        [151,200,2730],
        [201,300,2930],
        [301,9999,3130]
    ]
]
rff.d.blr = {
    all:["アカハ","イトウ","ウチホ","カシマ","キタカ","ケイヨ","ケイヨ2","ケイヨ3","センサ","ソウフ","ソウフ2","ソトホ","タカサ","ナリタ","ナリタ2","ナンフ","ナンフ2","ニツコ","ネキシ","ハクシ","ヒンカ","ムサシ","ヤマテ1","ヤマテ2","ヨコス","ヨコハ","トウホ2"],
    sec:[
        ["アカツ",[411205],[411515]],
        ["ウエツ",[300306],[220855]],
        ["オウウ",[220855],[211066]],
        ["シヨエ",[411416],[301210]],
        ["チユト",[440101],[510501]],
        ["トウカ",[440101],[520102]],
        ["トウホ",[440101],[411022]],
        ["ハンサ",[231007],[230720]],
        ["リヨウ",[411202],[411627]]
    ]
}
for (let i = 0;i < rff.d.blr.sec.length;i++) {
    rff.d.blr.sec[i][1].push(sta.kana[rff.d.blr.sec[i][0]].sta.findIndex((e) => e[0] == rff.d.blr.sec[i][1][0]));
    rff.d.blr.sec[i][2].push(sta.kana[rff.d.blr.sec[i][0]].sta.findIndex((e) => e[0] == rff.d.blr.sec[i][2][0]));
}
rff.d.sh = {};
rff.d.sh.eshinka = [ //JR東日本新幹線
    [1,100,2400],
    [101,200,3170],
    [201,300,4060],
    [301,400,4830],
    [401,500,5370],
    [501,600,5700],
    [601,700,6070],
    [701,9999,6600]
];
rff.d.sh.eshtokutei = [ //特定特急券
    [1,50,880],
    [51,100,1000]
];
rff.d.sh.eshtosec = [ //特定特急券区間
    [211005,211014,""],//一ノ関・北上間
    [211014,211024,""],//北上・盛岡間
    [231304,211005,""],//古川・一ノ関間
    [440101,441018,1090],//東京・大宮間
    [411407,411416,""],//熊谷・高崎間
];
rff.d.sh.eshtosec2 = [ //特定特急券区間・特定運賃
    [441003,411012,2830],//上野・宇都宮間
    [440101,411012,3040],//東京・宇都宮間
    [441003,411416,2830],//上野・高崎間
    [440101,411416,3040],//東京・高崎間
];
rff.d.sh.eshtosec3 = [ //自由席以外（指定席やグリーン席等）でのみ適用される特定の特急料金
    [231007,231017,rff.d.sh.eshtokutei[0][2] + rff.d.sr],//(北)郡山・(北)福島間
    [540203,541413,rff.d.sh.eshtokutei[0][2] + rff.d.sr],//越前たけふ・敦賀間
];
rff.d.sh.mini = [ //ミニ新幹線の特定特急料金（東北新幹線と跨って乗車する場合530円加算）
    [1,50,760],
    [51,100,1130],
    [101,150,1580]
]
rff.d.zsr = [ //JR東日本全指特急（成田エクスプレス・成田空港または空港第２ビル発着を除く）
    [1,50,760],
    [51,100,1020],
    [101,150,1580],
    [151,200,2240],
    [201,300,2550],
    [301,400,2990]
]
rff.f.c.zsr = () => { //JR東日本全指特急（全シーズン同額に注意！）
    rtem.res = 0;
    rtem.i1.kiro = Math.ceil(temp.c.kiro[0][0] + temp.c.kiro[0][1]);
    for (let i = 0;i < rff.d.zsr.length;i++) {
        if (rff.d.zsr[i][0] <= rtem.i1.kiro && rtem.i1.kiro <= rff.d.zsr[i][1]) {
            rtem.res = rff.d.zsr[i][2];
            break;
        }
    }
    if (ptype == 1 || ptype == 8) rtem.res = Math.floor(rtem.res / 20) * 10; //小児半額（8は小児障割）
    else if (ptype == 3) rtem.res = Math.floor(rtem.res * 0.6 / 10) * 10; //JR東日本株優４割引
    else if (ptype == 10) rtem.res = Math.floor((Math.floor(rtem.res / 20) * 10) * 0.6 / 10) * 10; //JR東日本株優４割引（小児）
    return rtem.res;
}
rff.d.sh.kai = [ //東海道新幹線と、東海道新幹線と山陽新幹線を跨って乗車する場合
    [1,100,2290],
    [101,200,3060],
    [201,300,3930],
    [301,400,4700], //ただし、"東海道"新幹線単独の場合4710円
    [401,500,5150],
    [501,600,5490],
    [601,700,5920],
    [701,800,6460],
    [801,900,7030],
    [901,100,7570],
    [1001,1100,8130],
    [1101,9999,8670]
];
rff.d.sh.kaitoku = [ //東海道山陽新幹線の特定特急料金
    [1,50,870],
    [51,100,990]
];
rff.d.sh.kaitoku2 = [ //東海道山陽新幹線の特定特急券区間のうち、隣接駅間でないもの
    [440101,440145], //東京・新横浜間
    [520102,520116], //三島・静岡間
    [520116,520127], //静岡・浜松間
    [520135,530116], //豊橋・名古屋間
    [650620,800601], //福山・三原間
    [800601,800613], //三原・広島間
    [800646,800656], //新山口・新下関間
];
rff.d.sh.kiyu = [ //九州新幹線の特急料金
    [1,50,1920],
    [51,100,2540],
    [101,150,3420],
    [151,200,4230],
    [201,250,4960],
    [251,9999,5680],
];
rff.d.sh.kiyutoku = [ //九州新幹線の特定特急料金・ただし新八代・(鹿)川内間は非適用
    [1,50,870]
];
rff.d.sh.kiyutoku2 = [
    [910127,910138], //博多・久留米間
];
rff.d.sh.kiyutoku3 = [
    [910127,930104,rff.d.sh.kiyu[0][2]], //博多・筑後船小屋間
    [910127,930143,rff.d.sh.kiyu[2][2]], //博多・新八代間
];
rff.d.sh.kaitoku3 = [
    [440101,440131,rff.d.sh.kai[0][2]], //東京・熱海間
    [440101,520102,rff.d.sh.kai[0][2]], //東京・三島間
    [440106,520102,rff.d.sh.kai[0][2]], //品川・三島間
    [610155,910127,rff.d.sh.kai[5][2]], //新大阪・博多間
];
rff.d.sh.osasio = sta.kana["シンカ"].sta.findIndex(e => e[0] == 610155);
rff.d.ou = {omagari:sta.kana["オウウ"].sta.find(e => e[0] == 220847),akita:sta.kana["オウウ"].sta.find(e => e[0] == 220855)};//奥羽本線上で大曲駅と秋田駅のインデックスを記録
rff.f.c.jud = (type) => { //A特急・B特急等
    //typeが0のとき自由席、1のとき指定席
    rtem.i2 = "b4";
    rtem.flag1 = {nikishi:false,hokushi:false};
    rtem.res2 = 0;
    rtem.jiyu = ["",""];
    rtem.kanas = [...Array(data2.length)].map((_,ir) => data2[ir].line);
    rtem.sk = {"タサワ":rtem.kanas.includes("タサワ"),"オウウ":rtem.kanas.includes("オウウ")};
    rtem.d.shinkas = JSON.parse(JSON.stringify(sta.shinka));
    rtem.d.shinkas.push("タサワ","オウウ");
    if (rtem.sk["オウウ"]) {
        rtem.d.ou1 = data2.findIndex(e => e.line == "オウウ");
        rtem.d.ou2 = [sta.kana["オウウ"].sta.find(e => data2[rtem.d.ou1].sta[0][0] == e[0]),sta.kana["オウウ"].sta.find(e => data2[rtem.d.ou1].sta.at(-1)[0] == e[0])];
        if (rtem.d.ou2[0] > rtem.d.ou2[1]) rtem.d.ou2 = [rtem.d.ou2[1],rtem.d.ou2[0]];
    }
    if ((rtem.kanas.filter(e => rtem.d.shinkas.includes(e)).length == rtem.kanas.length) && (!rtem.kanas.includes("オウウ") || (rff.d.ou.omagari <= rtem.d.ou2[0] && rtem.d.ou2[1] <= rff.d.ou.akita))) {
        for (let i = 0;i < sta.shinka.length;i++) rtem.sk[sta.shinka[i]] = rtem.kanas.includes(sta.shinka[i]);
        if (rtem.sk["シンカ"] || rtem.sk["キユシ"]) rtem.res2 = rff.f.c.kai(void 0,type);
        else if (rtem.sk["ニキシ"]) rtem.res2 = rff.f.c.nikishi(void 0,type); //西九州新幹線単独の場合
        else if ((data3.find(e => e[0] == 411008) && data3.find(e => e[0] == 411407)) || (data3.find(e => e[0] == 411231) && data3.find(e => e[0] == 410201)));//大宮駅でV字に折り返す場合（小山駅と熊谷駅両方を通る場合）と、高崎駅でV字に折り返す場合（上毛高原駅と安中榛名駅両方を通る場合）
        else rtem.res2 = rff.f.c.eshinka(void 0,type,true);
        return rtem.res2;
    } else if (temp.i5.includes(6) && temp.i5.length == 1);
    else {
        for (let i = 0;i < data2.length;i++) {
            if (rff.d.blr.all.includes(data2[i].line));
            else if (data2[i].line == "ホクシ" && (i == 0 || i == data2.length - 1)) rtem.flag1.hokushi = true;//北陸新幹線は、幹特在特用に一旦スルー
            else {
                for (let i2 = 0;i2 < rff.d.blr.sec.length;i2++) {
                    if (data2[i].line == rff.d.blr.sec[i2][0]) {
                        rtem.i3 = [sta.kana[data2[i].line].sta.findIndex(e => e[0] == data2[i].sta[0][0]),sta.kana[data2[i].line].sta.findIndex(e => e[0] == data2[i].sta.at(-1)[0])];
                        if (rtem.i3[0] > rtem.i3[1]) rtem.i3 = [rtem.i3[1],rtem.i3[0]];
                        if (rff.d.blr.sec[i2][1][1] <= rtem.i3[0] && rtem.i3[1] <= rff.d.blr.sec[i2][2][1]) continue;
                        else {
                            rtem.i2 = "a4";
                            break;
                        }
                    } else if (rff.d.blr.sec.length - 1 == i2) {
                        rtem.i2 = "a4";
                        break;
                    }
                }
            }
        } 
    }
    console.log(rtem.res2); 
    rtem.i1.donej = false;
    if (rtem.res2 != 0); 
    else if (rtem.i2 == "a4") {
        if (rtem.flag1.hokushi && temp.i5.toString().length == 1 && temp.i5 == 4) {
            if (data2[0].line == "ホクシ" && !data2[0].sta.find(e => e[0] == 540201)) rtem.i_h94 = Math.abs(customround(data2[0].sta[0][4] - data2[0].sta.at(-1)[4]));
            else if (data2.at(-1).line == "ホクシ" && !data2.at(-1).sta.find(e => e[0] == 540201)) rtem.i_h94 = Math.abs(customround(data2.at(-1).sta[0][4] - data2.at(-1).sta.at(-1)[4]));
            rtem.i_h94f = rff.f.c.eshinka(rtem.i_h94,type);
            rtem.jiyu[0] = "新幹線特急券";
            rtem.jiyu[1] = "幹特在特";
            rtem.res2 = Math.floor((rff.f.c.al(customround(temp.c.kiro[0][0] + temp.c.kiro[0][1] - rtem.i_h94),4) - rff.d.sr) * 0.9 / 10) * 10 + Math.floor((rtem.i_h94f - rff.d.sr) * 0.9 / 10) * 10 + rff.d.sr;
            if (((data2[0].sta[0][0] == 611215 || data2[0].sta[0][0] == 610147) && (data2.at(-1).sta.at(-1)[0] == 540202 || data2.at(-1).sta.at(-1)[0] == 541465)) || ((data2.at(-1).sta.at(-1)[0] == 611215 || data2.at(-1).sta.at(-1)[0] == 610147) && (data2[0].sta.at[0][0] == 540202 || data2.at(-1).sta[0][0] == 541465))) rtem.res2 += 200; //近江今津駅・米原駅ー新高岡駅・富山駅発着の場合は、これに200円を加算
        } else {
            rtem.res2 = rff.f.c.al(customround(temp.c.kiro[0][0] + temp.c.kiro[0][1]),temp.i5.charAt(0));
            if (type == 0) rff.f.nyu.jiyu(501);
            else if (type == 1) rff.f.nyu.jiyu(401);
        }
    } else if (rtem.i2 == "b4") {
        if (temp.i5.length == 1) {
            if (temp.i5 == 6 && (data2[0].line == "ニキシ" || data2.at(-1).line == "ニキシ")) {
                if (data2[0].line == "ニキシ") rtem.i249 = Math.abs(customround(data2[0].sta[0][4] - data2[0].sta.at(-1)[4]));
                else rtem.i249 = Math.abs(customround(data2.at(-1).sta[0][4] - data2.at(-1).sta.at(-1)[4]));
                rtem.i249f = rff.f.c.nikishi(rtem.i249,type);
                rtem.i1.dsr2 = rtem.i1.donej ? 0 : rff.d.sr;
                rtem.res2 = Math.floor((rff.f.c.bl(customround(temp.c.kiro[0][0] + temp.c.kiro[0][1] - rtem.i249),6) - rff.d.sr) * 0.9 / 10) * 10 + Math.floor((rtem.i249f - rtem.i1.dsr2) * 0.9 / 10) * 10 + rtem.i1.dsr2;
                rtem.jiyu[1] = "幹特在特";
            } else {
                rtem.res2 = rff.f.c.bl(customround(temp.c.kiro[0][0] + temp.c.kiro[0][1]),temp.i5);
                if (type == 0) rff.f.nyu.jiyu(502);
                else if (type == 1) rff.f.nyu.jiyu(402);
            }
        } else if (temp.i5.includes(6) || temp.i5.includes(4) || temp.i5.includes(1)) {
            rtem.res2 = rff.f.c.al(customround(temp.c.kiro[0][0] + temp.c.kiro[0][1]),0);
            if (type == 0) rff.f.nyu.jiyu(502);
            else if (type == 1) rff.f.nyu.jiyu(402);
        }
    } console.log(rtem.res2);
    if (type == 0) if (!rtem.i1.donej) rtem.res2 -= rff.d.sr;
    else if (type == 1) rtem.res2 = (rtem.res2);
    return rtem.res2;
}
rff.f.c.kai = (kiro,type,ds) => {
    if (kiro == void 0) kiro = customround(temp.c.kiro[0][0] + temp.c.kiro[0][1]);
    rtem.res40 = 0;
    rtem.i1.whkai = data2.findIndex(e => e.line == "シンカ");
    rtem.i1.tokunum = 0;
    if (rtem.i1.whkai != -1) {
        const kiro2 = Math.ceil(customround(Math.abs(data2[rtem.i1.whkai].sta[0][4] - data2[rtem.i1.whkai].sta.at(-1)[4])));
        if (type == 0) {
            if (data2[rtem.i1.whkai].sta.length > 2) rtem.i1.toku2 = rff.d.sh.kaitoku2.findIndex(e => ((e[0] == data2[rtem.i1.whkai].sta[0][0] && e[1] == data2[rtem.i1.whkai].sta.at(-1)[0]) || (e[1] == data2[rtem.i1.whkai].sta[0][0] && e[0] == data2[rtem.i1.whkai].sta.at(-1)[0])));
            if (data2[rtem.i1.whkai].sta.length == 2 || rtem.i1.toku2 != -1) {
                rff.f.nyu.jiyu(3);
                rtem.tokunum++;
                rtem.res40 = rff.d.sh.kaitoku.find(e => e[0] <= kiro2 && kiro2 <= e[1])[2];
            }
        }
        rtem.i1.toku3 = rff.d.sh.kaitoku3.findIndex(e => ((e[0] == data2[rtem.i1.whkai].sta[0][0] && e[1] == data2[rtem.i1.whkai].sta.at(-1)[0]) || (e[1] == data2[rtem.i1.whkai].sta[0][0] && e[0] == data2[rtem.i1.whkai].sta.at(-1)[0])));
        if (rtem.i1.toku3 != -1) {
            rtem.res40 = rff.d.sh.kaitoku3[rtem.i1.toku3][2];
        } else {
            rtem.i1.kaish1 = rff.d.sh.kai.find(e => e[0] <= kiro2 && kiro2 <= e[1]);
            rtem.res40 = rtem.i1.kaish1[2];
            if (rtem.i1.kaish1[0] == 301) {
                let kaistfin = [sta.kana["シンカ"].sta.findIndex(e => e[0] == data2[rtem.i1.whkai].sta[0][0]),sta.kana["シンカ"].sta.findIndex(e => e[0] == data2[rtem.i1.whkai].sta.at(-1)[0])];
                if (kaistfin[0] <= rff.d.sh.osashio && kaistfin[1] <= rff.d.sh.osashio) rtem.res40 += 10; //東海道新幹線単独の場合の301~400キロ帯は4710円であるため
            }
        }
    }
    rtem.i1.whkiyu = data2.findIndex(e => e.line == "キユシ"); //以下九州新幹線用
    rtem.res41 = 0;
    if (rtem.i1.whkiyu != -1) {
        const kiro2 = Math.ceil(customround(Math.abs(data2[rtem.i1.whkiyu].sta[0][4] - data2[rtem.i1.whkiyu].sta.at(-1)[4])));
        if (type == 0) {
            if (data2[rtem.i1.whkiyu].sta.length > 2) rtem.i1.kiyutoku2 = rff.d.sh.kiyutoku2.findIndex(e => ((e[0] == data2[rtem.i1.whkiyu].sta[0][0] && e[1] == data2[rtem.i1.whkiyu].sta.at(-1)[0]) || (e[1] == data2[rtem.i1.whkiyu].sta[0][0] && e[0] == data2[rtem.i1.whkiyu].sta.at(-1)[0])));
            if (data2[rtem.i1.whkiyu].sta.length == 2 || rtem.i1.kiyutoku2 != -1) {
                rff.f.nyu.jiyu(3);
                rtem.tokunum++;
                rtem.res41 = rff.d.sh.kiyutoku.find(e => e[0] <= kiro2 && kiro2 <= e[1])[2];
            }
        }
        rtem.i1.kiyutoku3 = rff.d.sh.kiyutoku3.findIndex(e => ((e[0] == data2[rtem.i1.whkiyu].sta[0][0] && e[1] == data2[rtem.i1.whkiyu].sta.at(-1)[0]) || (e[1] == data2[rtem.i1.whkiyu].sta[0][0] && e[0] == data2[rtem.i1.whkiyu].sta.at(-1)[0])));
        if (rtem.i1.kiyutoku3 != -1) {
            rtem.res41 = rff.d.sh.kiyutoku3[rtem.i1.kiyutoku3][2];
        } else {
            rtem.i1.kiyush1 = rff.d.sh.kiyu.find(e => e[0] <= kiro2 && kiro2 <= e[1]);
            rtem.res41 = rtem.i1.kiyush1[2];
        }
    }
    rtem.res40 += rtem.res41; //東海道山陽新幹線と九州新幹線を合算
    if (type == 0) rtem.res40 -= rff.d.sr * (2 - rtem.i1.tokunum); //自由席用に指定席料金から減算
    else if (rtem.sk["シンカ"] && rtem.sk["キユシ"]) {
        if (data3.findIndex(e => e[0] == 610116) != -1) rtem.res40 -= rff.d.sr; //京都より先を含むなら、指定席料金は２列車分必要
        rtem.res40 = rff.f.season(rtem.res40); //閑散期・繁忙期・再繁忙期判定・加算・減算等（１回目）
    } else rtem.res40 = rff.f.season(rtem.res40); //閑散期・繁忙期・再繁忙期判定・加算・減算等
    return rtem.res40;
}
rff.f.c.eshinka = (kiro,type,ds) => { //北陸新幹線・特急料金、dsはdata2を参照して計算するか
    if (kiro == void 0) kiro = customround(temp.c.kiro[0][0] + temp.c.kiro[0][1]);
    rtem.res94 = 0;
    rtem.res24 = 0;
    rtem.i1.tokyo = false; //東京駅発着かどうかのフラグ
    if (ds == void 0) ds = false;
    if (ds) {
        rtem.i1.myoko = data3.findIndex(e => e[0] == 300201);
        if (data3[0][0] == 440101 || data3.at(-1)[0] == 440101) { 
            kiro -= 3.6; //東京発着の場合上野から計算するため、東京・上野間の営業キロを減じて計算した後、210円加算
            rtem.i1.tokyo = true;
        } if (rtem.sk["カタシ"] || rtem.sk["タサワ"]) {
            if (rtem.sk["トホシ"]) { //東北新幹線に跨って乗車する場合
                if ((rtem.sk["カタシ"] && data3.find(e => e[0] == 231083)) || (rtem.sk["タサワ"] && data3.find(e => (e[0] == 211031 || e[0] == 220318 || e[0] == 220846 || e[0] == 220827)))) return -1; //山形新幹線で白石蔵王駅を通る場合、すなわち(北)福島駅から白石蔵王駅・仙台駅方面に抜ける場合と、秋田新幹線（田沢湖線）でいわて沼宮内駅を通る場合、すなわち盛岡駅からいわて沼宮内駅・八戸駅方面に抜ける場合は通算しないため。飯詰駅、泉外旭川駅、羽後牛島駅を通る場合は奥羽本線の秋田新幹線経由区間ではないため除外しておく。
                else if (type == 0) return -1; //通算は指定席あるいは立席に限るため
                if (data2[0].line == "カタシ" || data2[0].line == "タサワ") rtem.i1.minikiro = customround(Math.abs(data2[0].sta[0][4] - data2[0].sta.at(-1)[4]));
                else if (data2.at(-1).line == "カタシ" || data2.at(-1).line == "タサワ") rtem.i1.minikiro = customround(Math.abs(data2.at(-1).sta[0][4] - data2.at(-1).sta.at(-1)[4]));
                else if (data2.length > 2) {
                    if (data2[0].line == "オウウ" && data2[1].line == "タサワ") rtem.i1.minikiro = customround(Math.abs(data2[0].sta[0][4] - data2[0].sta.at(-1)[4]) + Math.abs(data2[1].sta[0][4] - data2[1].sta.at(-1)[4]));
                    else if (data2.at(-1).line == "オウウ" && data2.at(-2).line == "タサワ") rtem.i1.minikiro = customround(Math.abs(data2.at(-1).sta[0][4] - data2.at(-1).sta.at(-1)[4]) + Math.abs(data2.at(-2).sta[0][4] - data2.at(-2).sta.at(-1)[4]));
                }
                kiro = customround(kiro - rtem.i1.minikiro);
                console.log(kiro);
                rtem.res24 = rff.d.sh.mini.find(e => e[0] <= rtem.i1.minikiro && rtem.i1.minikiro <= e[1])[2];
            } else if (data2.length == 1 || (data2.length == 2 && rtem.sk["タサワ"] && rtem.sk["オウウ"])) { //山形新幹線完結の場合または秋田新幹線完結の場合
                kiro = Math.ceil(kiro);
                rtem.i1.minif = rff.d.sh.mini.find(e => e[0] <= kiro && kiro <= e[1])[2];
                if (type == 0) { //自由席（正確には特定特急券（立席））の場合
                    rff.f.nyu.jiyu(301);
                    return rtem.i1.minif;
                } else { //それ以外の場合
                    rff.f.nyu.jiyu(4);
                    rtem.res94 = rtem.i1.minif + rff.d.sr; 
                }
            }
        };
        kiro = Math.ceil(kiro);
        if (rtem.i1.myoko > 0 && rtem.i1.myoko < data3.length - 1) { //上越妙高を跨ぐ場合。上越妙高発着の場合を除く。
            if (kiro <= 100) {
                rtem.res94 = 3070;
            } else if (kiro <= 200) {
                if ((data2[0].sta[0][0] == 511806 || data2[0].sta[0][0] == 541482) || (data2.at(-1).sta.at(-1)[0] == 511806 || data2.at(-1).sta.at(-1)[0] == 541482)) rtem.res94 = 3830; //飯山駅または糸魚川駅発着の場合
                else rtem.res94 = 4160;
            } else if (kiro <= 300) {
                if ((data2[0].sta[0][0] == 511806 || data2[0].sta[0][0] == 541482) || (data2.at(-1).sta.at(-1)[0] == 511806 || data2.at(-1).sta.at(-1)[0] == 541482)) rtem.res94 = 4730; //飯山駅または糸魚川駅発着の場合
                else if ((data2[0].sta[0][0] == 511114 || data2[0].sta[0][0] == 540201) || (data2.at(-1).sta.at(-1)[0] == 511114 || data2.at(-1).sta.at(-1)[0] == 540201)) rtem.res94 = 5050; //長野駅または黒部宇奈月温泉駅発着の場合
                else rtem.res94 = 5390;
            } else if (kiro <= 400) {
                if (data2[0].sta[0][0] == 541482 || data2.at(-1).sta.at(-1)[0] == 541482) rtem.res94 = 5490; //糸魚川駅発着の場合
                else if ((data2[0].sta[0][0] == 511606 && data2[0].sta.at(-1)[0] == 541413) || (data2[0].sta[0][0] == 541413 && data2[0].sta.at(-1)[0] == 511606)) rtem.res94 = 5550; //飯山駅・敦賀駅相互発着の場合
                else if ((data2[0].sta[0][0] == 511114 || data2[0].sta[0][0] == 540201) || (data2.at(-1).sta.at(-1)[0] == 511114 || data2.at(-1).sta.at(-1)[0] == 540201)) rtem.res94 = 5820; //長野駅または黒部宇奈月温泉駅発着の場合
                else rtem.res94 = 6150;
            } else if (kiro <= 500) rtem.res94 = 6690;
            else if (kiro <= 600) rtem.res94 = 7020;
        }
    } else kiro = Math.ceil(kiro); 
    if (rtem.res94 == 0) {
        for (let i = 0;i < rff.d.sh.eshtosec2.length;i++) {
            if ((data3[0][0] == rff.d.sh.eshtosec2[i][0] && data3.at(-1)[0] == rff.d.sh.eshtosec2[i][1]) || (data3[0][0] == rff.d.sh.eshtosec2[i][1] && data3.at(-1)[0] == rff.d.sh.eshtosec2[i][0])) {
                if (type == 0) return rtem.res94 + rff.d.sh.eshtosec2[i][2] - rff.d.sr; //自由席530円引き
                return rtem.res24 + rff.d.sh.eshtosec2[i][2];
            }
        }
        if (type == 0) {
            rtem.i1.eshtosec = false;
            for (let i = 0;i < rff.d.sh.eshtosec.length;i++) {
                if ((data3[0][0] == rff.d.sh.eshtosec[i][0] && data3.at(-1)[0] == rff.d.sh.eshtosec[i][1]) || (data3[0][0] == rff.d.sh.eshtosec[i][1] && data3.at(-1)[0] == rff.d.sh.eshtosec[i][0])) {
                    if (rff.d.sh.eshtosec[i][2] == "") { //料金が設定区間に直接紐づけられていない場合は特定特急料金計算へ移動
                        rtem.i1.eshtosec = true;
                        rff.f.nyu.jiyu(3);
                        break;
                    } else return rff.d.sh.eshtosec[i][2]; //紐づいている場合はそのまま返却
                }
            }
        } else {
            for (let i = 0;i < rff.d.sh.eshtosec3.length;i++) {
                if ((data3[0][0] == rff.d.sh.eshtosec3[i][0] && data3.at(-1)[0] == rff.d.sh.eshtosec3[i][1]) || (data3[0][0] == rff.d.sh.eshtosec3[i][1] && data3.at(-1)[0] == rff.d.sh.eshtosec3[i][0])) {
                    return rtem.res24 + rff.d.sh.eshtosec3[i][2];
                }
            }
        }
        if (type == 0 && (data3.length == 2 || rtem.i1.eshtosec)) {
            for (let i = 0;i < rff.d.sh.eshinka.length;i++) {
                if (rff.d.sh.eshinka[i][0] <= kiro && kiro <= rff.d.sh.eshinka[i][1]) {
                    rtem.res94 = rff.d.sh.eshinka[i][2];
                    rff.f.nyu.jiyu(3);
                    break;
                }
            }
        } else {
            for (let i = 0;i < rff.d.sh.eshinka.length;i++) {
                if (rff.d.sh.eshinka[i][0] <= kiro && kiro <= rff.d.sh.eshinka[i][1]) {
                    rtem.res94 = rtem.res24 + rff.d.sh.eshinka[i][2];
                    break;
                }
            } 
        }
    } 
    if (rtem.i1.tokyo) rtem.res94 += 210; //東京発着の場合上野から計算するため、東京・上野間の営業キロを減じて計算した後、210円加算
    if (type == 0) rtem.res94 -= rff.d.sr; //自由席用に指定席料金から減算
    rtem.res94 = rff.f.season(rtem.res94);
    return rtem.res94;
};
rff.f.season = (v) => {
    return  customround(v + rff.d.season[rff.d.nowseason][1]);
}
rff.f.c.nikishi = (kiro,type) => { //西九州新幹線・特急料金
    rtem.i1.whni = data2.findIndex(e => e.line == "ニキシ");
    if (type == 0 && (data2[rtem.i1.whni].sta.length == 2 || ((data2[rtem.i1.whni].sta[0][0] == 912813 || data2[rtem.i1.whni].sta.at(-1)[0] == 912302) || (data2[rtem.i1.whni].sta[0][0] == 912302 || data2[rtem.i1.whni].sta.at(-1)[0] == 912813)))) {
        rtem.i1.donej = true;
        return 870; //西九州新幹線の特定特急料金
    } else if (kiro == void 0) kiro = customround(Math.abs(data2[rtem.i1.whni].sta[0][4] - data2[rtem.i1.whni].sta.at(-1)[4]));
    kiro = Math.ceil(kiro);
    if (kiro <= 50) return 1790;
    else if (kiro >= 51) return 2290;
};
rff.f.c.bl = (kiro,com) => { //B特急料金計算
    rtem.resbl = 0;
    rtem.i1.kiro = Math.ceil(kiro);
    com = com.toString();
    if (com == void 0) com = 0;
    for (let i = 0;i < rff.d.bl[com].length;i++) {
        if (rff.d.bl[com][i][0] <= rtem.i1.kiro && rtem.i1.kiro <= rff.d.bl[com][i][1]) {
            rtem.resbl = rff.d.bl[com][i][2];
            break;
        }
    } 
    console.log(rtem.resbl);
    return rtem.resbl;
}
rff.f.c.al = (kiro,com) => { //A特急料金計算
    rtem.res = 0;
    rtem.i1.kiro = Math.ceil(kiro);
    if (com == void 0) com = 0;
    if (com == 1) { //JR北海道の場合
        for (let i = 0;i < rff.d.al1.length;i++) {
            if (rff.d.al1[i][0] <= rtem.i1.kiro && rtem.i1.kiro <= rff.d.al1[i][1]) {
                rtem.res = rff.d.al1[i][2];
                break;
            }
        }
    }
    if (rtem.res == 0) { //JR北海道で他のA特急料金と同額になる場合を含むため
        for (let i = 0;i < rff.d.al.length;i++) {
            if (rff.d.al[i][0] <= rtem.i1.kiro && rtem.i1.kiro <= rff.d.al[i][1]) {
                rtem.res = rff.d.al[i][2];
                break;
            }
        }
    }
    console.log(rtem.res);
    return rtem.res;
};
rff.f.nyu.jiyu = (v) => {
    if (v == 1) rtem.jiyu[0] = "新幹線特急券";
    else if (v == 3) {
        rtem.jiyu[0] = "新幹線特定特急券";
    } else if (v == 301) {
        rtem.jiyu[0] = "特定特急券（立席）";
    } else if (v == 4) rtem.jiyu[0] = "特急券";
    else if (v == 401) rtem.jiyu[0] = "A特急券";
    else if (v == 402) rtem.jiyu[0] = "B特急券"
    else if (v == 501) rtem.jiyu[0] = "A自由席特急券";
    else if (v == 502) rtem.jiyu[0] = "B自由席特急券";
} 

rff.dom.open = () => {
    document.getElementById("rffbox").style.display = "inline";
};
rff.dom.close = () => {
    document.getElementById("rffbox").style.display = "none";
};
rff.dom.jud = (v) => {
    const r_taneki = [...taneki];
    taneki = [true,true];
    calc();
    taneki = r_taneki;
    document.getElementsByClassName("rffdom")[v].innerHTML = rff.f.c.jud(v);
};
function a (type) { //開発用・終わったら削除忘れずに
    return rff.f.c.jud(type);
}