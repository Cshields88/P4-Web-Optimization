Project 4:  Web Page Optimization

Use ngrok or python to put webpage on the public internet to test PageSpeed Insights and Chrome DevTools.


PageSpeed Insights
Index.html
Scores Achieved 93/95
  Compressed Images using Gulp image-min & Gulp image-optimization.
  Resized and Compressed images using Photoshop CC and saving images for web.
  Minified HTML using Gulp minify-html.
  Minified CSS using Gulp minify-css.
  Inlined CSS
  Minified JavaScript using Gulp uglify.
  Optimized Google Fonts using code from link found in forums
    http://codepen.io/anon/pen/zGLERg
  Eliminated the render-blocking JavaScript and CSS in above-the-fold content by moving it to the bottom of page right above closing body tag.
  Used async for non -render blocking JavaScript.


60FPS Pizza.html
main.js
    Replaced “querySelectorAll” with “getElementByClassName” which is a faster lookup method.
    Changed image sources to compressed and resized images.

  Line 406 (function changeSliderLabel(size)) -
    Moved "document.querySelector("#pizzaSize").innerHTML" to the variable named pizzaSlider practicing D.R.Y.
  Line 427 (function changePizzaSizes(size)) -
    Made Changes Based On Camerons example in the Videos.
  Line 462 -
    Changed number of random pizzas generated from 100 to 45.  Still giving customers plenty of pizza choices but cutting down on page expenses.
  Line 495
    Created variables: top, constArray, and cachedLength outside of the function for faster performance.  Using @mcs tutorial on forums.
  Line 507
    Changed test expression in “For Loop” for less unique pizzas generating but still creating the same effect.
  Line 512
    Changed value after Modelo to adhere with for loop generating the pizzas above.
  Line 537
    Changed Number of moving pizzas to 30 creating the same effect but using a lot less resources.

Style.css
    Used Gulp uncss to clean up css.
    added transform: translateX(0); to “.mover”.

Resources
  https://discussions.udacity.com/t/project-4-how-do-i-optimize-the-background-pizzas-for-loop/36302
  https://discussions.udacity.com/t/paint-preventing-60-fps/38037
  https://discussions.udacity.com/t/painting-and-rendering-problem-with-pizza-scroll-and-pizza-resize/33353
  https://discussions.udacity.com/t/loading-fonts-asynchronously/26116
  https://plus.google.com/events/c8eah6f0d0t9eretebpm7dqi0ok?authkey=CKaNhtb0quvqKA
  https://github.com/udacity/fend-office-hours/tree/master/Web%20Optimization/Effective%20Optimizations%20for%2060%20FPS

Gulp Plugins:
  https://www.npmjs.com/package/gulp-minify-css/
  https://www.npmjs.com/package/gulp-minify-html/
  https://www.npmjs.com/package/uncss
  https://www.npmjs.com/package/uglify
  https://www.npmjs.com/package/imagemin
  https://www.npmjs.com/package/gulp-image-optimization
  https://www.npmjs.com/package/watch
