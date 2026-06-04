# Notion 同步占位说明

当前环境还不能直接写入 Notion。要真正把本地工作台同步到 Notion，需要先准备以下信息和脚本。

## 需要提供的信息

1. Notion API Token
2. Notion Database ID 或页面 ID
3. 每个本地目录对应的 Notion 页面或数据库映射关系

## 需要安装的依赖

未来可根据项目技术栈选择：

* Node.js 方案：`@notionhq/client`
* Python 方案：`notion-client`

## 需要创建的脚本

建议创建一个同步脚本，例如：

* `scripts/sync_workspace_to_notion.js`
* 或 `scripts/sync_workspace_to_notion.py`

脚本应完成：

1. 读取 `/workspace` 下的目录和 Markdown 文档
2. 根据配置找到对应 Notion 页面或数据库
3. 将本地 Markdown 内容转换为 Notion blocks
4. 写入或更新 Notion 页面
5. 记录同步日志，避免重复覆盖重要内容

## 安全提醒

Notion API Token 不应写入公开代码。建议放入 `.env`，并确保 `.env` 被 `.gitignore` 忽略。
