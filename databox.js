import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm"

const supabase = createClient(
  "https://fsaxaengvjxtzeuqmcva.supabase.co",
  "sb_publishable_oeJ9ll2ZBD2dlP29FISzzw_ELea2oDz"
)
//状態管理
let statusDiv = document.getElementById("status");
let currentUser = null

supabase.auth.onAuthStateChange((event, session) => {
  currentUser = session?.user ?? null;
  document.getElementById("status").textContent =
    currentUser
      ? `ログイン中: ${currentUser.email}`
      : "未ログイン"
  if (currentUser && (event === "SIGNED_IN" || event === "INITIAL_SESSION")) loadkeirodata();
  if (currentUser) {
    document.getElementById("status2").innerHTML = "ログイン中";
    document.getElementById("status2").style.color = "black";
    document.getElementById("popup1").style.display = "none";
  } else {
    document.getElementById("status2").innerHTML = "未ログイン";
    document.getElementById("status2").style.color = "";
  }
})
//認証
window.signup = async () => {
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value

  const { error } = await supabase.auth.signUp({ email, password })
  console.log(error);

  if (error) alert(error.message)
  else alert("登録成功です。")
}
window.login = async () => {
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  if (error) alert(error.message)
  else alert("ログイン成功です。")
}

window.logout = async () => {
  await supabase.auth.signOut();
  alert("ログアウトしました");
}
window.githubLogin = async () => { //githubログイン
  await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: url.dd
    }
  })
  loadkeirodata();
}
window.discordLogin = async () => { //discordログイン
  await supabase.auth.signInWithOAuth({
    provider: 'discord',
    options: {
      redirectTo: url.dd
    }
  })
  loadkeirodata();
}
window.googleLogin = async () => { //googleログイン
  await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: url.dd
    }
  })
  loadkeirodata();
}
//経路保存
async function savekeirodata(v) {
  console.log("save:", v)
  const { data } = await supabase.auth.getSession()
  const user = data?.session?.user
  console.log("user:", user)
  if (!user) {
    console.log("未ログイン")
    return
  }
  const res = await supabase
    .from('user_texts')
    .upsert({
      user_id: user.id,
      content: v
    })
  console.log("res:", res)
  if (res.error) {
    alert(res.error.message)
    return
  }
  //alert('保存成功');
  console.log("サーバー上への保存成功")
}
//経路読込
async function loadkeirodata() {
  const { data: sessionData } =
  await supabase.auth.getSession()

  const user = sessionData?.session?.user

  if (!user) {
    console.log("未ログイン")
    return
  }

  const { data, error } = await supabase
    .from('user_texts')
    .select('content')
    .maybeSingle()

  console.log("load:", data, error)

  if (error) {
    console.log(error.message)
    return
  }
  databox.arrtext2 = JSON.parse(data.content);
  databox.arrtext2.length = 10;
  if (databox.arrtext == null) databox.arrtext = "[]";
  databox.arr = JSON.parse(databox.arrtext).slice(0,20);
  databox.arr.length = 20;
  databox.arr = databox.arr.concat(databox.arrtext2);
  databox.arrtext = JSON.stringify(databox.arr);
  localStorage.setItem('keirodata', databox.arrtext);
  console.log("サーバー保存経路データ読込成功");
  for (let i = 0;i < databox.arrtext2.length;i++) databox.f.dom.set(i + 20);
}
//グローバル公開
window.savekeirodata = savekeirodata;
window.loadkeirodata = loadkeirodata;

async function savekeirodata2(itemId, content) {
  const {
    data: { user }
  } = await supabase.auth.getUser()
  if (!user) {
    console.log("未ログイン")
    return "notlogin";
  }
  const { error } = await supabase
    .from('user_texts2')
    .upsert({
      user_id: user.id,
      item_id: itemId,
      content: content,
      time: new Date().toLocaleString({ timeZone: 'Asia/Tokyo' })
    })

  if (error) {
    console.error(error)
    return "error";
  }
  console.log("保存成功");
  return "succes";
} window.savekeirodata2 = savekeirodata2;

// グローバル関数として定義
window.getkouza = async function(fst, fin) {
  const { data, error } = await supabase
    .from('kouza')
    .select('*')
    .eq('fst', fst)
    .eq('fin', fin);

  if (error) {
    console.error('Error:', error);
    return null;
  }

  return data; // 一致した行を返す
};
