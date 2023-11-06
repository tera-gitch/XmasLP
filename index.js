
    document.addEventListener('DOMContentLoaded', function() {
        var originalParent = document.querySelector('.container'); 
        var rightLogo = document.querySelector('.right-logo'); 
        var wrapButton = document.querySelector('.right-logo .wrap'); 
        var rightLogoImage = rightLogo.querySelector('img'); 
        var footer = document.querySelector('footer'); 
        var rightLogoOriginalNextSibling = rightLogo.nextSibling; 
        var footLogo = document.querySelector('.footlogo'); 
        var footLogoParent = footLogo.parentNode; 
        var footLogoOriginalNextSibling = footLogo.nextSibling; 
      
        function moveElements() {
            if (window.innerWidth <= 620) {
                // 画面幅が600px以下の場合
                footer.parentNode.insertBefore(rightLogo, footer); 
                footer.parentNode.insertBefore(footLogo, footer); 
                rightLogo.insertBefore(wrapButton, rightLogoImage); 
            } else {
                // 画面幅が600pxより大きい場合
                originalParent.insertBefore(rightLogo, rightLogoOriginalNextSibling); 
                rightLogo.insertBefore(rightLogoImage, wrapButton); 
                footLogoParent.insertBefore(footLogo, footLogoOriginalNextSibling); 
            }
        }
      
        window.addEventListener('resize', moveElements);
      
        moveElements();
    });

    


    document.addEventListener('DOMContentLoaded', function() {
        var content = document.querySelector('.content');
        var sideLogoImg = document.querySelector('.side-logo img');
        var originalSideLogoSrc = sideLogoImg.src;
    
        function handleResize() {
            if (window.innerWidth <= 600) {
                // スマホサイズの時にはside-logoの画像をcontentの背景にして、サイズを70%に設定する
                content.style.backgroundImage = 'url("' + originalSideLogoSrc + '")';
                content.style.backgroundSize = '50%'; 
                content.style.backgroundPosition = 'center';
                content.style.backgroundRepeat = 'no-repeat';
                sideLogoImg.style.display = 'none'; 
            } else {
                // スマホサイズではない時には背景を削除し元に戻す
                content.style.backgroundImage = '';
                content.style.backgroundSize = '';
                content.style.backgroundPosition = '';
                content.style.backgroundRepeat = '';
                sideLogoImg.style.display = 'block'; 
            }
        }
    
        // イベントリスナーをウィンドウのリサイズに追加
        window.addEventListener('resize', handleResize);
    
        // 初期表示時にもリサイズ関数を呼び出し
        handleResize();
    });
