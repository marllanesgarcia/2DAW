/*! This file is auto-generated */
jQuery(function(e){var o,i,n,a,l,r=e(),s=e(".upload-view-toggle"),t=e(".wrap"),d=e(document.body);function c(){var t;n=e(":tabbable",i),a=o.find("#TB_closeWindowButton"),l=n.last(),(t=a.add(l)).off("keydown.wp-plugin-details"),t.on("keydown.wp-plugin-details",function(t){9===(t=t).which&&(l[0]!==t.target||t.shiftKey?a[0]===t.target&&t.shiftKey&&(t.preventDefault(),l.trigger("focus")):(t.preventDefault(),a.trigger("focus")))})}window.tb_position=function(){var t=e(window).width(),i=e(window).height()-(792<t?60:20),n=792<t?772:t-20;return(o=e("#TB_window")).length&&(o.width(n).height(i),e("#TB_iframeContent").width(n).height(i),o.css({"margin-left":"-"+parseInt(n/2,10)+"px"}),void 0!==document.body.style.maxWidth)&&o.css({top:"30px","margin-top":"0"}),e("a.thickbox").each(function(){var t=e(this).attr("href");t&&(t=(t=t.replace(/&width=[0-9]+/g,"")).replace(/&height=[0-9]+/g,""),e(this).attr("href",t+"&width="+n+"&height="+i))})},e(window).on("resize",function(){tb_position()}),d.on("thickbox:iframe:loaded",o,function(){var t;o.hasClass("plugin-details-modal")&&(t=o.find("#TB_iframeContent"),i=t.contents().find("body"),c(),a.trigger("focus"),e("#plugin-information-tabs a",i).on("click",function(){c()}),i.on("keydown",function(t){27===t.which&&tb_remove()}))}).on("thickbox:removed",function(){r.trigger("focus")}),e(".wrap").on("click",".thickbox.open-plugin-details-modal",function(t){var i=e(this).data("title")?wp.i18n.sprintf(wp.i18n.__("Plugin: %s"),e(this).data("title")):wp.i18n.__("Plugin details");t.preventDefault(),t.stopPropagation(),r=e(this),tb_click.call(this),o.attr({role:"dialog","aria-label":wp.i18n.__("Plugin details")}).addClass("plugin-details-modal"),o.find("#TB_iframeContent").attr("title",i)}),e("#plugin-information-tabs a").on("click",function(t){var i=e(this).attr("name");t.preventDefault(),e("#plugin-information-tabs a.current").removeClass("current"),e(this).addClass("current"),"description"!==i&&e(window).width()<772?e("#plugin-information-content").find(".fyi").hide():e("#plugin-information-content").find(".fyi").show(),e("#section-holder div.section").hide(),e("#section-"+i).show()}),t.hasClass("plugin-install-tab-upload")||s.attr({role:"button","aria-expanded":"false"}).on("click",function(t){t.preventDefault(),d.toggleClass("show-upload-view"),s.attr("aria-expanded",d.hasClass("show-upload-view"))})});