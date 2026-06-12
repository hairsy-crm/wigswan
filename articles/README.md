# 行业研报文章发布说明

新增文章时按下面流程操作：

1. 复制一篇已有文章 HTML，例如：
   `customer-asset-growth-2026.html`

2. 改成新的文件名，建议使用英文短横线：
   `2026-07-new-report-topic.html`

3. 在新文章里更新：
   - `<title>`
   - `<meta name="description">`
   - 文章日期、分类、标题、摘要和正文
   - 顶部背景图，如需更换则修改 `.article-hero` 的 `url(...)`

4. 在 `../news.html` 的“最新发布”区域新增一条：

```html
<article class="release-row">
  <time datetime="2026-07">2026.07</time>
  <div>
    <h3><a href="articles/2026-07-new-report-topic.html">新文章标题</a></h3>
    <p>文章摘要。</p>
  </div>
  <span class="status">已发布</span>
</article>
```

5. 如果这篇文章要展示在首页，把 `../index.html` 的“最新行业研报”区域也更新为新文章链接。

6. 在 `../sitemap.xml` 增加文章 URL，便于搜索引擎收录。

7. 本地检查：

```bash
cd /Users/james/wigswan
python3 -m http.server 8000
```

打开 `http://localhost:8000/news.html`，点击文章确认能正常访问。
