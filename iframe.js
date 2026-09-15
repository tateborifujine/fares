let iframe = {f:{box:{}},src:new Array(2)};
iframe.f.box.open = () => {
    document.getElementById("iframebox").style.display = "inline";
    if (document.getElementById("iframemain").innerHTML == "") document.getElementById("iframemain").innerHTML = `<iframe src='${iframe.src[1]}' style='width:99%;height:99%;'></iframe>`;
};iframe.f.box.close = () => {
    document.getElementById("iframebox").style.display = "none";
};iframe.f.set = (v,v2,subject,tf) => { //vの中身は遷移用url、v2は表示用url、この関数はurl設定,subjectは項目名
    iframe.src = [v,v2];
    document.getElementById("iframelink").href = iframe.src[0];
    if (document.getElementById("iframemain").innerHTML == "");
    else document.getElementById("iframemain").getElementsByTagName("iframe")[0].src = iframe.src[1];
    document.getElementById("iframe_komoku").innerHTML = subject;
    if (tf == true) iframe.f.box.open();
};//以下デフォルト設定
window.addEventListener("load",function(){
    iframe.f.set("./data.html","./data.html?temp=none","内部データ閲覧");
});
//以下連絡運輸範囲書き出し出力用コード
let rr = {f:{dom:{},dom2:{}},t:{}};
rr.o = ["allow","com","com2","line","line2","city","sta","asta"];
rr.com = ["","北海道","東日本","東海","西日本","四国","九州"];
rr.f.main = (v2) => {
    try {
    //console.log(v2);
    v2 = v2.toString();
    if (!v2 in sta.skana2) return "社線が見つかりませんでした。";
    let v = (sta.skana2[v2]?.code ?? v2).toString();
    rr.t.s = [];
    let rk22 = ["r"];
    if (typeof rr.biko[v] == "object" && typeof rr.biko[v].s == "object") {
        rk22 = Object.keys(rr.biko[v].s);
    } else if (typeof sta.skana[v].tr == "object") rk22.push("tr");
    for (let i4 = 0;i4 < rk22.length;i4++) {
    let rk2 = rk22[i4];
    if (rk2 in sta.skana[v] == false) {
        if (v == "2200") return "連絡運輸範囲に制限はありません。";
        else return "連絡運輸範囲設定が見つかりません。";
    }
    if (typeof rr.biko[v] == "object" && typeof rr.biko[v].s == "object") {
        if (typeof rr.biko[v].s[rk2] == "string") rr.t.s.push(`<span>＜${rr.biko[v].s[rk2]}＞</span>`);
    } else if (i4 == 0 && rk22.length > 0 && rk2 == "r" && rk22[i4 + 1] == "tr") rr.t.s.push(`<span>＜通常の連絡運輸の場合＞</span>`);
    else if (i4 == 1 && rk2 == "tr" && rk22[0] == "r") rr.t.s.push(`<span>＜通過連絡運輸の場合＞</span>`);
    let rks2 = Object.keys(sta.skana[v][rk2]);
    for (let i3 = 0;i3 < rks2.length;i3++) {
        //let rks = sta.skana2[v].sta.toString();
        let rks = rks2[i3];
        rr.t.s.push(`＊<span class="rrspan">${auto.f.stc(rks)[1]}接続</span>＊（${sta.allskana2.find(e => sta.skana2?.[e]?.code == v && sta.skana2?.[e]?.sta == rks) ?? ""}）`);
        let rk = Object.keys(sta.skana[v][rk2][rks]);
        rk.sort((x, y) => rr.o.indexOf(x) - rr.o.indexOf(y));
        console.log(rk)
    for (let i = 0;i < rk.length;i++) {
        if (rk[i] == "rc" || rk[i] == "trc") rk.splice(i,1);
        let rs = sta.skana[v][rk2][rks][rk[i]];
        //console.log(rs)
        if (rk[i] == "allow") {
            if (rs == 2) rr.t.s.push("取扱制限なし");
            else if (rs == 0) rr.t.s.push("取扱不可");
        } else if (rk[i] == "com") {
            rr.t.s.push(`経由可能会社線：${[...new Array(rs.length)].map((_,ir) => rr.com[rs[ir]]).join("、")}`);
        } else if (rk[i] == "com2") {
            rr.t.s.push(`${[...new Array(rs.length)].map((_,ir) => rr.com[rs[ir]]).join("、")}会社線各駅`);
        }
        else if (rk[i] == "line") {
            let rk3 = Object.keys(rs);
            rr.t.s2 = [];
            for (let i2 = 0;i2 < rk3.length;i2++) {
                //console.log(rk3[i2])
                let rk4 = [...new Array(rs[rk3[i2]].length)].map((_,ir) => sta.kana[rk3[i2]].sta.find(e => e[0] == rs[rk3[i2]][ir][0])[1] + "-" + sta.kana[rk3[i2]].sta.find(e => e[0] == rs[rk3[i2]][ir][1])[1])
                rr.t.s2.push(`${sta.kana[rk3[i2]].name}：${rk4.join("、")}間各駅`)
            } rr.t.s.push(`${rr.t.s2.join("<br>")}`)
        } else if (rk[i] == "line2") {
            rr.t.s.push([...new Array(rs.length)].map((_,ir) => (rs[ir].toString().typec() == 2) ? sta.skana[rs[ir]].name : sta.kana[rs[ir]].name).join("、") + "：全線");
        } else if (rk[i] == "sta") {
            rr.t.s.push(`${[...new Array(rs.length)].map((_,ir) => auto.f.stc(rs[ir])[1]).join("、")}${(rs.length == 1) ? "" : "の各駅"}`);
        } else if (rk[i] == "city") {
            rr.t.s.push([...new Array(rs.length)].map((_,ir) => temp.sf2[rs[ir]][1]).join("、") + "：各駅");;
        } else if (rk[i] == "asta") {
            rr.t.s.push(`ただし、${[...new Array(rs.length)].map((_,ir) => sta.skana[v].sta.find(e => e[0] == rs[ir])[1]).join("、")}の各駅を発または着となる場合は、JR6社が対象`)
        } if (i == 0 && rr.t.s.length > 0) rr.t.s[rr.t.s.length - 1] = `<div style="margin-left:20px;">${rr.t.s.at(-1)}`;
    } 
        if (typeof rr.biko[v] === "object" && typeof rr.biko[v][rks] === "object" && typeof rr.biko[v][rks][rk2] == "string") rr.t.s.push("備考：" + rr.biko[v][rks][rk2]);
        rr.t.s.push("</div>");
        
    } //console.log(rr.t.s.join("<br>"));
        if (typeof rr.biko[v] === "object" && typeof rr.biko[v][rk2] === "string") {
            rr.t.s.push(`備考：${rr.biko[v][rk2]}`);
        }
        }
        if (typeof rr.biko[v] === "object" && typeof rr.biko[v].fin === "string") {
            rr.t.s.push(`備考：${rr.biko[v].fin}`);
        }
    rr.t.s.unshift(`ふぁれす登録社線コード：${v}`);   
    return rr.t.s.join("<br>");}
    catch (e) {
        console.error(e);
        return "エラーが発生したため、表示できません。申し訳ございません。";
    }
};rr.f.dom.write = (v) => {
    document.getElementById("rrview").innerHTML = rr.f.main(v);
}
rr.f.dom.open = () => {
    document.getElementById("rrbox").style.display = "inline";
};rr.f.dom.close = () => {
    document.getElementById("rrbox").style.display = "none";
};
rr.f.dom2.open = () => {
    document.getElementById("rrbox2").style.display = "inline";
};rr.f.dom2.close = () => {
    document.getElementById("rrbox2").style.display = "none";
};
rr.biko = {
    "2501":{
        "s":{
            "r":"盛岡-渋民間各駅間を発または着とする場合",
            "r0":"好摩-いわて沼宮内間各駅を発または着とする場合",
            "r1":"御堂-目時間各駅を発または着とする場合",
            //"r2":"",
            //"r3":"",
            "r4":"盛岡/好摩・目時・青森間を通過する場合",
            "r5":"盛岡/好摩・目時・八戸/野辺地間を通過する場合",
        },
        "fin":"盛岡・好摩間の通過連絡範囲に、制限はありません。<br>また、青い森鉄道線との、JR線と跨がらない連絡乗車券においては、青い森鉄道線陸奥市川以北の各駅を発または着駅とする場合は発売できません。（なお、IGR線側は各駅が対象です。）"
        //"r":"通過連絡運輸の範囲は、別に定められています。"
    },"2504":{
        "s":{
            "r":"青い森鉄道線とJR線のみを経由し、かつ通過連絡運輸でない場合",
            "r2":"八戸・目時間を通過して、IGR線各駅を発または着駅とする場合",
            "r3":"青森・目時間を通過して、IGR線盛岡を発または着駅とする場合",
            "r4":"盛岡/好摩・目時・青森間を通過する場合",
            "r5":"盛岡/好摩・目時・八戸/野辺地間を通過する場合",
            "r6":"八戸・青森間を通過する場合"
        },"211056":{
            "r":"社線側連絡運輸範囲は、八戸・青森間各駅です。北高岩以南の各駅を発または着駅とする連絡乗車券は発売できません。"
        },"211066":{
            "r":"社線側連絡運輸範囲は、八戸・筒井間各駅です。北高岩以南の各駅を発または着駅とする連絡乗車券は発売できません。"
        },
        "fin":"八戸・野辺地間と、野辺地・青森間の通過連絡範囲に、制限はありません。<br>また、IGR線との、JR線と跨がらない連絡乗車券においては、陸奥市川以北の各駅を発または着駅する場合は発売できません。（なお、IGR線側は各駅が対象です。）"
        //"r":"通過連絡運輸の範囲は、別に定められています。"
    },"2581":{
        "s":{
            "r":"会津鉄道会津線の各駅を発または着駅とする場合",
            "r2":"野岩鉄道​会津鬼怒川線の各駅（会津高原尾瀬口駅を除く。）を発または着駅とする場合",
            "r3":"4線連絡となる場合"
        },
        "230902":{
            "r2":"マルス端末で発売する場合、金額入力操作による発売となります。",
            "r3":"東武線側の発着駅は、浅草、とうきょうスカイツリー、北千住、春日部、栃木、新鹿沼、下今市、東武日光、鬼怒川温泉の各駅のみに限ります。また、発売箇所も、会津若松駅みどりの窓口（自駅発に限る。）と東武線側の発着駅とできる各駅の出札窓口に限ります。なお、学割と障害者割引は補充券による発売となります。"
        }
    },"2590":{
        "fin":"通過連絡運輸の設定はありません。（2017年に廃止されました。）"
    },"3711":{
        "301112":{
            "tr":"えちトキ線へのほくほく線通過連絡運輸は、越後湯沢-塩沢間各駅から、ほくほく線六日町・犀潟間を経由して、直江津接続でえちトキ線各駅までの経路（逆を含む。）に限ります。"
        }
    },"4586":{
        "441005":{
            "r":"社線側連絡運輸範囲は、空港第２ビルと成田空港駅の２駅のみとなっています。（2026/03/14以降、大幅に社線旅客運賃設定駅が削減されています。）"
        }
    },"4617":{
        "441104":{
            "r":"社線側連絡運輸範囲は、北綾瀬駅のみです。"
        },"tr":"通過連絡運輸は、西日暮里・北千住間のみの設定です。"
    },"4690":{
        "440539":{
            "r":"社線側連絡運輸範囲は、上大月、田野倉、禾生、都留市、谷村町、都留文科大学前、東桂、三つ峠、下吉田、月江寺、富士山、富士急ハイランド、河口湖の各駅です。赤坂、十日市場、寿、葭池温泉前の各駅を発着とする連絡乗車券は発売できません。"
        }
    },
    "4719":{
        "441005":{
            "r":"社線側連絡運輸範囲は、空港第２ビルと成田空港駅の２駅のみです。"
        }
    },
    "4559":{
        "r":"通過連絡運輸の設定はありません。",
        "441103":{
            "r":"社線側連絡運輸範囲は、大師前と小菅・東武動物公園間各駅です。"
        },"411005":{
            "r":"社線側連絡運輸範囲は、栃木以北の各駅（宇都宮線、鬼怒川線を含む。）です。"
        }
    },"5510":{
        "s":{
            "r":"新島々発着の場合",
            "r2":"波田発着の場合"
        },
        "fin":"社線側連絡運輸範囲は、波田、新島々の各駅のみです。"
    },"5518":{
        "520121":{
            "r":"ふぁれすに収容されていない駅（代官町など）は、社線側連絡運輸範囲外です。また、現在川根温泉笹間渡・千頭間が不通のため、同区間を通過する乗車券の発売は連絡乗車券を含め中止されています。"
        }
    },
    "5555":{ //明知鉄道
        "530505":{
            "r":"社線側連絡運輸範囲は、岩村、明智の各駅のみです。"
        }
    },
    "5561":{
       "r":"通過連絡運輸は、通常の連絡運輸範囲と同じ範囲に設定されています。"
    },"5566":{
       "r":"通過連絡運輸は、通常の連絡運輸範囲と同じ範囲に設定されています。また、しなの鉄道線各駅から北しなの線各駅（逆を含む。）への、篠ノ井・長野間を経由した連絡運輸の設定があります。"
    },"5570":{
       "r":"長野・豊野間の通過連絡運輸は、通常の連絡運輸範囲と同じ範囲に設定されています。豊野・妙高高原間に通過連絡運輸の設定はありません。長野・妙高高原間の通過連絡運輸は、長野接続の連絡運輸範囲の各駅から、えちトキ線妙高高原・直江津間を経由して、信越線黒井-長野間各駅までの区間（逆を含む。）に限ります。また、しなの鉄道線各駅から北しなの線各駅（逆を含む。）への、篠ノ井・長野間を経由した連絡運輸の設定があります。"
    },
    "5572":{
        "301110":{
            "r":"越後湯沢-塩沢間各駅から、北越急行六日町-犀潟間を経由してえちトキ線各駅への3社連絡の設定があります。",
            "tr":"妙高高原-直江津間の通過連絡運輸は、松本-長野間各駅から、北しなの線、えちトキ線妙高高原・直江津間を経由して、信越線黒井-長野間各駅までの区間（逆を含む。）に限ります。"
        },
        "300201":{
            "r":"社線側連絡運輸範囲は、妙高はねうまライン（接続駅の上越妙高を除く。）各駅です。日本海ひすいライン（えちご押上ひすい海岸-市振間。直江津を除く。）各駅は含まれません。"
        },
        "tr":"通過連絡運輸は、上越妙高・直江津間と直江津・糸魚川間にのみ設定されており、上越妙高・糸魚川間には設定されていません。"
    },"5559":{
        "s":{
            "r":"岡崎接続で高蔵寺を、高蔵寺接続で岡崎を発着とする場合",
            "tr":"通過連絡運輸の場合"
        }
    },"5578":{
        "541465":{
            "r":"社線側連絡運輸範囲は、上市、宇奈月温泉、立山の各駅のみです。"
        }
    },"5579":{
        "540201":{
            "r":"社線側連絡運輸範囲は、宇奈月温泉、上市の各駅のみです。富山接続と異なり、黒部宇奈月温泉接続では立山発または着となる連絡乗車券は発売できません。"
        }
    },
    "6067":{
        "r":"通過連絡運輸の設定はありません。"
    },"6185":{
        "r":"IRいしかわ鉄道線各駅、または七尾線/津幡-徳田間各駅を発または着駅とする場合を除けば、IR線津幡・金沢間を通過する連絡運輸が設定されています。津幡・倶利伽羅・高岡/富山間等を通過する経路は発売できません。<br>また、七尾を発または着とする連絡乗車券は発売できないほか、接続駅は和倉温泉に限り、七尾接続の連絡乗車券は発売できないことに留意してください。<br>なお、社線側連絡運輸範囲は、田鶴浜、笠師保、能登中島、西岸、能登鹿島、穴水の各駅です。"
    },
    "6201":{
        "s":{
            "r":"通常の連絡運輸の場合",
            "r2":"津幡発また着の場合",
            "r4":"津幡・倶利伽羅間の通過連絡運輸の場合（倶利伽羅・高岡/富山間を併せて通過する場合を含む。）"
        },"fin":"あいの風とやま鉄道線線富山または高岡・倶利伽羅間を通過して、IR線各駅までの連絡運輸範囲（富山接続及び高岡接続）は、富山接続が西富山-猪谷間各駅、高岡接続が城端線または氷見線各駅です。<br>また、あいの風とやま鉄道線またはのと鉄道へと跨る連絡運輸（通過となるものを含む。）については、当該社線線の連絡運輸範囲を併せて参照してください。"
        //"r":"通過連絡運輸の範囲は、別に定められています。"
    },"6204":{
        "s":{
            "r":"通常の連絡運輸の場合",
            "r3":"富山・高岡間の通過連絡運輸の場合",
            "r4":"津幡・倶利伽羅・高岡または富山間の通過連絡運輸の場合"
        },
        "fin":"七尾線各駅から、IR線津幡・倶利伽羅を経由してあいの風とやま鉄道線各駅まで（逆を含む。）の連絡運輸の設定があります。また、あいの風とやま鉄道線線富山または高岡・倶利伽羅間を通過して、IR線各駅までの通過連絡運輸範囲（富山接続及び高岡接続）は、通常の連絡運輸の場合と同じです。<br>また、IRいしかわ鉄道線へ跨る連絡運輸については、IRいしかわ鉄道線の連絡運輸範囲を併せて参照してください（ただし、津幡接続の場合は、津幡方の連絡運輸範囲に制限はありません。なお、のと鉄道七尾線はこの限りではありません。）。"
    },
    "6208":{
        "tr":"通過連絡運輸の設定は、福井・越前花堂間のみです。"
    },"6532":{
        "r":"近鉄線の通過連絡運輸の設定は、松阪・鶴橋間のみです。"
    },"6532":{
        "532003":{
            "r":"社線側連絡運輸範囲は、伊勢中川、久居、南が丘、津新町、江戸橋、高田本山、豊津上野、磯山、鼓ケ浦、白子の各駅です。"
        }
    },"6543":{
        "532204":{
            "r":"社線側連絡運輸範囲は、明星、明野、宮町の各駅のみです。"
        }
    },
    "6600":{
        "622076":{
            "r":"社線側連絡運輸範囲は、紀伊御坊、西御坊の各駅のみです。"
        }
    },
    "6622":{
        "r":"通過連絡運輸の設定はありません。"
    },
    "6542":{
        "r":"通過連絡運輸の設定は、松阪・鶴橋間のみです。"
    },
    "9520":{
        "912308":{
            "r":"社線側連絡運輸範囲は、三枚橋-伊万里間各駅です。"
        },"911835":{
            "r":"社線側連絡運輸範囲は、有田-たびら平戸口間各駅です。"
        },
        "r":"通過連絡運輸範囲は、通常の連絡運輸範囲と同じ範囲に設定されています。また、有田・伊万里間のみの設定です。"
    },
    "9522":{
        "r":"たびら平戸口を跨ぐ連絡乗車券は発売できません。また、通過連絡運輸は有田・伊万里間のみの設定です。"
    },"9620":{
        "930128":{
            "r":"社線側連絡運輸範囲は、肥後高田-出水間各駅と、川内です。"
        },"940114":{
            "r":"社線側連絡運輸範囲は、八代と、出水-上川内間各駅です。"
        }
    },"9581":{
        "913210":{
            "r":"社線側連絡運輸範囲は、平成筑豊鉄道の全駅です。"
        },"912908":{
            "r":"社線側連絡運輸範囲は、伊田線と田川線の各駅です。糸田線（金田を除く。）は含まれません。"
        },"912909":{
            "r":"社線側連絡運輸範囲は、伊田線直方-金田間各駅と、糸田線各駅です。"
        },"910508":{
            "r":"社線側連絡運輸範囲は、伊田線と田川線の各駅です。糸田線（金田を除く。）は含まれません。"
        },
        "fin":"通過連絡運輸の設定はありません。"
    }
};
window.addEventListener("load",function(){
    rr.t.se = [];
    for (let i = 0;i < sta.allskana.length;i++) {
        rr.t.se.push(`<option value=${sta.allskana[i]}>${sta.skana[sta.allskana[i]].name}</option>`);
    } document.getElementById("rrselect").innerHTML += rr.t.se.join("");
    //rr.f.main("6542");
})
