let hosei = { f: { dom: {text:{}} }, t: {}, d: [] ,tf:false};//tfがtrueなら補正禁止編集ON、falseならOFF
hosei.f.dom.cre = () => {
    hosei.tf = true;
    hosei.t.i1 = document.getElementsByClassName("selectline")[0].getElementsByClassName("line");
    document.getElementsByClassName("hosei_box")[0].innerHTML = "";
    for (let i = 0; i < data2.length; i++) {
        hosei.t.i2 = document.createElement("div");
        hosei.t.i2.className = "hosei_checkdiv";
        hosei.t.i2.style.top = parseFloat(hosei.t.i1[i].style.top) - 5 + "px";
        document.getElementsByClassName("hosei_box")[0].appendChild(hosei.t.i2);
        hosei.t.i2 = document.createElement("input");
        hosei.t.i2.type = "checkbox";
        hosei.t.i2.className = "hosei_input";
        hosei.t.i2.setAttribute("onchange", `hosei.f.ref(${i})`);
        if ("hosei" in data2[i]) {
            hosei.t.i2.checked = true;
            document.getElementsByClassName("selectline")[0].getElementsByClassName("line2")[i].style.backgroundColor = "pink";
        } else document.getElementsByClassName("selectline")[0].getElementsByClassName("line2")[i].style.backgroundColor = "initial";
        document.getElementsByClassName("hosei_box")[0].getElementsByClassName("hosei_checkdiv")[document.getElementsByClassName("hosei_box")[0].getElementsByClassName("hosei_checkdiv").length - 1].appendChild(hosei.t.i2);
    } document.getElementsByClassName("hosei_box")[0].style.display = "inline";
    document.getElementById("sonota_hosei_checkbox").checked = true;
}; hosei.f.dom.delete = () => {
    hosei.tf = false;
    document.getElementsByClassName("hosei_box")[0].style.display = "none";
    document.getElementsByClassName("hosei_box")[0].innerHTML = "";
    document.getElementById("sonota_hosei_checkbox").checked = false;
}; hosei.f.dom.change = (v) => {
    console.log(v);
    if (v === true) hosei.tf = false;
    else if (v === false) hosei.tf = true;
    if (hosei.tf) hosei.f.dom.delete();
    else hosei.f.dom.cre();
}; hosei.f.dom.update = () => {
    if (hosei.tf) hosei.f.dom.cre();
    if (data2.length > 0 && "hosei" in data2[0] == false) document.getElementsByClassName("selectline")[0].getElementsByClassName("line2")[0].style.backgroundColor = "initial";
}; hosei.f.save = () => {
    hosei.d = [];
    for (let i = 0; i < data2.length; i++) {
        if ("hosei" in data2[i]) hosei.d.push(true);
        else hosei.d.push(false);
    }
}; hosei.f.load = () => {
    try {
        for (let i = 0;i < hosei.d.length;i++) {
            if (hosei.d[i] == true) {
                document.getElementsByClassName("hosei_box")[0].getElementsByClassName("hosei_input")[i].checked = true;
                document.getElementsByClassName("selectline")[0].getElementsByClassName("line2")[i].style.backgroundColor = "pink";
                data2[i].hosei = true;
            }
        }
    } catch (e) {
        console.error(e);
    }
}; hosei.f.ref = (v) => {
    if (document.getElementsByClassName("hosei_input")[v].checked) {
        data2[v].hosei = true;
        document.getElementsByClassName("selectline")[0].getElementsByClassName("line2")[v].style.backgroundColor = "pink";
    } else {
        delete data2[v].hosei;
        document.getElementsByClassName("selectline")[0].getElementsByClassName("line2")[v].style.backgroundColor = "initial";
    }
}; hosei.f.dom.text.open = () => {
    document.getElementById("sonota_hosei_text").style.display = "inline";
    document.getElementById("sonota_hosei_btn").value = "非表示にする";
}; hosei.f.dom.text.close = () => {
    document.getElementById("sonota_hosei_text").style.display = "none";
    document.getElementById("sonota_hosei_btn").value = "表示にする";
}; hosei.f.dom.text.change = () => {
    if (document.getElementById("sonota_hosei_text").style.display == "inline") hosei.f.dom.text.close();
    else hosei.f.dom.text.open();
}
window.addEventListener('load', function () {
    hosei.t.i2 = document.createElement("div");
    hosei.t.i2.className = "hosei_box";
    document.body.appendChild(hosei.t.i2);
})