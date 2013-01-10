chrome-ext-ato-ichinen
======================

概要 / Overview
----------
Activeにしている間、Google検索結果を指定期間に限定するChrome Extensionです。

Active、非Activeはアイコンをクリックすることで切り替えられます。

アイコンを右クリックしオプションから期間数(1〜9999)、期間単位(秒〜年)を指定できます。

インストール / Install
----------

`git clone https://github.com/snufkon/chrome-ext-ato-ichinen.git`

`Chrome --> 設定 --> 拡張機能` で右上の「デベロッパーモード」をチェックをONにしたうえ、
「パッケージ化されていない拡張機能を読み込む」ボタンで git clone した
`chrome-ext-ato-ichinen` ディレクトリを指定してください。

インストール(オリジナル版) / Install
----------
Chrome Web Storeで公開しています。

https://chrome.google.com/webstore/detail/pojaolkbbklmcifckclknpolncdmbaph

デバッグを行う際にはchromeの設定->拡張機能で右上の「デベロッパーモード」チェックボックスをONにしたうえで
 「パッケージ化されていないされていない拡張を読み込む」ボタンでこのパッケージを読み込んでください。

 上記の画面には下記URLからもアクセスできます。

chrome://settings/extensions

ショートカットキー / Shortcut Key
----------
Google Chrome のバージョン22以降、拡張機能にショートカットキーを割り当てることができます。

`設定->拡張機能->コマンドを設定する(ページ右下)`

で割り当てるキーを指定してください。

Pull Request / Pull Request
----------
まずはIssueを確認し、適切なIssueが見当たらない場合は登録してください。

devlopブランチからIssue#[Issue番号]という名前でブランチを切り、Pull Requestしてください。

ブランチ名の例) issue#1

テストにはqunit( http://docs.jquery.com/QUnit )を使用しています。ダウンロードしたパッケージをWebサーバのDocumentRootに配置し、chrome-ext-my-hatebu-search-in-google/test/ にアクセスすることでテストを実施できます。

テストの追加・修正 が必要な場合は、test/test.jsを修正のうえ、Pull Requestに含めてください。

ライセンス / License
----------
Copyright &copy; 2012 amazedkoumei
Licensed under the [MIT License][mit]
 
[MIT]: http://www.opensource.org/licenses/mit-license.php
