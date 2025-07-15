var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/joke.ico");
         document.title = '别走，别走，再看看(´・ω・｀)';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/favicon.ico");
         document.title = '欢迎来到微光zc的博客';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });