// firebaseApikey.jsからexportされているオブジェクトを
// main.jsでfirebaseConfigという変数名で取り扱うよ、という記述。
import firebaseConfig from "./firebaseApikey.js";

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase, ref, push, set, onChildAdded }
    from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const dbRef = ref(db, "happyChat");

//送信ボタンのクリックイベントの作成
let inputMsg = "";

$("#send").on("click", function () {
    inputMsg = $("#text").val();
    //未入力に対するエラー処理
    if (!($("#uname").val()))
        alert("Enter your name");
    else if (!($("#text").val()))
        alert("Please Enter your message");

    //あなたのメッセージ入力
    else {
        const msg = {
            date: dateTime(),
            uname: $("#uname").val(),
            text: inputMsg
        }
        const newPostRef = push(dbRef);
        set(newPostRef, msg);
        $("#text").val("");

        //chatbotからの返答
        setTimeout(() => {
            const bot = {
                date: dateTime(),
                uname: "悩まぬ子羊",
                text: ""
            }

            if (inputMsg === "おやすみ") {
                bot.text = "おやすみなさい";
            }
            else if (inputMsg === "ありがとう") {
                $('main').css('background-image', 'url("../img/love.png")');
                bot.text = "いえいえ（照）";
            }
            else {
                bot.text = botAnswer();
            }
            console.log({ bot });

            const newPostRef = push(dbRef);
            set(newPostRef, bot);
        }, 300);
    }
});

    

//画面への出力
//最初のデータ取得＆onSnapshotでリアルタイムにデータを取得
onChildAdded(dbRef, function (data) {
    const msg = data.val();

    console.log(msg.uname);
    if (msg.uname === "悩まぬ子羊") {
        const chatbox =
            '<li><div class="balloon">' +
            '<p class="botName">' +
            msg.uname +
            '</p>' +
            '<img class="img-circle" src="./img/sheep.png" alt="sheep" />' +
            '<p class="say">' +
            msg.text +
            '<br>' +
            translate('ja', 'ko', msg) +
            '</p>' +
            '</div></li>' +
            '<p class="botTime">' +
            msg.date +
            '</p>';
        $('#output').append(chatbox);
    }
    else {
        const chatbox =
            '<li><div class="balloon youBalloon">' +
            '<p class="youName">' +
            msg.uname +
            '</p>' +
            '<img class="img-circle" src="./img/bunny.png" alt="bunny" />' +
            '<p class="say youSay">' +
            msg.text +
            '<br>' +
            translate('ja', 'ko', msg) +
            '</p>' +
            '</div></li>' +
            '<p class="youTime">' +
            msg.date +
            '</p>';
        $('#output').append(chatbox);
    }
})
