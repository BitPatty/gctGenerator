---
sidebar: auto
---

<JPTranslatorNotice />

<!-- prettier-ignore-start -->

# 導入ガイド

スーパーマリオサンシャインの練習用チートコードを導入するためのガイドです。NintendontもしくはDolphinを使用します。※全て自己責任で行ってください。

[[toc]]

## Wiiの準備

### Homebrewのインストール

練習用コードを使うためには、WiiにHomebrewをインストールする必要があります。SDカードがFAT32にフォーマットされていることを確認した後、[https://wii.guide/](https://wii.guide/) を参照しインストールしてください。

### 必要なソフトのインストール

練習用コードを使うために、Nintendontの使用を推奨しています。 [Nintendontの最新バージョン(ビルド)はこちら](https://zint.ch/NintendontPackager/latest/Nintendont.zip)。ファイルを解凍し、Nintendontフォルダ（中身も全て）をSDカードの"apps"フォルダへ入れてください。"apps"フォルダが無い場合は、SDカードの最上位層に作成してください。

## チートファイルのインストール

### チートファイルの生成

まず、ゲームのバージョンを確認します。 次の表はサポートされているバージョンとそれぞれのゲームコードを示しています。

| バージョン              | ゲームコード | Disc-Code                 |
| ----------------------- | ------------ | ------------------------- |
| PAL (ヨーロッパ)        | GMSP01       | DOL-GMSP-0-00             |
| NTSC-U (北アメリカ)     | GMSE01       | DOL-GMSE-0-00             |
| NTSC-J (日本)           | GMSJ01       | DOL-GMSJ-0-00 / GMSJ-0-01 |
| NTSC-K (韓国)           | GMSE01       | DOL-GMSE-0-30             |

::: tip NTSC-J（日本）を使う場合の注意
「JP1.0」と「JP 1.1」はどちらも同じゲームコード（GMSJ01）です。 ディスクの裏面を見て、どちらのバージョンを使っているかを確認しましょう。「DOL-GMSJ-0-00」であれば「JP1.0」、「DOL-GMSJ-0-01」であれば「JP1.1」です。

![](https://gct.zint.ch/img/jp_diff.png)
:::

[GCT Generator](https://gct.zint.ch/ja/)にアクセスし、ドロップダウンメニューからバージョン（上記で確認したもの）を選択します。すると、利用できるチートコードのリストが表示されます。リストから有効にしたいチートコードを全て選択し、ファイル形式「GCT」を選択して「Download」をクリックしてください。

### SDカードにファイルをコピー

SDカードの最上位層に"codes"フォルダを作成し、ダウンロードしたGCTファイルを"codes"内にコピーします。ここまでの手順を終えると、SDカード内は以下の画像のようなフォルダ構成になります。（GCTファイルは選択したバージョンによって異なります。）

![Sample Folder Structure](https://gct.zint.ch/img/folderstructure.png)

### チートコードの有効化

Homebrewチャンネルを開き、Nintendontを起動します。SDを選択し、GCコントローラでBボタンを押して設定を開いてください。「Cheats」が「On」になっていればチートコードが有効になっています。チートコードのオン/オフはGCコントローラのAボタンで切り替えられます。（画像参照）

![Enabling Cheats in Nintendont](https://gct.zint.ch/img/nintendont_cheats.jpg)

Bボタンを押してゲーム選択画面に戻り、ゲームを起動しましょう。 以上の操作で、チートコードの導入は完了になります。

## トラブルシューティング

### ゲームが起動しない場合 / 画面が真っ暗なままな場合

この問題は、練習用チートコードとは関係のない原因で発生します。問題への対策は以下の4つです:

- ゲームが起動するまでNintendontを再起動する（通常、数回の再起動で起動します）
- Wiiをインターネットに接続した後、Nintendontを起動する
- ゲーム選択画面で30秒ほど待った後、ディスクを起動する
- Homebrewの再インストール（再インストールすることで、この問題を完全に解決できる場合があります）

### Nintendontで「IOS58がありません(IOS58 is missing)」というエラーが出た場合

IOS58をインストールしましょう。[インストール方法はこちら](https://gct.zint.ch/ja/ios58.html)

### ゲームは起動するが、チートコードが反映されていない場合

この問題に対しては、以下の原因が考えられます。

- チートコードが有効になっていない: [「チートコードの有効化」セクション](#チートコードの有効化)を参照してください。
- 古いバージョンのNintendontを使っている: 必ずバージョン4.434以降を使ってください。
- チートファイルの名前が間違っている: チートファイル名が「GMSE01.gct」「GMSJ01.gct」「GMSP01.gct」のどれかであることを確認してください。「GMSE01（1）.gct」のような名前では機能しません。
- チートファイルの場所が間違っている: チートファイルがSDカードの"codes"フォルダにあることを確認してください。 また、フォルダ名が"codes"であることも確認しましょう。（[「SDカードにファイルをコピー」セクション](#sdカードにファイルをコピー)）もし"games"フォルダがある場合は、そのフォルダまたはそのサブフォルダに同じ名前のファイルが無いことを確認してください。
- チートファイルの容量が大きすぎる: 一度にたくさんのチートコードを使うと、Nintendontがそれらを無効にする可能性があります（使用スペースに制限があるため）。チートファイルをダウンロードする時に、互換性のない2つのチートコードを選んでいないことを確認してください。（例. 「Level Select」、「Fast Any%」およびステージローダーは同時に使用できません。）Nintendont 4.434以降を使用している場合は、5KBを超えない限り、ファイルサイズを気にする必要はありません。
- USBメモリを接続していて、且つ、ディスクを使用している場合は、USBメモリ内にそのディスク用のチートコードが入っているかを確認してください。
- ISOを使用する場合は、チートファイルとISOが同じデバイス内にある必要があります。(両者がSDカード内、もしくはUSBメモリ内にある場合。）

### どうすればいいか分からなくなった場合 :(

Discordサーバにて質問すると良いでしょう。

日本サーバ: [サンシャイン日本勢](https://discord.gg/c5xffvr)
海外サーバ: [Super Mario Sunshine Discord](https://discord.gg/9dGJWEc)

## 付録: Cheat Manager

Cheat ManagerはWii上でGCTファイルを作成できるHomebrewのアプリケーションです。これを用いると、別の組合せのチートコードを使う時に毎回チートファイルを作成＆ダウンロードする必要がなくなります。ただし、アプリケーションを制御するにはWiiリモコンを使う必要があります。

### 導入方法

Cheat Managerを[ここ](https://gct.zint.ch/files/Cheat_manager_v0_3.zip)からダウンロードしてください。ファイルを解凍し、そのファイルをSDカード内の"apps"フォルダにコピーしましょう。

[GCT Generator](https://gct.zint.ch/ja/)にアクセスし、Cheat Managerで使いたいチートコードを全て選択。ファイル形式「Cheat Manager TXT」(「GCT」ではない)を選択して「Download」をクリックします。SDカードの最上位層に"txtcodes"フォルダを作成し、先ほどダウンロードしたテキストファイルをそのフォルダにコピーしてください。ゲームIDはテキストファイルに保存されるため、テキストファイルの名前は気にしなくて良いです。

または、GCT Generatorにある全てのコードを含むzipファイルを[ここ](https://gct.zint.ch/files/GCMCodes.zip)からダウンロードできます。

### Cheat ManagerでのCGTファイルの作り方

Cheat Managerを起動し、Wiiリモコンに持ち替えてください。Dパッドを使って先のテキストファイルに移動し、「A」で選択します。「+」を押すとチートコードが有効に、「-」を押すとチートコードが無効になります。

使いたいチートコードを有効にした後、「1」を押して GCTファイルを作成します。すると、"codes"フォルダにGCTファイルが作成されます。（既に同じ名前のGCTファイルがある場合は上書きされます。）以上の操作の後、チートコードをOnにしてゲームを起動すると、新しいチートコードが読み込まれるようになります。

## 付録：Dolphin

### 導入方法

Dolphinでチートコードを使用するには、[GCT Generator](https://gct.zint.ch/ja/)にてファイル形式「Dolphin INI」（「GCT」ではない）を選択して「Download」をクリックします。または、サイト(GCT Generator)にある全てのコードを含むzipファイルを[ここ](https://gct.zint.ch/files/DolphinCodes.zip)からダウンロードできます。

::: tip チートコードの制限に注意
DolphinはNintendontとは異なるCheat loaderを使用しています。DolphinのCheat loaderは、チートコードの制限にすぐに達しやすく、また、有効にしたチートコード数が内部の制限に達したかどうかを通知してくれません。いくつかのコードを有効にした後にクラッシュした場合は、この制限が原因である可能性があります。不要なチートコードを無効にしてみてください。
:::

### 設定方法

#### チートコードの有効化

Dolphinを起動し、「Option」->「Configuration」から「Settings」を開きます。「チートを有効(Enable Cheats)」にチェックが入っていることを必ず確認してください：

![Enable Cheats in Dolphin](https://gct.zint.ch/img/dolphin_cheats.png)

#### Dolphin 5.0 以前の場合

ゲーム(Dolphin)上で右クリックした後、「Properties」を選択。Propertiesウィンドウの左下隅にある「Edit configuration」ボタンをクリックしてください。ダウンロードしたテキストファイルを開き[Gecko]に続く全ての行をコピーし、開いたiniファイルの[Gecko]下に貼り付けます。 [Gecko]の文字列が無い場合は、構成ファイルの最初行に追記してください。編集が終わったら、構成ファイルを保存して閉じます。

![Dolphin Gecko Codes 5.0](https://gct.zint.ch/img/dolphin_gecko_codes_v1.png)

#### Dolphin 5.0-11XXX 以降の場合

ゲーム(Dolphin)上で右クリックした後「Properties」を選択。「Game Config」で「Editor」タブを選択。ダウンロードしたテキストファイルの内容を「User Config」エディタに貼り付けます。

![Dolphin Gecko Codes 5.0-11XXX](https://gct.zint.ch/img/dolphin_gecko_codes_v2.png)

### チートコードの使い方

ゲームのプロパティで「Gecko-Codes」タブを選択し、有効にしたい全てのコードにチェックを入れてください。Dolphinにおいても、ほとんどのチートコードが動作します。（全てのチートコードが動作するわけではないので注意）


## 付録：大きなチートファイルをNintendontで使うためには
Nintendontには5000バイトのファイルサイズ制限があります。5000バイト超えのチートファイルを使うためには、チートファイルをGCメモリカードに保存してゲーム実行時にGCメモリカードから読み込む必要があります。

### 準備：GCMMのインストール
チートファイルをGCメモリカードに書き込むためにはGCMMを使います。[最新版のGCMM](https://github.com/suloku/gcmm/releases/download/1.4f/gcmm_1.4f.zip)をダウンロードして解凍します。その中にある`apps/gcmm`フォルダをSDカードの`/apps/`フォルダにコピーします。

![GCMMをインストールした後のファイル一覧](/img/gci/0-gcmm-files.jpg)

### [ステップ 1/3] チートファイルの作成
[GCT Generator](/ja/)でゲームバージョンと入れたい機能を選択し、ダウンロードフォーマットを`GCI + GCT`にしてダウンロードボタンを押します。

二つのファイルがダウンロードされますが、一つ目のGCIファイルをSDカードの`/MCBACKUP/`フォルダに、二つ目のGCTファイルを`/codes/`フォルダにダウンロードします。上記のフォルダが存在しない場合は作成してください。

![チートファイルをダウンロードした後のファイル一覧](/img/gci/1-cheat-files.jpg)

### [ステップ 2/3] GCMMでGCIファイルをGCメモリカードに書き込む
WiiでHomebrewチャンネルを開いてGCMMを起動します。

![HomebrewチャンネルでGCMMを起動](/img/gci/2-0-open-gcmm.png)

SDカードを使っているのであればAボタン、USBを使っているのであればBボタンを押します。

![デバイス選択](/img/gci/2-1-choose-device.png)

モード選択では「Xボタン」(Restore)を押します。

![モード選択](/img/gci/2-2-choose-mode.png)

GCメモリカードをスロットAに挿して「Aボタン」を押します。スロットBに挿した場合はBボタンを押します。

![スロット選択](/img/gci/2-3-choose-slot.png)

十字キーでダウンロードしたGCIファイルを選択し、「Aボタン」を押してGCIファイルをGCメモリカードに書き込みます。

![ファイル選択](/img/gci/2-4-choose-file.png)

「Restore Complete」というメッセージが出たら成功です。「Aボタン」を押してメニュー画面に戻って「スタートボタン」を押してHomebrewに戻ります。

![完成](/img/gci/2-5-complete.png)

#### 二回目以降の書き込み
二回目以降GCIファイルを書き込む際に「ファイルを上書きしますか」という確認するメッセージが出てきます。「Bボタン」そして「Zボタン」を押して上書きします。

![上書き確認1](/img/gci/2-6-overwrite-1.png)
![上書き確認2](/img/gci/2-6-overwrite-2.png)

### [ステップ 3/3] Nintendontでゲームを起動
GCメモリカードを挿したままNintendontでゲームを起動します。GCメモリカードに保存したGCIファイルは自動的に読み込まれます。入れた機能が動作することを確認できたらメモリカードを取り外しても構いません。


<!-- prettier-ignore-end -->
