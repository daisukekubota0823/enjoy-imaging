function changeImage(element) {
    // 引数としてHTMLの要素(button)を取得します。そのbutton要素のなかのimg要素のsrc属性をright-imageのsrc属性にいれる。
    const rightImage = document.getElementById('right-image');
    rightImage.src = element.children[0].src;
    // right-imageのsrc属性をvessel-imageのsrc属性に入れる。
    document.getElementById('vessel-image').src = document.getElementById('right-image').src;
}

document.getElementById('button13').addEventListener('click', function () {
    // right-imageのsrc属性をvessel-imageのsrc属性に入れる。
    document.getElementById('vessel-image').src = document.getElementById('right-image').src;
});
