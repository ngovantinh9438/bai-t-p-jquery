$(document).ready(function(){
    $(":input").focus(function(){
    	$(this).css("background-color","#FF9");
    }).blur(function(){
    	$(this).css("background-color","#FFf");
    })

	$('#txtTenDangNhap').keyup(function(){
		$('span.error').remove();
		var txtinput = $(this).val();
		var mau = /^([a-zA-Z0-9]{4,8})$/;
		if(!mau.test(txtinput)){
			$(this).after('<span class="error"> 4 đến 8 kí tự.</span>');
		}
	})

	$('#pwdMatKhau').keyup(function(){
		$('span.error').remove();
		var txtinput = $(this).val();
		var mau = /^([a-zA-Z0-9]{6,20})$/;
		if(!mau.test(txtinput)){
			$(this).after('<span class="error"> 6 đến 20 kí tự.</span>');
		}
	})

	$('#pwdXnMatKhau').keyup(function(){
		$('span.error').remove();
		var txtinput = $(this).val();
		var mau = $('#pwdMatKhau').val();
		if(!mau.test(txtinput)){
			$(this).after('<span class="error"> xác nhận mật khẩu sai.</span>');
		}
	})

	$('#txtDienThoai').keyup(function(){
		$('span.error').remove();
		var txtinput = $(this).val();
		var mau = /^0([0-9]{9,10})$/;
		if(!mau.test(txtinput)){
			$(this).after('<span class="error"> 10 hoặc 11 số bắt đầu bằng số 0.</span>');
		}
	})

	$('#txtEmail').keyup(function(){
		$('span.error').remove();
		var txtinput = $(this).val();
		var mau = /^([a-zA-Z0-9])+@(gmail|yahoo)\.(com|vn)$/;
		if(!mau.test(txtinput)){
			$(this).after('<span class="error"> nhập đúng địa chỉ email.</span>');
		}
	})

	$('#txtFacebook').keyup(function(){
		$('span.error').remove();
		var txtinput = $(this).val();
		var mau = /^https:\/\/www\.facebook\.com/;
		if(!mau.test(txtinput)){
			$(this).after('<span class="error"> nhập đúng địa chỉ facebook.</span>');
		}
	})

	$(':input').keypress(function(e){
		if(e.keyCode == 13){
			e.preventDefault();
			var inputs = $(this).closest('form').find(':input');
			inputs.eq(inputs.index(this)+1).focus();
		}
	})
})
