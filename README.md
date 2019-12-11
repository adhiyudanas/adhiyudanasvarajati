# adhiyudanasvarajati

## Overview
This is profile site using Vue.js as base framework. Currently working in progress.


## Related Project (前回関わったプロジェクト)

### Android Application for Collecting Sensor Data (端末のセンサーデーターを取得するのアンドロイドアプリ)
We collect Sensor data such as gravity, acceleration, gyro, direction and send it to the server. The data then used to determine whether the user is walking, running, or using babycar. By combining all the sensor data and do some calculation, we are able to determine the road condition.

重力、速度、ジャイロのセンサーデータなどを取得して、サーバーに送信させる。そのデータをユーザーは歩くか、走るか、またわベビーカーを使ったりしてるかを判断する事ができます。コースでもバリアーあれば、そのデータのノイズから認識することもできます。

1. Main Screen / メイン画面
![main page](/screenshot/android/main-screen.png?raw=true "Main page of the application")

2. Setting Page / 設定ページ
![setting page](/screenshot/android/setting.png?raw=true "Setting page of the application")

3. Start button is pressed, the animation is started(small dot rotating in the track around the start button) / スタートボタンを押すと、アニメーションが始まる（小さい丸い要素が回ってる）
![starting](/screenshot/android/executed.png?raw=true "Starting the collection")

4. The data is being collected and sended to the server / データーを取得中、その間サーバーに送られてる
![sending](/screenshot/android/collecting.png?raw=true "Sending to the server")