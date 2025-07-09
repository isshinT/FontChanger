const fontList = [
    "Roboto", "Open Sans", "Lato", "Montserrat", "Oswald", "Source Sans Pro",
    "Slabo 27px", "Raleway", "PT Sans", "Merriweather", "Roboto Condensed",
    "Noto Sans", "Ubuntu", "Droid Sans", "Playfair Display", "Lora",
    "Nunito", "Titillium Web", "Arimo", "Fira Sans", "PT Serif", "Oxygen",
    "Cabin", "Droid Serif", "Roboto Slab", "Muli", "Indie Flower", "Bitter",
    "Varela Round", "Quicksand", "Anton", "Pacifico", "Fjalla One", "Alegreya",
    "Cairo", "Exo 2", "Asap", "Karla", "Rubik", "Work Sans", "Zilla Slab",
    "Crimson Text", "Inconsolata", "Kanit", "Mukta", "Libre Baskerville",
    "Josefin Sans", "PT Mono", "Comfortaa", "Amatic SC", "Raleway Dots",
    "Bree Serif", "Dancing Script", "Baloo Bhaina 2", "Shadows Into Light",
    "Hind", "Fredoka One", "Maven Pro", "Arvo", "Chivo", "Barlow", "Exo",
    "Catamaran", "Concert One", "Fira Mono", "Gudea", "Handlee", "Julius Sans One",
    "Kurale", "Lobster", "Markazi Text", "Nanum Gothic", "Old Standard TT",
    "Ovo", "PT Sans Narrow", "Play", "Poiret One", "Questrial", "Righteous",
    "Saira", "Satisfy", "Sigmar One", "Teko", "Trirong", "Varela", "Yanone Kaffeesatz",
    "Yeseva One", "ZCOOL KuaiLe"
];

// 現在選択されているフォントを追跡
let currentFont = null;

// Google Fontsから動的にlinkタグを生成してheadに追加
function loadGoogleFont(fontNames) {
    const existingLink = document.getElementById('dynamic-google-font');
    if (existingLink) existingLink.remove();

    const fontNameForUrl = fontNames.map(name => encodeURIComponent(name).replace(/%20/g, '+')).join('&family=');
    const link = document.createElement('link');
    link.id = 'dynamic-google-font';
    link.rel = 'stylesheet';
    link.href = `https://fonts.googleapis.com/css2?family=${fontNameForUrl}&display=swap`;
    document.head.appendChild(link);
}

// ボタンを作成して、ボタン内に適用するフォントを設定
document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('fontButtons');
    const output = document.getElementById('output');
    const input = document.getElementById('textInput');

    // 初期のフォント設定（全てのフォントを読み込む）
    loadGoogleFont(fontList);

    // フォントボタンを生成
    fontList.forEach(font => {
        const btn = document.createElement('button');
        btn.textContent = font;
        btn.style.fontFamily = font;  // ボタンに初期フォントを設定

        // ボタンをクリックした時の処理
        btn.addEventListener('click', () => {
            // 新しいフォントが選ばれた場合、テキストエリアのフォントを変更
            if (currentFont !== font) {
                currentFont = font;  // 現在のフォントを更新
                output.style.fontFamily = `'${font}', sans-serif`;  // テキスト部分のフォントを変更
                output.textContent = input.value || "ここにフォントが適用されます";  // 入力されたテキストを表示
            }
        });

        container.appendChild(btn);  // ボタンをボタンリストに追加
    });

    // 入力文字が変わったら表示も変える
    input.addEventListener('input', () => {
        output.textContent = input.value || "ここにフォントが適用されます";  // 入力テキストを表示
    });
});
