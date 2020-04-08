function iCanDrag(targetID, listenerID) {
    //IDから要素の取得
    let element = document.getElementById(targetID);
    //ドラッグイベントを監視する要素
    let listener = document.getElementById(listenerID);
    //移動中かどうかのフラグ
    let dragging;
    // 座標
    let tLeft, tTop;
    document.addEventListener('mousedown', function(e) {
        if (e.target === listener) {  // マウスがクリックされた場合、 クリック対象が指定した要素なら実行
            dragging = true; // 移動中を示すフラグに真の値を入れます。
            // 座標を取得して設定する
            let moveElemRect = element.getBoundingClientRect();
            tLeft = e.clientX - moveElemRect.left;
            tTop = e.clientY - moveElemRect.top;
        }
    });
    document.addEventListener('mouseup', function(e) {
        // マウスを外したらフラグを偽の値にします。
        dragging = false;
    });
    document.addEventListener('mousemove', function(e) {
        if (dragging) {
            // フラグが真の値、つまり移動中であれば、マウスの座標を要素の座標に入れます。
            let moveX = e.clientX - tLeft;
            let moveY = e.clientY - tTop;
            element.style.left = moveX + 'px';
            element.style.top = moveY + 'px';
        }
    });
}