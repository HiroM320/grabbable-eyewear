---
title: 掴めるメガネ GrabbableEyewear
---

## アバターへの影響

|Avatar Quality|Number|
|:-|-:|
|Animators|1|
|Expression Parameters|2|
|Constraint Count|3|
|PhysBones Components|2|

Contact は LocalOnly なためパフォーマンスランクに影響しません

---

## 機能

- メガネが掛けられてない間、視界に映る
  - 後述の機能によってメガネが掛けられていない（初期状態ではない）時、メガネが視界に映ります。
- PhysBone による掴み（Grab）と固定（Pose）
  - メガネの少し前方を掴む（Grabする）とメガネを上下に動かせます。
  - PhysBone で実現しているため、他人が動かすことも可能です。
- メガネを外し、掛けなおす/ワールドに固定する
  - メガネのレンズの右側で右手を握る（Fistにする）とメガネを持ちます。
    - レンズの左側で左手を握ることでも持ちます。
  - メガネを持っている手を開く（Openにする）と、メガネを掛けたりワールド固定したりできます。
    - メガネを掛けたい場合: 初めにメガネが掛けられていた場所で手を開きます
    - ワールド固定したい場合: 上の位置以外で手を開きます
- エクスプレッション（Expressions） `GrabbableEyewearMenu`
  - OFF
    - 有効: 本ギミック（PhysBone含む）が無効化され、メガネが非表示になります。
    - 無効: 本ギミックが有効化（初期化）され、メガネが表示されます。  
この時メガネが掛けなおされます。メガネを無くした時に便利です。

---

## 導入方法

### アバターに導入

1. `HiroMelon/GrabbableEyewear/` フォルダにある`GrabbableEyewear` プレハブをアバター直下に配置してください。
2. `GrabbableEyewear/Eyewear/Model` 直下に使いたいメガネを配置してください。

### メガネの位置調整

### アバターがメガネをかける位置を調整する

1. `GrabbableEyewear/ConstraintSrc/Head/PBRoot/PBEnd/EyewearHeadPos` を移動及び回転させて位置調整してください。

### 右手に持つ位置を調整する

1. `GrabbableEyewear/Eyewear/Constraint` の `VRC Parent Constraint` コンポーネントの Sources の3つのWeightを上から `0` `1` `0` に変更し、メガネを右手に持つ位置へ移動させます。
2. `GrabbableEyewear/ConstraintSrc/HandR/EyewearHandRPos` を移動及び回転させて位置調整してください。

### 左手に持つ位置を調整する

1. `GrabbableEyewear/Eyewear/Constraint` の `VRC Parent Constraint` コンポーネントの Sources の3つのWeightを上から `0` `1` `0` に変更し、メガネを右手に持つ位置へ移動させます。
2. `GrabbableEyewear/ConstraintSrc/HandL/EyewearHandLPos` を移動及び回転させて位置調整してください。

位置調整完了後、 `VRC Parent Constraint` コンポーネント の Sources の Weight を上から `1` `0` `0` に戻してください。戻さなくてもギミックに問題は発生しませんが、今後の調整が困難になります。

### 手に持つ判定（Contact Receiver）を調整する（任意）

1. 右手で持つ判定を `GrabbableEyewear/Eyewear/Contact/LocalHandROnEyewearContactRcv` の移動、回転、スケールで調整してください。
2. 左手で持つ判定を `GrabbableEyewear/Eyewear/Contact/LocalHandLOnEyewearContactRcv` の移動、回転、スケールで調整してください。
