function translate(fromLang, toLang, dataValue) {
    let url = "https://translation.googleapis.com/language/translate/v2?key="+apiKey+
    "&q="+encodeURI(dataValue.text)+"&source="+fromLang+"&target="+toLang;

    let xhr = new XMLHttpRequest()
    xhr.open('POST', [url], false)
    xhr.send();
    if (xhr.status === 200) {
        const res = JSON.parse(xhr.responseText); 
        return `[${res["data"]["translations"][0]["translatedText"]}]`;
    }
}




//下記ができないのが腑におちない。
// function translate(fromLang, toLang, dataValue) {
//     let url = "https://translation.googleapis.com/language/translate/v2?key="+apiKey+
//     "&q="+encodeURI(dataValue.text)+"&source="+fromLang+"&target="+toLang;

//     let view = "";
//     $.getJSON(url, function (data) {

//         view += data.data.translations[0].translatedText;

//         console.log({view});
//     });
//     return `[${view}]`
// }


