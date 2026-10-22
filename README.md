# 宁夏大学鑫启网安俱乐部站点

本仓库托管组织站点，通过 GitHub Pages 发布。站点使用 docsify 构建，全部依赖已本地化，不依赖外部 CDN。

## 一、站点地址

启用 Pages 后由以下地址访问：

```
https://ningxia-xinqicyberclub.github.io/
```

仓库名 `NingXia-XinQiCyberClub.github.io` 为组织根站点，站点直接从 `main` 分支根目录发布。

## 二、目录结构

| 路径 | 说明 |
| :-- | :-- |
| `index.html` | 站点入口与 docsify 配置 |
| `home.md` | 首页 |
| `about.md` | 社团简介 |
| `activities.md` | 技术方向与活动 |
| `members.md` | 主要成员 |
| `github.md` | GitHub 使用入门 |
| `join.md` | 加入流程 |
| `faq.md` | 常见问题 |
| `contact.md` | 联系方式 |
| `_404.md` | 未找到页面 |
| `_sidebar.md` | 左侧导航 |
| `_navbar.md` | 顶部导航 |
| `assets/style.css` | 站点样式 |
| `assets/img/` | 标志、成员头像与邀请二维码 |
| `assets/vendor/` | docsify 及其插件 |

## 三、本地预览

站点为纯静态文件，任意静态服务器均可预览。相对路径基于站点根目录，需在仓库根目录启动服务：

```bash
python -m http.server 8899
```

随后访问 `http://127.0.0.1:8899/`。不得以 `file://` 方式打开，否则 `_sidebar.md` 等文件的请求会被浏览器拦截。

## 四、内容规范

1. 使用书面中文，陈述句式，段落与列表结构清晰
2. 不使用 emoji、感叹号与口语化表达
3. 涉及成员的技术方向与项目，仅采信其公开仓库的说明文档，不添加未经证实的能力描述
4. 站点与 GitHub 文档公开可访问。飞书团队邀请二维码经评估后公开，须同时满足三项条件：团队开启加入审批、二维码短期有效、页面注明 +86 手机号限制。除此之外不得写入内部联络方式、群聊记录与赛事内部资料

## 五、维护约定

| 操作 | 方式 |
| :-- | :-- |
| 修改页面内容 | 修改对应 `.md` 文件后提交至 `main` |
| 新增页面 | 新建 `.md` 文件，并在 `_sidebar.md` 中登记 |
| 更新成员条目 | 同步修改 `members.md` 与 `assets/img/` 中的头像 |
| 调整样式 | 仅修改 `assets/style.css`，不直接改 `assets/vendor/` 中的第三方文件 |
| 更新飞书二维码 | 重新生成邀请二维码，替换 `assets/img/feishu-qr.png`，并同步修改 `contact.md` 第 8.2 节、组织主页 README 与教程第 0.9 节的有效期文字。后两处通过站点地址引用该图片，无需另行上传 |

`assets/vendor/` 中的文件由 npm 包直接取得，不应手工修改。如需升级，整体替换对应文件并更新 `index.html` 中的引用。

## 六、发布说明

提交推送至 `main` 后由 GitHub Pages 自动构建，通常数分钟内生效。仓库根目录的 `.nojekyll` 用于跳过 Jekyll 处理，删除该文件会导致以下划线开头的文件（`_sidebar.md`、`_navbar.md`、`_404.md`）不被发布，进而导致导航失效。
