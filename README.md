# React 实战

20 点开始。

## 是不是一行一行读过来，就是精通？

- react-use / ahooks
- react-router / react-redux
React 是一把枪。


## 是不是一步一步写完，就是实战？
- 不可能。
- 技巧、方案，积累更多的东西。
- 过度设计。

## CSS 方案。
tailwind -> 原子化 CSS
tailwind      --      windi 
postcss 的能力         TS 解析，

### 你们团队的 CSS，是如何实现模块化的？
1. css-loader 来处理的。
```jsx
import styles from './index.less';

export const App() {
    return <div className={styles.xxx}>Hello World</div>
}
```

```js
{
    test: /\.css$/,
    use: [
        {
            loader: 'css-loader',
            options: {
                modules: {
                    localIdentName: isDevelopment? "[path]_[name]_[local]":"[hash:base64:5]",
                }
            }
        }
    ]
}
// [path]_[name]_[local] 是一个占位符，方便我们去找到这个样式文件，在哪里。
// [hash:base64:5]，生产环境使用，方便我们去压缩类名。
```

2. css in js
```jsx
import styles from './styles.js';

export const App() {
    return <div style={styles.xxx}>Hello World</div>
}

// ./styles.js
const xxx = {
    backgroundColor: 'red'
}
```

3. styled-components
```jsx
import styled from 'styled-components';

const Button = styled.button`
    backgroud: #FF0;
`

export const App() {
    return <Button>Hello World</Button>
}


```

4. tailwind.css


## 路由

| 首页 | 知学堂 | 会员 | 发现 | 等你来答 |
       education xen explore question
    | 关注 | 推荐 | 热榜 | 视频 |
     follow        hot   zvideo



### css-loader 
DEV：
style-loader, css-loader, postcss-loader, less-loader / sass-loader 

.less

PROD：
mini-extract-css-loader, css-loader, postcss-loader, less-loader / sass-loader 

position:
abolute fixed relative sticky static inherit 


浏览器里面，一般有5个 Observer:
### IntersectionObserver - RAF阶段执行回调的
监听元素的可视区域发生变化时，触发的回调。
懒加载

### MutationObserver - 微任务的时候，去调用的
元素的属性或者子节点，发生变化时，触发的。

监听一个元素。

### ResizeObserver - layout阶段
监听元素的变化

### PerformanceObserver

### reportingObserver 

亮点：
用一些小众的东西，解决一些大问题。


