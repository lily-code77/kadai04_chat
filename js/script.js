function dateTime(params) {
    //送信ボタンが押された日時の取得
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    //一桁の場合は0を追加
    if (min < 10) min = '0' + min;
    if (sec < 10) sec = '0' + sec;

    return `${year}/${month}/${date} ${hour}:${min}:${sec}`
}
    
function botAnswer() {
    let index = Math.ceil(Math.random() * 10);

    const comment = ["心配ないよ",
    "頑張ってるの知ってるよ",
    "大切なのは、じぶんのしたいことをじぶんで知ってるってことだよ。",
    "頑張りすぎてない？",
    "いつでも応援してるよ",
    "どうして自分を責めるんですか？他人がちゃんと必要な時に責めてくれるんだからいいじゃないですか。",
    "辛かったね",
    "明日はきっと良くなるよ",
    "私は失敗したことがない。ただ、1万通りの、うまく行かない方法を見つけただけだ。",
    "神様は私たちに成功してほしいなんて思っていません。ただ、挑戦することを望んでいるだけよ。"]

    return comment[index]
}
