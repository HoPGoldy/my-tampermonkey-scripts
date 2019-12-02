// ==UserScript==
// @name         简书新UI优化
// @namespace    http://tampermonkey.net/
// @version      0.2
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
        const rightAD = document.getElementsByClassName('-umr26')
        if (rightAD.length > 0) {
            for (let i = 0; i < rightAD.length; i++) {
                const ad = rightAD[i]
                ad.parentElement.removeChild(ad)
            }
            clearInterval(clearTimer)
        }
    }
    let clearTimer = setInterval(clearAd, 300)

    // 移除右侧推荐阅读
    const clearRecommend = () => {
        const recommend = document.getElementsByClassName('_3Z3nHf')
        if (recommend.length > 1) {
            recommend[1].parentElement.removeChild(recommend[1])
            clearInterval(recommendTimer)
        }
    }
    let recommendTimer = setInterval(clearRecommend, 300)

    // 把右侧改变成固定列
    let aside = document.getElementsByClassName('_2OwGUo')[0]
    aside.style.position = 'fixed'
    aside.style.right = '40px'
})();