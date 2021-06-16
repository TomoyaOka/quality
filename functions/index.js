const functions = require("firebase-functions");
const admin = require('firebase-admin')
const line = require('@line/bot-sdk');

const client = new line.Client({
    channelAccessToken: 'dvOE5/3kqgYbF1eGHbiRMAx8rQkUE5fpYS+aStvzmdFd5egl913T6ZiXkNj9rzs1mbyCcYmcqaOyUKh/eJtOGLRXFT1ub8IIv2kZBMqP2Om/WCjJSGm3aecFep0UcY4wTJMw42Ly58iaGHn8paQYkgdB04t89/1O/w1cDnyilFU='
});

const adminUserId = "Udc88caa0ce2523613e8298170ab52a75"

admin.initializeApp()


exports.sendMessage = functions.https.onCall(async (data, context) => {
    console.log('function sendMessage start')
    console.log({ data })

    const { contactType, companyName, personName, mail, text } = data

    const sendText = `お問い合わせフォームからメッセージが送信されました。\nお問い合わせ種別：${contactType}\n会社名：${companyName ? companyName : "ー"}\n担当者名：${personName}\nメールアドレス：${mail}\nメッセージ：${text}}`

    const sendMessage = {
        type: 'text',
        text: sendText
    };

    await client.pushMessage(adminUserId, sendMessage)
        .then(() => {
            console.log("success")
        })
        .catch((err) => {
            console.log(err)
        });
    return null

})