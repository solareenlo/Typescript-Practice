# 名前空間に関するあれこれ

## 複数に分割されたファイルをまとめてコンパイルするには
```
$ tsc --outFile app.js circle.ts rectangle.ts app.ts --types node
```

## 複数に分割されたファイルをimportするには
```
/// <reference path="対象のファイル名.ts"
```
という風に///を使ってimportすれば良い.  
そして,
```
$ tsc app.ts --outfile app.js --types node
```
とコンパイルする.
