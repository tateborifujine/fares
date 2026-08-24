let gakunyu = {f:{dom:{op:{}},tf:{},param:{}},t:{},tf:false,d:""};
gakunyu.f.dom.cre = () => {
    gakunyu.t.i1 = document.createElement("div");
    gakunyu.t.i1.className = "gakunyu";
    gakunyu.t.i1.style.bottom = "5px";
    gakunyu.t.i1.style.display = "none";
    document.getElementsByClassName("selectline2")[0].appendChild(gakunyu.t.i1);
    document.getElementsByClassName("gakunyu")[0].innerHTML = `
    <div class="info_dis" onclick="gakunyu.f.dom.close()" style="width:34px;height:34px;top:-0.5px;">
        <div style="position:absolute;transform:scale(0.9)">
            <div class="batsumark naname1"></div>
            <div class="batsumark naname2"></div>
        </div>
    </div>
    <div>未登録社線・金額入力</div>
    <div>
        <label><input type="checkbox" class="gakunyu_tf" onchange="gakunyu.f.tf.change(this.checked)">本機能を有効にする</label><br>
        <label>営業㌔:<input id="gakunyu_kiro" type="number">㌔</label><br>
        <label>金額:<input id="gakunyu_fare" type="number">円</label><br>
        <label>着駅名称:<input id="gakunyu_destname"  type="text"></label><br>
        <label>着駅事務管:<input id="gakunyu_destcode" type="text"></label>
        <div style="font-size:80%;">※着駅名称・事務管は省略可。<br>※小児や割引の場合、小児若しくは割引後の運賃を入力してください。</div>
    </div>`;
};gakunyu.f.dom.open = () => {
    if (document.getElementsByClassName("gakunyu").length == 0) gakunyu.f.dom.cre();
    document.getElementsByClassName("gakunyu")[0].style.display = "inline";
    document.getElementById("gakunyu_checkbox2").checked = true;
};gakunyu.f.dom.close = () => {
    document.getElementsByClassName("gakunyu")[0].style.display = "none";
    document.getElementById("gakunyu_checkbox2").checked = false;
};gakunyu.f.dom.opcl = (v) => {
    if (v == true || document.getElementsByClassName("gakunyu")[0].style.display == "none") gakunyu.f.dom.open();
    else gakunyu.f.dom.close();
}
gakunyu.f.tf.change = (v) => {
    if (v == void 0) {
        if (document.getElementsByClassName("gakunyu_tf")[0].checked == true) v = false;
        else v = true;
    } gakunyu.tf = v;
};gakunyu.f.d = () => {
    gakunyu.d = [document.getElementById("gakunyu_kiro").value - 0,document.getElementById("gakunyu_fare").value - 0,document.getElementById("gakunyu_destname").value,document.getElementById("gakunyu_destcode").value];
};gakunyu.f.dom.relocate = () => {
    document.getElementsByClassName("gakunyu")[0].style.transform = "translate(0px,0px)";
};gakunyu.f.param.cre = () => {
    if (gakunyu.tf == false) return "";
    if (gakunyu.d == "") gakunyu.f.d();
    return gakunyu.d.join("_");
}
window.addEventListener("load",function() {
    gakunyu.f.dom.cre();
    gakunyu.f.dom.op.x = gakunyu.f.dom.op.y = 0;
    gakunyu.f.dom.op.drag = (e) => {
        if (e.buttons <= 0) return;
        gakunyu.f.dom.op.x += e.movementX;
        gakunyu.f.dom.op.y += e.movementY;
        document.getElementsByClassName("gakunyu")[0].style.transform = `translate(${gakunyu.f.dom.op.x}px, ${gakunyu.f.dom.op.y}px)`;
        document.getElementsByClassName("gakunyu")[0].setPointerCapture(e.pointerId);
    };
    document.getElementsByClassName("gakunyu")[0].addEventListener("pointermove", gakunyu.f.dom.op.drag);
    document.querySelectorAll(".gakunyu").forEach(function (target, index) { //金額入力の項目入力中のガイド入力の動作を防止
        target.addEventListener('click', function (e) {
            e.stopPropagation(); // 親要素への伝播を阻止
            guide.s_el = 1;
        })
    });
})