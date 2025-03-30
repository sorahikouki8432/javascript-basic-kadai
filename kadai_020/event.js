// 画面から取得したHTML要素が定数に代入されている
// ボタンをクリックした際に正しく文字変更がされている
// btnというidを持つHTML要素を取得し、定数に入れる
const btn = document.getElementById('btn');
// textというidを持つHTML要素を取得し、定数に入れる
const text = document.getElementById('text');
// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  text.textContent = 'ボタンをクリックしました';
});