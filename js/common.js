// 金額初期設定
var mode = "y100"; // 次の金額

// 今現在の金額
var nowMoney = 0;
var test1= 0;

// ウィンドウの幅と高さ
var windowWidth;
var windowHeight;


	$$(document).ready(function(){

		/* 表紙タップ */
		$$("#cover").tap(function(){ 
			$$("#cover img").addClass("cover-back");
			$$("#money").show("fast");
			$$("#manual").show("fast");
		});

		// 2表紙クリックアニメーション後
		$("#cover img").one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
			function(e) {
				// 全体表示
				$$("#nagesen-mode").show();
			
				// 銭表示
				$$("#nagesen-mode #nagesen-10yen").show("fast");
				$$("#cover").hide("fast");

				// パーツ配置
				resizeWindow();
		});

		/* 100円投げ */
		$$("#nagesen-mode #nagesen-100yen").swipeUp(function(){
			nowMoney = nowMoney + 100;
			nage("y100");
		});
		/* 10円投げ */
		$$("#nagesen-mode #nagesen-10yen").swipeUp(function(){
			nowMoney = nowMoney + 10;
			nage("y10");
		});
		/* 煽り円投げ */
		$$("#nagesen-mode #nagesen-aoriyen").swipeUp(function(){
			nage("aoriyen");
		});
		/* 金額リセット */
		$$("#contents").pinchOut(function(){
			$("#money").empty();
			$("#money").append("0円投げました");
			nowMoney = 0;
		});

		// 金額変更
		$$("#nagesen-mode").swipeLeft(function(){
			hideMoney();
			if(mode == "y10") {
				$("#nagesen-10yen").show("fast");
				mode="y100";
			} else if(mode == "y100") {
				$("#nagesen-100yen").show("fast");
				mode="aoriyen";
			} else if(mode == "aoriyen") {
				$("#nagesen-aoriyen").show("fast");
				mode="y10";
			} else {
				$("#nagesen-10").show("fast");
				mode="y100";
			}
		});
	});


	/* 銭を全部非表示に
	---------------------------------------------------------------- */
	function hideMoney() {
		$("#nagesen-10yen").hide();
		$("#nagesen-100yen").hide();
		$("#nagesen-aoriyen").hide();
	}


	/* 銭を投げる(PHPに投げる)
	---------------------------------------------------------------- */
	function nage(type) {
		$.ajax({
			type: "POST",
			url: "server.php",
			data: {
				status: "down",
				type: type
			}
		}).done(function( msg ) {
			//alert(msg);
			// 金額アップ
			countUp();
		});

		return false;
	}


	/* 金額アップ
	---------------------------------------------------------------- */
	function countUp(){
		// 金額クリア
		$("#money").empty();

		// 金額追加
		$("#money").append(nowMoney+"円投げました");
		//test1 = nowMoney%1000;
		//$("#money").append(test1);

	}


	/* ウィンドウサイズが変わった時
	---------------------------------------------------------------- */
	window.onresize=function(){
		resizeWindow();
	}


	/* パーツ配置しなおし
	---------------------------------------------------------------- */
	function resizeWindow() {
		windowWidth = window.innerWidth;
		windowHeight = window.innerHeight / 3;
		$("#money").css("width", windowWidth);
		$("#money").css("height", windowHeight/2);
		$("#manual").css("width", windowWidth);
	}



	/* 縦スクロール禁止
	---------------------------------------------------------------- */
	function preventScroll(event) {
		event.preventDefault();
	}

	// タッチイベントの初期化
	document.addEventListener("touchstart", preventScroll, false);
	document.addEventListener("touchmove", preventScroll, false);
	document.addEventListener("touchend", preventScroll, false);



	/* CSS3アニメーション関係
	---------------------------------------------------------------- */
	function testAnim(x) {
		$('#animationSandbox').removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd', function(){
			$(this).removeClass();
		});
	};

	$(document).ready(function(){
		$('.js--triggerAnimation').click(function(){
			var anim = $('.js--animations').val();
			testAnim(anim);
		});
	});



