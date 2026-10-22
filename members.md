# 主要成员

本页介绍社团主要成员的技术方向与公开项目。收录标准为：GitHub 主页设有个人介绍，或公开仓库中具备可查的说明文档与代码。

以下信息全部取自公开仓库，统计时间为 2026 年 10 月 22 日。仓库的星标数与语言构成会随时间变化，以 GitHub 页面当前显示为准。

## 4.1 成员概览

| 成员 | 显示名 | 主要方向 | 公开仓库 | 代表性项目 |
| :-- | :-- | :-- | :-- | :-- |
| [liboxin-cloud](https://github.com/liboxin-cloud) | — | C 语言系统编程、网络与文件安全 | 25 | async-logger、file_transfer_demo |
| [SeaC-25](https://github.com/SeaC-25) | Zhang_Haiyang | 人工智能安全、大模型应用 | 4 | Kali-Security-MCP |
| [Megalomanian](https://github.com/Megalomanian) | VioLina | Web 安全、后端开发、AI 安全 | 24 | AWD_toolkits、wxtract |
| [YeYangsqrt](https://github.com/YeYangsqrt) | YeYang | Python 应用、大模型服务 | 6 | ollama_in_fofa |

## 4.2 liboxin-cloud

<div class="member">
<div class="member-head">
<img src="assets/img/liboxin-cloud.png" alt="liboxin-cloud 的头像">
<div>
<p class="member-name">liboxin-cloud</p>
<p class="member-meta">C 语言系统编程 · 网络与文件安全 · 25 个公开仓库</p>
</div>
</div>

<p><span class="tag">C11</span><span class="tag">并发编程</span><span class="tag">网络协议</span><span class="tag">密码学工程</span></p>

以 C 语言实现的底层组件为主要方向，仓库覆盖并发数据结构、内存管理、网络通信与文件加解密四类主题。多数项目配有完整的构建文件与使用说明，许可多为 MIT 或 GPL-3.0。

代表项目：

- <span class="repo">async-logger</span>：C11 跨平台异步日志库。采用基于 CAS 的无锁环形缓冲区实现多生产者单消费者队列，由后台线程统一完成 I/O，生产者线程不被阻塞；按批处理，每批最多 64 条以减少系统调用；提供五级日志与运行时过滤，配置文件为 INI 格式，缺失时自动生成默认值。支持 Windows、Linux 与 macOS，许可为 MIT。
- <span class="repo">a-simple-threadpool-in-C</span>：线程池实现。预创建固定数量工作线程，任务队列采用单向链表按先进先出调度，以互斥量与条件变量保护并发访问；提供正常关闭与强制关闭两种退出方式。
- <span class="repo">a-light-memory-pool-in-C</span>：面向不超过 1024 字节小对象的内存池。预分配固定大小内存块，以偏移截断方式分配与回收，要求按分配的逆序释放；拒绝超出尺寸上限的请求，提供整池重置与指针归属校验。
- <span class="repo">A-light-file-encryptor-in-C</span>：命令行文件加解密工具。变换式为循环使用密钥字节并叠加位置索引，异或自反，同一密钥执行同一操作即可还原；加密与解密结果分别写入独立文件，不覆盖原始输入。
- <span class="repo">file_transfer_demo</span>：客户端与服务器之间的文件传输系统。客户端以 RSA 私钥对认证请求签名，服务端用预置公钥验签；认证通过后以 RSA 交换会话密钥，数据与命令以 AES-256-CBC 加密传输，并以 SHA256 校验完整性；大文件分片传输后合并。依赖 OpenSSL，仅支持 Linux。
- <span class="repo">Linux-http-web-chatting-program</span>：C 语言实现的 HTTP 服务端与客户端程序，面向 Linux 平台。
- <span class="repo">SHA256-in-C</span>：SHA256 摘要算法的 C 语言实现。
- <span class="repo">HttpServer</span>：基于线程池的 Windows HTTP 服务器。
- <span class="repo">RemoteInjectTool</span>：以 MFC 与 Visual Studio 2022 开发的 Windows 桌面工具。
</div>

## 4.3 SeaC-25

<div class="member">
<div class="member-head">
<img src="assets/img/SeaC-25.png" alt="SeaC-25 的头像">
<div>
<p class="member-name">SeaC-25</p>
<p class="member-meta">人工智能安全 · 大模型应用 · 4 个公开仓库</p>
</div>
</div>

<p><span class="tag">LLM 智能体</span><span class="tag">MCP 协议</span><span class="tag">向量检索</span><span class="tag">渗透测试工程</span></p>

方向集中于大模型与安全工程的结合。个人主页说明其从事大模型方向研究，公开仓库以智能体系统与配套数据为主，项目文档完整，含架构说明、量化指标与使用限制。

代表项目：

- <span class="repo">Kali-Security-MCP</span>：基于 MCP 协议的 LLM 自主多智能体系统，星标 81，派生 17，许可为 MIT。主控智能体负责规划并派发任务，17 个子智能体各自作为独立决策单元执行，结果经汇总后以 SSE 实时推送。每个决策均由模型输出的结构化 JSON 驱动，攻击图、蚁群算法与知识库仅提供上下文与候选边评分，不直接触发工具；工具调用结果由确定性规则提炼为证据，以降低模型编造的可能。检索侧使用本地向量库配合 BM25 与倒数排名融合，索引按内容哈希增量构建。运行时支持 stdio 与 SSE 两种传输方式，执行后端可在本地子进程、SSH 与容器之间自动选择。项目文档明确限定其用途为已获书面授权的渗透测试、竞赛与防御评估。
- <span class="repo">OpenGoal-skill</span>：将自然语言需求转换为结构化可执行指令的分析工具，许可为 MIT。按功能需求、技术架构、领域模型、非功能需求与依赖关系五个维度拆解需求，并检测循环依赖；输出分为面向人与面向模型两种版本，附五维验收标准；可选生成依赖图、架构图、服务图与领域模型图四类图示。
- <span class="repo">Security-LLM-train-data</span>：安全领域大模型训练数据整理。
</div>

## 4.4 Megalomanian

<div class="member">
<div class="member-head">
<img src="assets/img/Megalomanian.png" alt="Megalomanian 的头像">
<div>
<p class="member-name">Megalomanian</p>
<p class="member-meta">Web 安全 · 后端开发 · AI 安全 · 24 个公开仓库</p>
</div>
</div>

<p><span class="tag">Web 安全</span><span class="tag">Python</span><span class="tag">逆向与取证</span><span class="tag">方案设计</span></p>

个人主页说明其主攻 Web 安全与后端开发，关注人工智能安全与自然语言处理。公开仓库涵盖竞赛工具、桌面应用逆向、静态站点与项目技术方案文档四类。

代表项目：

- <span class="repo">AWD_toolkits</span>：面向攻防对抗（AWD）赛制的 Python 工具箱，以命令行菜单交互，包含端口监听与载荷生成两类功能。项目要求 Linux 环境与 Python 3.8 及以上，文档说明其仅限授权赛事环境使用。
- <span class="repo">wxtract</span>：Windows 平台的微信 4.x 聊天记录本地导出工具，许可为 MIT。全程在本机完成，不联网、不上传、不修改原始数据。实现上以只读方式扫描进程内存取得候选密钥，用数据库首页的 HMAC 校验密钥有效性；有 sqlcipher3 时完整解密并合并预写日志，无该依赖时以系统加密接口按页解密。输出为纯文本与 JSONL 两种格式。文档明确限定其仅可用于本人设备与本人账号的数据。
- <span class="repo">PCL-2.13.1.1-NoUpdate</span>：Minecraft 启动器的第三方修改版，星标 6，以 C# 实现，保留下载功能并禁用启动器自动更新。
- <span class="repo">saishangfaqiao</span>：法律咨询场景下人工智能助手的技术方案文档。前端采用 Vue 3 与 Vant 构建移动端页面，后端为 FastAPI 单体服务，数据库为 PostgreSQL，部署采用容器编排；文档明确不引入微服务、消息队列与智能体框架，子模块以提示词模板加知识片段实现。含验收指标与实施周期。
- <span class="repo">cs-english-quiz</span>：计算机专业英语互动练习页面，星标 3，收录 78 道题及解析。
- <span class="repo">Megalomanian.github.io</span>：个人主页，以 HTML、CSS 与 JavaScript 手写实现。
</div>

## 4.5 YeYangsqrt

<div class="member">
<div class="member-head">
<img src="assets/img/YeYangsqrt.png" alt="YeYangsqrt 的头像">
<div>
<p class="member-name">YeYangsqrt</p>
<p class="member-meta">Python 应用 · 大模型服务 · 6 个公开仓库</p>
</div>
</div>

<p><span class="tag">Python</span><span class="tag">大模型部署</span></p>

公开仓库以 Python 实现的小型工具与练习项目为主，涉及大模型服务的检索与调用。多数仓库尚未附说明文档，此处仅列可核对的信息。

- <span class="repo">ollama_in_fofa</span>：围绕大模型服务检索与访问的 Python 项目，仓库创建于 2025 年 2 月，未附说明文档。
- <span class="repo">songshuimao</span>：Python 项目，未附说明文档。
- <span class="repo">New-Sim-U-Kraft-1.20.1-</span>：Minecraft 整合包配置整理。
</div>

## 4.6 其他成员

以下成员已加入组织，但公开仓库尚未附说明文档或主页未设介绍，暂不单列。成员补充项目文档后，可在此页增设条目。

| 成员 | 公开仓库 | 说明 |
| :-- | :-- | :-- |
| <img src="assets/img/LKY-1221.png" alt="" width="28" height="28"> [LKY-1221](https://github.com/LKY-1221) | 2 | 学习笔记类仓库，未附说明文档 |
| <img src="assets/img/Moulinhen.png" alt="" width="28" height="28"> [Moulinhen](https://github.com/Moulinhen) | 0 | 暂无公开仓库 |
| <img src="assets/img/Project-PurpleSalt.png" alt="" width="28" height="28"> [Project-PurpleSalt](https://github.com/Project-PurpleSalt) | 1 | 仓库未附说明 |
| <img src="assets/img/TW1520.png" alt="" width="28" height="28"> [TW1520](https://github.com/TW1520) | 0 | 暂无公开仓库 |

## 4.7 页面维护

本页由社团维护者共同维护。成员如需更新条目，可在组织讨论区提出，或直接提交变更请求修改本页。

条目内容的组织要求：

1. 仅收录本人公开仓库的信息，不涉及非公开项目
2. 项目描述以仓库说明文档为依据，不添加未经证实的评价
3. 涉及攻击技术的项目，须同时说明其授权范围与使用限制
4. 星标数、仓库数等统计信息注明取值时间
