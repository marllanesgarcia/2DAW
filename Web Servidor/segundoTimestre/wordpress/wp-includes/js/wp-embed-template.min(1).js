/*! This file is auto-generated */
!function(c,u){"use strict";var r,t,e,a=u.querySelector&&c.addEventListener,f=!1;function b(e,t){c.parent.postMessage({message:e,value:t,secret:r},"*")}function m(){b("height",Math.ceil(u.body.getBoundingClientRect().height))}function n(){if(!f){f=!0;var e,r=u.querySelector(".wp-embed-share-dialog"),t=u.querySelector(".wp-embed-share-dialog-open"),a=u.querySelector(".wp-embed-share-dialog-close"),n=u.querySelectorAll(".wp-embed-share-input"),i=u.querySelectorAll(".wp-embed-share-tab-button button"),s=u.querySelector(".wp-embed-featured-image img");if(n)for(e=0;e<n.length;e++)n[e].addEventListener("click",function(e){e.target.select()});if(t&&t.addEventListener("click",function(){r.className=r.className.replace("hidden",""),u.querySelector('.wp-embed-share-tab-button [aria-selected="true"]').focus()}),a&&a.addEventListener("click",function(){o()}),i)for(e=0;e<i.length;e++)i[e].addEventListener("click",d),i[e].addEventListener("keydown",l);u.addEventListener("keydown",function(e){var t;27===e.keyCode&&-1===r.className.indexOf("hidden")?o():9===e.keyCode&&(e=e,t=u.querySelector('.wp-embed-share-tab-button [aria-selected="true"]'),a!==e.target||e.shiftKey?t===e.target&&e.shiftKey&&(a.focus(),e.preventDefault()):(t.focus(),e.preventDefault()))},!1),c.self!==c.top&&(m(),s&&s.addEventListener("load",m),u.addEventListener("click",function(e){var t=((t=e.target).hasAttribute("href")?t:t.parentElement).getAttribute("href");event.altKey||event.ctrlKey||event.metaKey||event.shiftKey||t&&(b("link",t),e.preventDefault())}))}function o(){r.className+=" hidden",u.querySelector(".wp-embed-share-dialog-open").focus()}function d(e){var t=u.querySelector('.wp-embed-share-tab-button [aria-selected="true"]');t.setAttribute("aria-selected","false"),u.querySelector("#"+t.getAttribute("aria-controls")).setAttribute("aria-hidden","true"),e.target.setAttribute("aria-selected","true"),u.querySelector("#"+e.target.getAttribute("aria-controls")).setAttribute("aria-hidden","false")}function l(e){var t,r=e.target,a=r.parentElement.previousElementSibling,n=r.parentElement.nextElementSibling;if(37===e.keyCode)t=a;else{if(39!==e.keyCode)return!1;t=n}(t="rtl"===u.documentElement.getAttribute("dir")?t===a?n:a:t)&&(e=t.firstElementChild,r.setAttribute("tabindex","-1"),r.setAttribute("aria-selected",!1),u.querySelector("#"+r.getAttribute("aria-controls")).setAttribute("aria-hidden","true"),e.setAttribute("tabindex","0"),e.setAttribute("aria-selected","true"),e.focus(),u.querySelector("#"+e.getAttribute("aria-controls")).setAttribute("aria-hidden","false"))}}a&&(!function e(){c.self===c.top||r||(r=c.location.hash.replace(/.*secret=([\d\w]{10}).*/,"$1"),clearTimeout(t),t=setTimeout(function(){e()},100))}(),u.documentElement.className=u.documentElement.className.replace(/\bno-js\b/,"")+" js",u.addEventListener("DOMContentLoaded",n,!1),c.addEventListener("load",n,!1),c.addEventListener("resize",function(){c.self!==c.top&&(clearTimeout(e),e=setTimeout(m,100))},!1),c.addEventListener("message",function(e){var t=e.data;t&&e.source===c.parent&&(t.secret||t.message)&&t.secret===r&&"ready"===t.message&&m()},!1))}(window,document);