// ==UserScript==
// @name         简书新UI优化
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  优化简书的UI样式并去除广告
// @author       HOPGOLDY
// @match        https://www.jianshu.com/p/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 左侧点赞按钮栏靠边
    let leftLikeButtons = document.getElementsByClassName('_3Pnjry')
    leftLikeButtons[0].style.left = '40px'

    // 加宽文章正文
    let container = document.getElementsByClassName('_3VRLsv')[0]
    container.style.width = 'auto'
    container.style.marginLeft = '108px'
    container.style.marginRight = '320px'

    document.getElementsByClassName('_gp-ck')[0].style.width = '100%'

    // 删除右侧所有广告
    const clearAd = () => {
        const rightAD = document.getElementsByClassName('_22bNOL')
        if (rightAD.length > 0) {
            for (let i = 0; i < rightAD.length; i++) {
                const ad = rightAD[i]
                ad.parentElement.removeChild(ad)
            }
        }
    }
    setInterval(clearAd, 500)

    // 把右侧改变成固定列
    let aside = document.getElementsByClassName('_2OwGUo')[0]
    aside.style.position = 'fixed'
    aside.style.right = '40px'
})();