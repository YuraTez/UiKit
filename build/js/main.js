!function(){"use strict";window.numberWithCommas=function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")},$(function(){var t=$(".js-input");t.focus(function(){$(this).parent(".form-field").addClass("form-field--focused"),$(this).parent(".form-field").removeClass("form-field--error")}),t.blur(function(){""===$(this).val()&&$(this).parent(".form-field").removeClass("form-field--focused")}),t.each(function(){""===$(this).val()?$(this).parent(".form-field").removeClass("form-field--focused"):$(this).parent(".form-field").addClass("form-field--focused")})}),$(function(){var t=$(".js-select"),s=$(".js-select-input"),e=$(".js-select-filter");t.select2({dropdownAutoWidth:!0,containerCssClass:"select",dropdownCssClass:"no-input"}),s.select2({dropdownAutoWidth:!0,containerCssClass:"select",dropdownCssClass:"input",tags:!0}),e.select2({containerCssClass:"filter",dropdownCssClass:"no-input filter-dropdown"}),window.$select=t,window.$selectInput=s,window.$selectFilter=e}),$(function(){$(".js-tooltip").tooltipster({theme:["tooltipster-shadow","tooltipster-shadow-customized"],maxWidth:300,distance:5,debug:!0})}),$(function(){$(".js-add").click(function(){var t=$(this).prev().find(".js-counter-input"),s=parseInt(t.val());t.attr("value",s+1),$(this).prev().find(".js-counter-text").text(s+1)}),$(".js-sub").click(function(){var t=$(this).next().find(".js-counter-input"),s=parseInt(t.val());s>=1&&(t.attr("value",s-1),$(this).next().find(".js-counter-text").text(s-1))})}),$(function(){$(".js-input-mask").each(function(){var t=$(this).data("mask");new Inputmask({mask:t,placeholder:"_"}).mask(this)})}),$(function(){$(".js-number").keypress(function(t){var s=t.which?t.which:t.keyCode;if(s>31&&(s<48||s>57))return!1}),$(".js-agree").change(function(){var t=$(this),s=t.closest(".js-form").find(".submit");t.is(":checked")?s.removeAttr("disabled"):s.attr("disabled",!0)}),$(".js-form").each(function(){var t=$(this);t.attr("action");t.validate({focusInvalid:!1,highlight:function(t){$(t).closest(".form-field").addClass("form-field--error")},unhighlight:function(t){$(t).closest(".form-field").removeClass("form-field--error")},submitHandler:function(s,e){e.preventDefault();var o=new FormData,n=t.serializeArray();$.each(t.find(".js-input-file"),function(t,s){$.each($(s)[0].files,function(t,e){o.append(s.name,e)})}),$.each(n,function(t,s){o.append(s.name,s.value)}),o.append("key","value"),t.find("button").prop("disabled",!1),t[0].reset(),$(".popup").removeClass("is-show"),$("#popup-thank").addClass("is-show");var i=$(".js-select");return i.length&&i.each(function(){$(this).val("").trigger("change")}),$.ajax({url:t[0].action,type:"POST",processData:!1,contentType:!1,data:o,beforeSend:function(s){t.find("button").attr("disabled","disabled")},success:function(s){s.error?console.log("error"):setTimeout(function(){t.find("button").prop("disabled",!1),t[0].reset(),$(".popup").removeClass("is-show"),$("#popup-thank").addClass("is-show");var s=$(".js-select");s.length&&s.each(function(){$(this).val("").trigger("change")})},500)},error:function(t,s,e){console.log(t.status),console.log(e)}}),!1}})}),$("#popup-thank").on("click",function(){$(this).removeClass("is-show")})}),$(function(){var t=$(".js-popup"),s=$(".js-popup-close"),e=null,o=void 0;function n(s,n,i){var a,r,l=$('.js-popup[data-block="'+s+'"]');t.removeClass("is-show"),l.addClass("is-show"),o=$(window).scrollTop(),l.find(".js-iframe").attr("src",i),"media"!==s&&(location.hash=s),o=$(window).scrollTop(),n&&(history.pushState({},"",n),$('.js-popup[data-block="'+s+'"]').find(".js-ajax-wrapper").empty(),a=n,r=$('.js-popup[data-block="'+s+'"]'),$.ajax({url:a,type:"GET",success:function(t){0!==$(t).length&&r.find(".js-ajax-wrapper").html($(t).hide().fadeIn(1e3))}}),e="href")}""!==location.hash&&($(".js-popup[data-block='"+location.hash.substr(1)+"']").addClass("is-show"),o=$(window).scrollTop()),$("body").on("click",".js-popup-link",function(t){t.preventDefault();var s=$(this);return n(s.attr("data-link"),s.attr("data-href"),s.attr("data-src")),!1}),window.openPopup=n,s.on("click",function(){var t=$(this).closest(".js-popup");t.removeClass("is-show"),t.find(".js-iframe").attr("src",""),location.hash="","undefined"!==o&&($(window).scrollTop(o),o=void 0),"href"===e&&(location.hash="",history.back(),e=null)})})}();
//# sourceMappingURL=main.js.map