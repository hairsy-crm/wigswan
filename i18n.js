(function () {
  const LANGS = [
    { code: 'zh', label: '中文', htmlLang: 'zh-CN' },
    { code: 'en', label: 'EN', htmlLang: 'en' },
    { code: 'ja', label: '日本語', htmlLang: 'ja' },
    { code: 'ko', label: '한국어', htmlLang: 'ko' }
  ];

  const dict = {
    en: {
      'WIGSWAN 美业云链：以 AI 驱动的产业互联网引擎，重构全球美业价值链条。': 'WIGSWAN: An AI-driven ecosystem empowering beauty entrepreneurs to scale through high-ticket digital integration.',
      'WIGSWAN | 美业云链 - 数字智能化增长引擎': 'WIGSWAN | The High-Ticket Revenue Engine for Modern Salons',
      '战略核心': 'Strategic Core',
      '行业诊断': 'Scalability Audit',
      '增长支柱': 'Growth Pillars',
      '战略优势': 'Advantages',
      '盈利实验': 'Revenue Simulator',
      '立即诊断': 'Get My Audit',
      '重构美业价值链条': 'Beyond the Chair',
      'AI 驱动增长引擎': 'Turn Your Salon Into a High-Ticket Studio',
      'WIGSWAN 通过 AI 调度算法与矩阵获客工厂，为传统美业门店提供跨越式增长模型。我们不是在卖产品，而是在通过数字化重塑行业底层逻辑。': 'Stop trading hours for dollars. WIGSWAN uses AI-driven dispatch and content automation to inject a high-margin business model into your existing salon. We don’t just sell hair; we provide a scaling blueprint.',
      '开启 60 天盈利实验': 'Start My 60-Day Scaling Blueprint',
      '获取《2026美业增长白皮书》': 'Get the 2026 Industry Playbook',
      '传统美业正在集体失效': 'The "Trading Time for Money" Trap',
      '为什么 90% 的门店守着优质流量，却陷入低客单、低复购的增长泥潭？': 'Why are 90% of salons struggling with low margins despite having a loyal client base?',
      '流量焦虑': 'The Client Acquisition Trap',
      '获客成本逐年攀升，公域流量如流水而过，无法沉淀为可运营的数字化资产。': 'Rising ad costs and platform shifts make it impossible to build predictable wealth without a digital asset system.',
      '交付单一': 'The Low-Margin Hustle',
      '业务结构高度重合，陷入同质化价格战，缺乏高毛利、强粘性的第二增长曲线。': 'Most salons are stuck in a price war. You need a high-margin "Second Curve" to break through the revenue ceiling.',
      '人治瓶颈': 'The Talent Dependency',
      '高度依赖发型师个人能力，服务标准难以复制，规模化扩张即面临品质坍塌。': 'Relying solely on individual talent limits your growth. You need a system that delivers consistent excellence at scale.',
      '三大核心增长支柱': 'The Three Pillars of High-Ticket Success',
      'WIGSWAN 2.0 系统通过技术手段，实现供需两端的最优资源动态分配。': 'WIGSWAN 2.0 optimizes the value chain to maximize your revenue per square foot.',
      '智能调度中枢': 'AI Dispatch Hub',
      '基于精准画像的 AI 派单算法，实现“流量-专家-门店”的最优匹配。大幅提升首单转化率与服务响应速度。': 'Match the right client with the right expert at the right time. Our AI eliminates friction and maximizes first-visit conversion.',
      '矩阵获客工厂': 'Automated Content Factory',
      '自动化 AI 内容生产流水线，将门店真实服务素材转化为全平台（抖音/视频号）的高粘性公域流量燃料。': 'Turn your daily work into high-converting social content. Our AI pipeline handles the marketing so you can focus on the art.',
      'LTV 价值深耕': 'LTV Optimization',
      '精细化会员生命周期管理模型。通过 90 天电子档案自动触发服务提醒，将单次博弈转化为终身价值共创。': 'Stop thinking one-off transactions. Our 90-day digital profiling system turns a single visit into a lifetime of high-value revenue.',
      '战略优势矩阵': 'The Competitive Advantage',
      '为什么 WIGSWAN 2.0 系统是美业增长的唯一确定性路径？': 'Why WIGSWAN is the only path to 3X your salon’s valuation.',
      '核心维度': 'Key Metrics',
      '传统加盟模式': 'Traditional Franchise',
      'WIGSWAN 数字化生态': 'WIGSWAN Ecosystem',
      '获客成本': 'Acquisition Cost',
      '极高（依赖地推/昂贵商券）': 'High (Reliant on discounts/ad spend)',
      '边际成本趋零（AI 矩阵工厂驱动）': 'Near Zero (Driven by AI Content)',
      '资产结构': 'Asset Structure',
      '重资产（大量库存/高额加盟费）': 'Heavy (Inventory & Entry Fees)',
      '轻资产（零囤货/按需调度）': 'Asset-Light (Zero Stock/On-Demand)',
      '客户价值': 'Client LTV',
      '单次交易（博弈心态）': 'Transactional (One-off)',
      'LTV 深耕（终身价值管理）': 'Relationship-Based (Lifetime)',
      '响应速度': 'Response Time',
      '人工中转（低效/易流失）': 'Slow (Manual Handoff)',
      '毫秒级调度（算法自动匹配）': 'Instant (AI Matching)',
      '极速盈利实验诊断': 'Business Scalability Simulator',
      '输入您的门店基础数据，AI 将基于 500+ 标杆门店的脱敏模型，为您演算 60 天内的增长潜力。': 'Enter your numbers. Our AI will simulate your 60-day revenue potential based on 500+ top-performing US studios.',
      '✔ 隐藏核心计算系数，保护商业机密': '✔ Proprietary revenue algorithm',
      '✔ 基于非线性权重评分模型': '✔ Weighted by local market demographics',
      '✔ 1V1 增长顾问深度解读报告': '✔ Includes a 1-on-1 strategy session',
      '门店服务容量 (工位数)': 'Stations / Chairs',
      '日均高净值客流': 'Average Daily Clients',
      '预估月度营收增长潜力': 'Estimated Monthly Revenue Uplift',
      '加载模型...': 'Loading Algorithm...',
      '© 2026 WIGSWAN 美业云链. 版权所有.': '© 2026 WIGSWAN Global. All rights reserved.',
      '关于愿景': 'Our Vision',
      '增长动态': 'Newsroom',
      '增长情报': 'Insights',
      '申请合作': 'Apply Now',
      '首页': 'Home',
      '增长中枢': 'Growth Hub',
      '全球案例': 'Case Studies',
      '了解 WIGSWAN 美业云链的使命与愿景：重构美业价值链，赋能每一家门店。': 'Discover WIGSWAN’s mission to rebuild the beauty value chain and empower studios globally.',
      '关于愿景 | 数字化重构美业 - WIGSWAN': 'Vision | Disrupting the Beauty Economy - WIGSWAN',
      '为美业注入数字灵魂': 'Giving Beauty a Digital Soul',
      '我们不仅仅是在改变发型，我们是在用科技和算法，重塑数百万手艺人的商业命运。': 'We aren’t just changing hair; we’re using technology to redefine the financial destiny of the beauty professional.',
      '我们的哲学：流量归平台，交付归门店': 'Our Philosophy: Platform Scales, Studios Deliver',
      '在传统模式中，理发店老板往往陷入“既要引流又要管理交付”的内耗中。WIGSWAN（美业云链）的诞生，是为了彻底打破这一枷锁。 我们建立了一个强大的 AI 调度中心，将繁重的公域引流、画像匹配、LTV 运营交给算法； 让门店回归本质——专注那 10% 的核心交付与艺术创造。': 'Salon owners are often trapped between marketing and operations. WIGSWAN breaks that cycle. We built a powerful AI engine to handle acquisition and LTV management, allowing you to focus on the top 10% of high-end delivery and creative artistry.',
      '技术底座': 'The Tech Stack',
      '持续投入 AI 矩阵工厂与调度算法的研发，确保系统永远领先行业一个维度。': 'Continuous investment in AI ensures your studio is always one generation ahead of the competition.',
      '长期主义': 'Long-Term Partnership',
      '拒绝割韭菜式的加盟。我们通过 60 天盈利实验，只与真正具备成长基因的门店同行。': 'We reject the predatory franchise model. We only partner with studios that have the DNA for exponential growth.',
      '共生生态': 'Global Ecosystem',
      '构建一个连接全球供应链与本地服务专家的柔性网络，实现价值链的利润重分配。': 'A global network connecting elite supply chains with local experts to maximize profit redistribution.',
      '赋能手艺人，重构美业链': 'Empowering Artists. Scaling Studios.',
      '© 2026 WIGSWAN. 全球增长总部.': '© 2026 WIGSWAN Global HQ.',
      '查看 WIGSWAN 美业云链全球合作门店的数字化增长案例。': 'Explore how WIGSWAN partner studios are scaling worldwide.',
      '全球规模化标杆 | 数字化增长案例 - WIGSWAN': 'Global Benchmarks | High-Ticket Scaling Cases - WIGSWAN',
      '数字化增长标杆': 'The Proof of Concept',
      '我们不展示个案，我们展示的是可复制的盈利模型。以下门店通过 WIGSWAN 2.0 系统实现了营收结构的底层重构。': 'We don’t showcase outliers; we showcase replicable business models that rebuild your revenue structure from the ground up.',
      'A类商圈旗舰型': 'Metropolitan Flagship',
      '上海静安 · 5号样板店': 'LA Beverly Hills · Model Studio 05',
      '该店通过接入 WIGSWAN 智能调度中枢，成功将客单价从传统美业水平提升了 3.2 倍。核心在于利用 AI 矩阵工厂持续输出高粘性案例视频，精准捕获了周边 5 公里内的高净值脱发客群。': 'By integrating our AI Hub, this studio increased its Average Ticket Size by 320%. The AI Matrix Factory captured high-net-worth clients within a 10-mile radius, specifically targeting the scalp-health and extension niche.',
      '增长速率 (Velocity)': 'Scaling Velocity',
      '* 基于 WIGSWAN 60天极速回本模型测算': '* Based on the 60-Day Scaling Blueprint projections.',
      '社区信任深耕型': 'Boutique Trust Growth',
      '成都 · 高新社区店': 'Miami · Wynwood Boutique',
      '典型的通过 LTV 价值挖掘盘活存量资产的案例。门店利用 90 天电子护理档案，将首单假发购买转化为了长期的护理订阅服务。老带新裂变率在 60 天内达到了惊人的 38%。': 'A classic example of LTV mining. By using digital profiling, they turned one-off wig purchases into long-term "Care Subscriptions," resulting in a 38% referral rate within two months.',
      '复购粘性 (Retention)': 'Client Retention',
      '卓越 S级': 'Elite S-Tier',
      '想知道您的门店能实现多少倍增？': 'Ready to 3X Your Studio Revenue?',
      '点击下方按钮，开启专属您的 60 天盈利潜力评估。': 'Click below to start your dedicated 60-day business scalability audit.',
      '立即开启诊断': 'Get My Audit Now',
      'AI 视觉成像实验室': 'AI Visual Intelligence Lab',
      '基于 3D 骨相扫描技术，为客户预演“变美”后的每一个维度。': 'Using 3D bone structure scanning to simulate every dimension of your aesthetic transformation.',
      '◈ 3D 数字化骨相采集': '◈ 3D Digital Bone Structure Capture',
      '毫秒级捕捉面部 68 个关键特征点，自动计算最适配的发际线弧度与发量密度。': 'Capturing 68 facial landmarks in milliseconds to automatically calculate the perfect hairline and hair density.',
      '⌘ K-Trend 实时风格映射': '⌘ Real-time K-Trend Mapping',
      '实时链接潮流数据库，AI 自动将最新趋势与客户画像进行 1:1 合成演示。': 'Live connection to trend databases. AI performs 1:1 style mapping onto client profiles.',
      '∞ 90天头皮资产追踪': '∞ 90-Day Scalp Asset Tracking',
      '建立数字资产档案，持续监测佩戴后的头皮健康度，自动触发维保预警。': 'Digital asset tracking for scalp health and natural wear, with automated maintenance triggers.',
      '© 2026 WIGSWAN. 为美业注入数字灵魂.': '© 2026 WIGSWAN. Giving beauty a digital soul.',
      '获取 WIGSWAN 美业云链最新增长动态、行业趋势与数字化经营技巧。': 'Get the latest on beauty tech, industry trends, and scaling tactics.',
      '增长情报 | 商业洞察 - WIGSWAN': 'Intelligence | Scaling Insights - WIGSWAN',
      '全球增长情报站': 'Global Intelligence Desk',
      '我们持续监测全球美业数字化趋势，为您输出具备实战价值的商业洞察。': 'We monitor global beauty shifts to deliver actionable intelligence for your studio.',
      '从“理发店”到“形象资产管理中心”：行业转型的奇点已至': 'From "Salon" to "Image Asset Management": The Industry Singularity',
      '深度解析为什么单一的剪发业务将逐渐丧失竞争力，而围绕 LTV 展开的“资产管理”模式将成为未来的核心盈利引擎。': 'Why standalone haircuts are a dying business, and why asset-based LTV management is the future of salon wealth.',
      'AI 矩阵工厂：如何通过自动化脚本在公域流量池实现“低成本爆破”': 'AI Matrix Factory: Breaking the Traffic Ceiling with Content Automation',
      '揭秘 WIGSWAN 2.0 系统的短视频自动化逻辑，解析 100+ 样板店如何通过系统自动分发实现线索量翻倍.': 'Inside our content automation engine. See how 100+ studios doubled their lead volume via automated AI distribution.',
      '订阅深度行业报告 (PDF)': 'Download the Scaling Report (PDF)',
      '© 2026 WIGSWAN. 赋能手艺人，重构美业链.': '© 2026 WIGSWAN. Empowering Artists. Scaling Studios.',
      '美业云链（WIGSWAN）产业调度中枢，重构美业服务网络。': 'WIGSWAN: The Industrial Hub Rebuilding the Beauty Network.',
      '美业云链 | 增长中枢 - WIGSWAN': 'Growth Hub | The Scalability Engine - WIGSWAN',
      '重构美业服务网络': 'Rebuilding the Beauty Service Network',
      '建立数字化调度主轴': 'The Digital Axis of Success',
      '美业云链不是一个加盟品牌，而是一套连接全球供应链、本地化服务专家与高净值消费者的“神经系统”。通过 AI 调度，我们让每一家理发店都能拥有顶级假发定制的服务能力。': 'WIGSWAN is not a franchise; it’s a nervous system connecting elite supply chains, local experts, and high-value clients. Our AI empowers any studio to deliver world-class custom solutions.',
      'WIGSWAN AI 调度中枢': 'WIGSWAN AI Dispatch Center',
      '连接 1000+ 服务节点与全球柔性供应链': 'Connecting 1000+ nodes to a global flexible supply chain.',
      '矩阵式合伙人体系': 'The Matrix Partner Network',
      '打破传统层级，建立以服务质量为权重的动态资源分配网络。让真正的“手艺人”通过系统获得尊严与收益。': 'Breaking traditional hierarchies. We build a dynamic network where quality artists earn what they truly deserve.',
      '零边际成本扩张': 'Zero-Marginal-Cost Expansion',
      '门店无需压货，无需重资产。通过 WIGSWAN 数字化工具，实现 24 小时内的项目极速嫁接与盈利验证。': 'No inventory. No heavy overhead. Use our digital toolkit to launch high-ticket projects within 24 hours.',
      '数字化赋能路径': 'The Enablement Path',
      '从“流量焦虑”到“价值深耕”的 4 步演进': 'A 4-step evolution from hustle to automated wealth.',
      '画像诊断': 'Client Profiling',
      '基于 LTV 模型的客群深度分析，精准锁定沉睡的高净值会员。': 'Deep analysis to unlock your database’s hidden high-value clients.',
      '内容爆破': 'Content Breakthrough',
      'AI 矩阵工厂自动生成本土化、强信任的短视频弹药，实现低成本获客。': 'AI-generated, localized content that builds trust and drives leads at low cost.',
      '智能派单': 'Intelligent Matching',
      '毫秒级算法匹配，确保最合适的“形象专家”在最合适的时间出现在门店。': 'Instant matching ensures the right expert arrives at the right time.',
      '© 2026 WIGSWAN. 全链路数字化增长引擎.': '© 2026 WIGSWAN. The Complete Scaling Ecosystem.',
      '申请成为增长合伙人': 'Become a Partner',
      '申请加入 WIGSWAN 全球增长网络，开启门店数字化评估。': 'Apply to join the global network and start your business audit.',
      '合伙人审计 | 开启盈利诊断 - WIGSWAN': 'Partner Audit | Scalability Check - WIGSWAN',
      '申请诊断': 'Apply for Audit',
      '战略合伙人资格审计': 'Strategic Partner Qualification Audit',
      'WIGSWAN 仅筛选具有强烈增长意愿且具备高标准交付能力的门店，开启 60 天盈利闭环实验。': 'We only partner with highly motivated studios capable of delivering excellence. Start your 60-day closed-loop simulation.',
      '01. 门店经营画像': '01. Business Profile',
      '机构全称 / 品牌': 'Studio Name / Brand',
      '例如：型格沙龙深圳旗舰店': 'e.g., Beverly Hills Luxury Salon',
      '目前核心业务占比': 'Current Service Mix',
      '传统洗剪吹为主': 'Mainly Cut & Blow-dry',
      '烫染护理为主': 'Mainly Color & Treatment',
      '已有假发/接发项目': 'Existing Wigs/Extensions',
      '主要客流获取渠道': 'Primary Lead Source',
      '自然到店 / 地推': 'Walk-ins / Local Promo',
      '美团 / 点评团购': 'Marketplace Apps (Yelp/Meituan)',
      '抖音 / 视频号公域': 'Short Video Platforms (TikTok/IG)',
      '私域流量 / 老客转介绍': 'Referrals & Private Circles',
      '下一步：交付能力评估': 'Next: Capacity Audit',
      '02. 交付与内容基础': '02. Capacity & Content Foundation',
      '资深发型师数量 (5年以上经验)': 'Senior Stylists (5+ Years Exp)',
      '是否有专人负责短视频/社交媒体运营？': 'Dedicated Social Media Personnel?',
      '有专职运营团队': 'Yes, dedicated team',
      '店长/发型师兼职': 'Owner/Stylist part-time',
      '外包代运营': 'Outsourced Agency',
      '暂无人员投入': 'None currently',
      '是否具备独立私密接待空间？': 'Do you have a private reception area?',
      '已具备独立房间': 'Yes, private rooms available',
      '可进行半私密改造': 'Can be modified to semi-private',
      '暂无（需专家指导规划）': 'No, need expert planning',
      '返回': 'Back',
      '下一步：联系方式': 'Next: Contact Info',
      '03. 增长顾问对接': '03. Strategy Handoff',
      '主理人姓名': 'Principal Name',
      '联系电话（接收诊断报告）': 'Mobile Number (for Audit Report)',
      '提交审计并获取 1V1 报告': 'Submit & Schedule 1-on-1 Session',
      '正在跳转到 WIGSWAN 战略合伙人审计系统': 'Redirecting to the Scaling Audit System...',
      '正在跳转到': 'Redirecting to',
      '立即前往': 'Go Now',
      '跳转中 - WIGSWAN': 'Redirecting - WIGSWAN',
      '跳转到申请合作 - WIGSWAN': 'Redirecting to Application - WIGSWAN',
      'AI 调度模型计算中...': 'Simulating Revenue Model...',
      'B级：稳健增长型': 'Grade B: Steady Growth',
      'A级：高效爆发型': 'Grade A: High-Velocity Growth',
      'S级：旗舰增长引擎': 'Grade S: Flagship Revenue Engine'
    },
    ja: {
      'WIGSWAN 美业云链：以 AI 驱动的产业互联网引擎，重构全球美业价值链条。': 'WIGSWAN：美理容師の技術とデジタルを融合させ、次世代の美の価値を共創するインテリジェント・プラットフォーム。',
      'WIGSWAN | 美业云链 - 数字智能化增长引擎': 'WIGSWAN | 美容業界のデジタル・トランスフォーメーション (DX) 支援システム',
      '了解 WIGSWAN 美业云链的使命与愿景：重构美业价值链，赋能每一家门店。': 'WIGSWANの使命：伝統的な美理容技術にデジタル技術を導入し、職人の価値を最大化する。',
      '关于愿景 | 数字化重构美业 - WIGSWAN': 'ビジョン | デジタルで拓く美容業界の未来 - WIGSWAN',
      '查看 WIGSWAN 美业云链全球合作门店的数字化增长案例。': 'WIGSWANを導入した国内外の提携サロンにおけるDX成功事例。',
      '全球规模化标杆 | 数字化增长案例 - WIGSWAN': 'グローバル成功事例 | デジタル活用によるサロン成長の軌跡 - WIGSWAN',
      '获取 WIGSWAN 美业云链最新增长动态、行业趋势与数字化经营技巧。': 'WIGSWANが提供する最新の業界トレンド、DX経営ノウハウ、および技術情報。',
      '增长情报 | 商业洞察 - WIGSWAN': 'インテリジェンス | 美容業界のデジタル洞察 - WIGSWAN',
      '美业云链（WIGSWAN）产业调度中枢，重构美业服务网络。': 'WIGSWAN：サプライチェーンとサロンを繋ぐ、美容業界のスマート・ネットワーク・ハブ。',
      '美业云链 | 增长中枢 - WIGSWAN': 'WIGSWAN | 美容業界のDXハブ',
      '申请加入 WIGSWAN 全球增长网络，开启门店数字化评估。': 'WIGSWANグローバル・ネットワークへの参画およびデジタル経営診断の申し込み。',
      '合伙人审计 | 开启盈利诊断 - WIGSWAN': '提携監査 | デジタル経営診断 - WIGSWAN',
      '首页': 'ホーム', '增长中枢': 'DXハブ', '全球案例': '導入事例', '战略优势': '戦略的優位性', '关于愿景': 'ビジョン', '增长动态': 'ニュース', '增长情报': 'インテリジェンス', '申请合作': 'お問い合わせ', '战略核心': '戦略コア', '行业诊断': '経営診断', '增长支柱': '支援の柱', '盈利实验': '経営シミュレーション', '立即诊断': '診断を開始',
      '重构美业价值链条': '職人の価値をデジタルで再定義', 'AI 驱动增长引擎': '美理容師のための知能支援システム', 'WIGSWAN 通过 AI 调度算法与矩阵获客工厂，为传统美业门店提供跨越式增长模型。我们不是在卖产品，而是在通过数字化重塑行业底层逻辑。': 'WIGSWANは、AIによる精密な分析とデジタル技術を駆使し、サロンの持続可能な成長を支援します。単なる製品販売ではなく、デジタル化を通じてサロン経営の根本的な効率化と価値向上を目指します。',
      '开启 60 天盈利实验': '60日間の経営最適化プログラム', '获取《2026美业增长白皮书》': '「2026 美容業界DX白書」を請求する', '传统美业正在集体失效': '従来型サロン経営の課題', '为什么 90% 的门店守着优质流量，却陷入低客单、低复购的增长泥潭？': 'なぜ多くのサロンが、高い技術力を持ちながら収益性の向上に苦心しているのでしょうか？',
      '流量焦虑': '新規集客の限界', '获客成本逐年攀升，公域流量如流水而过，无法沉淀为可运营的数字化资产。': '広告費の増大に対し、顧客情報のデジタル資産化が遅れ、リピート率の向上が困難になっています。', '交付单一': '提供価値の画一化', '业务结构高度重合，陷入同质化价格战，缺乏高毛利、强粘性的第二增长曲线。': 'サービスが同質化し価格競争に陥りやすいため、収益性の高い新たな柱の構築が急務です。', '人治瓶颈': '属人化の課題', '高度依赖发型师个人能力，服务标准难以复制，规模化扩张即面临品质坍塌。': '個人のスキルに過度に依存しているため、サービスの標準化や組織的な成長が難しくなっています。',
      '三大核心增长支柱': 'サロンを支える3つの柱', 'WIGSWAN 2.0 系统通过技术手段，实现供需两端的最优资源动态分配。': 'WIGSWAN 2.0は、デジタル技術により需要と供給の最適化を支援します。', '智能调度中枢': 'インテリジェント・マッチング', '基于精准画像的 AI 派单算法，实现“流量-专家-门店”的最优匹配。大幅提升首单转化率与服务响应速度。': '精密な顧客データに基づくAIマッチングにより、顧客と職人の最適な出会いを創出。成約率と顧客満足度を向上させます。', '矩阵获客工厂': 'デジタル・プレゼンス構築', '自动化 AI 内容生产流水线，将门店真实服务素材转化为全平台（抖音/视频号）的高粘性公域流量燃料。': 'サロンの確かな技術を、AIを活用して魅力的なコンテンツに変換。SNSを通じた質の高い新規顧客との接点を作ります。', 'LTV 价值深耕': 'LTV (顧客生涯価値) の最大化', '精细化会员生命周期管理模型。通过 90 天电子档案自动触发服务提醒，将单次博弈转化为终身价值共创。': '90日間のデジタル・カルテを活用し、最適なタイミングで再来店を促進。一度の来店を一生の信頼関係へと繋げます。',
      '战略优势矩阵': '戦略重位性', '为什么 WIGSWAN 2.0 系统是美业增长的唯一确定性路径？': 'なぜWIGSWAN 2.0がサロンDXの最適解なのか', '核心维度': '比較項目', '传统加盟模式': '従来のフランチャイズ', 'WIGSWAN 数字化生态': 'WIGSWANデジタルDXシステム', '获客成本': '顧客獲得コスト', '极高（依赖地推/昂贵商券）': '非常に高い（広告・クーポン依存）', '边际成本趋零（AI 矩阵工厂驱动）': '極めて低い（デジタル集客の自動化）', '资产结构': '資産構造', '重资产（大量库存/高额加盟费）': '重資産（在庫・高額な初期費用）', '轻资产（零囤货/按需调度）': '軽資産（在庫不要・オンデマンド提供）', '客户价值': '顧客との関係性', '单次交易（博弈心态）': '単発の取引', 'LTV 深耕（终身价值管理）': 'LTVの追求（長期的信頼関係）', '响应速度': '対応スピード', '人工中转（低效/易流失）': '手動による非効率な対応', '毫秒级调度（算法自动匹配）': 'デジタルによる即時マッチング',
      '极速盈利实验诊断': 'サロン経営ポテンシャル診断', '输入您的门店基础数据，AI 将基于 500+ 标杆门店の脱敏模型，为您演算 60 天内的增长潜力。': 'サロンの基本データを入力してください。AIが国内外500以上の成功事例に基づき、60日間での成長ポテンシャルをシミュレートします。', '✔ 隐藏核心计算系数，保护商业机密': '✔ 独自アルゴリズムによる機密性の高い分析', '✔ 基于非线性权重评分模型': '✔ 非線形重み付けスコアリング', '✔ 1V1 增长顾问深度解读报告': '✔ 専門コンサルタントによる個別フィードバック', '门店服务容量 (工位数)': 'セット面数 (席数)', '日均高净值客流': '1日あたりの平均来店数', '预估月度营收增长潜力': '推定される月間収益向上ポテンシャル', '加载模型...': 'モデルを読み込み中...',
      '© 2026 WIGSWAN 美业云链. 版权所有.': '© 2026 WIGSWAN Beauty Cloud Chain. All rights reserved.', '为美业注入数字灵魂': '美のプロフェッショナルにデジタルの力を', '我们不仅仅是在改变发型，我们是在用科技和算法，重塑数百万手艺人的商业命运。': '私たちは単に外見を変えるだけではありません。テクノロジーを駆使して、職人の価値を次世代へと繋いでいきます。', '我们的哲学：流量归平台，交付归门店': '私たちの哲学：集客はシステムが、技術はサロンが',
      '在传统模式中，理发店老板往往陷入“既要引流又要管理交付”的内耗中。WIGSWAN（美业云链）的诞生，是为了彻底打破这一枷锁。 我们建立了一个强大的 AI 调度中心，将繁重的公域引流、画像匹配、LTV 运营交给算法； 让门店回归本质——专注那 10% 的核心交付与艺术创造。': 'サロン経営者が集客と現場管理の両立に疲弊する時代を終わらせるために、WIGSWANは誕生しました。強力なAIハブがマーケティングとマッチングを担眼ことで、職人は本来の役割である「創造と技術の提供」に100%集中することができます。', '技术底座': '技術基盤', '持续投入 AI 矩阵工厂与调度算法的研发，確保系统永远领先行业一个维度。': '常に最先端のAI技術とアルゴリズムへの投資を続け、業界のDXを牽引します。', '长期主义': '長期的な視点', '拒绝割韭菜式的加盟。我们通过 60 天盈利实验，只与真正具备成长基因的门店同行。': '短期的な利益ではなく、真に成長を志すサロンと共に、持続可能なエコシステムを構築します。', '共生生态': '共創エコシステム', '构建一个连接全球供应链 with 本地服务专家的柔性网络，实现价值链の利益を再配分します。': 'グローバルなサプライチェーンと地域の専門家を繋ぎ、適正な利益分配を実現するネットワークを構築します。', '赋能手艺人，重构美业链': '職人を支援し、美容業界をアップデートする', '© 2026 WIGSWAN. 全球增长总部.': '© 2026 WIGSWAN. グローバルDX本部.',
      '数字化增长标杆': 'デジタル活用による成功事例', '我们不展示个案，我们展示的是可复制的盈利模型。以下门店通过 WIGSWAN 2.0 系统实现了营收结构的底层重构。': '再現性の高いDXモデルの実績をご紹介します。これらのサロンは、WIGSWAN 2.0の導入により経営構造の最適化に成功しました。', 'A类商圈旗舰型': '都市型フラッグシップ店', '上海静安 · 5号样板店': 'LA Beverly Hills · Model Studio 05', '该店通过接入 WIGSWAN 智能调度中枢，成功将客单价从传统美业水平提升了 3.2 倍。核心在于利用 AI 矩阵工厂持续输出高粘性案例视频，精准捕獲了周辺 5 公里内的高净值脱发客群。': 'インテリジェント・マッチングの導入により、客単価を従来比3.2倍へと向上. デジタル・プレゼンスの強化により、特定ニーズを持つ顧客を広域から集客することに成功しました。', '增长速率 (Velocity)': '成長スピード', '* 基于 WIGSWAN 60天极速回本模型测算': '* WIGSWAN 独自モデルに基づくシミュレーション', '社区信任深耕型': '地域密着・信頼深耕型', '成都 · 高新社区店': 'Miami · Wynwood Boutique', '典型的通过 LTV 价值挖掘盘活存量资产的案例。门店利用 90 天电子护理档案，将首单假发购买转化为了长期的护理订阅服务。老带新裂变率在 60 天内达到了惊人的 38%。': 'LTV(顧客生涯価値)を重視した成功例。デジタル・カルテの活用により、一度のサービス提供を長期的なサブスクリプションへと繋げ、紹介率38%を実現しました。', '复购粘性 (Retention)': 'リピート率', '卓越 S级': '卓越 Sランク', '想知道您的门店能实现多少倍增？': 'あなたのサロンのDXポテンシャルを診断しませんか？', '点击下方按钮，开启专属您的 60 天盈利潜力评估。': '下のボタンから、経営最適化シミュレーションを開始できます。', '立即开启诊断': '診断を開始',
      '获取 WIGSWAN 美业云链最新增长动态、行业趋势与数字化经营技巧。': 'WIGSWANが提供する最新の業界トレンド、DX経営ノウハウ、および技術情報。',
      '增长情报 | 商业洞察 - WIGSWAN': 'インテリジェンス | 美容業界のデジタル洞察 - WIGSWAN',
      '全球增长情报站': 'インテリジェンス・デスク', '我们持续监测全球美业数字化趋势，为您输出具备实戦価値の商业洞察。': '世界の美容トレンドとDX事例を継続的にモニタリングし、有益なインサイトを提供します。', '从“理发店”到“形象资产管理中心”：行业转型の奇点已至': '「ヘアサロン」から「イメージ資産管理」へ：美容業界のパラダイムシフト', '深度解析为什么单一的剪发业务将逐渐丧失竞争力，而围绕 LTV 展开的“资产管理”模式将成为未来的核心盈利引擎。': '従来のカット中心のビジネスモデルから、LTVを轴とした資産管理型モデルへの移行がなぜ不可避なのかを深く考察します。', 'AI 矩阵工厂：如何通过自动化脚本在公域流量池实现“低成本爆破”': 'デジタル・プレゼンス戦略：AIによる自動化で質の高い集客を実現する方法', '揭秘 WIGSWAN 2.0 系统的短视频自动化逻辑，解析 100+ 样板店如何通过系统自动分发实现线索量翻倍.': 'WIGSWAN 2.0におけるコンテンツ自動生成のロジックと、集客効果を最大化するためのシステム活用法を解説します。', '订阅深度行业报告 (PDF)': '詳細レポート(PDF)を購読する', '© 2026 WIGSWAN. 赋能手艺人，重构美业链.': '© 2026 WIGSWAN. 職人の価値を次世代へ。',
      '重构美业服务网络': '美容サービスネットワークの再構築', '建立数字化调度主轴': 'デジタル・ロジスティクスの構築', '美业云链不是一个加盟ブランド, 而是一套连接全球供应链、本地化服务专家与高净值消费者的“神经系统”。通过 AI 调度，我们让每一家理发店都能拥有顶级假发定制的服务能力。': 'WIGSWANはフランチャイズではなく、サプライチェーン、職人、 そして顧客を連結する ‘인텔리전트 시스템’입니다. AI 배정을 통해 모든 미용실이 최고급 맞춤 가발 서비스 역량을 갖게 합니다.', 'WIGSWAN AI 调度中枢': 'WIGSWAN AI ハブ', '连接 1000+ 服务节点与全球柔性供应链': '1000以上の拠点とグローバル供給網を統合', '矩阵式合伙人体系': 'パートナー・エコシステム', '打破传统层式，建立以服务质量为权重的动态資源分配ネットワーク. 让真正的“手艺人”通过系统获得尊厳与收益。': '旧来の階層を打破し、サービスの質に基づく適正な分配を実現。真の職人が正当な評価と収益を得られるネットワークを構築します。', '零边际成本扩张': '効率的なビジネス拡張', '门店无需压货，无需重資産。通过 WIGSWAN 数字化工具，实现 24 小时内的项目极速嫁接与盈利検証.': '在庫リスクや多額の投資は不要。デジタルツールにより、迅速なサービス導入と経営シミュレーションを実現します。', '数字化赋能路径': 'DXへの4つのステップ', '从“流量焦虑”到“价值深耕”の 4 步演進': '新規集客への依存から、深い信頼関係의 구축으로', '画像诊断': 'データ分析', '基于 LTV 模型的客群深度分析，精准锁定沉睡的高净值会员。': 'LTVモデルに基づき、潜在的なニーズを持つ重要顧客을 정밀하게 추출합니다.', '内容爆破': 'プレゼンス構築', 'AI 矩阵工厂自动生成本土化、强信任的短视频弹药，实现低コスト獲客.': '地域に密着した信頼性の高いコンテンツをAIで生成し、質の高い集客を支援します。', '智能派单': '最適マッチング', '毫秒级算法匹配，確保最合适的“形象专家”在最合适的时间出现在门店。': 'アルゴリズムにより、顧客にとって最適な専門家を最適なタイミングで繋ぎます。', '© 2026 WIGSWAN. 全链路数字化增长引擎.': '© 2026 WIGSWAN. 次世代美容DXシステム。', '申请成为增长合伙人': 'パートナーシップへの参加',
      '申请诊断': '経営診断の申し込み', '战略合伙人资格审计': '提携監査および資格審査', 'WIGSWAN 仅筛选具有强烈增长意愿且具备高标准交付能力的门店，开启 60 天盈利闭环实验。': 'WIGSWANは、成長への高い志と確かな技術を持つサロンと共に、60日間の経営最適화プログラムを実施します。', '01. 门店经营画像': '01. サロン経営プロファイル', '机构全称 / 品牌': 'サロン名 / ブランド名', '例如：型格沙龙深圳旗舰店': '例：WIGSWAN 渋谷フラッグシップ', '目前核心业务占比': '現在の主要事業比率', '传统洗剪吹为主': 'カット・カラー・パー마中心', '烫染护理为主': 'トリートメント・ケア中心', '已有假发/接发项目': 'ウィッグ・エクステ導入済み', '主要客流获取渠道': '主要な集客チャネル',
      '自然到店 / 地推': '通りがかり / 店頭販促',
      '美团 / 点评团购': '予約サイト / クーポンサイト',
      '抖音 / 视频号公域': 'SNS / ショート動画 (TikTok等)',
      '私域流量 / 老客转介绍': '既存顧客のリピート / 紹介',
      '下一步：交付能力评估': '次へ：サービス提供能力の評価', '02. 交付与内容基础': '02. 設備とコンテンツ基盤', '资深发型师数量 (5年以上经验)': '経験5年以上のスタイリスト数',
      '是否有专人负责短视频/社交媒体运营？': 'SNS・動画運用の専任担当者の有無',
      '有专职运营チームあり': '専任チームあり',
      '店长/发型师兼任': '店長・スタッフが兼任',
      '外包代运营': '外部委託',
      '暂无人员投入': '担当者なし',
      '是否具备独立私密接待空间？': 'プライベートな接客空間の有無', '已具备独立部屋': '個室完備', '可进行半私密改造': '半個室への改装が可能', '暂无（需专家指导规划）': '未整備（専門家のアドバイスが必要）', '返回': '戻る', '下一步：联系方式': '次へ：ご連絡先入力', '03. 增长顾问对接': '03. コンサル타인와의 연결', '主理人姓名': '代表者名', '联系电话（接收诊断报告）': 'お電話番号 (診断結果送信先)', '提交审计并获取 1V1 报告': '監査を送信し個別レポートを受け取る', '正在跳转到 WIGSWAN 战略合伙人审计系统': '提携監査システムへ接続中', '正在跳转到': '移動先：', '立即前往': '今すぐ移動', 'AI 调度模型计算中...': 'AIによる分析を実施中...', 'B级：稳健增长型': 'Bランク：安定成長型', 'A级：高效爆发型': 'Aランク：高効率成長型', 'S级：旗舰增长引擎': 'Sランク：フラッグシップ'
    },
    ko: {
      'WIGSWAN 美业云链：以 AI 驱动的产业互联网引擎，重构全球美业价值链条。': 'WIGSWAN: AI 기반 ‘뷰티 인텔리전스’ 플랫폼으로 글로벌 미용 가치사슬을 재구축합니다.',
      'WIGSWAN | 美业云链 - 数字智能化增长引擎': 'WIGSWAN | K-Beauty 디지털 트랜스포메이션 & 성장 연구소',
      '战略核心': '전략 핵심',
      '行业诊断': '트렌드 & 경영 진단',
      '增长支柱': '성장 가속 엔진',
      '战略优势': '전략적 우위',
      '盈利实验': '수익 시뮬레이션',
      '立即诊断': '무료 진단 시작',
      '重构美业价值链条': '디지털 미학의 완성',
      'AI 驱动增长引擎': '미용실을 위한 AI 뷰티 테크 시스템',
      'WIGSWAN 通过 AI 调度算法与矩阵获客工厂，为传统美业门店提供跨越식 성장 모델. 우리는 단순히 제품을 판매하는 것이 아니라, 디지털 기술로 미용 산업의 본질을 혁신합니다.': 'WIGSWAN은 AI 알고리즘과 콘텐츠 자동화 시스템을 통해 전통 미용실에 ‘초격차 성장 모델’을 제공합니다. 우리는 단순히 제품을 판매하는 것이 아니라, 디지털 기술로 미용 산업의 본질을 혁신합니다.',
      '开启 60 天盈利实验': '60일 수익 극대화 시뮬레이션',
      '获取《2026美业增长白皮书》': '‘2026 K-Beauty DX’ 리포트 신청',
      '传统美业正在集体失效': '전통 미용 경영의 한계',
      '为什么 90% 的门店守着优质流量，却陷入低客单、低复购的增长泥潭？': '왜 90%의 미용실이 좋은 입지에서도 낮은 객단가와 재방문율로 고민할까요?',
      '流量焦虑': '신규 유입의 한계',
      '获客成本逐年攀升，공역 트래픽은 유수와 같이 흘러가고, 운영 가능한 디지털 자산으로 축적되지 않습니다.': '마케팅 비용은 오르지만 고객 데이터는 자산화되지 못하고 일회성 방문에 그치고 있습니다.',
      '交付单一': '서비스의 획일화',
      '业务结构高度重합,陷入동질화 가격전, 결핍高毛利, 强粘性的第二增长曲线.': '과도한 가격 경쟁을 벗어나 고부가가치와 높은 로열티를 창출할 ‘제2의 성장 동력’이 필요합니다.',
      '人治瓶颈': '전문 인력 의존성',
      '高度依赖发型师个人能力, 서비스 표준难以 복제, 규모화 확장 시 품질 붕괴 위험이 큽니다.': '스타일리스트 개인 역량에 대한 과도한 의존은 서비스 표준화와 브랜드 확장을 가로막습니다.',
      '三大核心增长支柱': '성장을 견인하는 3대 혁신 축',
      'WIGSWAN 2.0 系统通过技术手段，实现供需两端的最优资源动态分配。': 'WIGSWAN 2.0은 AI 기술을 통해 수요와 공급의 최적화된 매칭을 지원합니다.',
      '智能调度中枢': 'AI 인텔리전트 매칭',
      '基于精准画像的 AI 派单算法，实现“流量-专家-门店”的最优匹配.大幅提升首단 전환율과 서비스 응답 속도.': '정밀 프로필 기반 AI 알고리즘이 고객-전문가-매장을 최적으로 연결하여 전환율을 극대화합니다.',
      '矩阵获客工厂': 'K-Trend 콘텐츠 팩토리',
      '自动化 AI 内容生产流水线，将门店真实服务素材转化为全平台（抖音/视频号）的高粘性 공域流量 연료.': '매장의 시술 데이터를 AI가 분석하여 인스타그램, 틱톡 등 SNS에서 화제가 될 고품질 트렌드 콘텐츠로 자동 변환합니다.',
      'LTV 价值深耕': 'LTV (고객 평생 가치) 최적화',
      '精细화 회원 생애주기 management 모델. 通过 90일 전자 기록이 서비스 알림을 자동 트리거하여 단발 거래를 평생 가치로 바꿉니다.': '90일 디지털 케어 시스템을 통해 최적의 타이밍에 재방문을 유도, 고객과의 관계를 평생 파트너십으로 만듭니다.',
      '战略优势矩阵': '압도적인 전략적 우위',
      '为什么 WIGSWAN 2.0 系统是美业增长的唯一确定性路径？': '왜 WIGSWAN 2.0이 미용 DX의 유일한 해답인가',
      '核心维度': '핵심 비교',
      '传统加盟模式': '기존 프랜차이즈',
      'WIGSWAN 数字化生态': 'WIGSWAN 디지털 생태계',
      '获客成本': '고객 획득 비용',
      '极高（依赖地推/昂贵商券）': '매우 높음 (광고 및 쿠폰 의존)',
      '边际成本趋零（AI 矩阵工厂驱动）': '제로에 수렴 (AI 콘텐츠 자동 유입)',
      '资产结构': '자산 구조',
      '重资产（大量库存/高额加盟费）': '무거운 자산 (재고 및 높은 가맹비)',
      '轻资产（零囤货/按需调度）': '가벼운 자산 (재고 부담 없음/온디맨드)',
      '客户价值': '고객 가치',
      '单차 거래（博弈心态）': '단발성 거래',
      'LTV 深耕（终身价值管理）': 'LTV 극대화 (평생 가치 관리)',
      '响应速度': '응답 속도',
      '人工中转（低效/易流失）': '수동 방식 (낮은 효율/이탈 위험)',
      '毫秒级调度（算法自动匹配）': '실시간 매칭 (AI 자동 최적화)',
      '极速盈利实验诊断': 'AI 경영 포텐셜 진단',
      '输入您的门店基础数据，AI 将基于 500+ 标杆门店의 脱민 모델로为您演算 60일 내의 성장 잠재력을 분석합니다.': '미용실의 기초 데이터를 입력해 주세요. AI가 500개 이상의 글로벌 성공 사례를 바탕으로 60일 내 성장 잠재력을 분석합니다.',
      '✔ 隐藏核心计算系数，保护商业기밀': '✔ 독자 알고리즘을 통한 기밀 데이터 분석',
      '✔ 基于非线性权重评分모델': '✔ 비선형 가중치 스코어링 모델',
      '✔ 1V1 增长顾问深度解读보고서': '✔ 전문 성장 컨설턴트의 1:1 리포트 제공',
      '门店服务容量 (工位数)': '경수 (워크스테이션 수)',
      '日均高净值客流': '일평균 방문 고객 수',
      '预估月度营收增长潜力': '예상 월 매출 향상 가능성',
      '加载模型...': '모델 로딩 중...',
      '© 2026 WIGSWAN 美业云链. 版权所有.': '© 2026 WIGSWAN Global. All rights reserved.',
      '关于愿景': '비전 & 사명',
      '增长动态': '뉴스 & 트렌드',
      '增长情报': '비즈니스 인사이트',
      '申请合作': '제휴 문의',
      '首页': '홈',
      '增长中枢': '성장 허브',
      '全球案例': '글로벌 성공 사례',
      '战略优势': '전략적 우위',
      '了解 WIGSWAN 美业云链的使命与愿景：重构美业价值链，赋能每一家门店。': 'WIGSWAN의 사명: 미용 가치사슬을 재구축하여 모든 매장의 성장을 돕습니다.',
      '关于愿景 | 数字化重构美业 - WIGSWAN': '비전 | 디지털로 완성하는 미용의 미래 - WIGSWAN',
      '为美业注入数字灵魂': '미용에 디지털 영혼을 더하다',
      '우리不仅仅是在改变发型，我们是在用科技和算法，重塑数百万手艺人的商业命运。': '우리는 단순히 스타일을 바꾸는 것이 아닙니다. 기술을 통해 수백만 미용 아티스트의 경제적 운명을 혁신합니다.',
      '我们的哲学：流量归平台，交付归门店': '우리의 철학: 플랫폼은 연결하고, 매장은 창조한다',
      '在传统模式中，理发店老板往往陷入“既要引流又要管理交付”의 내耗中. WIGSWAN（美业云链）的诞生，是为了彻底打破这一枷锁。 우리建立了一个强大的 AI 调度中心，将繁重的公域引流、画像匹配、LTV 运营交给算法； 让门店回归本质——专注那 10% 的核心交付与艺术创造。': '매장주가 마케팅과 현장 관리 사이에서 소모되는 시대는 끝났습니다. WIGSWAN은 강력한 AI 허브가 마케팅과 매칭을 담당하고, 아티스트는 본연의 역할인 ‘창조와 기술’에만 100% 집중할 수 있는 환경을 만듭니다.',
      '技术底座': '테크 스택',
      '持续投入 AI 矩阵工厂与调度算法的研发，確保系统永远领先行业一个维度。': '지속적인 AI 연구를 통해 귀하의 매장이 항상 트렌드보다 한 발 앞서 나가게 합니다.',
      '长期主义': '장기적인 파트너십',
      '拒绝割韭菜式的加盟。我们通过 60 天盈利实验，只与真正具备成长基因의门店同行.': '단기적인 이익을 쫓는 가맹 방식은 거부합니다. 우리는 성장 DNA를 가진 매장과만 함께합니다.',
      '共생 생태계': '공생 생태계',
      '构建一个连接全球供应链与本地服务专家的柔성 network, 실현 가치사슬의 이익 재분배.': '글로벌 공급망과 지역 전문가를 연결하여 공정한 수익 분배를 실현하는 네트워크를 구축합니다.',
      '赋능手艺人，重构美业链': '아티스트 지원 및 뷰티 체인 혁신',
      '© 2026 WIGSWAN. 全球增长总部.': '© 2026 WIGSWAN 글로벌 본부.',
      '查看 WIGSWAN 美业云链全球合作门店的数字化增长案例。': 'WIGSWAN 글로벌 파트너 매장의 디지털 성장 사례를 확인하세요.',
      '全球规模화 벤치마크 | 数字化增长案例 - WIGSWAN': '글로벌 성공 사례 | 뷰티 DX 성장 가이드 - WIGSWAN',
      '数字化增长标杆': '성공 입증 사례 (POC)',
      '我们不展示个案，我们展示的是可复制的盈利模型。以下门店通过 WIGSWAN 2.0 系统实现了营收结构的底层重构。': '단순한 사례가 아닌, 복제가 가능한 수익 모델을 제시합니다. 이 매장들은 WIGSWAN 2.0을 통해 수익 구조를 근본적으로 혁신했습니다.',
      'A类商圈旗舰型': '도심형 플래그십',
      '上海静安 · 5号样板店': '서울 강남 · 07호 모델 스튜디오',
      '该店通过接入 WIGSWAN 智能调度中枢，成功将客单价从传统美业水平提升了 3.2 倍。核心在于利用 AI 矩阵工厂持续输出高粘性案例视频，精准捕獲了周边 5 公里内的高净值脱发客群。': 'AI 허브 도입을 통해 객단가를 기존 대비 320% 향상시켰습니다. K-Trend 콘텐츠 팩토리를 통해 반경 5km 내 고소득 탈모 케어 고객을 정밀하게 타겟팅하여 유입시켰습니다.',
      '增长速率 (Velocity)': '성장 가속도 (Velocity)',
      '* 基于 WIGSWAN 60天极速回本模型测算': '* WIGSWAN 60일 비즈니스 최적화 모델 기준',
      '社区信任深耕型': '지역 밀착형 로열티 성장',
      '成都 · 高新社区店': '판교 · 테크노 밸리 부티크',
      '典型的通过 LTV 价值挖掘盘活存량 자산의 사례. 门店利用 90 天电子护理档案，将首单假发购买转化为了长期的护理订阅服务。老带新裂变率在 60 天内达到了惊人的 38%。': 'LTV 가치 발굴의 대표적 사례입니다. 90일 디지털 케어 시스템을 통해 첫 가발 구매를 정기 관리 구독 서비스로 전환, 60일 만에 지인 추천율 38%를 기록했습니다.',
      '复购粘性 (Retention)': '고객 유지율 (Retention)',
      '卓越 S级': '프리미엄 S등급',
      '想知道您的门店能实现多少倍增？': '귀하의 매장은 얼마나 더 성장할 수 있을까요?',
      '点击下方按钮，开启专属您的 60 天盈利潜力评估。': '아래 버튼을 눌러 귀하만을 위한 60일 경영 포텐셜 진단을 시작하세요.',
      '立即开启诊断': '지금 진단 시작하기',
      '© 2026 WIGSWAN. 为美业注入数字灵魂.': '© 2026 WIGSWAN. 미용에 디지털 영혼을.',
      '获取 WIGSWAN 美业云链最新增长动态、行业趋势与数字化经营技巧。': '최신 뷰티 테크, 산업 트렌드, 성장 전략을 확인하세요.',
      '增长情报 | 商业洞찰 - WIGSWAN': '인텔리전스 | 비즈니스 인사이트 - WIGSWAN',
      '全球增长情报站': '글로벌 인텔리전스 데스크',
      '我们持续监测全球美业数字化趋势，为您输出具备实전 가치의商业洞찰.': '글로벌 미용 DX 트렌드를 분석하여 매장 경영을 위한 실질적인 인사이트를 제공합니다.',
      '从“理发店”到“形象资产管理中心”：行业转型的奇点已至': '‘헤어샵’에서 ‘이미지 자산 관리 센터’로: 패러다임의 변화',
      '深度解析为什么单一的剪发业务将逐渐丧失竞争力，而围绕 LTV 展开的“资产管理”模式将成为未来的核心盈利引擎。': '단순 컷 시술 모델의 위기와 LTV 기반 자산 관리 모델이 왜 미래 미용 수익의 핵심인지 심층 분석합니다.',
      'AI 矩阵工厂：如何通过自动化脚本在公域流量池实现“低成本爆破”': 'AI 콘텐츠 팩토리: 자동화를 통한 저비용 고효율 신규 유입 전략',
      '揭秘 WIGSWAN 2.0 系统的短视频自动化逻辑，解析 100+ 样板店如何通过系统自动分发实现线索량翻배.': 'WIGSWAN 2.0의 숏폼 자동화 로직을 공개합니다. 100개 이상의 모델 매장이 어떻게 신규 고객 유입을 2배로 늘렸는지 확인하세요.',
      '订阅深度行业报告 (PDF)': '심층 산업 리포트 구독 (PDF)',
      '© 2026 WIGSWAN. 赋능手艺人，重构美业链.': '© 2026 WIGSWAN. 아티스트 지원 및 뷰티 체인 혁신.',
      '美业云链（WIGSWAN）产业调度中枢，重构美业服务网络。': 'WIGSWAN: 미용 서비스 네트워크를 재구축하는 지능형 허브.',
      '美业云链 | 增长中枢 - WIGSWAN': '성장 허브 | DX 엔진 - WIGSWAN',
      '重构美业服务网络': '미용 서비스 네트워크 재구축',
      '建立数字化调度主轴': '디지털 물류 및 배정 축 구축',
      '美业云链不是一个加盟 brand, 而是一套连接全球供应链、本地화 서비스 전문가와 고가치 소비자를 연결하는 “신경계”. AI 배정을 통해 모든 미용실이 최고급 맞춤 가발 서비스 역량을 갖게 합니다.': 'WIGSWAN은 단순 가맹 브랜드가 아닌, 공급망과 전문가, 고객을 잇는 ‘인텔리전트 시스템’입니다. AI 배정을 통해 모든 미용실이 하이엔드 맞춤 솔루션을 제공할 수 있게 합니다.',
      'WIGSWAN AI 调度中枢': 'WIGSWAN AI 배정 센터',
      '连接 1000+ 服务节点与全球柔성 공급망': '1000개 이상의 노드와 글로벌 유연 공급망 연결',
      '矩阵式合伙人体系': '파트너 에코시스템',
      '打破传统层级，建立以服务质量为权重的动态 resource 배분 네트워크. 진정한 아티스트가 시스템을 통해 존엄과 수익을 얻게 합니다.': '기존의 위계 구조를 깨고 서비스 품질에 기반한 공정한 배분 시스템을 구축, 진정한 아티스트가 존중과 수익을 얻게 합니다.',
      '零边际成本扩张': '효율적인 비즈니스 확장',
      '门店无需压货，无需重资产. 通过 WIGSWAN 数字化工具，实现 24 小时内的项目极속嫁접과 수익 검증.': '재고나 과도한 투자 부담 없이, 디지털 도구를 통해 24시간 내 고부가가치 서비스를 도입하고 수익을 검증하세요.',
      '数字化赋능 경로': 'DX로 가는 4단계 로드맵',
      '从“流量焦虑”도 “가치 심화”로의 4단계 진화': '마케팅 의존에서 깊은 신뢰 관계 구축으로의 변화',
      '画像诊断': '데이터 프로파일링',
      '基于 LTV 模型的客群深度分析，精准锁定沉睡的高净值会员。': 'LTV 모델을 기반으로 잠재적인 VIP 고객을 정밀하게 추출합니다.',
      '内容爆破': '콘텐츠 파급력 강화',
      'AI 矩阵工厂自动生成本土화, 강한 신뢰의 숏폼 소재를 자동 생성해 저비용 고객 확보를 구현합니다.': '트렌디하고 신뢰도 높은 숏폼 콘텐츠를 AI가 자동 생성하여 고효율 신규 유입을 지원합니다.',
      '智能派单': '인텔리전트 매칭',
      '밀리초 알고리즘 매칭으로 가장 적합한 이미지 전문가가 가장 적합한 시간에 매장에 도착하도록 합니다.': '알고리즘 매칭을 통해 고객에게 가장 적합한 전문가를 최적의 시간에 연결합니다.',
      '© 2026 WIGSWAN. 全链路数字化增长引擎.': '© 2026 WIGSWAN. 올인원 디지털 성장 시스템.',
      '申请成为增长合伙인': '성장 파트너 신청하기',
      '申请加入 WIGSWAN 全球增长网络，开启门店数字化评估。': '글로벌 네트워크에 합류하여 매장 경영 진단을 시작하세요.',
      '合伙人审计 | 开启盈利诊断 - WIGSWAN': '파트너 감사 | 경영 진단 - WIGSWAN',
      '申请诊断': '진단 신청',
      '战略合伙人资格审计': '전략 파트너 자격 심사',
      'WIGSWAN 仅筛选具有强烈增长意愿且具备高标准交付能力的门店，开启 60 天盈利闭环实验。': '성장에 대한 강력한 의지와 기술력을 갖춘 매장을 선별하여 60일 수익 모델 실험을 진행합니다.',
      '01. 门店经营画像': '01. 매장 경영 프로필',
      '机构全称 / 品牌': '매장명 / 브랜드명',
      '例如：型格沙龙深圳旗舰店': '예: WIGSWAN 청담 플래그십',
      '目前核心业务占比': '현재 주요 서비스 비중',
      '传统洗剪吹为主': '커트 및 일반 시술 중심',
      '烫染护理为主': '펌, 염색 및 케어 중심',
      '已有假发/接发项目': '가발 및 붙임머리 도입 완료',
      '主要客流获取渠道': '주요 고객 유입 채널',
      '自然到店 / 地推': '오프라인 방문 / 홍보',
      '美团 / 点评团购': '지역 서비스 플랫폼 / 쿠폰',
      '抖音 / 视频号公域': 'SNS / 숏폼 콘텐츠 (틱톡 등)',
      '私域流量 / 老客转介绍': '기존 고객 / 지인 추천',
      '下一步：交付能力评估': '다음: 서비스 역량 평가',
      '02. 交付与内容基础': '02. 설비 및 콘텐츠 인프라',
      '资深发型师数量 (5年以上经验)': '5년 이상 경력 스타일리스트 수',
      '是否有专人负责短视频/社交媒体运营？': 'SNS/쇼트 비디오 전담 인력 여부',
      '有专직 운영팀 보유': '전담 운영팀 보유',
      '店长/发型师兼职': '매장주/직원 겸직',
      '外包代运营': '외부 대행사 이용',
      '暂无人员投入': '인력 투입 없음',
      '是否具备独立私密接待空间？': '프라이빗 상담 공간 보유 여부',
      '已具备独立방': '개별 룸 완비',
      '可进行半私밀 개조': '세미 프라이빗 개조 가능',
      '暂无（需专家指导规划）': '미보유 (전문가 가이드 필요)',
      '返回': '이전으로',
      '下一步：联系方式': '다음: 연락처 입력',
      '03. 增长顾问对接': '03. 전략 컨설턴트 매칭',
      '主理人姓名': '대표자 성함',
      '联系电话（接收诊断报告）': '연락처 (진단 결과 수신용)',
      '提交审计并获取 1V1 报告': '심사 제출 및 1:1 상담 예약',
      '正在跳转到 WIGSWAN 战略合伙人审计系统': '심사 시스템으로 이동 중...',
      '正在跳转到': '이동 중:',
      '立即前往': '지금 이동',
      '跳转中 - WIGSWAN': '이동 중 - WIGSWAN',
      '跳转到申请合作 - WIGSWAN': '제휴 신청으로 이동 - WIGSWAN',
      'AI 调度 모델 계산 중...': 'AI 경영 모델 분석 중...',
      'B级：稳健增长型': 'B등급: 안정 성장형',
      'A级：高效爆发형': 'A등급: 초고속 성장형',
      'S级：旗舰增长引擎': 'S등급: 플래그십 성장 엔진'
    }
  };

  const currentLang = () => {
    const params = new URLSearchParams(window.location.search);
    const requested = params.get('lang') || localStorage.getItem('wigswan-lang') || 'zh';
    return LANGS.some((item) => item.code === requested) ? requested : 'zh';
  };

  let lang = currentLang();

  const normalize = (text) => text.replace(/\s+/g, ' ').trim();
  const lookup = (text, target = lang) => {
    const key = normalize(text);
    return target === 'zh' ? key : (dict[target] && dict[target][key]) || key;
  };

  function translateNodeText(node) {
    const raw = node.nodeValue;
    const key = normalize(raw);
    if (!key || !dict.en[key] && !dict.ja[key] && !dict.ko[key]) return;
    const leading = raw.match(/^\s*/)[0];
    const trailing = raw.match(/\s*$/)[0];
    node.nodeValue = `${leading}${lookup(key)}${trailing}`;
  }

  function translateAttributes(root) {
    const attrs = ['placeholder', 'alt', 'title', 'aria-label', 'content'];
    root.querySelectorAll('*').forEach((el) => {
      attrs.forEach((attr) => {
        if (!el.hasAttribute(attr)) return;
        const translated = lookup(el.getAttribute(attr));
        if (translated !== normalize(el.getAttribute(attr))) {
          el.setAttribute(attr, translated);
        }
      });
    });
  }

  function applyJapanRestructuring() {
    if (lang !== 'ja') return;
    const aggressiveNotes = document.querySelectorAll('.case-content p small');
    aggressiveNotes.forEach(note => {
      if (note.textContent.includes('60天极速回本')) {
        note.style.display = 'none';
      }
    });
    if (!document.querySelector('.trust-badge')) {
      const heroCta = document.querySelector('.hero-cta');
      if (heroCta) {
        const badge = document.createElement('div');
        badge.className = 'trust-badge';
        badge.style.marginTop = '20px';
        badge.style.fontSize = '12px';
        badge.style.color = 'var(--accent-gold)';
        badge.style.opacity = '0.8';
        badge.textContent = '◈ グローバル品質基準（Global Quality Standard）準拠';
        heroCta.appendChild(badge);
      }
    }
  }

  function applyUSRestructuring() {
    if (lang !== 'en') return;
    const sectionHeader = document.querySelector('#problem .section-header h2');
    if (sectionHeader) {
      sectionHeader.textContent = 'The "Trading Time for Money" Trap';
    }
    if (!document.querySelector('.us-feature-callout')) {
      const heroCopy = document.querySelector('.hero-copy');
      if (heroCopy) {
        const callout = document.createElement('p');
        callout.className = 'us-feature-callout';
        callout.style.background = 'rgba(197, 160, 89, 0.1)';
        callout.style.padding = '10px 20px';
        callout.style.borderRadius = '8px';
        callout.style.borderLeft = '4px solid var(--accent-gold)';
        callout.style.fontSize = '14px';
        callout.style.marginTop = '20px';
        callout.textContent = 'Designed for US Salon Owners: Compatible with all hair types & ethnicities.';
        heroCopy.appendChild(callout);
      }
    }
  }

  function applyKoreaRestructuring() {
    if (lang !== 'ko') return;
    const eyebrow = document.querySelector('.hero-eyebrow');
    if (eyebrow) {
      eyebrow.textContent = 'Aesthetic Intelligence Ecosystem';
    }
    if (!document.querySelector('.k-trend-badge')) {
      const heroCta = document.querySelector('.hero-cta');
      if (heroCta) {
        const badge = document.createElement('div');
        badge.className = 'k-trend-badge';
        badge.style.marginTop = '20px';
        badge.style.fontSize = '12px';
        badge.style.color = '#ff6b6b';
        badge.style.fontWeight = 'bold';
        badge.textContent = '★ 2026 K-Beauty 트렌드 예측 알고리즘 탑재';
        heroCta.appendChild(badge);
      }
    }
  }

  function applyChinaRestructuring() {
    if (lang !== 'zh') return;

    // 1. Inject Scarcity & POI Banner above Strategic Matrix
    const matrixSection = document.querySelector('#matrix .shell');
    if (matrixSection && !document.querySelector('.china-scarcity-banner')) {
      const banner = document.createElement('div');
      banner.className = 'china-scarcity-banner';
      banner.innerHTML = `
        <div class="banner-item">
          <h4 style="color: var(--accent-gold); margin-bottom: 10px;">🛡 区域独家保护机制</h4>
          <p style="font-size: 14px; opacity: 0.8;">严格执行“三公里商圈唯一”合伙人政策。一旦接入，系统将自动屏蔽周边同行的线索分配请求，确保您的商圈领地独占。</p>
        </div>
        <div class="banner-item">
          <h4 style="color: var(--accent-gold); margin-bottom: 10px;">🔗 POI 本地生活全自动化</h4>
          <p style="font-size: 14px; opacity: 0.8;">AI 矩阵工厂自动挂载门店 POI 坐标，视频发布即带团购/预约入口。实现从“刷到视频”到“到店核销”的最短商业路径。</p>
        </div>
      `;
      matrixSection.insertBefore(banner, matrixSection.querySelector('.section-header').nextSibling);
    }

    // 2. Inject a "Live Dispatch Feed" above the ROI simulator
    const roiSection = document.querySelector('#roi .shell');
    if (roiSection && !document.querySelector('.live-dispatch-monitor')) {
      const monitor = document.createElement('div');
      monitor.className = 'live-dispatch-monitor';
      const title = document.createElement('div');
      title.className = 'monitor-title';
      title.innerHTML = '<span style="color: var(--accent-gold); font-weight: bold;">● 实时调度情报</span> <span style="opacity: 0.6; font-size: 11px; margin-left: 10px;">全国门店实时获客反馈</span>';
      monitor.appendChild(title);
      const track = document.createElement('div');
      track.className = 'dispatch-track';
      const cases = [
        '【上海】某知名沙龙：通过AI矩阵捕获线索，成功闭单定制发片，净利 ¥2800',
        '【深圳】罗湖老店：90天LTV激活老客，转化头피养护年카드,业绩提升 45%',
        '【成都】高新店：10分钟前 AI 调度专家下店，协助完成高难接发单',
        '【杭州】滨江工作室：抖音矩阵号今日新增精准咨询 12 条',
        '【广州】天河店：首单假发购买客户，已自动通过电子档案转化二次护理'
      ];
      track.innerHTML = `<div class="scrolling-text">${cases.join(' &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; ')}</div>`;
      monitor.appendChild(track);
      roiSection.insertBefore(monitor, roiSection.querySelector('.calc-grid'));
      if (!document.getElementById('china-fx-style')) {
        const style = document.createElement('style');
        style.id = 'china-fx-style';
        style.textContent = `
          .china-scarcity-banner {
            background: linear-gradient(135deg, rgba(197,160,89,0.2) 0%, rgba(16,28,45,0.8) 100%);
            border: 1px solid var(--accent-gold);
            border-radius: 16px;
            padding: 25px;
            margin-bottom: 40px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
          }
          .live-dispatch-monitor {
            background: rgba(197, 160, 89, 0.05);
            border: 1px solid var(--glass-border);
            border-radius: 12px;
            padding: 15px;
            margin-bottom: 30px;
            overflow: hidden;
            position: relative;
            font-size: 13px;
          }
          .monitor-title { margin-bottom: 10px; }
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .scrolling-text {
            display: inline-block;
            white-space: nowrap;
            animation: scroll-left 25s linear infinite;
            color: var(--text-muted);
          }
          .live-dispatch-monitor::after {
            content: "";
            position: absolute;
            top: 0; right: 0; bottom: 0; left: 0;
            background: linear-gradient(90deg, rgba(16,28,45,1) 0%, transparent 5%, transparent 95%, rgba(16,28,45,1) 100%);
            pointer-events: none;
          }
          @media (max-width: 768px) {
            .china-scarcity-banner {
              grid-template-columns: 1fr;
              gap: 20px;
              padding: 20px;
            }
            .live-dispatch-monitor {
              padding: 10px;
              font-size: 11px;
            }
            .monitor-title span:last-child { display: block; margin: 4px 0 0 0; }
          }
        `;
        document.head.appendChild(style);
      }
    }
  }

  function translatePage() {
    document.documentElement.lang = LANGS.find((item) => item.code === lang).htmlLang;
    document.body.classList.toggle('is-localized', lang !== 'zh');
    LANGS.forEach((item) => document.body.classList.toggle(`lang-${item.code}`, item.code === lang));
    document.title = lookup(document.title);
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(parent.tagName)) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(translateNodeText);
    translateAttributes(document);
    applyJapanRestructuring();
    applyUSRestructuring();
    applyKoreaRestructuring();
    applyChinaRestructuring();
    updateSwitcher();
  }

  function setLang(nextLang) {
    if (!LANGS.some((item) => item.code === nextLang)) return;
    localStorage.setItem('wigswan-lang', nextLang);
    const url = new URL(window.location.href);
    url.searchParams.set('lang', nextLang);
    window.location.href = url.toString();
  }

  function ensureSwitcher() {
    const nav = document.querySelector('.site-header .main-nav');
    if (!nav || document.querySelector('.language-switcher')) return;

    const switcher = document.createElement('label');
    switcher.className = 'language-switcher';
    switcher.setAttribute('aria-label', 'Language');

    const select = document.createElement('select');
    select.setAttribute('aria-label', 'Language');
    LANGS.forEach((item) => {
      const option = document.createElement('option');
      option.value = item.code;
      option.textContent = item.label;
      select.appendChild(option);
    });
    select.addEventListener('change', (event) => setLang(event.target.value));
    switcher.appendChild(select);
    nav.appendChild(switcher);
  }

  function updateSwitcher() {
    document.querySelectorAll('.language-switcher select').forEach((select) => {
      select.value = lang;
    });
  }

  function injectStyle() {
    if (document.getElementById('wigswan-i18n-style')) return;
    const style = document.createElement('style');
    style.id = 'wigswan-i18n-style';
    style.textContent = `
      .language-switcher { display: inline-flex; align-items: center; margin-left: 24px; vertical-align: middle; flex: 0 0 auto; position: relative; }
      .language-switcher select { appearance: none; min-width: 112px; border: 1px solid var(--glass-border); background: rgba(255,255,255,0.03); color: var(--text-muted); border-radius: 999px; padding: 7px 30px 7px 12px; font: inherit; font-size: 12px; font-weight: 700; cursor: pointer; outline: none; transition: var(--transition); }
      .language-switcher::after { content: ""; position: absolute; right: 12px; width: 7px; height: 7px; border-right: 1px solid var(--accent-gold); border-bottom: 1px solid var(--accent-gold); transform: translateY(-2px) rotate(45deg); pointer-events: none; }
      .language-switcher select:hover, .language-switcher select:focus { color: var(--accent-gold); border-color: var(--accent-gold); }
      .language-switcher select option { color: #101c2d; background: #fff; }
      .site-header .brand { flex: 0 0 auto; }
      .site-header .main-nav { display: flex; align-items: center; justify-content: flex-end; flex-wrap: wrap; gap: 10px 22px; min-width: 0; }
      .site-header .main-nav a { margin-left: 0; white-space: normal; overflow-wrap: anywhere; text-align: center; }
      .is-localized, .is-localized * { overflow-wrap: anywhere; word-break: normal; }
      .is-localized .hero h1, .is-localized .section-header h2, .is-localized h2, .is-localized h3 { letter-spacing: 0; hyphens: auto; }
      .is-localized .hero h1 { font-size: clamp(32px, 5.2vw, 64px); max-width: 980px; }
      .is-localized .hero-eyebrow { letter-spacing: 2px; }
      .is-localized .btn { height: auto; min-height: 56px; white-space: normal; text-align: center; line-height: 1.25; padding-block: 12px; }
      .is-localized .glass-card, .is-localized .pillar-item, .is-localized .case-content, .is-localized .flow-card, .is-localized .calc-box, .is-localized .input-field, .is-localized .input-group { min-width: 0; }
      .is-localized table { table-layout: fixed; width: 100%; }
      .is-localized th, .is-localized td { overflow-wrap: anywhere; word-break: normal; }
      .is-localized .income-result strong { font-size: clamp(28px, 4vw, 48px); line-height: 1.15; }
      .is-localized .case-card { grid-template-columns: minmax(0, 40%) minmax(0, 60%); }
      .is-localized .case-card[style*="60% 40%"] { grid-template-columns: minmax(0, 60%) minmax(0, 40%) !important; }
      @media (max-width: 1180px) {
        .site-header .header-inner { height: auto; min-height: 80px; padding-top: 12px; padding-bottom: 12px; gap: 15px; }
        .site-header .main-nav { gap: 8px 16px; }
        .site-header .main-nav a { font-size: 12px; }
        .language-switcher { margin-left: 0; }
      }
      @media (max-width: 960px) {
        .language-switcher { margin: 12px auto 0; display: flex; justify-content: center; width: auto; }
        .is-localized .hero h1 { font-size: clamp(28px, 8vw, 48px); }
        .is-localized .section-header h2 { font-size: clamp(26px, 7vw, 40px); }
        .is-localized .case-card, .is-localized .case-card[style*="60% 40%"] { grid-template-columns: 1fr !important; }
      }
      @media (max-width: 480px) {
        .shell { padding: 0 15px; }
        .hero h1 { font-size: 32px; line-height: 1.2; }
        .section-header h2 { font-size: 26px; }
        .main-nav { justify-content: center; width: 100%; gap: 12px; }
        .language-switcher { margin-top: 10px; width: 100%; }
        .language-switcher select { width: 100%; text-align: center; height: 38px; }
        .nav-cta { margin-left: 0 !important; width: 100%; }
      }
    `;
    document.head.appendChild(style);
  }

  window.WIGSWAN_I18N = {
    t: lookup,
    lang: () => lang,
    setLang
  };

  document.addEventListener('DOMContentLoaded', () => {
    injectStyle();
    ensureSwitcher();
    translatePage();
  });
})();
