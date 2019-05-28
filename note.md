### 目標

- 簡単にしたいこと
    - ボタンのデザインを作る
    - 同じデザインのボタンを複数作る

### デザインの属性

- 属性
    - サイズ
        - padding, (height, width)
        - line-height
        - font-size
    - border
    - shadow
    - background

### マルチクラス的アプローチとシングルクラス的アプローチ

というより、形、大きさ、色の要素のをどう分担させるかという話な気がする

- 要素に含まれる属性
    - これは本質的に密結合？
        - 形状
        - 大きさ
    - 文字色
    - 文字フォント
    - (文字大きさ)

- まとめ方
    - (形状, 大きさ, 色)
        1. `common-button--[]`
        - ネーミングセンスが必要そう(3つの特徴をまとめて名前をつける必要があるから)
        2. `common-button--[shape]-[size]-[color]`
            - shape部分のネーミングがむずそう
            - ネーミングセンスはいらないが冗長
        3. `common-button -[shape] -[size] -[color]`
            - 2に比べてそれぞれを要素間で共通化できそう
                - 例えばsizeの`-w50`(`width: 50%`を指定)
    - (形状, 大きさ), (色)

        
- マルチクラス
    - `f-button s-small c-gray`
- シングルクラス
    - `common-simple-button--small`
    - fとcは一つのクラスが背負う
    - `@extend common-simple-button`