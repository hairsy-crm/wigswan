(function () {
  const LANGS = [
    { code: 'zh', label: '中文', htmlLang: 'zh-CN' },
    { code: 'en', label: 'EN', htmlLang: 'en' },
    { code: 'ja', label: '日本語', htmlLang: 'ja' },
    { code: 'ko', label: '한국어', htmlLang: 'ko' }
  ];

  const dict = {
    en: {
      'WIGSWAN 美业云链：以 AI 驱动的产业互联网引擎，重构全球美业价值链条。': 'WIGSWAN Beauty Cloud Chain: an AI-driven industrial internet engine rebuilding the global beauty value chain.',
      'WIGSWAN | 美业云链 - 数字智能化增长引擎': 'WIGSWAN | Beauty Cloud Chain - Digital Intelligence Growth Engine',
      '战略核心': 'Strategy Core',
      '行业诊断': 'Industry Diagnosis',
      '增长支柱': 'Growth Pillars',
      '盈利实验': 'Profit Experiment',
      '立即诊断': 'Start Diagnosis',
      '重构美业价值链条': 'Rebuilding the Beauty Value Chain',
      'AI 驱动增长引擎': 'AI-Powered Growth Engine',
      'WIGSWAN 通过 AI 调度算法与矩阵获客工厂，为传统美业门店提供跨越式增长模型。我们不是在卖产品，而是在通过数字化重塑行业底层逻辑。': 'Through AI dispatch algorithms and a matrix acquisition factory, WIGSWAN gives traditional beauty stores a leapfrog growth model. We are not selling products; we are using digital systems to reshape the industry logic.',
      '开启 60 天盈利实验': 'Start the 60-Day Profit Experiment',
      '获取《2026美业增长白皮书》': 'Get the 2026 Beauty Growth White Paper',
      '传统美业正在集体失效': 'Traditional Beauty Businesses Are Failing Together',
      '为什么 90% 的门店守着优质流量，却陷入低客单、低复购的增长泥潭？': 'Why do 90% of stores sit on quality traffic yet remain trapped in low ticket sizes and weak repeat purchases?',
      '流量焦虑': 'Traffic Anxiety',
      '获客成本逐年攀升，公域流量如流水而过，无法沉淀为可运营的数字化资产。': 'Customer acquisition costs keep rising, while public traffic passes through without becoming operable digital assets.',
      '交付单一': 'Single Delivery Model',
      '业务结构高度重合，陷入同质化价格战，缺乏高毛利、强粘性的第二增长曲线。': 'Service structures overlap heavily, creating homogeneous price wars and leaving no high-margin, sticky second growth curve.',
      '人治瓶颈': 'People-Dependent Bottleneck',
      '高度依赖发型师个人能力，服务标准难以复制，规模化扩张即面临品质坍塌。': 'The business depends heavily on individual stylists, making standards hard to replicate and quality fragile at scale.',
      '三大核心增长支柱': 'Three Core Growth Pillars',
      'WIGSWAN 2.0 系统通过技术手段，实现供需两端的最优资源动态分配。': 'The WIGSWAN 2.0 system uses technology to dynamically allocate resources across supply and demand.',
      '智能调度中枢': 'Intelligent Dispatch Hub',
      '基于精准画像的 AI 派单算法，实现“流量-专家-门店”的最优匹配。大幅提升首单转化率与服务响应速度。': 'AI dispatch based on precise profiles creates the best match among traffic, experts, and stores, improving first-order conversion and response speed.',
      '矩阵获客工厂': 'Matrix Acquisition Factory',
      '自动化 AI 内容生产流水线，将门店真实服务素材转化为全平台（抖音/视频号）的高粘性公域流量燃料。': 'An automated AI content pipeline turns real service material into sticky public-traffic fuel across Douyin and Channels.',
      'LTV 价值深耕': 'LTV Value Cultivation',
      '精细化会员生命周期管理模型。通过 90 天电子档案自动触发服务提醒，将单次博弈转化为终身价值共创。': 'A refined member lifecycle model uses 90-day digital records to trigger service reminders and turn one-off transactions into lifetime value.',
      '战略优势矩阵': 'Strategic Advantage Matrix',
      '为什么 WIGSWAN 2.0 系统是美业增长的唯一确定性路径？': 'Why is WIGSWAN 2.0 the only deterministic path for beauty growth?',
      '核心维度': 'Core Dimension',
      '传统加盟模式': 'Traditional Franchise Model',
      'WIGSWAN 数字化生态': 'WIGSWAN Digital Ecosystem',
      '获客成本': 'Acquisition Cost',
      '极高（依赖地推/昂贵商券）': 'Very high, relying on offline promotion and costly coupons',
      '边际成本趋零（AI 矩阵工厂驱动）': 'Marginal cost approaches zero, driven by the AI matrix factory',
      '资产结构': 'Asset Structure',
      '重资产（大量库存/高额加盟费）': 'Heavy assets, inventory, and high franchise fees',
      '轻资产（零囤货/按需调度）': 'Light assets, no stockpiling, on-demand dispatch',
      '客户价值': 'Customer Value',
      '单次交易（博弈心态）': 'Single transaction, adversarial mindset',
      'LTV 深耕（终身价值管理）': 'LTV cultivation and lifetime value management',
      '响应速度': 'Response Speed',
      '人工中转（低效/易流失）': 'Manual relay, inefficient and easy to lose leads',
      '毫秒级调度（算法自动匹配）': 'Millisecond dispatch with automatic algorithmic matching',
      '极速盈利实验诊断': 'Rapid Profit Experiment Diagnosis',
      '输入您的门店基础数据，AI 将基于 500+ 标杆门店的脱敏模型，为您演算 60 天内的增长潜力。': 'Enter your store basics. AI will estimate 60-day growth potential using anonymized models from 500+ benchmark stores.',
      '✔ 隐藏核心计算系数，保护商业机密': '✔ Core calculation factors are hidden to protect business secrets',
      '✔ 基于非线性权重评分模型': '✔ Based on a nonlinear weighted scoring model',
      '✔ 1V1 增长顾问深度解读报告': '✔ 1-on-1 growth consultant report interpretation',
      '门店服务容量 (工位数)': 'Store Service Capacity (Stations)',
      '日均高净值客流': 'Daily High-Value Traffic',
      '预估月度营收增长潜力': 'Estimated Monthly Revenue Growth Potential',
      '加载模型...': 'Loading model...',
      'AI 调度模型计算中...': 'AI dispatch model calculating...',
      'B级：稳健增长型': 'Grade B: Steady Growth',
      'A级：高效爆发型': 'Grade A: High-Efficiency Breakout',
      'S级：旗舰增长引擎': 'Grade S: Flagship Growth Engine',
      '© 2026 WIGSWAN 美业云链. 版权所有.': '© 2026 WIGSWAN Beauty Cloud Chain. All rights reserved.',
      '关于愿景': 'Vision',
      '增长动态': 'Growth Updates',
      '增长情报': 'Growth Intelligence',
      '申请合作': 'Apply',
      '首页': 'Home',
      '增长中枢': 'Growth Hub',
      '全球案例': 'Global Cases',
      '了解 WIGSWAN 美业云链的使命与愿景：重构美业价值链，赋能每一家门店。': 'Learn WIGSWAN Beauty Cloud Chain’s mission and vision: rebuilding the beauty value chain and empowering every store.',
      '关于愿景 | 数字化重构美业 - WIGSWAN': 'Vision | Digitally Rebuilding Beauty - WIGSWAN',
      '为美业注入数字灵魂': 'Giving Beauty Businesses a Digital Soul',
      '我们不仅仅是在改变发型，我们是在用科技和算法，重塑数百万手艺人的商业命运。': 'We are not only changing hairstyles; we are using technology and algorithms to reshape the commercial destiny of millions of craft professionals.',
      '我们的哲学：流量归平台，交付归门店': 'Our Philosophy: Traffic Belongs to the Platform, Delivery Belongs to Stores',
      '在传统模式中，理发店老板往往陷入“既要引流又要管理交付”的内耗中。WIGSWAN（美业云链）的诞生，是为了彻底打破这一枷锁。 我们建立了一个强大的 AI 调度中心，将繁重的公域引流、画像匹配、LTV 运营交给算法； 让门店回归本质——专注那 10% 的核心交付与艺术创造。': 'In the traditional model, salon owners are trapped between traffic acquisition and delivery management. WIGSWAN was created to break that constraint. We built a powerful AI dispatch center that gives public traffic acquisition, profile matching, and LTV operations to algorithms, so stores can return to their essence: the core 10% of delivery and artistic creation.',
      '技术底座': 'Technology Foundation',
      '持续投入 AI 矩阵工厂与调度算法的研发，确保系统永远领先行业一个维度。': 'We keep investing in the AI matrix factory and dispatch algorithms to keep the system one dimension ahead of the industry.',
      '长期主义': 'Long-Termism',
      '拒绝割韭菜式的加盟。我们通过 60 天盈利实验，只与真正具备成长基因的门店同行。': 'We reject exploitative franchising. Through the 60-day profit experiment, we work only with stores that have real growth DNA.',
      '共生生态': 'Symbiotic Ecosystem',
      '构建一个连接全球供应链与本地服务专家的柔性网络，实现价值链的利润重分配。': 'We build a flexible network connecting global supply chains and local service experts, redistributing profits across the value chain.',
      '赋能手艺人，重构美业链': 'Empowering craft professionals and rebuilding the beauty chain',
      '© 2026 WIGSWAN. 全球增长总部.': '© 2026 WIGSWAN. Global Growth Headquarters.',
      '查看 WIGSWAN 美业云链全球合作门店的数字化增长案例。': 'Explore digital growth cases from WIGSWAN Beauty Cloud Chain partner stores worldwide.',
      '全球规模化标杆 | 数字化增长案例 - WIGSWAN': 'Global Scale Benchmarks | Digital Growth Cases - WIGSWAN',
      '数字化增长标杆': 'Digital Growth Benchmarks',
      '我们不展示个案，我们展示的是可复制的盈利模型。以下门店通过 WIGSWAN 2.0 系统实现了营收结构的底层重构。': 'We do not showcase isolated cases; we showcase replicable profit models. These stores used WIGSWAN 2.0 to rebuild their revenue structure.',
      'A类商圈旗舰型': 'Class-A District Flagship',
      '上海静安 · 5号样板店': 'Shanghai Jing’an · Model Store No. 5',
      '该店通过接入 WIGSWAN 智能调度中枢，成功将客单价从传统美业水平提升了 3.2 倍。核心在于利用 AI 矩阵工厂持续输出高粘性案例视频，精准捕获了周边 5 公里内的高净值脱发客群。': 'By connecting to the WIGSWAN intelligent dispatch hub, this store raised average order value to 3.2 times the traditional beauty level. The key was using the AI matrix factory to continuously publish sticky case videos and capture high-value hair-loss customers within 5 km.',
      '增长速率 (Velocity)': 'Growth Velocity',
      '* 基于 WIGSWAN 60天极速回本模型测算': '* Based on the WIGSWAN 60-day rapid payback model',
      '社区信任深耕型': 'Community Trust Cultivation',
      '成都 · 高新社区店': 'Chengdu · Gaoxin Community Store',
      '典型的通过 LTV 价值挖掘盘活存量资产的案例。门店利用 90 天电子护理档案，将首单假发购买转化为了长期的护理订阅服务。老带新裂变率在 60 天内达到了惊人的 38%。': 'A typical case of activating existing assets through LTV mining. The store used 90-day digital care records to turn a first wig purchase into long-term care subscriptions. Referral growth reached 38% within 60 days.',
      '复购粘性 (Retention)': 'Retention',
      '卓越 S级': 'Excellent S',
      '想知道您的门店能实现多少倍增？': 'Want to know how much your store can grow?',
      '点击下方按钮，开启专属您的 60 天盈利潜力评估。': 'Click below to start your dedicated 60-day profit potential assessment.',
      '立即开启诊断': 'Start Diagnosis Now',
      '© 2026 WIGSWAN. 为美业注入数字灵魂.': '© 2026 WIGSWAN. Giving beauty businesses a digital soul.',
      '获取 WIGSWAN 美业云链最新增长动态、行业趋势与数字化经营技巧。': 'Get the latest WIGSWAN Beauty Cloud Chain growth updates, industry trends, and digital operations insights.',
      '增长情报 | 商业洞察 - WIGSWAN': 'Growth Intelligence | Business Insights - WIGSWAN',
      '全球增长情报站': 'Global Growth Intelligence Desk',
      '我们持续监测全球美业数字化趋势，为您输出具备实战价值的商业洞察。': 'We continuously monitor global beauty digitization trends and deliver practical business insights.',
      '从“理发店”到“形象资产管理中心”：行业转型的奇点已至': 'From “Salon” to “Image Asset Management Center”: The Industry Inflection Point Has Arrived',
      '深度解析为什么单一的剪发业务将逐渐丧失竞争力，而围绕 LTV 展开的“资产管理”模式将成为未来的核心盈利引擎。': 'A deep look at why standalone haircut services will lose competitiveness, while LTV-centered asset management becomes the future profit engine.',
      'AI 矩阵工厂：如何通过自动化脚本在公域流量池实现“低成本爆破”': 'AI Matrix Factory: Using Automation to Break Through Public Traffic at Low Cost',
      '揭秘 WIGSWAN 2.0 系统的短视频自动化逻辑，解析 100+ 样板店如何通过系统自动分发实现线索量翻倍。': 'A look inside WIGSWAN 2.0 short-video automation and how 100+ model stores doubled leads through automated distribution.',
      '订阅深度行业报告 (PDF)': 'Subscribe to the In-Depth Industry Report (PDF)',
      '© 2026 WIGSWAN. 赋能手艺人，重构美业链.': '© 2026 WIGSWAN. Empowering craft professionals and rebuilding the beauty chain.',
      '美业云链（WIGSWAN）产业调度中枢，重构美业服务网络。': 'Beauty Cloud Chain (WIGSWAN), the industrial dispatch hub rebuilding the beauty service network.',
      '美业云链 | 增长中枢 - WIGSWAN': 'Beauty Cloud Chain | Growth Hub - WIGSWAN',
      '重构美业服务网络': 'Rebuilding the Beauty Service Network',
      '建立数字化调度主轴': 'Building the Digital Dispatch Axis',
      '美业云链不是一个加盟品牌，而是一套连接全球供应链、本地化服务专家与高净值消费者的“神经系统”。通过 AI 调度，我们让每一家理发店都能拥有顶级假发定制的服务能力。': 'Beauty Cloud Chain is not a franchise brand; it is a nervous system connecting global supply chains, local service experts, and high-value consumers. Through AI dispatch, every salon can gain top-tier custom wig service capabilities.',
      'WIGSWAN AI 调度中枢': 'WIGSWAN AI Dispatch Hub',
      '连接 1000+ 服务节点与全球柔性供应链': 'Connecting 1,000+ service nodes with global flexible supply chains',
      '矩阵式合伙人体系': 'Matrix Partner System',
      '打破传统层级，建立以服务质量为权重的动态资源分配网络。让真正的“手艺人”通过系统获得尊严与收益。': 'Breaking traditional hierarchy to build a dynamic resource network weighted by service quality, helping true craft professionals earn dignity and income.',
      '零边际成本扩张': 'Zero-Marginal-Cost Expansion',
      '门店无需压货，无需重资产。通过 WIGSWAN 数字化工具，实现 24 小时内的项目极速嫁接与盈利验证。': 'Stores do not need inventory or heavy assets. With WIGSWAN digital tools, projects can be grafted and profit-tested within 24 hours.',
      '数字化赋能路径': 'Digital Enablement Path',
      '从“流量焦虑”到“价值深耕”的 4 步演进': 'A four-step evolution from traffic anxiety to value cultivation',
      '画像诊断': 'Profile Diagnosis',
      '基于 LTV 模型的客群深度分析，精准锁定沉睡的高净值会员。': 'Deep customer analysis based on LTV models to identify dormant high-value members.',
      '内容爆破': 'Content Breakthrough',
      'AI 矩阵工厂自动生成本土化、强信任的短视频弹药，实现低成本获客。': 'The AI matrix factory automatically generates localized, trust-building short-video material for low-cost acquisition.',
      '智能派单': 'Intelligent Dispatch',
      '毫秒级算法匹配，确保最合适的“形象专家”在最合适的时间出现在门店。': 'Millisecond algorithmic matching ensures the right image expert appears at the right store at the right time.',
      '© 2026 WIGSWAN. 全链路数字化增长引擎.': '© 2026 WIGSWAN. Full-chain digital growth engine.',
      '申请成为增长合伙人': 'Apply to Become a Growth Partner',
      '申请加入 WIGSWAN 全球增长网络，开启门店数字化评估。': 'Apply to join the WIGSWAN global growth network and start a digital store assessment.',
      '合伙人审计 | 开启盈利诊断 - WIGSWAN': 'Partner Audit | Start Profit Diagnosis - WIGSWAN',
      '申请诊断': 'Apply for Diagnosis',
      '战略合伙人资格审计': 'Strategic Partner Qualification Audit',
      'WIGSWAN 仅筛选具有强烈增长意愿且具备高标准交付能力的门店，开启 60 天盈利闭环实验。': 'WIGSWAN selects only stores with strong growth intent and high delivery standards for the 60-day closed-loop profit experiment.',
      '01. 门店经营画像': '01. Store Operating Profile',
      '机构全称 / 品牌': 'Organization Name / Brand',
      '例如：型格沙龙深圳旗舰店': 'Example: Style Salon Shenzhen Flagship',
      '目前核心业务占比': 'Current Core Business Mix',
      '传统洗剪吹为主': 'Mainly wash, cut, and blow-dry',
      '烫染护理为主': 'Mainly perming, coloring, and care',
      '已有假发/接发项目': 'Already has wig or extension services',
      '下一步：交付能力评估': 'Next: Delivery Capability Assessment',
      '02. 交付与空间冗余': '02. Delivery and Space Capacity',
      '资深发型师数量 (5年以上经验)': 'Senior Stylists (5+ Years Experience)',
      '是否具备独立私密接待空间？': 'Do you have an independent private reception space?',
      '已具备独立房间': 'Already has a private room',
      '可进行半私密改造': 'Can be adapted into a semi-private space',
      '暂无（需专家指导规划）': 'Not yet, expert planning needed',
      '返回': 'Back',
      '下一步：联系方式': 'Next: Contact Information',
      '03. 增长顾问对接': '03. Growth Consultant Handoff',
      '主理人姓名': 'Principal Name',
      '联系电话（接收诊断报告）': 'Phone Number (for the diagnosis report)',
      '提交审计并获取 1V1 报告': 'Submit Audit and Get a 1-on-1 Report',
      '正在跳转到 WIGSWAN 战略合伙人审计系统': 'Redirecting to the WIGSWAN strategic partner audit system',
      '正在跳转到': 'Redirecting to',
      '立即前往': 'Go Now',
      '跳转中 - WIGSWAN': 'Redirecting - WIGSWAN',
      '跳转到申请合作 - WIGSWAN': 'Redirecting to Application - WIGSWAN'
    },
    ja: {
      'WIGSWAN 美业云链：以 AI 驱动的产业互联网引擎，重构全球美业价值链条。': 'WIGSWAN美業クラウドチェーン：AI駆動の産業インターネットエンジンとして、世界の美容価値連鎖を再構築します。',
      'WIGSWAN | 美业云链 - 数字智能化增长引擎': 'WIGSWAN | 美業クラウドチェーン - デジタル知能成長エンジン',
      '了解 WIGSWAN 美业云链的使命与愿景：重构美业价值链，赋能每一家门店。': 'WIGSWAN美業クラウドチェーンの使命とビジョン：美容価値連鎖を再構築し、すべての店舗を支援します。',
      '关于愿景 | 数字化重构美业 - WIGSWAN': 'ビジョン | デジタルで美容業界を再構築 - WIGSWAN',
      '查看 WIGSWAN 美业云链全球合作门店的数字化增长案例。': 'WIGSWAN美業クラウドチェーンの世界提携店舗におけるデジタル成長事例をご覧ください。',
      '全球规模化标杆 | 数字化增长案例 - WIGSWAN': 'グローバル規模化ベンチマーク | デジタル成長事例 - WIGSWAN',
      '获取 WIGSWAN 美业云链最新增长动态、行业趋势与数字化经营技巧。': 'WIGSWAN美業クラウドチェーンの最新成長ニュース、業界トレンド、デジタル経営ノウハウを入手してください。',
      '增长情报 | 商业洞察 - WIGSWAN': '成長インテリジェンス | ビジネス洞察 - WIGSWAN',
      '美业云链（WIGSWAN）产业调度中枢，重构美业服务网络。': '美業クラウドチェーン（WIGSWAN）は産業配車ハブとして、美容サービスネットワークを再構築します。',
      '美业云链 | 增长中枢 - WIGSWAN': '美業クラウドチェーン | 成長ハブ - WIGSWAN',
      '申请加入 WIGSWAN 全球增长网络，开启门店数字化评估。': 'WIGSWANグローバル成長ネットワークへ申請し、店舗デジタル評価を開始します。',
      '合伙人审计 | 开启盈利诊断 - WIGSWAN': 'パートナー監査 | 収益診断を開始 - WIGSWAN',
      '跳转中 - WIGSWAN': '移動中 - WIGSWAN',
      '跳转到申请合作 - WIGSWAN': '提携申請へ移動 - WIGSWAN',
      '首页': 'ホーム', '增长中枢': '成長ハブ', '全球案例': 'グローバル事例', '关于愿景': 'ビジョン', '增长动态': '成長ニュース', '增长情报': '成長インテリジェンス', '申请合作': '提携申請', '战略核心': '戦略コア', '行业诊断': '業界診断', '增长支柱': '成長の柱', '盈利实验': '収益実験', '立即诊断': '診断を開始',
      '重构美业价值链条': '美容業界の価値連鎖を再構築', 'AI 驱动增长引擎': 'AI駆動の成長エンジン', 'WIGSWAN 通过 AI 调度算法与矩阵获客工厂，为传统美业门店提供跨越式增长模型。我们不是在卖产品，而是在通过数字化重塑行业底层逻辑。': 'WIGSWANはAI配車アルゴリズムと集客マトリクス工場により、従来型美容店舗へ飛躍的な成長モデルを提供します。私たちは商品を売るのではなく、デジタル化で業界の根本ロジックを作り替えます。',
      '开启 60 天盈利实验': '60日収益実験を開始', '获取《2026美业增长白皮书》': '「2026美容成長白書」を入手', '传统美业正在集体失效': '従来型美容ビジネスは限界を迎えています', '为什么 90% 的门店守着优质流量，却陷入低客单、低复购的增长泥潭？': 'なぜ90%の店舗は良質な流入を持ちながら、低単価・低リピートの停滞に陥るのでしょうか。',
      '流量焦虑': '集客不安', '获客成本逐年攀升，公域流量如流水而过，无法沉淀为可运营的数字化资产。': '顧客獲得コストは年々上昇し、パブリック流入は蓄積可能なデジタル資産になりません。', '交付单一': '単一の提供価値', '业务结构高度重合，陷入同质化价格战，缺乏高毛利、强粘性的第二增长曲线。': '事業構造が似通い、価格競争に陥り、高粗利で粘着性の高い第二成長曲線が不足しています。', '人治瓶颈': '属人化の限界', '高度依赖发型师个人能力，服务标准难以复制，规模化扩张即面临品质坍塌。': '美容師個人の能力に依存し、標準化が難しく、規模拡大時に品質が崩れやすくなります。',
      '三大核心增长支柱': '3つの中核成長支柱', 'WIGSWAN 2.0 系统通过技术手段，实现供需两端的最优资源动态分配。': 'WIGSWAN 2.0は技術により、需要と供給の最適な資源配分を実現します。', '智能调度中枢': 'インテリジェント配車ハブ', '基于精准画像的 AI 派单算法，实现“流量-专家-门店”的最优匹配。大幅提升首单转化率与服务响应速度。': '精密なプロファイルに基づくAI配車で、流入・専門家・店舗を最適にマッチングし、初回成約率と応答速度を高めます。', '矩阵获客工厂': 'マトリクス集客工場', '自动化 AI 内容生产流水线，将门店真实服务素材转化为全平台（抖音/视频号）的高粘性公域流量燃料。': '自動AIコンテンツラインが、店舗の実サービス素材を各プラットフォーム向けの高粘着流入素材に変換します。', 'LTV 价值深耕': 'LTV価値の深耕', '精细化会员生命周期管理模型。通过 90 天电子档案自动触发服务提醒，将单次博弈转化为终身价值共创。': '精緻な会員ライフサイクル管理により、90日電子カルテからリマインドを自動化し、単発取引を生涯価値へ変えます。',
      '战略优势矩阵': '戦略優位性マトリクス', '为什么 WIGSWAN 2.0 系统是美业增长的唯一确定性路径？': 'なぜWIGSWAN 2.0が美容成長の確実な道筋なのか。', '核心维度': '中核次元', '传统加盟模式': '従来型加盟モデル', 'WIGSWAN 数字化生态': 'WIGSWANデジタルエコシステム', '获客成本': '獲得コスト', '极高（依赖地推/昂贵商券）': '非常に高い（地推し・高額クーポン依存）', '边际成本趋零（AI 矩阵工厂驱动）': '限界費用はゼロに近づく（AIマトリクス駆動）', '资产结构': '資産構造', '重资产（大量库存/高额加盟费）': '重資産（大量在庫・高額加盟費）', '轻资产（零囤货/按需调度）': '軽資産（在庫なし・需要連動）', '客户价值': '顧客価値', '单次交易（博弈心态）': '単発取引（駆け引き型）', 'LTV 深耕（终身价值管理）': 'LTV深耕（生涯価値管理）', '响应速度': '応答速度', '人工中转（低效/易流失）': '人手中継（非効率・離脱しやすい）', '毫秒级调度（算法自动匹配）': 'ミリ秒配車（アルゴリズム自動マッチング）',
      '极速盈利实验诊断': '高速収益実験診断', '输入您的门店基础数据，AI 将基于 500+ 标杆门店的脱敏模型，为您演算 60 天内的增长潜力。': '店舗の基本データを入力すると、AIが500以上のベンチマーク店舗の匿名モデルをもとに60日成長余地を算出します。', '✔ 隐藏核心计算系数，保护商业机密': '✔ 中核計算係数を隠し、営業機密を保護', '✔ 基于非线性权重评分模型': '✔ 非線形重み付けスコアモデル', '✔ 1V1 增长顾问深度解读报告': '✔ 1対1成長コンサルタントによる詳細解説', '门店服务容量 (工位数)': '店舗サービス容量（席数）', '日均高净值客流': '日平均高価値来店数', '预估月度营收增长潜力': '月間売上成長ポテンシャル', '加载模型...': 'モデル読込中...',
      '© 2026 WIGSWAN 美业云链. 版权所有.': '© 2026 WIGSWAN Beauty Cloud Chain. All rights reserved.', '为美业注入数字灵魂': '美容業界にデジタルの魂を注ぐ', '我们不仅仅是在改变发型，我们是在用科技和算法，重塑数百万手艺人的商业命运。': '私たちは髪型を変えるだけではありません。テクノロジーとアルゴリズムで数百万の職人の商業的未来を作り替えます。', '我们的哲学：流量归平台，交付归门店': '私たちの哲学：流入はプラットフォームへ、提供は店舗へ',
      '在传统模式中，理发店老板往往陷入“既要引流又要管理交付”的内耗中。WIGSWAN（美业云链）的诞生，是为了彻底打破这一枷锁。 我们建立了一个强大的 AI 调度中心，将繁重的公域引流、画像匹配、LTV 运营交给算法； 让门店回归本质——专注那 10% 的核心交付与艺术创造。': '従来モデルでは、サロン経営者は集客と提供管理の両方に疲弊します。WIGSWANはこの制約を壊すために生まれました。強力なAI配車センターが公域集客、プロファイルマッチング、LTV運用を担い、店舗は本質である中核提供と創造に集中できます。', '技术底座': '技術基盤', '持续投入 AI 矩阵工厂与调度算法的研发，确保系统永远领先行业一个维度。': 'AIマトリクス工場と配車アルゴリズムへの継続投資で、常に業界の一歩先を行きます。', '长期主义': '長期主義', '拒绝割韭菜式的加盟。我们通过 60 天盈利实验，只与真正具备成长基因的门店同行。': '搾取的な加盟を拒みます。60日収益実験を通じ、本当に成長遺伝子を持つ店舗だけと歩みます。', '共生生态': '共生エコシステム', '构建一个连接全球供应链与本地服务专家的柔性网络，实现价值链的利润重分配。': 'グローバル供給網と地域専門家をつなぐ柔軟なネットワークを構築し、価値連鎖の利益を再配分します。', '赋能手艺人，重构美业链': '職人を支援し、美容チェーンを再構築', '© 2026 WIGSWAN. 全球增长总部.': '© 2026 WIGSWAN. Global Growth Headquarters.',
      '数字化增长标杆': 'デジタル成長ベンチマーク', '我们不展示个案，我们展示的是可复制的盈利模型。以下门店通过 WIGSWAN 2.0 系统实现了营收结构的底层重构。': '個別事例ではなく、再現可能な収益モデルを示します。以下の店舗はWIGSWAN 2.0で売上構造を根本から再構築しました。', 'A类商圈旗舰型': 'A級商圏フラッグシップ', '上海静安 · 5号样板店': '上海静安・モデル店 No.5', '该店通过接入 WIGSWAN 智能调度中枢，成功将客单价从传统美业水平提升了 3.2 倍。核心在于利用 AI 矩阵工厂持续输出高粘性案例视频，精准捕获了周边 5 公里内的高净值脱发客群。': '同店はWIGSWANの配車ハブに接続し、客単価を従来美容水準の3.2倍へ引き上げました。AIマトリクス工場で事例動画を継続発信し、周辺5kmの高価値脱毛顧客を精密に獲得しました。', '增长速率 (Velocity)': '成長速度', '* 基于 WIGSWAN 60天极速回本模型测算': '* WIGSWAN 60日回収モデルに基づく試算', '社区信任深耕型': '地域信頼深耕型', '成都 · 高新社区店': '成都・高新コミュニティ店', '典型的通过 LTV 价值挖掘盘活存量资产的案例。门店利用 90 天电子护理档案，将首单假发购买转化为了长期的护理订阅服务。老带新裂变率在 60 天内达到了惊人的 38%。': 'LTV価値発掘で既存資産を活性化した典型例です。90日電子ケア記録により初回ウィッグ購入を長期ケア定期サービスへ転換し、60日以内の紹介率は38%に達しました。', '复购粘性 (Retention)': 'リテンション', '卓越 S级': '卓越 S級', '想知道您的门店能实现多少倍增？': 'あなたの店舗はどれだけ成長できますか？', '点击下方按钮，开启专属您的 60 天盈利潜力评估。': '下のボタンから専用の60日収益ポテンシャル評価を開始してください。', '立即开启诊断': '今すぐ診断開始', '© 2026 WIGSWAN. 为美业注入数字灵魂.': '© 2026 WIGSWAN. 美容業界にデジタルの魂を。',
      '全球增长情报站': 'グローバル成長インテリジェンス', '我们持续监测全球美业数字化趋势，为您输出具备实战价值的商业洞察。': '世界の美容DXトレンドを継続的に監視し、実践価値のある洞察を提供します。', '从“理发店”到“形象资产管理中心”：行业转型的奇点已至': '「理髪店」から「イメージ資産管理センター」へ：業界転換点の到来', '深度解析为什么单一的剪发业务将逐渐丧失竞争力，而围绕 LTV 展开的“资产管理”模式将成为未来的核心盈利引擎。': '単一のカット事業が競争力を失い、LTVを軸にした資産管理モデルが将来の収益エンジンになる理由を解説します。', 'AI 矩阵工厂：如何通过自动化脚本在公域流量池实现“低成本爆破”': 'AIマトリクス工場：自動化で公域流入を低コスト突破する方法', '揭秘 WIGSWAN 2.0 系统的短视频自动化逻辑，解析 100+ 样板店如何通过系统自动分发实现线索量翻倍。': 'WIGSWAN 2.0の短動画自動化ロジックと、100以上のモデル店が自動配信でリードを倍増させた仕組みを解説します。', '订阅深度行业报告 (PDF)': '詳細業界レポートを購読（PDF）', '© 2026 WIGSWAN. 赋能手艺人，重构美业链.': '© 2026 WIGSWAN. 職人を支援し、美容チェーンを再構築。',
      '重构美业服务网络': '美容サービス網を再構築', '建立数字化调度主轴': 'デジタル配車軸を構築', '美业云链不是一个加盟品牌，而是一套连接全球供应链、本地化服务专家与高净值消费者的“神经系统”。通过 AI 调度，我们让每一家理发店都能拥有顶级假发定制的服务能力。': '美業クラウドチェーンは加盟ブランドではなく、グローバル供給網、地域専門家、高価値消費者をつなぐ神経系です。AI配車により、すべてのサロンが高級ウィッグカスタム能力を持てます。', 'WIGSWAN AI 调度中枢': 'WIGSWAN AI配車ハブ', '连接 1000+ 服务节点与全球柔性供应链': '1000以上のサービス拠点とグローバル柔軟供給網を接続', '矩阵式合伙人体系': 'マトリクス型パートナー体系', '打破传统层级，建立以服务质量为权重的动态资源分配网络。让真正的“手艺人”通过系统获得尊严与收益。': '従来階層を壊し、サービス品質を重みとする動的資源配分ネットワークを構築します。真の職人が尊厳と収益を得られる仕組みです。', '零边际成本扩张': '限界費用ゼロの拡張', '门店无需压货，无需重资产。通过 WIGSWAN 数字化工具，实现 24 小时内的项目极速嫁接与盈利验证。': '店舗は在庫も重資産も不要です。WIGSWANのデジタルツールで24時間以内に事業導入と収益検証を実現します。', '数字化赋能路径': 'デジタル支援パス', '从“流量焦虑”到“价值深耕”的 4 步演进': '集客不安から価値深耕への4ステップ進化', '画像诊断': 'プロファイル診断', '基于 LTV 模型的客群深度分析，精准锁定沉睡的高净值会员。': 'LTVモデルに基づく顧客深掘り分析で、眠っている高価値会員を特定します。', '内容爆破': 'コンテンツ突破', 'AI 矩阵工厂自动生成本土化、强信任的短视频弹药，实现低成本获客。': 'AIマトリクス工場が地域化された信頼性の高い短動画素材を自動生成し、低コスト集客を実現します。', '智能派单': 'インテリジェント配車', '毫秒级算法匹配，确保最合适的“形象专家”在最合适的时间出现在门店。': 'ミリ秒単位のマッチングで、最適なイメージ専門家を最適な時間に店舗へ届けます。', '© 2026 WIGSWAN. 全链路数字化增长引擎.': '© 2026 WIGSWAN. 全工程デジタル成長エンジン。', '申请成为增长合伙人': '成長パートナーに申請',
      '申请诊断': '診断申請', '战略合伙人资格审计': '戦略パートナー資格監査', 'WIGSWAN 仅筛选具有强烈增长意愿且具备高标准交付能力的门店，开启 60 天盈利闭环实验。': 'WIGSWANは強い成長意欲と高水準の提供能力を持つ店舗だけを選び、60日収益クローズドループ実験を開始します。', '01. 门店经营画像': '01. 店舗経営プロファイル', '机构全称 / 品牌': '機関名 / ブランド', '例如：型格沙龙深圳旗舰店': '例：Style Salon 深圳旗艦店', '目前核心业务占比': '現在の中核事業比率', '传统洗剪吹为主': '洗髪・カット・ブロー中心', '烫染护理为主': 'パーマ・カラー・ケア中心', '已有假发/接发项目': 'ウィッグ/エクステ事業あり', '下一步：交付能力评估': '次へ：提供能力評価', '02. 交付与空间冗余': '02. 提供能力と空間余力', '资深发型师数量 (5年以上经验)': 'シニア美容師数（5年以上）', '是否具备独立私密接待空间？': '独立したプライベート接客空間はありますか？', '已具备独立房间': '独立部屋あり', '可进行半私密改造': '半個室化が可能', '暂无（需专家指导规划）': '未整備（専門家の計画支援が必要）', '返回': '戻る', '下一步：联系方式': '次へ：連絡先', '03. 增长顾问对接': '03. 成長コンサルタント接続', '主理人姓名': '責任者名', '联系电话（接收诊断报告）': '電話番号（診断レポート受信用）', '提交审计并获取 1V1 报告': '監査を送信して1対1レポートを取得', '正在跳转到 WIGSWAN 战略合伙人审计系统': 'WIGSWAN戦略パートナー監査システムへ移動中', '正在跳转到': '移動中：', '立即前往': '今すぐ移動', 'AI 调度模型计算中...': 'AI配車モデルが計算中...', 'B级：稳健增长型': 'B級：堅実成長型', 'A级：高效爆发型': 'A級：高効率爆発型', 'S级：旗舰增长引擎': 'S級：旗艦成長エンジン'
    },
    ko: {
      'WIGSWAN 美业云链：以 AI 驱动的产业互联网引擎，重构全球美业价值链条。': 'WIGSWAN 뷰티 클라우드 체인: AI 기반 산업 인터넷 엔진으로 글로벌 뷰티 가치사슬을 재구축합니다.',
      'WIGSWAN | 美业云链 - 数字智能化增长引擎': 'WIGSWAN | 뷰티 클라우드 체인 - 디지털 지능형 성장 엔진',
      '了解 WIGSWAN 美业云链的使命与愿景：重构美业价值链，赋能每一家门店。': 'WIGSWAN 뷰티 클라우드 체인의 미션과 비전: 뷰티 가치사슬을 재구축하고 모든 매장을 지원합니다.',
      '关于愿景 | 数字化重构美业 - WIGSWAN': '비전 | 디지털로 뷰티 산업 재구축 - WIGSWAN',
      '查看 WIGSWAN 美业云链全球合作门店的数字化增长案例。': 'WIGSWAN 뷰티 클라우드 체인 글로벌 파트너 매장의 디지털 성장 사례를 확인하세요.',
      '全球规模化标杆 | 数字化增长案例 - WIGSWAN': '글로벌 규모화 벤치마크 | 디지털 성장 사례 - WIGSWAN',
      '获取 WIGSWAN 美业云链最新增长动态、行业趋势与数字化经营技巧。': 'WIGSWAN 뷰티 클라우드 체인의 최신 성장 소식, 산업 트렌드, 디지털 운영 팁을 확인하세요.',
      '增长情报 | 商业洞察 - WIGSWAN': '성장 인텔리전스 | 비즈니스 인사이트 - WIGSWAN',
      '美业云链（WIGSWAN）产业调度中枢，重构美业服务网络。': '뷰티 클라우드 체인(WIGSWAN)은 산업 배정 허브로서 뷰티 서비스 네트워크를 재구축합니다.',
      '美业云链 | 增长中枢 - WIGSWAN': '뷰티 클라우드 체인 | 성장 허브 - WIGSWAN',
      '申请加入 WIGSWAN 全球增长网络，开启门店数字化评估。': 'WIGSWAN 글로벌 성장 네트워크에 신청하고 매장 디지털 평가를 시작하세요.',
      '合伙人审计 | 开启盈利诊断 - WIGSWAN': '파트너 감사 | 수익 진단 시작 - WIGSWAN',
      '跳转中 - WIGSWAN': '이동 중 - WIGSWAN',
      '跳转到申请合作 - WIGSWAN': '제휴 신청으로 이동 - WIGSWAN',
      '首页': '홈', '增长中枢': '성장 허브', '全球案例': '글로벌 사례', '关于愿景': '비전', '增长动态': '성장 소식', '增长情报': '성장 인텔리전스', '申请合作': '제휴 신청', '战略核心': '전략 핵심', '行业诊断': '산업 진단', '增长支柱': '성장 축', '盈利实验': '수익 실험', '立即诊断': '진단 시작',
      '重构美业价值链条': '뷰티 산업 가치사슬 재구축', 'AI 驱动增长引擎': 'AI 기반 성장 엔진', 'WIGSWAN 通过 AI 调度算法与矩阵获客工厂，为传统美业门店提供跨越式增长模型。我们不是在卖产品，而是在通过数字化重塑行业底层逻辑。': 'WIGSWAN은 AI 배정 알고리즘과 매트릭스 고객 확보 공장을 통해 전통 뷰티 매장에 도약형 성장 모델을 제공합니다. 우리는 제품을 파는 것이 아니라 디지털로 산업의 기초 논리를 재구성합니다.',
      '开启 60 天盈利实验': '60일 수익 실험 시작', '获取《2026美业增长白皮书》': '2026 뷰티 성장 백서 받기', '传统美业正在集体失效': '전통 뷰티 비즈니스가 집단적으로 한계에 직면했습니다', '为什么 90% 的门店守着优质流量，却陷入低客单、低复购的增长泥潭？': '왜 90%의 매장은 좋은 유입을 보유하고도 낮은 객단가와 낮은 재구매의 늪에 빠질까요?',
      '流量焦虑': '트래픽 불안', '获客成本逐年攀升，公域流量如流水而过，无法沉淀为可运营的数字化资产。': '고객 확보 비용은 매년 오르고, 공용 트래픽은 운영 가능한 디지털 자산으로 축적되지 않습니다.', '交付单一': '단일한 서비스 제공', '业务结构高度重合，陷入同质化价格战，缺乏高毛利、强粘性的第二增长曲线。': '사업 구조가 겹치며 동질화된 가격 경쟁에 빠지고, 고마진·고점착의 두 번째 성장 곡선이 부족합니다.', '人治瓶颈': '개인 의존 병목', '高度依赖发型师个人能力，服务标准难以复制，规模化扩张即面临品质坍塌。': '스타일리스트 개인 역량에 크게 의존해 표준 복제가 어렵고, 확장 시 품질 붕괴 위험이 큽니다.',
      '三大核心增长支柱': '3대 핵심 성장 축', 'WIGSWAN 2.0 系统通过技术手段，实现供需两端的最优资源动态分配。': 'WIGSWAN 2.0은 기술로 수요와 공급 양측의 최적 자원 배분을 구현합니다.', '智能调度中枢': '지능형 배정 허브', '基于精准画像的 AI 派单算法，实现“流量-专家-门店”的最优匹配。大幅提升首单转化率与服务响应速度。': '정밀 프로필 기반 AI 배정으로 트래픽-전문가-매장을 최적으로 매칭해 첫 주문 전환율과 응답 속도를 높입니다.', '矩阵获客工厂': '매트릭스 고객 확보 공장', '自动化 AI 内容生产流水线，将门店真实服务素材转化为全平台（抖音/视频号）的高粘性公域流量燃料。': '자동화 AI 콘텐츠 라인이 실제 서비스 소재를 전 플랫폼용 고점착 공용 트래픽 연료로 전환합니다.', 'LTV 价值深耕': 'LTV 가치 심화', '精细化会员生命周期管理模型。通过 90 天电子档案自动触发服务提醒，将单次博弈转化为终身价值共创。': '정교한 회원 생애주기 관리 모델로 90일 전자 기록이 서비스 알림을 자동 트리거해 단발 거래를 평생 가치로 바꿉니다.',
      '战略优势矩阵': '전략 우위 매트릭스', '为什么 WIGSWAN 2.0 系统是美业增长的唯一确定性路径？': '왜 WIGSWAN 2.0이 뷰티 성장의 유일한 확실한 경로일까요?', '核心维度': '핵심 차원', '传统加盟模式': '전통 가맹 모델', 'WIGSWAN 数字化生态': 'WIGSWAN 디지털 생태계', '获客成本': '고객 확보 비용', '极高（依赖地推/昂贵商券）': '매우 높음(오프라인 판촉/비싼 쿠폰 의존)', '边际成本趋零（AI 矩阵工厂驱动）': '한계 비용 제로에 근접(AI 매트릭스 구동)', '资产结构': '자산 구조', '重资产（大量库存/高额加盟费）': '중자산(대량 재고/높은 가맹비)', '轻资产（零囤货/按需调度）': '경자산(무재고/온디맨드 배정)', '客户价值': '고객 가치', '单次交易（博弈心态）': '단발 거래(게임식 관계)', 'LTV 深耕（终身价值管理）': 'LTV 심화(평생 가치 관리)', '响应速度': '응답 속도', '人工中转（低效/易流失）': '수동 전달(비효율/이탈 쉬움)', '毫秒级调度（算法自动匹配）': '밀리초 배정(알고리즘 자동 매칭)',
      '极速盈利实验诊断': '고속 수익 실험 진단', '输入您的门店基础数据，AI 将基于 500+ 标杆门店的脱敏模型，为您演算 60 天内的增长潜力。': '매장 기본 데이터를 입력하면 AI가 500개 이상 벤치마크 매장의 익명 모델로 60일 성장 잠재력을 계산합니다.', '✔ 隐藏核心计算系数，保护商业机密': '✔ 핵심 계산 계수를 숨겨 영업 기밀 보호', '✔ 基于非线性权重评分模型': '✔ 비선형 가중 점수 모델 기반', '✔ 1V1 增长顾问深度解读报告': '✔ 1:1 성장 컨설턴트 심층 해석', '门店服务容量 (工位数)': '매장 서비스 용량(좌석 수)', '日均高净值客流': '일평균 고가치 고객 유입', '预估月度营收增长潜力': '예상 월 매출 성장 잠재력', '加载模型...': '모델 로딩 중...',
      '© 2026 WIGSWAN 美业云链. 版权所有.': '© 2026 WIGSWAN Beauty Cloud Chain. All rights reserved.', '为美业注入数字灵魂': '뷰티 산업에 디지털 영혼을 더하다', '我们不仅仅是在改变发型，我们是在用科技和算法，重塑数百万手艺人的商业命运。': '우리는 헤어스타일만 바꾸는 것이 아니라 기술과 알고리즘으로 수백만 장인의 상업적 운명을 재구성합니다.', '我们的哲学：流量归平台，交付归门店': '우리의 철학: 트래픽은 플랫폼에, 제공은 매장에',
      '在传统模式中，理发店老板往往陷入“既要引流又要管理交付”的内耗中。WIGSWAN（美业云链）的诞生，是为了彻底打破这一枷锁。 我们建立了一个强大的 AI 调度中心，将繁重的公域引流、画像匹配、LTV 运营交给算法； 让门店回归本质——专注那 10% 的核心交付与艺术创造。': '전통 모델에서 미용실 사장은 유입과 서비스 관리를 동시에 떠안는 소모전에 빠집니다. WIGSWAN은 이 굴레를 깨기 위해 탄생했습니다. 강력한 AI 배정 센터가 공용 유입, 프로필 매칭, LTV 운영을 알고리즘에 맡기고, 매장은 핵심 제공과 창작에 집중합니다.', '技术底座': '기술 기반', '持续投入 AI 矩阵工厂与调度算法的研发，确保系统永远领先行业一个维度。': 'AI 매트릭스 공장과 배정 알고리즘에 지속 투자해 시스템이 항상 산업보다 한 차원 앞서도록 합니다.', '长期主义': '장기주의', '拒绝割韭菜式的加盟。我们通过 60 天盈利实验，只与真正具备成长基因的门店同行。': '착취형 가맹을 거부합니다. 60일 수익 실험을 통해 진짜 성장 DNA를 가진 매장과만 함께합니다.', '共生生态': '공생 생태계', '构建一个连接全球供应链与本地服务专家的柔性网络，实现价值链的利润重分配。': '글로벌 공급망과 지역 서비스 전문가를 연결하는 유연한 네트워크로 가치사슬의 이익을 재분배합니다.', '赋能手艺人，重构美业链': '장인을 지원하고 뷰티 체인을 재구축', '© 2026 WIGSWAN. 全球增长总部.': '© 2026 WIGSWAN. Global Growth Headquarters.',
      '数字化增长标杆': '디지털 성장 벤치마크', '我们不展示个案，我们展示的是可复制的盈利模型。以下门店通过 WIGSWAN 2.0 系统实现了营收结构的底层重构。': '우리는 개별 사례가 아니라 복제 가능한 수익 모델을 보여줍니다. 아래 매장들은 WIGSWAN 2.0으로 매출 구조를 근본적으로 재구축했습니다.', 'A类商圈旗舰型': 'A급 상권 플래그십', '上海静安 · 5号样板店': '상하이 징안 · 5호 모델 매장', '该店通过接入 WIGSWAN 智能调度中枢，成功将客单价从传统美业水平提升了 3.2 倍。核心在于利用 AI 矩阵工厂持续输出高粘性案例视频，精准捕获了周边 5 公里内的高净值脱发客群。': '이 매장은 WIGSWAN 지능형 배정 허브에 연결해 객단가를 전통 뷰티 수준의 3.2배로 높였습니다. 핵심은 AI 매트릭스 공장으로 사례 영상을 지속 발행해 반경 5km의 고가치 탈모 고객을 정밀 확보한 것입니다.', '增长速率 (Velocity)': '성장 속도', '* 基于 WIGSWAN 60天极速回本模型测算': '* WIGSWAN 60일 빠른 회수 모델 기준 추산', '社区信任深耕型': '커뮤니티 신뢰 심화형', '成都 · 高新社区店': '청두 · 가오신 커뮤니티 매장', '典型的通过 LTV 价值挖掘盘活存量资产的案例。门店利用 90 天电子护理档案，将首单假发购买转化为了长期的护理订阅服务。老带新裂变率在 60 天内达到了惊人的 38%。': 'LTV 가치 발굴로 기존 자산을 활성화한 전형적 사례입니다. 90일 전자 케어 기록으로 첫 가발 구매를 장기 케어 구독으로 전환했고, 60일 내 추천 확산률은 38%에 달했습니다.', '复购粘性 (Retention)': '재구매 유지', '卓越 S级': '탁월 S급', '想知道您的门店能实现多少倍增？': '당신의 매장은 얼마나 성장할 수 있을까요?', '点击下方按钮，开启专属您的 60 天盈利潜力评估。': '아래 버튼을 눌러 전용 60일 수익 잠재력 평가를 시작하세요.', '立即开启诊断': '지금 진단 시작', '© 2026 WIGSWAN. 为美业注入数字灵魂.': '© 2026 WIGSWAN. 뷰티 산업에 디지털 영혼을.',
      '全球增长情报站': '글로벌 성장 인텔리전스 데스크', '我们持续监测全球美业数字化趋势，为您输出具备实战价值的商业洞察。': '우리는 글로벌 뷰티 디지털화 트렌드를 지속 모니터링하고 실전 가치가 있는 비즈니스 인사이트를 제공합니다.', '从“理发店”到“形象资产管理中心”：行业转型的奇点已至': '“미용실”에서 “이미지 자산 관리 센터”로: 산업 전환점 도래', '深度解析为什么单一的剪发业务将逐渐丧失竞争力，而围绕 LTV 展开的“资产管理”模式将成为未来的核心盈利引擎。': '단일 커트 사업이 경쟁력을 잃고 LTV 중심 자산관리 모델이 미래 수익 엔진이 되는 이유를 분석합니다.', 'AI 矩阵工厂：如何通过自动化脚本在公域流量池实现“低成本爆破”': 'AI 매트릭스 공장: 자동화로 공용 트래픽을 저비용 돌파하는 법', '揭秘 WIGSWAN 2.0 系统的短视频自动化逻辑，解析 100+ 样板店如何通过系统自动分发实现线索量翻倍。': 'WIGSWAN 2.0의 숏폼 자동화 로직과 100개 이상 모델 매장이 자동 배포로 리드를 두 배로 늘린 방식을 설명합니다.', '订阅深度行业报告 (PDF)': '심층 산업 보고서 구독(PDF)', '© 2026 WIGSWAN. 赋能手艺人，重构美业链.': '© 2026 WIGSWAN. 장인을 지원하고 뷰티 체인을 재구축.',
      '重构美业服务网络': '뷰티 서비스 네트워크 재구축', '建立数字化调度主轴': '디지털 배정 축 구축', '美业云链不是一个加盟品牌，而是一套连接全球供应链、本地化服务专家与高净值消费者的“神经系统”。通过 AI 调度，我们让每一家理发店都能拥有顶级假发定制的服务能力。': '뷰티 클라우드 체인은 가맹 브랜드가 아니라 글로벌 공급망, 지역 서비스 전문가, 고가치 소비자를 연결하는 신경계입니다. AI 배정으로 모든 미용실이 최고급 맞춤 가발 서비스 역량을 갖게 합니다.', 'WIGSWAN AI 调度中枢': 'WIGSWAN AI 배정 허브', '连接 1000+ 服务节点与全球柔性供应链': '1000개 이상 서비스 노드와 글로벌 유연 공급망 연결', '矩阵式合伙人体系': '매트릭스형 파트너 체계', '打破传统层级，建立以服务质量为权重的动态资源分配网络。让真正的“手艺人”通过系统获得尊严与收益。': '전통적 위계를 깨고 서비스 품질을 가중치로 하는 동적 자원 배분 네트워크를 구축합니다. 진짜 장인이 시스템을 통해 존엄과 수익을 얻습니다.', '零边际成本扩张': '제로 한계비용 확장', '门店无需压货，无需重资产。通过 WIGSWAN 数字化工具，实现 24 小时内的项目极速嫁接与盈利验证。': '매장은 재고나 중자산이 필요 없습니다. WIGSWAN 디지털 도구로 24시간 내 프로젝트 도입과 수익 검증을 구현합니다.', '数字化赋能路径': '디지털 역량 강화 경로', '从“流量焦虑”到“价值深耕”的 4 步演进': '트래픽 불안에서 가치 심화로 가는 4단계 진화', '画像诊断': '프로필 진단', '基于 LTV 模型的客群深度分析，精准锁定沉睡的高净值会员。': 'LTV 모델 기반 고객 심층 분석으로 잠재 고가치 회원을 정확히 찾습니다.', '内容爆破': '콘텐츠 돌파', 'AI 矩阵工厂自动生成本土化、强信任的短视频弹药，实现低成本获客。': 'AI 매트릭스 공장이 현지화되고 신뢰도 높은 숏폼 소재를 자동 생성해 저비용 고객 확보를 구현합니다.', '智能派单': '지능형 배정', '毫秒级算法匹配，确保最合适的“形象专家”在最合适的时间出现在门店。': '밀리초 알고리즘 매칭으로 가장 적합한 이미지 전문가가 가장 적합한 시간에 매장에 도착하도록 합니다.', '© 2026 WIGSWAN. 全链路数字化增长引擎.': '© 2026 WIGSWAN. 전 체인 디지털 성장 엔진.', '申请成为增长合伙人': '성장 파트너 신청',
      '申请诊断': '진단 신청', '战略合伙人资格审计': '전략 파트너 자격 감사', 'WIGSWAN 仅筛选具有强烈增长意愿且具备高标准交付能力的门店，开启 60 天盈利闭环实验。': 'WIGSWAN은 강한 성장 의지와 높은 제공 기준을 갖춘 매장만 선별해 60일 수익 폐쇄 루프 실험을 시작합니다.', '01. 门店经营画像': '01. 매장 운영 프로필', '机构全称 / 品牌': '기관명 / 브랜드', '例如：型格沙龙深圳旗舰店': '예: Style Salon 선전 플래그십', '目前核心业务占比': '현재 핵심 사업 비중', '传统洗剪吹为主': '전통 샴푸·커트·드라이 중심', '烫染护理为主': '펌·염색·케어 중심', '已有假发/接发项目': '가발/붙임머리 서비스 보유', '下一步：交付能力评估': '다음: 제공 역량 평가', '02. 交付与空间冗余': '02. 제공 및 공간 여력', '资深发型师数量 (5年以上经验)': '시니어 스타일리스트 수(5년 이상)', '是否具备独立私密接待空间？': '독립적인 프라이빗 상담 공간이 있나요?', '已具备独立房间': '독립 룸 보유', '可进行半私密改造': '반프라이빗 공간으로 개조 가능', '暂无（需专家指导规划）': '아직 없음(전문가 계획 필요)', '返回': '뒤로', '下一步：联系方式': '다음: 연락처', '03. 增长顾问对接': '03. 성장 컨설턴트 연결', '主理人姓名': '대표자 이름', '联系电话（接收诊断报告）': '전화번호(진단 보고서 수신)', '提交审计并获取 1V1 报告': '감사 제출 및 1:1 보고서 받기', '正在跳转到 WIGSWAN 战略合伙人审计系统': 'WIGSWAN 전략 파트너 감사 시스템으로 이동 중', '正在跳转到': '이동 중:', '立即前往': '바로 이동', 'AI 调度模型计算中...': 'AI 배정 모델 계산 중...', 'B级：稳健增长型': 'B급: 안정 성장형', 'A级：高效爆发型': 'A급: 고효율 폭발형', 'S级：旗舰增长引擎': 'S급: 플래그십 성장 엔진'
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
      .is-localized .hero h1 { font-size: clamp(42px, 5.2vw, 64px); max-width: 980px; }
      .is-localized .hero-eyebrow { letter-spacing: 2px; }
      .is-localized .btn { height: auto; min-height: 56px; white-space: normal; text-align: center; line-height: 1.25; padding-block: 12px; }
      .is-localized .glass-card, .is-localized .pillar-item, .is-localized .case-content, .is-localized .flow-card, .is-localized .calc-box, .is-localized .input-field, .is-localized .input-group { min-width: 0; }
      .is-localized table { table-layout: fixed; width: 100%; }
      .is-localized th, .is-localized td { overflow-wrap: anywhere; word-break: normal; }
      .is-localized .income-result strong { font-size: clamp(30px, 4vw, 48px); line-height: 1.15; }
      .is-localized .case-card { grid-template-columns: minmax(0, 40%) minmax(0, 60%); }
      .is-localized .case-card[style*="60% 40%"] { grid-template-columns: minmax(0, 60%) minmax(0, 40%) !important; }
      @media (max-width: 1180px) {
        .site-header .header-inner { height: auto; min-height: 90px; padding-top: 14px; padding-bottom: 14px; gap: 18px; }
        .site-header .main-nav { gap: 8px 16px; }
        .site-header .main-nav a { font-size: 12px; }
        .language-switcher { margin-left: 0; }
      }
      @media (max-width: 960px) {
        .language-switcher { margin: 18px 0 0; flex-wrap: wrap; }
        .is-localized .hero h1 { font-size: clamp(34px, 9vw, 52px); }
        .is-localized .section-header h2 { font-size: clamp(30px, 8vw, 44px); }
        .is-localized .case-card, .is-localized .case-card[style*="60% 40%"] { grid-template-columns: 1fr !important; }
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
