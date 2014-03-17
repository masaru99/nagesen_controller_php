<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="utf-8">
	<title>投げ銭コントローラー</title>
	<meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black">

	<!-- アイコン -->
	<link rel="shortcut icon" href="img/favicon.ico">

	<!-- Css -->
	<link rel="stylesheet" type="text/css" href="css/style.css" />
	<link rel="stylesheet" type="text/css" href="css/animate.css" />

	<!-- Javascript -->
	<script src="js/jquery-1.10.1.min.js"></script>
	<script src="js/jquery-ui-1.10.3.custom.min.js"></script>
	<script src="js/jquery.tap-1.0.3.js"></script>
	<script src="js/jquery.transit.min.js"></script>
	<script src="js/quo.js"></script>
	<script src="js/common.js"></script>
</head>
<body>

	<div id="contents">

		<!-- ★★表紙 -->
		<div id="cover">
			<a href="#"><img src="img/titleimage.png" style="width:100%; padding-top: 30px;"></a>
			<img src="img/shine.png" class="shine shine-animation">
			<img src="img/shine.png" class="shine2 shine-animation">
			<img src="img/shine.png" class="shine3 shine-animation">
			<img src="img/shine.png" class="shine4 shine-animation">
			<img src="img/shine.png" class="shine5 shine-animation">
		<!-- /#cover --></div>


		<!-- ★★投げ銭モード -->
		<div id="nagesen-mode" class="page">
			<div id="nagesen-10yen">
				<img src="img/10yen.png" alt="10円">
			</div>
			<div id="nagesen-100yen">
				<img src="img/100yen.png" alt="100円">
			</div>
			<div id="nagesen-aoriyen">
				<img src="img/aoriyen.png" alt="煽り">
			</div>
		<!-- /#nagesen-mode --></div>

	<!-- /#contents --></div>

	<!-- ★★金額 -->
	<div id="money">0円投げました</div>

	<!-- ★★説明 -->
	<div id="manual">上フリックで投げ｜左フリックで変更</div>

</body>
</html>