var textFadeOut = function(){
	status = null;// null

	// fadeOut Func
	var fadeOut = function(){
		setTimeout(function(){
			$(".text").fadeOut(1000);
			setTimeout(function(){
				$(".page").fadeIn();
			}, 900);
		},3000);		
	};
	// condition for first page
	$(".text").length > 0 ? status = true : status = false;
	
	// condition initialize
	status ? fadeOut() : "";
};

var inputFunc = function(){
	// each input
	$("input").each(function(){
		var $el = $(this), // element 
			defVal = $el.val(); // default value
		$el.focus(function(e){ // click
			if($el.val() == defVal){
				$(this).val("");
			};
		});
		$el.blur(function(e){ // unclick
			if($el.val().length == 0 || $el.val() == defVal){
				$(this).val(defVal);
			};
		});
	});
};

var validFunct = function(){

	var loginFunc = function(type){

		var successFunc = function(){
			alert("başarılı");
			location.href = "dashboard.html";
		};
		var errorFunc = function(){
			alert("giriş hatalı");
		};
		var validFunc = function(){
			alert("Giriş yapabilmek için kullanıcı adı ve parolanı gir")
		};

		switch(type) {
		    case 'valid':
		        validFunc();
		        break;
		    case 'success':
		        successFunc();
		        break;
		    case 'error':
		        errorFunc();
		        break;
		}
	};

	var signupFunc = function(type){

		var successFunc = function(){
			alert("kayıt oldun, bilgilerini unutma!");
		};
		var errorFunc = function(){
			alert("bu kullanıcı adı başkasına ait");
		};
		var validFunc = function(){
			alert("Kayıt yapabilmek için kullanıcı adı ve parolanı gir")
		};

		switch(type) {
		    case 'valid':
		        validFunc();
		        break;
		    case 'success':
		        successFunc();
		        break;
		    case 'error':
		        errorFunc();
		        break;
		}
	};

	var validStatus = null,
		$logEl = $("button.login"),
		$signEl = $("button.signup");

		$logEl.click(function(e){
			atakanCevap = false;
			if($(".username").val() == "Kullanıcı Adı" && $(".pass").val() == "Parola"){
				loginFunc("valid");
			}else if($(".username").val() == "admin" && $(".pass").val() == "admin"){
					loginFunc("success")
			}else{
				if(atakanCevap){
					loginFunc("success")
				}else{
					loginFunc("error")				
				}
			}
		});

		$signEl.click(function(e){
			atakanCevap = false	;
			if($(".username").val() == "Kullanıcı Adı" && $(".pass").val() == "Parola"){
				signupFunc("valid");
			}else if($(".username").val() == "reyiz" && $(".pass").val() == "reyiz"){
					signupFunc("success")
			}else{
				if(atakanCevap){
					signupFunc("success")
				}else{
					signupFunc("error")				
				}
			}
		});

};


(function() {
	if(pageLevel == 1){
		textFadeOut();
		inputFunc();
		validFunct();
	};

})();