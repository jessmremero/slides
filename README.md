# slides
轮播实现原理：
一个div容器，包含几个轮播图片，然后让图片在固定间隔时间向左移动图片的宽度。
js实现循环播放原理：当循环到index===0的时候，把第一份克隆一张到最后面，然后当结束时迅速删除掉，去掉transition，回归到第一张，$view.css('transition',oldtransition)
currentIndex = index，然后继续循环
