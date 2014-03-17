<?php

  /**
   * C++に銭を投げるスクリプト
   * 引数（金額）: y100, y10, aorisen
   */

  // 設定ファイル
  require_once('config.php');

  // OSCライブラリ
  require_once('OSC.php');

  // 変数受け取り
  $type = $_POST['type'];

  // モード指定されていれば
  if(preg_match("/^[0-9a-z]+$/", $type)) {
    
    // クライアントインスタンス作成
    $c = new OSCClient();

    // 接続（IPとポートを毎回変える必要あり）
    $c->set_destination($ip, $port);

    // メッセージ送信インスタンス作成
    $m1 = new OSCMessage("/mouse/button", array($type));

    // メッセージ送信
    $c->send($m1);

    // 結果
    echo "銭を投げました";
    exit;

  } else {

    // 結果
    echo "銭を投げられませんでした";
    exit;

  } // if
