const start = 1000;
const unit = 5;
var cur = start,
// アラート用のタイマーを外側で持っておく
  alertTimer = null;

// タイマーの関数定義を先に持ってくる。（未定義エラーを回避）
// プラス、定義の仕方を変え、setIntervalをクリアできる定義の仕方にする。
var alertmsg = setInterval(function(){
  alert("10秒経過しました。もう一度最初から計算してください。");
}, 10000);


//回答
function check(){
  if(document.getElementById("answer").value == (cur - unit)){
    // 正解の場合は、ここでタイマーをクリアする
    clearInterval(alertmsg);
    // アラートのタイマーが生きてるなら、クリア
    if (alertTimer) {
      clearTimeout(alertTimer);
    }
    alertTimer = setTimeout(function(){
      alert("OK");
    }, 10);
    cur -= unit;

    //次の問題に回答する
  } else {
    // こちらも一応、アラートのタイマーをいれておく
    // アラートのタイマーが生きてるなら、クリア
    if (alertTimer) {
      clearTimeout(alertTimer);
    }
    alertTimer = setTimeout(function(){
      alert("不正解です。もう一度最初から計算してください。");
    }, 10);

    //最初の問題に戻る
    cur = start;
    document.getElementById("answer").value = "";
  }
}
