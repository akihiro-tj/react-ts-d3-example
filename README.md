# React x TypeScript x D3.js デモ <!-- omit in toc -->

[React](https://ja.legacy.reactjs.org/), [TypeScript](https://www.typescriptlang.org/), [D3.js](https://d3js.org/) を使ったデータ可視化のデモです。

1 人あたり GDP と平均寿命の関係を散布図に示しました。円の大きさは人口を表します。

以下のドキュメントではアプリケーションの構成や React と D3.js の組み合わせ方について説明しています。

- [デモ](https://akihiro-tj.github.io/react-ts-d3-example/)
- [Storybook](https://react-ts-d3-example-storybook.netlify.app/)

![](https://github.com/akihiro-tj/react-ts-d3-example/assets/50857720/0df473cc-d612-4209-bcae-1dc7f5b787de)

## 目次 <!-- omit in toc -->

- [📊 アプリケーションの概要](#-アプリケーションの概要)
  - [yarn dev](#yarn-dev)
  - [yarn build](#yarn-build)
- [📁 プロジェクトの構成](#-プロジェクトの構成)
- [🗄 状態管理](#-状態管理)
  - [ローカルな状態](#ローカルな状態)
  - [グローバルな状態](#グローバルな状態)
  - [URL パラメータ](#url-パラメータ)
- [🧮 ビューとロジック](#-ビューとロジック)
- [✨ コンポーネントのスタイリング](#-コンポーネントのスタイリング)
  - [コンポーネントライブラリ](#コンポーネントライブラリ)
  - [スタイリング](#スタイリング)
  - [Storybook](#storybook)
- [📈 React x D3.js](#-react-x-d3js)
  - [座標計算 (D3.js)](#座標計算-d3js)
  - [DOM 操作 (React)](#dom-操作-react)
- [💥 エラーハンドリング](#-エラーハンドリング)
- [💻 開発環境](#-開発環境)
  - [TypeScript](#typescript)
  - [Prettier, ESLint, StyleLint](#prettier-eslint-stylelint)
- [⭐ デプロイ](#-デプロイ)

## 📊 アプリケーションの概要

動作確認済み環境:

- Node.js v16.16.0
- Yarn v1.22.19

以下のコマンドを実行しセットアップしてください。

```bash
$ git clone git@github.com:akihiro-tj/react-ts-d3-example.git
$ cd react-ts-d3-example
$ yarn install
```

ビルドツールには [Vite](https://ja.vitejs.dev/) を使っています。

### yarn dev

開発用のローカルサーバーが起動します。http://localhost:8000/ をブラウザで開いてください。

### yarn build

本番用の静的なファイルを `dist` に出力します。

## 📁 プロジェクトの構成

```sh
src
|
+-- components        # コンポーネント
|
+-- config            # グローバル定数
|
+-- hooks             # カスタムフック
|
+-- providers         # コンテクスト、プロバイダの設定
|
+-- routes            # SPA のルーティングの設定
|
+-- styles            # グローバルなスタイル
|
+-- types             # 型定義
|
+-- utils             # 汎用関数
```

## 🗄 状態管理

### ローカルな状態

コンポーネントのスコープ内で完結する状態については、`useState` を用いてローカルに管理しています。

```tsx
const [size, setSize] = useState({ width: 0, height: 0 });
```

### グローバルな状態

コンポーネントを横断して参照・更新する状態については、`useContext` と `useReducer` を用いてグローバルに管理しています。

大きなアプリケーションではないため、[appReducer.ts](./src/providers/app/appReducer.ts) の中にすべてまとめています。

```tsx
export type AppState = {
  data: Datum[]; // fetch した CSV のデータ
  isAutoPlaying: boolean; // 自動再生中かどうか
  checkBoxGroup: CheckBoxGroup; // 地域選択のチェックボックスの状態
};
```

### URL パラメータ

年の選択状態については、[React Router](https://reactrouter.com/en/main) を使って URL のパラメータとして管理しています。

[routes/index.tsx](./src/routes/index.tsx)

```tsx
<Routes>
  <Route path="/:year" element={<MainLayout />} />
  <Route path="/" element={<Navigate to={`/${maxYear}`} />} />
</Routes>
```

## 🧮 ビューとロジック

ロジックをカスタムフックへと分離し、コンポーネントの責務をビューの描画に絞っています。

[Chart.tsx](./src/components/Chart/Chart.tsx)

```tsx
export const Chart: FC<ChartProps> = ({ className }) => {
  const {
    ref,
    margin,
    xTickFormat,
    yTickFormat,
    size,
    scale,
    plots,
    labels,
    yearLabel,
    onMouseEnter,
    onMouseMove,
    onMouseLeave,
    legendItems,
  } = useChart();

  return <div className={className}>{/* ... */}</div>;
};
```

## ✨ コンポーネントのスタイリング

### コンポーネントライブラリ

再生ボタンやスライダーなどの汎用的なコンポーネントには [MUI](https://mui.com/) を使っています。

[PlayButton.tsx](./src/components/YearSelector/PlayButton/PlayButton.tsx)

```tsx
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import IconButton from '@mui/material/IconButton';

// ...

return (
  <IconButton>
    {isPlaying && <PauseRoundedIcon />}
    {!isPlaying && <PlayArrowRoundedIcon />}
  </IconButton>
);
```

### スタイリング

CSS のスタイリングには [tailwindcss](https://tailwindcss.com/) を使っています。

[MainLayout.tsx](./src/components/Layout/MainLayout/MainLayout.tsx)

```tsx
<BackGround className="py-10">
  <Rail className="mb-6">
    <Heading />
    <CheckBoxGroup className="mx-3 sm:mx-auto" />
  </Rail>

  <Card className="mx-3 mb-6 max-w-screen-md md:mx-auto">
    <Chart />
  </Card>

  <Rail>
    <Slider className="mx-auto hidden pr-6 sm:flex" />
    <Select className="mx-auto flex sm:hidden" />
    <Footer />
  </Rail>
</BackGround>
```

一部、D3.js で内部的に生成されるエレメントにスタイルを当てるために、CSS Modules を組み合わせて使っています。

[AxisBottom.tsx](./src/components/SVGChart/AxisBottom/AxisBottom.tsx)

```tsx
import style from './AxisBottom.module.scss';

// ...

return <g className={style.axisBottom} />;
```

[AxisBottom.module.scss](./src/components/SVGChart/AxisBottom/AxisBottom.module.scss)

```scss
.axis-bottom {
  :global(.domain),
  :global(.tick) line {
    @apply invisible;
  }

  :global(.tick) text {
    @apply text-xs font-semibold;
  }
}
```

### Storybook

コンポーネントカタログとして [Storybook](https://storybook.js.org/) を使っています。

[リンク](https://react-ts-d3-example-storybook.netlify.app/)

![](https://github.com/akihiro-tj/react-ts-d3-example/assets/50857720/db17d957-c638-40d7-8d07-c46de19a9e07)

## 📈 React x D3.js

D3.js には主に

- 座標計算
- DOM 操作

の 2 つの機能がありますが、DOM 操作については React と役割が被ります。

したがって React と D3.js を同時に使う際には、座標計算を D3.js、DOM 操作を React に担わせるのがよいです。

### 座標計算 (D3.js)

[useChart.tsx](./src/hooks/useChart.tsx)

（説明のために簡略化）

```tsx
// データの値を散布図の円の座標や半径に変換する関数群
const scale = useMemo(() => {
  // x 座標
  const x = scaleLog()
    .domain(extent(data, d => d.gdp) as [number, number])
    .range([margin.left, size.width - margin.right]);

  // y 座標
  const y = scaleLinear()
    .domain(extent(data, d => d.life) as [number, number])
    .range([size.height - margin.bottom, margin.top])
    .nice();

  // 円の半径
  const area = scaleLinear()
    .domain([0, max(data, d => d.population) as number])
    .range([calcArea(radiusRange.min), calcArea(radiusRange.max)]);
  const radius = (value: number) => calcRadius(area(value));

  return { x, y, radius };
}, [data, size, margin, radiusRange]);

// 散布図の円の配列
const plots = useMemo(() => {
  return (
    data
      // ...
      .map(d => {
        // ...
        return {
          x: scale.x(d.gdp), // x 座標
          y: scale.y(d.life), // y 座標
          radius: scale.radius(d.population), // 半径
          // ...
        };
      })
  );
}, [data, year, scale, checkBoxGroup, hoveredCountry]);
```

### DOM 操作 (React)

[Chart.tsx](./src/components/Chart/Chart.tsx)

（説明のために簡略化）

```tsx
<SVG>
  {/* ... */}
  {plots.map(plot => (
    <Plot
      key={plot.id}
      x={plot.x} // D3.js で計算した x 座標
      y={plot.y} // D3.js で計算した y 座標
      radius={plot.radius} // D3.js で計算した半径
      {/* ... */}
    />
  ))}
</SVG>
```

[Plot.tsx](./src/components/SVGChart/Plot/Plot.tsx)

（説明のために簡略化）

```tsx
type PlotProps = {
  x: number;
  y: number;
  radius: number;
  // ...
};

export const Plot: FC<PlotProps> = ({
  x,
  y,
  radius,
  // ...
}) => {
  return (
    <g>
      <circle
        cx={x}
        cy={y}
        r={radius}
        {/* ... */}
      />
    </g>
  );
};
```

## 💥 エラーハンドリング

アプリケーション内でエラーが発生した際に [react-error-boundary](https://github.com/bvaughn/react-error-boundary) でキャッチし、フォールバック用の UI を表示します。

[AppContextProvider.tsx](./src/providers/app/AppContextProvider.tsx)

```tsx
<ErrorBoundary FallbackComponent={ErrorFallback}>
  <AppContext.Provider value={state}>
    <AppUpdateContext.Provider value={dispatch}>
      <HashRouter>{children}</HashRouter>
    </AppUpdateContext.Provider>
  </AppContext.Provider>
</ErrorBoundary>
```

![](https://github.com/akihiro-tj/react-ts-d3-example/assets/50857720/d00512ff-71cf-4a46-b72f-c98455efb37c)

## 💻 開発環境

#### TypeScript

型定義によりコード補完を有効にし開発を効率化するため、またコードを静的に解析しエラーを未然に防ぐために使用しています。

#### Prettier, ESLint, StyleLint

コーディングルールを設けてコードベースの一貫性を保つために使用しています。

## ⭐ デプロイ

バージョンのタグを付与してプッシュすることでデプロイ用の GitHub Actions のワークフローが走ります。

ワークフローの中ではアプリケーションをビルドし GitHub Pages にデプロイする処理が実行されます。

```bash
$ yarn version --new-version 0.1.0
$ git push origin v0.1.0
```

[.github/workflows/deploy.yml](./.github/workflows/deploy.yml)
