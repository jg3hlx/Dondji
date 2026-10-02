/*
 * Dondji Firmware
 *
 * Copyright (c) 2026 BD1AHN
 *
 * Licensed under the Apache License, Version 2.0
 *
 * Project:
 *     叮咚鸡 (Dondji)
 *
 * Maintainer:
 *     BD1AHN
 *
 * Official Website:
 *     https://ethanyan6.github.io/Dondji/
 *
 * The Dondji name, logo, and official project identity
 * are protected separately from the source code license.
 */


/**
 * Language Switcher for Dondji Web Tool
 * Supports Chinese (zh) and English (en)
 */

(function() {
  'use strict';

  // Translation dictionary
  const translations = {
    zh: {
      // Page title and meta
      'pageTitle': 'UV-K1 / UV-K5(K6) V3',
      'pageTitleHelp': 'ヘルプドキュメント - 叮咚鶏（Dondji）',
      
      // Loading overlay
      'loadingNetworkPoor': 'おっと、ネットワークの調子が少し悪いようです〜',
      'loadingChicken': '叮咚鶏が鋭意読み込み中...',
      'loadingProgress': '0%',
      
      // Top marquee
      'marqueeText': '📻 合計 {uv} 人のハムが当サイトにアクセスしました。本日はあなたを含めて {today_uv} 人がファームウェアを書き込んでいます 📻',
      
      // Header buttons
      'helpDoc': 'ヘルプ',
      'helpDocTitle': 'ヘルプドキュメント',
      'themeToggleTitle': 'ライトテーマに切り替え',
      
      // Social chips
      'douyin': '抖音 (Douyin)',
      'douyinName': '小閆連不上',
      'bili': 'Bilibili',
      'biliName': '小閆連不上',
      'redbook': '小紅書 (Red)',
      'redbookName': '小閆同学',
      'wechatVideo': 'WeChat チャンネル',
      'wechatVideoName': '小閆連不上',
      'fmoScreen': 'FMO サブ画面',
      'travelJournal': '旅行手帳',
      'drivingHud': 'ドライブ用大画面',
      'clickView': 'クリックして表示',
      'wechatGroup': 'WeChat グループ',
      'otherFirmwareLink': 'その他のファームウェア',
      'otherFirmwareName': '山竹 (Mangosteen)',
      'syrupFirmwareName': '小甜水 (Syrup)',
      'gameFirmwareName': 'ゲーム用ファームウェア',
      'flashToolLink': '書き込みツール',
      'multiFirmwareToolName': 'マルチファームウェア書き込みツール',
      'otherFirmware': 'その他のファームウェア集',
      'mediaAccount': 'BD1AHN メディアアカウント',
      'collapseChips': '折りたたむ',
      'expandChips': '展開する',
      
      // Timeline sidebar
      'timelineTitle': '叮咚鶏 (Dondji) バージョン履歴',
      'timelineLoading': '読み込み中...',
      
      // Main header
      'mainTitle': 'UV-K1 / UV-K5(K6) V3 Web Tool',
      'devBy': '開発者: {dev}',
      'buyCoffee': 'コーヒーを奢る',
      'buyCoffeeTitle': 'クリックして寄付ページを開く',
      
      // Flash steps
      'flashSteps': '書き込み手順',
      'flashStepsOrder': '推奨する書き込み手順',
      'step1': 'キャリブレーションのバックアップ',
      'step1Tooltip': '純正ファームウェアでキャリブレーションを1回バックアップします。以降の復元に使用します。電源が入った状態でバックアップしてください。',
      'step2': 'ファームウェアの書き込み',
      'step2Tooltip': '電源を切った状態で、PTTボタンを押しながらダイヤルを回して電源を入れ、書き込みモードに入ります。',
      'step3': 'データの初期化',
      'step3Tooltip': '叮咚鶏ファームウェアを初めて書き込む場合に必要です。事前に「構成のバックアップ」をおすすめします。電源を切った状態で、PTTボタンと、そのすぐ下のサイドボタンを同時に押しながら電源を入れ、すべての機能メニューを解除します。「その他」の「初期化」で「すべて」を選択します。デバイスに保存されているチャンネルと設定をリセットします。その後、「構成の復元」で設定項目を復元できます。',
      'step4': 'フォントデータの書き込み',
      'step4Tooltip': 'バージョン更新履歴にフォントの変更がない場合は、この手順は不要です。電源が入った状態でフォントを書き込みます。各ファームウェアバージョンに対応する中国語フォントを使用してください（混在させないでください）。',
      'step5': 'キャリブレーションの復元',
      'step5Tooltip': '叮咚鶏ファームウェアの初回書き込み時、または V5.0.0 以降への初回アップグレード時に必要です。電源が入った状態で実行します。注意：本サイトおよび uvtools2 サイトのキャリブレーションファイルのみ復元に対応しており、他のサイトのものは対応していません。',
      'step6': 'チャンネル書き込み',
      'step6Tooltip': '電源が入った状態で実行します。読み込みまたは書き込み後に接続が切断されますが、長時間のポート占有や誤操作を防ぐための正常な動作です。',
      
      // Warning messages
      'calibWarning': 'キャリブレーションの復元には、純正ファームウェアの最初のバックアップを使用してください。毎回バックアップする必要はありません。後からのバックアップは間違っている可能性があります！',
      'snowScreenWarning': 'V5.0.0 にアップデートして画面が砂嵐になった不運な方は、キャリブレーションに問題があるはずです。キャリブレーションをダウンロードして書き込んでください。',
      'downloadCalibK1': 'キャリブレーションダウンロード (K1)',
      'downloadCalibK6V3': 'キャリブレーションダウンロード (K6V3)',
      
      // Tabs
      'tabDump': 'キャリブレーションバックアップ',
      'tabFlash': 'FW書き込み',
      'tabFont': 'フォント書き込み',
      'tabRestore': 'キャリブレーション復元',
      'tabWritefreq': 'チャンネル書き込み',
      'tabMdcbook': 'MDC アドレス帳',
      'tabLogo': '起動画面ロゴ',
      'tabBackupcfg': '構成バックアップ',
      'tabRestorecfg': '構成復元',
      'tabToolbox': '緊急ツールボックス',

      // MDC address book tab
      'mdcbookLead': 'MDC1200 アドレス帳：MDC ID とコールサイン（英字・数字、最大6文字、例：BD1AHN）を無線機に書き込みます。一致する ID を受信すると、ポップアップにコールサインが直接表示されます。一致しない場合は従来の4桁の16進数 ID が表示されます。',
      'mdcbookMeta': 'ストレージ：SPI 0x011000 独立 4KB セクター（キャリブレーション領域の後ろ）。最大 400 件、1件あたり 10 バイト（ID 2B + コールサイン 8B、実質最大 6 文字）、16 バイトのヘッダーを含む。ゲーム用ファームウェアの電子書籍領域 0x1E8000–0x200000、AUTH / Slot3 / ピンイン / 音声領域とは重複しません。工場出荷時リセット（OEM消去 0xF000 まで）を行ってもこの領域は消去されません。注意：「構成のバックアップ」は 0x00A000 の設定領域のみをバックアップするため、このアドレス帳は含まれません。このページの CSV エクスポート/インポートを使用してください。',
      'mdcbookAddRow': '行を追加',
      'mdcbookExport': 'CSV エクスポート',
      'mdcbookImport': 'CSV インポート',
      'mdcbookColIndex': '#',
      'mdcbookColId': 'MDC ID',
      'mdcbookColIdSub': '16進数 0001–FFFF',
      'mdcbookColName': 'コールサイン',
      'mdcbookColNameSub': 'A–Z / 0–9、最大 6文字',
      'mdcbookCountFmt': '{used} / {max} 件入力済み',
      'mdcbookInvalidId': 'MDC ID は 0001–FFFF の16進数である必要があります',
      'mdcbookInvalidName': 'コールサインは A–Z と 0–9 のみ、最大 6 文字です',
      'mdcbookDupId': '重複する MDC ID が存在します: {id}',
      'mdcbookMaxRows': '上限の {max} 件に達しました',
      'mdcbookWriteEmpty': 'まずは有効なレコードを少なくとも1件入力してください',
      'mdcbookReadOk': 'デバイスからアドレス帳を読み込みました（{n} 件）',
      'mdcbookWriteOk': 'デバイスのアドレス帳に書き込みました（{n} 件）',
      'mdcbookReadEmpty': 'デバイスにアドレス帳データがありません',
      'mdcbookExportEmpty': 'テーブルが空のため、エクスポートする内容がありません',
      'mdcbookImportOk': '{n} 件をインポートしました',
      'mdcbookImportSkip': '{n} 行の無効なデータをスキップしました',
      
      // Flash firmware tab
      'fwFile': 'ファームウェアファイル (.bin)',
      'noFileSelected': 'ファイルが選択されていません',
      'remoteFetch': 'リモート取得',
      'localSelect': 'ローカル選択',
      'selectLocalFw': 'ローカルのファームウェアファイルを選択',
      'flashFirmware': 'ファームウェアを書き込む',
      
      // Font tab
      'fontDesc1': '中国語フォントを SPI Flash に書き込みます。1412文字の中国語フォント（省、都市、苗字、全国の中継局でよく使われる文字など）をサポートしています。最新の更新履歴でフォントに変更があった場合は、再度書き込む必要があります。',
      'fontWarning1': '⚠️ V4.5.3 以降の中国語チャンネルをサポートするファームウェアのみ、フォントの書き込みが必要です。',
      'fontWarning2': '⚠️ 通常起動して使用画面に入ってから USB を接続し、フォントを書き込んでください（バックアップやキャリブレーションの復元と同様に、BOOTモードは不要です）。',
      'fontFile': 'フォントファイル (.bin)',
      'selectLocalFont': 'ローカルのフォントファイルを選択',
      'flashFont': 'フォントを書き込む',
      
      // Dump calibration tab
      'dumpWarning': '⚠️ 純正ファームウェアから書き換える前に、1回だけバックアップしてください。まず通常起動して使用画面（チャンネルやメニューが表示される状態）に入り、USB を接続してエクスポートします。',
      'exportCalib': 'キャリブレーションデータをエクスポート',
      'downloadCalib': 'calibration.dat をダウンロード',
      
      // Restore calibration tab
      'restoreWarning': '⚠️ 復元前も同様に、通常起動して使用画面に入ってから USB を接続してください。書き込み完了後、デバイスは自動的に再起動します。お使いのファームウェアバージョンと一致するバックアップファイル（512バイト）を使用してください。',
      'selectCalibFile': 'キャリブレーションバックアップファイル (.dat) を選択',
      'restoreCalib': 'キャリブレーションを復元',
      
      // Calib check modal
      'calibCheckTitle': 'キャリブレーションデータチェック',
      'calibCheckDesc': 'キャリブレーション解析',
      'calibCheckOffical': '公式 / v4+ キャリブレーションアドレス (0x1E00)',
      'calibCheckThird': 'サードパーティ / v5+ キャリブレーションアドレス (0xB000)',
      'calibCheckBackup': 'キャリブレーションバックアップ',
      'calibCheckConfirm': '復元を確認',
      'calibCheckCancel': 'キャンセル',
      'calibReadDevice': 'デバイスのキャリブレーションを読み取る',
      'calibLoadBackup': 'バックアップファイルを読み込む',
      'calibExportBackup': 'バックアップをエクスポート',
      'calibWriteOfficial': '公式アドレスに書き込む',
      'calibWriteThirdParty': 'サードパーティアドレスに書き込む',
      
      // Flash device warning modal
      'flashWarningTitle': '書き込み前にデバイスのモデルを確認してください',
      'flashWarningText1': 'お使いのデバイスが Quansheng UV-K1 または UV-K5/UV-K6 V3 バージョンであることを確認してください。古いバージョンの UV-K5 および UV-K6 に書き込むと、完全に故障（文鎮化）します！！！',
      'flashWarningText2': '確認方法：本体背面のラベルに「V3」の文字があるか確認するか、販売者にお問い合わせください。',
      'flashWarningOk': '確認しました',
      
      // Snow screen warning HTML
      'snowScreenWarningHtml': 'V5.0.0 にアップデートして画面が砂嵐になった不運な方は、キャリブレーションに問題があるはずです。キャリブレーションをダウンロードして書き込んでください。',
      
      // Help page
      'helpBack': '戻る',
      'helpTitle': 'ヘルプドキュメント',
      'helpTocLoading': '読み込み中...',
      'helpContentLoading': 'ドキュメントを読み込んでいます...',
      'helpTocEmpty': '目次がありません',
      'helpContentError': 'ドキュメントの読み込みに失敗しました',
      'helpContentErrorHint': 'data/help.zh.md および data/help.en.md ファイルが存在することを確認してください。',
      'helpTocError': '読み込み失敗',
      
      // Language switcher
      'langSwitchTitle': '言語切替',
      'langSwitchZh': '中文',
      'langSwitchEn': 'English',
      'langSwitchLabel': 'EN',
      
      // Write frequency
      'freqChannel': 'チャンネル',
      'freqReceive': '受信周波数',
      'freqTransmit': '送信周波数',
      'freqOffset': 'オフセット',
      'freqMode': 'モード',
      'freqName': '名称',
      'freqPower': '出力',
      'freqBandwidth': '帯域幅',
      'freqAdd': '追加',
      'freqRead': '読み込み',
      'freqWrite': '書き込み',
      'freqClear': 'クリア',
      'writefreqNote': 'ヒント：チャンネル書き込み機能は叮咚鶏（Dondji）ファームウェア専用です。文字が欠けている場合は、',
      'clickSupplement': 'こちらをクリックして補完',
      'readFromDevice': 'デバイスから読み込む',
      'writeToDevice': 'デバイスに書き込む',
      'exportExcel': 'Excel エクスポート',
      'importExcel': 'Excel インポート',
      'dragSort': 'ドラッグして並び替え',
      'freqNameSub': 'UTF-8 最大 15 バイト',
      'freqMHz': 'MHz',
      'freqPowerSub': '（USER を除く）',
      'freqRxDCS': '受信 DCS',
      'freqRxCTCSS': '受信 CTCSS',
      'freqTxDCS': '送信 DCS',
      'freqTxCTCSS': '送信 CTCSS',
      'freqDCS': 'DCS',
      'freqCTCSS': 'CTCSS',
      'freqOffsetDir': 'オフセット方向',
      'freqOffsetDirSub': 'MENU オフセット方向',
      'freqModeSub': 'FM/AM/USB',
      'freqStep': 'ステップ',
      'freqkHz': 'kHz',
      'freqList': 'チャンネルリスト',
      'freqListSub': '複数選択対象',
      'clearRow': 'この行をクリア',
      'prevPage': '前のページ',
      'nextPage': '次のページ',
      'freqRowsPerPage': '1ページあたりの行数',
      'freqRowsPerPageTitle': '1ページ最大 200 行',
      'freqPageInfoText': '合計 {total} 件 · 入力済み {filled} 件 · {cur} / {pages} ページ · 1ページあたり {size} チャンネル',
    
    // Log messages
    'logRequestSerial': 'シリアルポートを要求しています...',
    'logConnected': '接続されました',
    'logDisconnected': '切断されました',
    'logWaitingDevice': 'デバイスを待っています...',
    'logDeviceInfo': 'デバイス情報: ',
    'logUid': 'UID: ',
    'logBootloader': 'ブートローダー: ',
    'logFirmwareInfo': 'ファームウェア v{ver}：キャリブレーション領域ベースアドレス {addr}',
    'logDeviceInfoHex': 'デバイス情報 (hex): ',
    'logRequestingDeviceInfo': 'デバイス情報を要求しています（{purpose}）...',
    'logReceivedMessage': 'メッセージを受信しました: 0x{type}',
    'logDeviceReady': 'デバイスの準備が完了しました（{purpose} セッション）',
    'logFirmwareLoaded': 'ファームウェアを読み込みました：{name} ({size} バイト)',
    'logStartFlash': 'ファームウェアの書き込みを開始します...',
    'logFlashProgress': 'ページ {page}/{total}',
    'logFlashComplete': 'ファームウェアの書き込みが完了しました！',
    'logError': 'エラー: {msg}',
    'logLoadingFile': '読み込み中...{name}',
    'logFirmwareLoadedDefault': 'ファームウェアを読み込みました: {name} ({size} バイト)',
    'logLoadFailed': '読み込み失敗: {msg}',
    'logFontLoaded': 'フォントを読み込みました：{name} ({size} バイト)',
    'logFontLoadedDefault': 'フォントを読み込みました: {name} ({size} バイト)',
    'logDetectDevice': 'デバイスモードを検出中...',
    'logDeviceCustomFirmware': 'デバイスはカスタムファームウェアを実行しています。フォントの書き込みを開始します...',
    'logRetry': '再試行 @ 0x{addr} ({retry})',
    'logWrittenBytes': '{written}/{total} バイト書き込み済み',
    'logFontFlashComplete': 'フォントの書き込みが完了しました！ 合計 {size} バイト',
    'logVersionWriteTimeout': 'バージョンマーカーの書き込みがタイムアウトしました（ファームウェアが SPI Flash の書き込みをサポートしていない可能性があります）',
    'logVersionWritten': 'バージョンマーカーが書き込まれました',
    'logVerifyPass': '検証合格：フォントデータは正常です',
    'logVerifyWarning': '検証警告：先頭バイト 0x{w0} 0x{w1}（期待値 0x1100 0x2100）',
    'logVerifySkip': '検証スキップ：読み込みタイムアウト',
    'logExportCalibration': 'キャリブレーションデータをエクスポート中...',
    'logCalibrationExportComplete': 'キャリブレーションデータのエクスポートが完了しました',
    'logFileSizeError': 'ファイルサイズエラー: {size}（必要: {expected}）',
    'logCalibrationFileLoaded': 'キャリブレーションファイルを読み込みました: {name}',
    'logRestoreCalibration': 'キャリブレーションデータを復元中...',
    'logCalibrationRestoreComplete': 'キャリブレーションデータの復元が完了しました！再起動しています...',
    'logDeviceRebooted': 'デバイスが再起動しました',
    'logFirmwareCalibBase': 'ファームウェア v{ver}：キャリブレーション領域ベースアドレス 0x{addr}',
    'logReadCalibration': 'キャリブレーションデータを読み込み中 @ 0x{addr}...',
    'logCalibrationReadComplete': 'キャリブレーションの読み込みが完了しました @ 0x{addr}',
    'logDeviceCalibrationReadComplete': 'デバイスのキャリブレーション読み込みが完了しました',
    'logBackupCalibrationLoaded': 'バックアップキャリブレーションを読み込みました: {name}',
    'logNoBackupCalibration': 'エクスポートできるバックアップキャリブレーションデータがありません',
    'logBackupCalibrationExported': 'バックアップキャリブレーションをエクスポートしました',
    'logWriteCalibration': 'キャリブレーションを 0x{addr} に書き込み中...',
    'logCalibrationWriteComplete': 'キャリブレーションの書き込みが完了しました！再起動しています...',
    'logNoBackupCalibrationToWrite': '書き込めるバックアップキャリブレーションデータがありません',
    'logExportConfig': '構成データをエクスポート中...',
    'logConfigExportComplete': '構成データのエクスポートが完了しました',
    'logConfigFileLoaded': '構成ファイルを読み込みました: {name}',
    'logRestoreConfig': '構成データを復元中...',
    'logConfigRestoreComplete': '構成データの復元が完了しました！再起動しています...',
    'logWebSerialUnsupported': 'ブラウザが Web Serial API をサポートしていません。Chrome / Edge / Opera をご使用ください',
    'logWritefreqReadFailed': 'チャンネル読み込み失敗: {msg}',
    'logWritefreqReadSuccess': 'テーブルをクリアした後、デバイスから {count} 件を取り込みました（未使用スロット、および完全性検証に適合しないスロット：RX範囲、有効出力、帯域幅と周波数の不一致、解析不能なトーンはスキップ）。スキャンしたスロット数: {scanned}',
    'logChannelNameTruncate': 'チャンネル名切り捨ての警告（≤15 バイト UTF-8、超過分は ... で終了）:\n{warn}',
    'logValidationFailed': '検証に失敗したため、デバイスには書き込まれませんでした',
    'logWritefreqSuccess': '入力済みの {count} チャンネルの書き込みに成功しました。残りの {empty} チャンネルは未使用として消去されました',
    'logRebootingDevice': '新しいチャンネルデータを読み込むため、デバイスを再起動しています…',
    'logRebootSent': '再起動コマンドを送信しました（デバイスが自動リセットされます）',
    'logWritefreqWriteFailed': 'チャンネル書き込み失敗: {msg}',
    'logSheetJSNotLoaded': 'SheetJS が読み込まれていないため、CSV エクスポートに切り替えます',
    'logCsvExportSuccess': 'CSV をエクスポートしました（受信周波数が入力されているチャンネルのみ、計 {count} 行）',
    'logExcelExportSuccess': 'Excel をエクスポートしました（受信周波数が入力されているチャンネルのみ、計 {count} 行）',
    'logTableEmpty': 'テーブルの内容が空であるか、ヘッダーが不足しています',
    'logCsvImportSuccess': 'CSV をインポートしました（計 {count} 行、有効チャンネル {valid} 件）',
    'logFirstRowInvalid': '1行目のデータ（チャンネル番号）が無効です',
    'logRowChannelInvalid': '{row} 行目のデータ：チャンネル番号が無効です',
    'logRowChannelOutOfBounds': '{row} 行目のデータ：チャンネル番号が範囲外です',
    'logLoadSheetJSFirst': '最初に SheetJS を読み込むか、CSV インポートを使用してください',
    'logImportFailed': 'インポート失敗: {msg}',
    'logSelectImageFirst': '画像を選択してください',
    'logConnectFailed': '接続失敗: {msg}',
    'logUploadingBootLogo': '起動画面ロゴをアップロード中...',
    'logWrittenBytesProgress': '{written}/{total} バイト書き込み済み',
    'logBootLogoUploadSuccess': '起動画面ロゴのアップロードに成功しました！メニューの「起動画面」で「カスタム」を選択してください',
    'logUploadFailed': 'アップロード失敗: {msg}',
    'logReadingBootLogo': '起動画面ロゴを読み込み中...',
    'logBootLogoReadSuccess': '起動画面ロゴの読み込みに成功しました',
    'logReadFailed': '読み込み失敗: {msg}',
    'logVerifyWarning': '検証警告：先頭バイト 0x{w0} 0x{w1}（期待値 0x1100 0x2100）',
    'logReadCalibrationAddr': 'キャリブレーションデータを読み込み中 @ 0x{addr}...',
    'logCalibrationReadAddrComplete': 'キャリブレーションの読み込みが完了しました @ 0x{addr}',
    'logDeviceCalibrationReadComplete': 'デバイスのキャリブレーション読み込みが完了しました',
    'logBackupCalibrationLoaded': 'バックアップキャリブレーションを読み込みました: {name}',
    'logNoBackupCalibrationExport': 'エクスポートできるバックアップキャリブレーションデータがありません',
    'logBackupCalibrationExported': 'バックアップキャリブレーションをエクスポートしました',
    'logWriteCalibrationAddr': 'キャリブレーションを 0x{addr} に書き込み中...',
    'logCalibrationWriteComplete': 'キャリブレーションの書き込みが完了しました！再起動しています...',
    'logNoBackupCalibrationWrite': '書き込めるバックアップキャリブレーションデータがありません',
    'logExportConfig': '構成データをエクスポート中...',
    'logConfigExportComplete': '構成データのエクスポートが完了しました',
    'logConfigFileSizeError': 'ファイルサイズエラー: {size}（必要: {expected}）',
    'logConfigFileLoaded': '構成ファイルを読み込みました: {name}',
    'logRestoreConfig': '構成データを復元中...',
    'logConfigRestoreComplete': '構成データの復元が完了しました！再起動しています...',
    
    // Visitor statistics
    'visitorTotalPrefix': '合計',
    'visitorTotalSuffix': '人のハムがこのサイトにアクセスしました',
    'visitorTodayPrefix': '本日あなたと一緒に書き込んでいるのは',
    'visitorTodaySuffix': '人です',
      'writeSuccess': '入力済みの {count} チャンネルの書き込みに成功しました。残りの {empty} チャンネルは未使用として消去されました',
      'exportCSVSucc': 'CSV をエクスポートしました（入力済みチャンネルのみ、計 {count} 行）',
      'exportExcelSucc': 'Excel をエクスポートしました（入力済みチャンネルのみ、計 {count} 行）',
      
      // Writefreq table placeholders and options
      'freqNamePlaceholder': 'ASCII または漢字など、≤15 バイト UTF-8',
      'freqRxPlaceholder': '例 438.500000',
      'freqOffsetPlaceholder': '例 5.000000',
      'freqSelectPower': '出力を選択してください',
      'freqNoParticipate': '参加しない',
      'freqScanlistAll': 'すべて',
      'freqScanlistItem': 'リスト {num}',
      'freqValidationError': '出力を選択してください（USER を除く）',
      'freqSftClose': 'オフ',
      'freqSftPlus': '+',
      'freqSftMinus': '−',
      
      // Logo
      'logoDesc': 'カスタム起動画面ロゴをアップロード（128x64ピクセル、白黒ビットマップ）',
      'logoDesc1': 'カスタムの 128×64 起動ロゴをトランシーバーにアップロードします。PNG、JPG、BMP などの形式をサポートしており、画像は自動的にリサイズされ、モノクロビットマップに変換されます。メニューの「起動画面」で「カスタム」を選択すると表示されます。',
      'logoWarning': '⚠️ 通常起動して使用画面に入ってから USB を接続してください（フォントの書き込み、キャリブレーションバックアップと同様に、BOOTモードは不要です）。',
      'logoFile': '画像ファイル (.bmp)',
      'logoFlash': '起動ロゴを書き込む',
      'logoDefault': 'デフォルトのロゴに戻す',
      
      // Backup config
      'backupCfgDesc': '現在のデバイスの構成ファイルをバックアップします',
      'backupCfgDesc1': 'デバイスの構成データ（メニュー設定、キー設定など）をバックアップします。工場出荷時リセット後にすべての設定項目を素早く復元するために使用します。',
      'backupCfgWarning': '⚠️ バックアップの前に、通常起動して使用画面に入ってから USB を接続してください。',
      'backupCfgUsage': '使用シナリオ：構成をバックアップ → 他のファームウェアに書き換えてから戻し、全データを消去 → 「構成の復元」で全設定項目を復元。',
      'backupCfg': '構成バックアップ',
      'exportCfgData': '構成データをエクスポート',
      'downloadCfgBackup': 'config_backup.dat をダウンロード',
      
      // Restore config
      'restoreCfgDesc': '以前にバックアップした構成データを復元し、すべてのメニュー設定項目を素通りに復元します。',
      'restoreCfgWarning': '⚠️ 復元前も同様に、通常起動して使用画面に入ってから USB を接続してください。書き込み完了後、デバイスは自動的に再起動します。',
      'restoreCfgFile': '構成ファイル (.dat) を選択',
      'selectCfgBackup': '構成バックアップファイル (.dat) を選択',
      'restoreCfg': '構成復元',
      'restoreCfgData': '構成データを復元',
      'selectFile': 'ファイルを選択',
      
      // Toolbox
      'toolboxDesc': '一般的な問題を修復するための緊急ツールボックス',
      'toolboxDesc2': '緊急ツールボックスでは、文鎮からの復旧や工場出荷時状態への復元用のキャリブレーションファイルと純正ファームウェアのダウンロードを提供しています。',
      'toolboxReset': 'デバイスをリセット',
      'toolboxReboot': 'デバイスを再起動',
      'toolboxDowngrade': 'UV-K1(8) 純正復元チュートリアル',
      'clickDetail': '詳細を見る',
      'toolboxK1Calib': 'K1 キャリブレーションファイル',
      'toolboxK6Calib': 'K6 V3 キャリブレーションファイル',
      'toolboxK1StockEn': 'K1 純正英語版ファームウェア',
      'toolboxK1StockEnV703': 'K1 純正英語版ファームウェア',
      'toolboxK5V3StockEn': 'K5 V3 純正英語版ファームウェア',
      'toolboxK1StockCn': 'K1 公式中国語ファームウェア',
      'toolboxK5V3StockCn': 'K5 V3 公式ファームウェア',
      'toolboxK1CPS': 'K1 公式チャンネル書き込みソフトウェア',
      'toolboxK1InitFreq': '周波数初期化（緊急用）',
      'toolboxK1InitFreqTip': '周波数に問題がある場合は、純正の書き込みソフトで周波数をインポートしてください',
      'toolboxK1VoiceRes': 'K1 中国語フォント・音声リソース',
      
      // Downgrade guide modal
      'downgradeTitle': '🔧 UV-K1(8) 純正復元チュートリアル',
      'downgradeSubtitle': '叮咚鶏メニューの「初期化 → 純正 (OEM)」でチャンネル書き込みキーを消去した後、公式 CPS で純正ファームウェアに書き戻します：',
      'downgradeStep1Title': 'すべてのメニューを解除：',
      'downgradeStep1Content': '電源を切った状態で、PTTと、そのすぐ下にあるサイドボタンを同時に押しながら電源を入れ、すべてのメニューを表示させます。',
      'downgradeStep2Title': '「純正」初期化を実行：',
      'downgradeStep2Content': '「その他」→「初期化」を開き、「純正」(OEM) を選択して確認します。',
      'downgradeStep3Title': '電源を切る：',
      'downgradeStep3Content': '画面に「請関機」または「PWR OFF」が表示されたら電源を切ります。',
      'downgradeStep4Title': '公式 CPS で純正ファームウェアを書き込む：',
      'downgradeStep4Content': '公式の書き込みソフトを使用：デバイス → アップグレードプログラム → アップグレード。純正ファームウェアはこのページの緊急ツールボックスからダウンロードできます。',
      'downgradeNote': '説明：この操作により、AES チャンネル書き込みキーを保持している Flash 領域が消去され、公式に戻した後に CPS がパスワードを要求するのを防ぎます。キャリブレーションデータは保持されます。',
      'downgradeCredit': 'アイデアを提供してくださった @sfyzzw 氏に感謝します',
      'toolboxStockFw': 'K1 公式中国語ファームウェア',
      'toolboxK6StockFw': 'K6 V3 公式ファームウェア',
      
      // Logo tab
      'selectImage': '画像を選択',
      'threshold': 'しきい値',
      'invert': '反転',
      'invertBW': '白黒反転',
      'preview': 'プレビュー',
      'uploadLogo': '起動ロゴをアップロード',
      'readLogo': '起動ロゴを読み込む',
      'downloadLogo': 'boot_logo.png をダウンロード',
      
      // Log
      'showLog': 'ログを表示',
      'hideLog': 'ログを隠す',
      
      // Footer and aside
      'note': '注意：',
      'browserNote': 'Chrome / Edge / Opera ブラウザが必要です。',
      'flashFirmwareBoot': 'ファームウェア書き込みのみ',
      'enterBootMode': 'BOOT モードに入る必要があります（PTT を押しながら電源を入れる）。',
      'otherOperations': 'フォント書き込み、キャリブレーションのバックアップ/復元、起動ロゴ',
      'normalMode': 'すべて通常起動の使用画面状態で USB を接続して操作します。',
      'footerDev': 'ファームウェア & ツール開発: BD1AHN',
      'footerUVTools': 'UVTools2',
      
      // Coffee modal
      'coffeeTitle': '☕ 作者にコーヒーを奢る',
      'coffeeText1': '叮咚鶏ファームウェアをご利用いただきありがとうございます！このウェブサイトとファームウェアの維持には多大な時間と労力がかかり、運営、開発、テストなどのコストをサポートする必要があります。',
      'coffeeText2': 'このプロジェクトがお役に立ちましたら、ぜひ寄付によるサポートをお願いいたします！寄付の際は、サポートへの感謝をお伝えできるよう、お手数ですがコールサインをメモに残してください！',
      'wechatPay': 'WeChat Pay (微信支付)',
      'aliPay': 'Alipay (支付宝)',
      'donationBoard': '寄付者ランキング',
      'donationTime': '時間',
      'donationName': 'ニックネーム',
      'donationAmount': '金額',
      'donationMessage': 'メッセージ',
      'donationSource': 'ソース',
      'loading': '読み込み中...',
      'loadingFile': '読み込み中...',
      'noDonationRecord': '寄付記録はまだありません',
      'coffeeNotice': '無理のない範囲で、気持ちが大切です。比較せず、自発的なものとします。',
      'exit': '終了',
      'coffeeDesc': 'ご支援ありがとうございます！',
      'donationList': '寄付者リスト',
      'close': '閉じる',
      
      // Misc
      'connecting': '接続中...',
      'connected': '接続済み',
      'disconnected': '切断されました',
      'success': '操作成功',
      'error': '操作失敗',
      'confirm': '確認',
      'cancel': 'キャンセル'
    },
    
    en: {
      // Page title and meta
      'pageTitle': 'UV-K1 / UV-K5(K6) V3',
      'pageTitleHelp': 'Help Documentation - Dondji',
      
      // Loading overlay
      'loadingNetworkPoor': 'Buddy, your network seems slow~',
      'loadingChicken': 'Dondji is loading...',
      'loadingProgress': '0%',
      
      // Top marquee
      'marqueeText': '📻 Total {uv} Hams visited this site, {today_uv} flashing with you today 📻',
      
      // Header buttons
      'helpDoc': 'Help',
      'helpDocTitle': 'Help Documentation',
      'themeToggleTitle': 'Toggle light theme',
      
      // Social chips — platform labels + account names stay Chinese in EN UI
      'douyin': '抖音',
      'douyinName': '小閆連不上',
      'bili': 'B站',
      'biliName': '小閆連不上',
      'redbook': '小紅書',
      'redbookName': '小閆同学',
      'wechatVideo': '微信视频号',
      'wechatVideoName': '小閆連不上',
      'fmoScreen': 'FMO Screen',
      'travelJournal': 'Travel Journal',
      'drivingHud': 'Driving HUD',
      'clickView': 'Click to view',
      'wechatGroup': 'WeChat Group',
      'otherFirmwareLink': 'Other Firmware',
      'otherFirmwareName': 'Mangosteen',
      'syrupFirmwareName': 'Syrup',
      'gameFirmwareName': 'Game Firmware',
      'flashToolLink': 'Flash Tool',
      'multiFirmwareToolName': 'Multi Firmware',
      'otherFirmware': 'Other Firmware Collection',
      'mediaAccount': 'BD1AHN Media Accounts',
      'collapseChips': 'Collapse',
      'expandChips': 'Expand',
      
      // Timeline sidebar
      'timelineTitle': 'Dondji Version History',
      'timelineLoading': 'Loading...',
      
      // Main header
      'mainTitle': 'UV-K1 / UV-K5(K6) V3 Web Tool',
      'devBy': 'Developed by {dev}',
      'buyCoffee': 'Buy him a coffee',
      'buyCoffeeTitle': 'Click to open donation page',
      
      // Flash steps
      'flashSteps': 'Flash Steps',
      'flashStepsOrder': 'Recommended flashing order',
      'step1': 'Backup Calibration',
      'step1Tooltip': 'Backup calibration once with stock firmware. Use original calibration for later restore. Backup while device is powered on.',
      'step2': 'Flash Firmware',
      'step2Tooltip': 'After powering off, hold PTT button and turn knob to power on, entering flash mode.',
      'step3': 'Clear Data',
      'step3Tooltip': 'Required after first flashing Dondji firmware. Suggest "Backup Config" first. Power off, hold PTT and side key below PTT, then power on to unlock all menus. Select "All" in "Factory Reset" under "Other". Reset channel and config storage. Can restore via "Restore Config".',
      'step4': 'Flash Font',
      'step4Tooltip': 'Not needed if update log shows no font changes. Flash font while powered on. Each firmware version has its own font file, do not mix!',
      'step5': 'Restore Calibration',
      'step5Tooltip': 'Required after first flashing Dondji or upgrading to V5.0.0+. Perform while powered on. Note: Only calibration files from this site and uvtools2 support restore.',
      'step6': 'Frequency Programming',
      'step6Tooltip': 'Perform while powered on. Connection disconnects after read/write, this is normal to prevent long port occupation and accidental operations.',
      
      // Warning messages
      'calibWarning': 'Use original stock firmware calibration backup. Do not backup calibration every time, later backups may be wrong!',
      'snowScreenWarning': 'If you see snow screen after flashing V5.0.0, calibration is the issue. Download and flash calibration',
      'downloadCalibK1': 'Download calibration (K1)',
      'downloadCalibK6V3': 'Download calibration (K6V3)',
      
      // Tabs
      'tabDump': 'Backup Calib',
      'tabFlash': 'Flash Firmware',
      'tabFont': 'Flash Font',
      'tabRestore': 'Restore Calib',
      'tabWritefreq': 'Freq Program',
      'tabMdcbook': 'MDC Book',
      'tabLogo': 'Boot Logo',
      'tabBackupcfg': 'Backup Config',
      'tabRestorecfg': 'Restore Config',
      'tabToolbox': 'Toolbox',

      // MDC address book tab
      'mdcbookLead': 'MDC1200 address book: map MDC IDs to call signs (A–Z / 0–9, max 6 chars, e.g. BD1AHN). On a matching ID the radio popup shows the call sign; unmatched IDs still show as 4-digit hex.',
      'mdcbookMeta': 'Storage: SPI 0x011000 dedicated 4KB sector (after calibration). Up to 400 entries, 10 bytes each (2B ID + 8B name field, max 6 chars used) plus a 16-byte header. Does not use the game e-book area 0x1E8000–0x200000, AUTH, Slot3, pinyin, or voice. OEM factory reset (erase through 0xF000) keeps this sector. Note: Backup Config only covers 0x00A000 settings and does not include this address book — use CSV export/import here.',
      'mdcbookAddRow': 'Add Row',
      'mdcbookExport': 'Export CSV',
      'mdcbookImport': 'Import CSV',
      'mdcbookColIndex': '#',
      'mdcbookColId': 'MDC ID',
      'mdcbookColIdSub': 'hex 0001–FFFF',
      'mdcbookColName': 'Call Sign',
      'mdcbookColNameSub': 'A–Z / 0–9, max 6',
      'mdcbookCountFmt': '{used} / {max} filled',
      'mdcbookInvalidId': 'MDC ID must be hex 0001–FFFF',
      'mdcbookInvalidName': 'Call sign: A–Z and 0–9 only, max 6 chars',
      'mdcbookDupId': 'Duplicate MDC ID: {id}',
      'mdcbookMaxRows': 'Reached limit of {max} entries',
      'mdcbookWriteEmpty': 'Fill at least one valid entry first',
      'mdcbookReadOk': 'Read address book from device ({n} entries)',
      'mdcbookWriteOk': 'Wrote address book to device ({n} entries)',
      'mdcbookReadEmpty': 'No address book data on device',
      'mdcbookExportEmpty': 'Table is empty, nothing to export',
      'mdcbookImportOk': 'Imported {n} entries',
      'mdcbookImportSkip': 'Skipped {n} invalid row(s)',
      
      // Flash firmware tab
      'fwFile': 'Firmware file (.bin)',
      'noFileSelected': 'No file selected',
      'remoteFetch': 'Remote Fetch',
      'localSelect': 'Local Select',
      'selectLocalFw': 'Select local firmware file',
      'flashFirmware': 'Flash Firmware',
      
      // Font tab
      'fontDesc1': 'Flash Chinese font to SPI Flash, supports 1412 Chinese characters (provinces, cities, surnames, relay common characters etc.). Re-flash if font changes in latest version update log.',
      'fontWarning1': '⚠️ Only firmware V4.5.3+ supporting Chinese channels needs font flash.',
      'fontWarning2': '⚠️ Please enter normal usage interface first before connecting USB to flash font (same as backup/restore calibration, no BOOT mode needed).',
      'fontFile': 'Font file (.bin)',
      'selectLocalFont': 'Select local font file',
      'flashFont': 'Flash Font',
      
      // Dump calibration tab
      'dumpWarning': '⚠️️ Only backup once before flashing from stock firmware. First enter normal usage interface (showing channels and menus), then connect USB to export.',
      'exportCalib': 'Export Calibration Data',
      'downloadCalib': 'Download calibration.dat',
      
      // Restore calibration tab
      'restoreWarning': '⚠️ Same as restore, enter normal usage interface first before connecting USB; device auto-reboots after write. Use backup file matching firmware version (512 bytes).',
      'selectCalibFile': 'Select calibration backup file (.dat)',
      'restoreCalib': 'Restore Calibration',
      
      // Calib check modal
      'calibCheckTitle': 'Calibration Data Check',
      'calibCheckDesc': 'Calibration Interpretation',
      'calibCheckOffical': 'Official/v4+ Calib Addr(0x1E00)',
      'calibCheckThird': 'Third-party/v5+ Calib Addr(0xB000)',
      'calibCheckBackup': 'Backup Calibration',
      'calibCheckConfirm': 'Confirm Restore',
      'calibCheckCancel': 'Cancel',
      'calibReadDevice': 'Read Device Calibration',
      'calibLoadBackup': 'Load Backup Calibration File',
      'calibExportBackup': 'Export Backup Calibration',
      'calibWriteOfficial': 'Write to Official Address',
      'calibWriteThirdParty': 'Write to Third-party Address',
      
      // Flash device warning modal
      'flashWarningTitle': 'Confirm Device Model Before Flashing',
      'flashWarningText1': 'Check if your device is Quansheng UVK1, UVK5/UVK6 V3 version. Older UVK5 and UVK6 will brick!!!',
      'flashWarningText2': 'Check method: Look for V3 on back label, or ask seller.',
      'flashWarningOk': 'I understand',
      
      // Snow screen warning HTML
      'snowScreenWarningHtml': 'If you see snow screen after flashing V5.0.0, calibration is the issue. Download and flash calibration',
      
      // Help page
      'helpBack': 'Back',
      'helpTitle': 'Help Documentation',
      'helpTocLoading': 'Loading...',
      'helpContentLoading': 'Loading documentation...',
      'helpTocEmpty': 'No TOC',
      'helpContentError': 'Failed to load document',
      'helpContentErrorHint': 'Please ensure data/help.zh.md and data/help.en.md exist.',
      'helpTocError': 'Load failed',
      
      // Language switcher
      'langSwitchTitle': 'Switch Language',
      'langSwitchZh': '中文',
      'langSwitchEn': 'English',
      'langSwitchLabel': '中文',
      
      // Write frequency
      'freqChannel': 'Channel',
      'freqReceive': 'RX Frequency',
      'freqTransmit': 'TX Frequency',
      'freqOffset': 'Offset',
      'freqMode': 'Mode',
      'freqName': 'Name',
      'freqPower': 'Power',
      'freqBandwidth': 'Bandwidth',
      'freqAdd': 'Add',
      'freqRead': 'Read',
      'freqWrite': 'Write',
      'freqClear': 'Clear',
      'writefreqNote': 'Note: Frequency programming is for Dondji firmware only. Missing characters:',
      'clickSupplement': 'Click to submit',
      'readFromDevice': 'Read from Device',
      'writeToDevice': 'Write to Device',
      'exportExcel': 'Export Excel',
      'importExcel': 'Import Excel',
      'dragSort': 'Drag to sort',
      'freqNameSub': 'UTF-8 max 15 bytes',
      'freqMHz': 'MHz',
      'freqPowerSub': '(Exclude USER)',
      'freqRxDCS': 'RX DCS',
      'freqRxCTCSS': 'RX CTCSS',
      'freqTxDCS': 'TX DCS',
      'freqTxCTCSS': 'TX CTCSS',
      'freqDCS': 'DCS',
      'freqCTCSS': 'CTCSS',
      'freqOffsetDir': 'Offset Dir',
      'freqOffsetDirSub': 'MENU Offset Dir',
      'freqModeSub': 'FM/AM/USB',
      'freqStep': 'Step',
      'freqkHz': 'kHz',
      'freqList': 'Channel List',
      'freqListSub': 'Multi-select',
      'freqNoParticipate': 'Not Participate',
      'freqScanlistAll': 'All',
      'freqScanlistItem': 'List {num}',
      'clearRow': 'Clear row',
      'prevPage': 'Previous',
      'nextPage': 'Next',
      'freqRowsPerPage': 'Rows per page',
      'freqRowsPerPageTitle': 'Up to 200 rows per page',
      'freqPageInfoText': 'Total {total} · Filled {filled} · Page {cur} / {pages} · {size} channels per page',
    
    // Log messages
    'logRequestSerial': 'Requesting serial port...',
    'logConnected': 'Connected',
    'logDisconnected': 'Disconnected',
    'logWaitingDevice': 'Waiting for device...',
    'logDeviceInfo': 'Device info: ',
    'logUid': 'UID: ',
    'logBootloader': 'Bootloader: ',
    'logFirmwareInfo': 'Firmware v{ver}: Calibration base address {addr}',
    'logDeviceInfoHex': 'Device info(hex): ',
    'logRequestingDeviceInfo': 'Requesting device info ({purpose})...',
    'logReceivedMessage': 'Received message: 0x{type}',
    'logDeviceReady': 'Device ready ({purpose} session)',
    'logFirmwareLoaded': 'Firmware loaded: {name} ({size} bytes)',
    'logStartFlash': 'Starting firmware flash...',
    'logFlashProgress': 'Page {page}/{total}',
    'logFlashComplete': 'Firmware flash complete!',
    'logError': 'Error: {msg}',
    'logLoadingFile': 'Loading...{name}',
    'logFirmwareLoadedDefault': 'Firmware loaded: {name} ({size} bytes)',
    'logLoadFailed': 'Load failed: {msg}',
    'logFontLoaded': 'Font loaded: {name} ({size} bytes)',
    'logFontLoadedDefault': 'Font loaded: {name} ({size} bytes)',
    'logDetectDevice': 'Detecting device mode...',
    'logDeviceCustomFirmware': 'Device running custom firmware, starting font flash...',
    'logRetry': 'Retry @ 0x{addr} ({retry})',
    'logWrittenBytes': 'Written {written}/{total} bytes',
    'logFontFlashComplete': 'Font flash complete! Total {size} bytes',
    'logVersionWriteTimeout': 'Version write timeout (firmware may not support SPI Flash write)',
    'logVersionWritten': 'Version written',
    'logVerifyPass': 'Verification passed: font data correct',
    'logVerifyWarning': 'Verification warning: first bytes 0x{w0} 0x{w1} (expected 0x1100 0x2100)',
    'logVerifySkip': 'Verification skipped: read timeout',
    'logExportCalibration': 'Exporting calibration data...',
    'logCalibrationExportComplete': 'Calibration data export complete',
    'logFileSizeError': 'File size error: {size} (expected {expected})',
    'logCalibrationFileLoaded': 'Calibration file loaded: {name}',
    'logRestoreCalibration': 'Restoring calibration data...',
    'logCalibrationRestoreComplete': 'Calibration restore complete! Rebooting...',
    'logDeviceRebooted': 'Device rebooted',
    'logFirmwareCalibBase': 'Firmware v{ver}: calibration base 0x{addr}',
    'logReadCalibration': 'Reading calibration @ 0x{addr}...',
    'logCalibrationReadComplete': 'Calibration read complete @ 0x{addr}',
    'logDeviceCalibrationReadComplete': 'Device calibration read complete',
    'logBackupCalibrationLoaded': 'Backup calibration loaded: {name}',
    'logNoBackupCalibration': 'No backup calibration data to export',
    'logBackupCalibrationExported': 'Backup calibration exported',
    'logWriteCalibration': 'Writing calibration to 0x{addr}...',
    'logCalibrationWriteComplete': 'Calibration write complete! Rebooting...',
    'logNoBackupCalibrationToWrite': 'No backup calibration data to write',
    'logExportConfig': 'Exporting config data...',
    'logConfigExportComplete': 'Config data export complete',
    'logConfigFileLoaded': 'Config file loaded: {name}',
    'logRestoreConfig': 'Restoring config data...',
    'logConfigRestoreComplete': 'Config restore complete! Rebooting...',
    'logWebSerialUnsupported': 'Browser does not support Web Serial API, please use Chrome/Edge/Opera',
    'logWritefreqReadFailed': 'Writefreq read failed: {msg}',
    'logWritefreqReadSuccess': 'Table cleared and filled {count} channels from device (skipped unused slots and invalid slots: RX range, valid power, band matches frequency, parseable tones); scanned {scanned} slots',
    'logChannelNameTruncate': 'Channel name truncate warning (≤15 bytes UTF-8, excess ends with ...):\n{warn}',
    'logValidationFailed': 'Validation failed, not written to device',
    'logWritefreqSuccess': 'Successfully written {count} filled channels; remaining {empty} erased as unused',
    'logRebootingDevice': 'Rebooting device to load new channel data...',
    'logRebootSent': 'Reboot command sent (device will auto-reset)',
    'logWritefreqWriteFailed': 'Writefreq write failed: {msg}',
    'logSheetJSNotLoaded': 'SheetJS not loaded, using CSV export instead',
    'logCsvExportSuccess': 'CSV exported (only filled Rx frequency channels, {count} rows)',
    'logExcelExportSuccess': 'Excel exported (only filled Rx frequency channels, {count} rows)',
    'logTableEmpty': 'Table empty or missing headers',
    'logCsvImportSuccess': 'CSV imported ({count} rows, {valid} valid channels)',
    'logFirstRowInvalid': 'First row channel number invalid',
    'logRowChannelInvalid': 'Row {row} data: channel number invalid',
    'logRowChannelOutOfBounds': 'Row {row} data: channel number out of bounds',
    'logLoadSheetJSFirst': 'Please load SheetJS first or use CSV import',
    'logImportFailed': 'Import failed: {msg}',
    'logSelectImageFirst': 'Please select an image first',
    'logConnectFailed': 'Connection failed: {msg}',
    'logUploadingBootLogo': 'Uploading boot logo...',
    'logWrittenBytesProgress': 'Written {written}/{total} bytes',
    'logBootLogoUploadSuccess': 'Boot logo uploaded successfully! Please select "Custom" in menu "Boot Screen"',
    'logUploadFailed': 'Upload failed: {msg}',
    'logReadingBootLogo': 'Reading boot logo...',
    'logBootLogoReadSuccess': 'Boot logo read successfully',
    'logReadFailed': 'Read failed: {msg}',
    'logVerifyWarning': 'Verification warning: first bytes 0x{w0} 0x{w1} (expected 0x1100 0x2100)',
    'logReadCalibrationAddr': 'Reading calibration @ 0x{addr}...',
    'logCalibrationReadAddrComplete': 'Calibration read complete @ 0x{addr}',
    'logDeviceCalibrationReadComplete': 'Device calibration read complete',
    'logBackupCalibrationLoaded': 'Backup calibration loaded: {name}',
    'logNoBackupCalibrationExport': 'No backup calibration data to export',
    'logBackupCalibrationExported': 'Backup calibration exported',
    'logWriteCalibrationAddr': 'Writing calibration to 0x{addr}...',
    'logCalibrationWriteComplete': 'Calibration write complete! Rebooting...',
    'logNoBackupCalibrationWrite': 'No backup calibration data to write',
    'logExportConfig': 'Exporting config data...',
    'logConfigExportComplete': 'Config data export complete',
    'logConfigFileSizeError': 'File size error: {size} (expected {expected})',
    'logConfigFileLoaded': 'Config file loaded: {name}',
    'logRestoreConfig': 'Restoring config data...',
    'logConfigRestoreComplete': 'Config restore complete! Rebooting...',
    
    // Visitor statistics
    'visitorTotalPrefix': 'Total',
    'visitorTotalSuffix': 'Hams have visited this site',
    'visitorTodayPrefix': 'Today you are flashing with',
    'visitorTodaySuffix': 'people',
      'writeSuccess': 'Write successful: {count} filled channels; {empty} erased as unused',
      'exportCSVSucc': 'CSV exported (filled channels only, {count} rows)',
      'exportExcelSucc': 'Excel exported (filled channels only, {count} rows)',
      
      // Writefreq table placeholders and options
      'freqNamePlaceholder': 'ASCII or Chinese, ≤15 bytes UTF-8',
      'freqRxPlaceholder': 'Ex: 438.500000',
      'freqOffsetPlaceholder': 'Ex: 5.000000',
      'freqSelectPower': 'Select Power',
      'freqNoParticipate': 'Not Participate',
      'freqValidationError': 'Please select power (USER excluded)',
      'freqSftClose': 'Close',
      'freqSftPlus': '+',
      'freqSftMinus': '−',
      'freqScanlistAll': 'All',
      
      // Logo
      'logoDesc': 'Upload custom boot logo (128x64 pixels, black and white bitmap)',
      'logoDesc1': 'Upload custom 128×64 boot logo. Supports PNG, JPG, BMP formats. Image will be scaled and converted to monochrome bitmap. Select "Custom" in menu "Boot Logo" to display.',
      'logoWarning': '⚠️ Please enter normal usage interface first before connecting USB (same as font flash, calibration backup, no BOOT mode needed).',
      'logoFile': 'Image file (.bmp)',
      'logoFlash': 'Flash Boot Logo',
      'logoDefault': 'Restore Default Logo',
      
      // Backup config
      'backupCfgDesc': 'Backup current device configuration',
      'backupCfgDesc1': 'Backup device config data (menu settings, key settings etc.) for quick restore after factory reset.',
      'backupCfgWarning': '⚠️ Please enter normal usage interface first before connecting USB for backup.',
      'backupCfgUsage': 'Usage: Backup config → flash other firmware and back → cleared all data → restore via "Restore Config".',
      'backupCfg': 'Backup Config',
      'exportCfgData': 'Export Config Data',
      'downloadCfgBackup': 'Download config_backup.dat',
      
      // Restore config
      'restoreCfgDesc': 'Restore previously backed up config data to quickly restore all menu settings.',
      'restoreCfgWarning': '⚠️ Please enter normal usage interface first before connecting USB; device auto-reboots after write.',
      'restoreCfgFile': 'Select config file (.dat)',
      'selectCfgBackup': 'Select config backup file (.dat)',
      'restoreCfg': 'Restore Config',
      'restoreCfgData': 'Restore Config Data',
      'selectFile': 'Select File',
      
      // Toolbox
      'toolboxDesc': 'Emergency toolbox for fixing common issues',
      'toolboxDesc2': 'Emergency toolbox provides calibration files and stock firmware downloads for unbricking or factory restore.',
      'toolboxReset': 'Reset Device',
      'toolboxReboot': 'Reboot Device',
      'toolboxDowngrade': 'UVK1(8) Restore Stock Guide',
      'clickDetail': 'Click for details',
      'toolboxK1Calib': 'K1 Calibration File',
      'toolboxK6Calib': 'K6 V3 Calibration File',
      'toolboxK1StockEn': 'K1 Stock English Firmware',
      'toolboxK1StockEnV703': 'K1 Stock English Firmware',
      'toolboxK5V3StockEn': 'K5 V3 Stock English Firmware',
      'toolboxK1StockCn': 'K1 Chinese Stock Firmware',
      'toolboxK5V3StockCn': 'K5 V3 Stock Firmware',
      'toolboxK1CPS': 'K1 Official CPS',
      'toolboxK1InitFreq': 'Frequency Init (Emergency)',
      'toolboxK1InitFreqTip': 'If frequencies are wrong, import with the official CPS',
      'toolboxK1VoiceRes': 'K1 Chinese Font & Voice Resource',
      
      // Downgrade guide modal
      'downgradeTitle': '🔧 UVK1(8) Restore Stock Guide',
      'downgradeSubtitle': 'Use Dondji menu Factory Reset → OEM to wipe the programming key, then flash stock with official CPS:',
      'downgradeStep1Title': 'Unlock full menus:',
      'downgradeStep1Content': 'Power off, then hold PTT and the side key just below it while powering on to unlock all menus.',
      'downgradeStep2Title': 'Run OEM reset:',
      'downgradeStep2Content': 'Open Other → Factory Reset → select OEM → Confirm.',
      'downgradeStep3Title': 'Power off:',
      'downgradeStep3Content': 'When the screen shows “PWR OFF” (Chinese: 请关机), power off the radio.',
      'downgradeStep4Title': 'Flash stock with official CPS:',
      'downgradeStep4Content': 'In official CPS: Device → Upgrade Program → Upgrade. Stock firmware is available in this page’s Emergency Toolbox.',
      'downgradeNote': 'Note: This erases the Flash region that holds the AES programming key so CPS usually won’t ask for a password; calibration is kept.',
      'downgradeCredit': 'Thanks to @sfyzzw for the idea',
      'toolboxStockFw': 'K1 Chinese Stock Firmware',
      'toolboxK6StockFw': 'K6 V3 Stock Firmware',
      
      // Logo tab
      'selectImage': 'Select Image',
      'threshold': 'Threshold',
      'invert': 'Invert',
      'invertBW': 'Invert Black/White',
      'preview': 'Preview',
      'uploadLogo': 'Upload Boot Logo',
      'readLogo': 'Read Boot Logo',
      'downloadLogo': 'Download boot_logo.png',
      
      // Log
      'showLog': 'Show Log',
      'hideLog': 'Hide Log',
      
      // Footer and aside
      'note': 'Note:',
      'browserNote': 'Requires Chrome / Edge / Opera browser.',
      'flashFirmwareBoot': 'Only firmware flash',
      'enterBootMode': 'requires entering BOOT mode (hold PTT while powering on).',
      'otherOperations': 'Font flash, calibration backup/restore, boot logo',
      'normalMode': 'all operate in normal usage interface with USB connection.',
      'footerDev': 'Firmware & Tools developed by BD1AHN',
      'footerUVTools': 'UVTools2',
      
      // Coffee modal
      'coffeeTitle': '☕ Buy Author a Coffee',
      'coffeeText1': 'Thanks for using Dondji firmware! Maintaining this website and firmware requires significant time and effort. Operations, development, testing all need cost support.',
      'coffeeText2': 'If this project helps you, welcome to donate! Please note your callsign when donating, so I can thank you!',
      'wechatPay': 'WeChat Pay',
      'aliPay': 'Alipay',
      'donationBoard': 'Donation Board',
      'donationTime': 'Time',
      'donationName': 'Name',
      'donationAmount': 'Amount',
      'donationMessage': 'Message',
      'donationSource': 'Source',
      'loading': 'Loading...',
      'loadingFile': 'Loading...',
      'noDonationRecord': 'No donation records',
      'coffeeNotice': 'Donate what you can, heart matters most, no comparison, voluntary only.',
      'exit': 'Exit',
      'coffeeDesc': 'Thank you for your support!',
      'donationList': 'Donation List',
      'close': 'Close',
      
      // Misc
      'connecting': 'Connecting...',
      'connected': 'Connected',
      'disconnected': 'Disconnected',
      'success': 'Success',
      'error': 'Error',
      'confirm': 'Confirm',
      'cancel': 'Cancel'
    }
  };

  // Current language
  let currentLang = 'zh';

  // Get translation for a key
  function t(key, params = {}) {
    const langData = translations[currentLang] || translations.zh;
    let text = langData[key] || translations.zh[key] || key;
    
    // Replace placeholders like {total}, {filled}, etc. with actual values
    if (params && typeof params === 'object') {
      Object.keys(params).forEach(paramKey => {
        const regex = new RegExp('\\{' + paramKey + '\\}', 'g');
        text = text.replace(regex, String(params[paramKey]));
      });
    }
    
    return text;
  }

  // Export translation function globally
  window.t = t;
  window.getCurrentLang = () => currentLang;

  // Apply translations to elements with data-i18n attribute
  function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const params = el.getAttribute('data-i18n-params');
      let paramObj = {};
      if (params) {
        try {
          paramObj = JSON.parse(params);
        } catch (e) {}
      }
      el.textContent = t(key, paramObj);
    });

    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      el.title = t(key);
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      el.setAttribute('aria-label', t(key));
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.placeholder = t(key);
    });

    // Update dynamic content: writefreq table and pagination
    if (window.writefreqRebuildRows) {
      window.writefreqRebuildRows();
    }
    if (window.writefreqUpdatePaginationUI) {
      window.writefreqUpdatePaginationUI();
    }

    // Update page title
    const titleEl = document.querySelector('title');
    if (titleEl) {
      if (document.body.classList.contains('help-page')) {
        titleEl.textContent = t('pageTitleHelp');
      } else {
        titleEl.textContent = t('pageTitle');
      }
    }

    // Update html lang attribute
    document.documentElement.lang = currentLang;
  }

  // Switch language
  function switchLanguage(lang) {
    if (lang === currentLang) return;
    currentLang = lang;
    
    // Save preference
    try {
      localStorage.setItem('uvk1-web-lang', lang);
    } catch (e) {}
    
    // Apply translations
    applyTranslations();
    
    // Update button text
    const langBtn = document.getElementById('langSwitchBtn');
    if (langBtn) {
      const langText = langBtn.querySelector('.lang-switch__text');
      if (langText) {
        langText.textContent = lang === 'zh' ? 'EN' : '中文';
      }
    }

    // Dispatch event for other scripts to react
    window.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
  }

  // Toggle language
  function toggleLanguage() {
    switchLanguage(currentLang === 'zh' ? 'en' : 'zh');
  }

  // Initialize language from storage
  function initLanguage() {
    try {
      const savedLang = localStorage.getItem('uvk1-web-lang');
      if (savedLang && (savedLang === 'zh' || savedLang === 'en')) {
        currentLang = savedLang;
      }
    } catch (e) {}

    // Apply initial translations
    applyTranslations();

    // Update button text
    const langBtn = document.getElementById('langSwitchBtn');
    if (langBtn) {
      const langText = langBtn.querySelector('.lang-switch__text');
      if (langText) {
        langText.textContent = currentLang === 'zh' ? 'EN' : '中文';
      }
    }
  }

  // Create language switch button
  function createLangSwitchButton() {
    const langBtn = document.getElementById('langSwitchBtn');
    if (langBtn) {
      langBtn.addEventListener('click', toggleLanguage);
    }
  }

  // Initialize on DOM ready
  function init() {
    initLanguage();
    createLangSwitchButton();
  }

  // Export functions for external use
  window.i18n = {
    t,
    switchLanguage,
    getCurrentLang: () => currentLang,
    applyTranslations
  };

  // Run init
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();