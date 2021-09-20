# 仓库

```bash
git clone https://github.com/JQSC/react-source-code.git
```

## install

```bash
yarn
```

## 当前源码版本

```bash
react v16.8
```

## 配置 vscode

安装插件 `Debugger for Chrome`

```bash
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Launch Chrome",
      "url": "http://localhost:3000", // 改为目标 url
      "webRoot": "${workspaceFolder}",
    }
  ]
}
```

### 项目目录

```bash
|-- src
  |-- react   # 仓库源代码直接拿过来的
  |-- index.js

```
