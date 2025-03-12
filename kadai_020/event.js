//btnというidを持つHTML要素を取得し、定数を代入する
const btn = document.getElementById('btn');

//textというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

//HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {

    //li要素を新しく作成する
    const childList = document.createElement('li');

    //作成したli要素に「これはリスト要素です」というテキストを追加する
    childList.textContent = 'ボタンをクリックしました';
    text.appendChild(childList);
    text.textContent = 'ボタンをクリックしました。';
    console.log('ボタンをクリックしました');
});