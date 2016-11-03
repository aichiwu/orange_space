(function() {
	$('#submit').click(function() {
		var company_name = $('.company_name').val();
		var project_name = $('.project_name').val();
		var description = $('.description').val();
		var financ_stage = $("input:radio[name='financ_stage']:checked").val();
		var connact_name = $('.connact_name').val();
		var connact_phone = $('.connact_phone').val();
		var connact_email = $('.connact_email').val();
		var category = $("input:radio[name='category']:checked").val();
		var city = $("input:radio[name='city']:checked").val();
		var position = $('.position').val();
		var industry = $('.industry').val();
		var wechat = $(".wechat").val();
		var amount = $(".amount").val();
		if(connact_name != '' && connact_phone != '' && connact_email != '' && company_name != '' && amount != '' && project_name != '' && description != '') {
			if(connact_phone.length == 11 && connact_phone.match(/^[1][34578][0-9]{9}$/)) {
				if(connact_email.match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/)) {
					if(amount.match(/^[0-9]{1,}$/g)){
						return true;
					}else{
						alert("输入的目标融资金额有误")
					}
				} else {
					alert("邮箱格式有误");
					return false;
				}
			} else {
				alert("手机位数有误");
				return false;
			}
		} else {
			alert("请填写完整表单");
			return false;
		}
		window.history.forward(1);
	})
})()