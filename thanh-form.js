(function(JQuery) {
    JQuery.fn.linhnguyen = function(options) {        
        var defaults = {  
	    	animation: 'fadeAndPop', //fade, fadeAndPop, none
		    animationspeed: 300, //how fast animtions are
		    closeonbackgroundclick: true, //if you click background will modal close?
		    dismissmodalclass: 'close-linhnguyen-modal' //the class of a button or element that will close an open modal
    	}; 

        var options = JQuery.extend({}, defaults, options); 
	
        return this.each(function() {
        	var modal = JQuery(this),
        		topMeasure  = parseInt(modal.css('top')),
				topOffset = modal.height() + topMeasure,
          		locked = false,
				modalBG = JQuery('.linhnguyen-modal-bg');

			if(modalBG.length == 0) {
				modalBG = JQuery('<div class="linhnguyen-modal-bg" />').insertAfter(modal);
			}		    
			modal.bind('linhnguyen:open', function () {
			  modalBG.unbind('click.modalEvent');
				JQuery('.' + options.dismissmodalclass).unbind('click.modalEvent');
				if(!locked) {
					lockModal();
					if(options.animation == "fadeAndPop") {
						modal.css({'top': JQuery(document).scrollTop()-topOffset, 'opacity' : 0, 'visibility' : 'visible'});
						modalBG.fadeIn(options.animationspeed/2);
						modal.delay(options.animationspeed/2).animate({
							"top": JQuery(document).scrollTop()+topMeasure + 'px',
							"opacity" : 1
						}, options.animationspeed,unlockModal());					
					}
					if(options.animation == "fade") {
						modal.css({'opacity' : 0, 'visibility' : 'visible', 'top': JQuery(document).scrollTop()+topMeasure});
						modalBG.fadeIn(options.animationspeed/2);
						modal.delay(options.animationspeed/2).animate({
							"opacity" : 1
						}, options.animationspeed,unlockModal());					
					} 
					if(options.animation == "none") {
						modal.css({'visibility' : 'visible', 'top':JQuery(document).scrollTop()+topMeasure});
						modalBG.css({"display":"block"});	
						unlockModal()				
					}
				}
				modal.unbind('linhnguyen:open');
			}); 	

			modal.bind('linhnguyen:close', function () {
			  if(!locked) {
					lockModal();
					if(options.animation == "fadeAndPop") {
						modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
						modal.animate({
							"top":  JQuery(document).scrollTop()-topOffset + 'px',
							"opacity" : 0
						}, options.animationspeed/2, function() {
							modal.css({'top':topMeasure, 'opacity' : 1, 'visibility' : 'hidden'});
							unlockModal();
						});					
					}  	
					if(options.animation == "fade") {
						modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
						modal.animate({
							"opacity" : 0
						}, options.animationspeed, function() {
							modal.css({'opacity' : 1, 'visibility' : 'hidden', 'top' : topMeasure});
							unlockModal();
						});					
					}  	
					if(options.animation == "none") {
						modal.css({'visibility' : 'hidden', 'top' : topMeasure});
						modalBG.css({'display' : 'none'});	
					}		
				}
				modal.unbind('linhnguyen:close');
			});     
   	
    	modal.trigger('linhnguyen:open')
			
			//Close Modal Listeners
			var closeButton = JQuery('.' + options.dismissmodalclass).bind('click.modalEvent', function () {
			  modal.trigger('linhnguyen:close')
			});
			
			if(options.closeonbackgroundclick) {
				modalBG.css({"cursor":"pointer"})
				modalBG.bind('click.modalEvent', function () {
				  modal.trigger('linhnguyen:close')
				});
			}
			JQuery('body').keyup(function(e) {
        		if(e.which===27){ modal.trigger('linhnguyen:close'); } // 27 is the keycode for the Escape key
			});
			
			function unlockModal() { 
				locked = false;
			}
			function lockModal() {
				locked = true;
			}	
			
        });//each call
    }//orbit plugin call
})(jQuery);
        
var divpopup = document.createElement("div");
jQuery(divpopup).attr('id', 'myModal');
jQuery(divpopup).attr('class', 'linhnguyen-modal');
jQuery( "body" ).append(divpopup);
var titleform='Đăng ký Form';
var urlform="https://docs.google.com/forms/d/e/1FAIpQLSdAFVic4X7quofktB-ak8ziRFpqKyks-qRMPzegB4YltSyNDw/formResponse";
var urlchuyen='http://google.com';
var hovaten="1682354903";
var dienthoai="219078216";
var email="397034879";
var duan="1466950141";
var submittitle='Đăng ký tư vấn';
var submitted=false;
var formdiv='<iframe id="hidden_iframe" name="hidden_iframe" onload="thanhxet()" style="display:none;"></iframe><div class="box-thanh-form"><div class="thanhform-level1">'+titleform+'<h2><a class="close-linhnguyen-modal">X</a></h2></div><div class="thanhform-level2"></div><div id="cems-subscription" class="cems-subscription"><div class="sss-form-content thanhgform_wrapper"> <form onsubmit="submitted=true;" target="hidden_iframe" method="post" action="'+urlform+'"><div class="gform_body">     <ul class="thanhtop_label"> ';
formdiv+= '<li class="sss-form-control gfield ">  <div class="sss-form-control-inner">                <label class="gfield_label">Họ &amp; Tên<span class="gfield_required">*</span></label>                <div class="ginput_container">                  <input class="medium" name="entry.'+hovaten+'" maxlength="70" id="your_name" placeholder="Họ tên" value="" type="text">                </div>              </div>            </li> ';
formdiv+= '<li class="sss-form-control gfield ">              <div class="sss-form-control-inner">                <label class="gfield_label">Email<span class="gfield_required">*</span></label>                <div class="ginput_container">                  <input class="medium" name="entry.'+email+'" maxlength="320" id="email_addr" placeholder="Email" value="" type="email">                </div>              </div>            </li> ';
formdiv+= ' <li class="sss-form-control gfield ">              <div class="sss-form-control-inner">                <label class="gfield_label">Số điện thoại<span class="gfield_required">*</span></label>                <div class="ginput_container">                  <input class="medium" name="entry.'+dienthoai+'" maxlength="15" id="your_phone" placeholder="Số điện thoại" value="" length="11" type="tel">                </div>              </div>            </li>';

formdiv+= ' <li class="sss-form-control gfield ">              <div class="sss-form-control-inner">                <label class="gfield_label">Dự án<span class="gfield_required">*</span></label>                <div class="ginput_container">                  <input class="medium" name="entry.'+duan+'" maxlength="15" id="your_phone" placeholder="Dự án" value="" length="11" type="tel">                </div>              </div>            </li>';


formdiv+= '</ul>        </div>        <div class="gform_footer">          <div class="sss-form-control last" style="text-align:center;">            <input value="'+submittitle+'" type="submit">          </div>        </div>      </form>    </div>  </div></div>';
jQuery("#myModal").html(formdiv);		
		
function thanhxet(){
if(submitted) {window.location=urlchuyen;}	
}
		
function showform(){
	
			jQuery('#myModal').linhnguyen(jQuery('#myModal').data());
}
		

jQuery(document).ready(function(){	
setTimeout(function(){
        			showform();
        		   
        		    setTimeout(function(){
            			showform();
            		    
                		setInterval(function(){
                			showform();
                		    
                		}, 12000);
        		    }, 10000);
        	    }, 120000);
		
});

showform();