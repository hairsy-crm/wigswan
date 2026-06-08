(function () {
  const LANGS = [
    { code: 'zh', label: '中文', htmlLang: 'zh-CN' },
    { code: 'en', label: 'EN', htmlLang: 'en' },
    { code: 'ja', label: '日本語', htmlLang: 'ja' },
    { code: 'ko', label: '한국어', htmlLang: 'ko' }
  ];

  const MARKET_CONTENT = {
    zh: {
      banner: [
        {
          title: '区域协同保护机制',
          body: '通过合作标准与区域规划机制，降低同质竞争对门店经营的干扰，帮助合伙人建立稳定增长空间。'
        },
        {
          title: '本地化增长支持',
          body: '通过品牌内容、服务标准与本地运营支持，帮助门店建立更顺畅的咨询与到店转化路径。'
        }
      ],
      growthTitle: '合作门店增长反馈',
      growthSubtitle: '来自合作门店的一线经营观察',
      growthItems: [
        '【华东】合作门店：高价值项目咨询质量提升，服务结构持续优化',
        '【华南】合作门店：老客维护效率提升，复购服务占比持续增长',
        '【西南】合作门店：复杂项目交付更稳定，顾问支持响应更顺畅',
        '【华东】合作门店：线上内容表达更清晰，咨询承接效率提升',
        '【华南】合作门店：新客户服务链路完善，后续维护机制更成熟'
      ]
    },
    en: {
      heroNote: 'Designed for US salon owners: compatible with diverse hair types, high-ticket consultations, and independent studio growth.'
    },
    ja: {
      heroNote: 'グローバル品質基準（Global Quality Standard）に準拠。安心導入、標準運用、長期支援を重視したサロンDXプログラムです。'
    },
    ko: {
      heroEyebrow: 'Aesthetic Intelligence Ecosystem',
      heroNote: '2026 K-Beauty 트렌드 인사이트를 반영해 미학, 콘텐츠, 고객 경험을 연결하는 성장 시스템입니다.'
    }
  };

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
      'WIGSWAN 通过智能化增长系统，为传统美业门店导入高价值项目与数字化运营能力。我们不是单纯销售产品，而是帮助门店升级经营结构。': 'WIGSWAN helps salons introduce high-value services and digital operating capabilities without exposing the internal playbook behind the system.',
      '开启增长评估': 'Start My Growth Audit',
      '立即下载《2026美业数字化转型手册》：揭秘单客 LTV 翻 3.2 倍的底层逻辑 (PDF)': 'Download the 2026 Digital Transformation Manual: Unlocking the LTV 3.2X Logic (PDF)',
      '传统美业正在集体失效': 'The "Trading Time for Money" Trap',
      '为什么 90% 的门店守着优质流量，却陷入低客单、低复购的增长泥潭？': 'Why are 90% of salons struggling with low margins despite having a loyal client base?',
      '流量焦虑': 'The Client Acquisition Trap',
      '获客成本逐年攀升，平台流量难以沉淀为可持续经营资产。': 'Rising acquisition costs make it harder to build durable customer assets without an operating system.',
      '交付单一': 'The Low-Margin Hustle',
      '业务结构高度重合，陷入同质化价格战，缺乏高毛利、强粘性的第二增长曲线。': 'Most salons are stuck in a price war. You need a high-margin "Second Curve" to break through the revenue ceiling.',
      '人治瓶颈': 'The Talent Dependency',
      '高度依赖发型师个人能力，服务标准难以复制，规模化扩张即面临品质坍塌。': 'Relying solely on individual talent limits your growth. You need a system that delivers consistent excellence at scale.',
      '三大核心增长支柱': 'The Three Pillars of High-Ticket Success',
      'WIGSWAN 2.0 系统通过技术手段，实现供需两端的最优资源动态分配。': 'WIGSWAN 2.0 optimizes the value chain to maximize your revenue per square foot.',
      '智能协同中枢': 'Intelligent Coordination Hub',
      '基于标准化经营数据，协助门店完成客户、服务与支持资源的高效协同，提升响应质量与成交效率。': 'Coordinate customer demand, service delivery, and partner support through a standardized digital operating layer.',
      '内容增长系统': 'Content Growth System',
      '将门店真实服务能力转化为更适合线上传播的品牌内容，持续建立信任与咨询入口。': 'Turn real service capability into credible brand content that supports long-term consultation growth.',
      '客户价值运营': 'Customer Value Operations',
      '通过会员分层与持续服务机制，帮助门店从单次成交转向长期关系经营。': 'Move beyond one-off transactions with customer segmentation and structured long-term service operations.',
      '战略优势矩阵': 'The Competitive Advantage',
      '为什么 WIGSWAN 2.0 系统是美业增长的唯一确定性路径？': 'Why WIGSWAN is the only path to 3X your salon’s valuation.',
      '核心维度': 'Key Metrics',
      '传统加盟模式': 'Traditional Franchise',
      'WIGSWAN 数字化生态': 'WIGSWAN Ecosystem',
      '获客成本': 'Acquisition Cost',
      '极高（依赖地推/昂贵商券）': 'High (Reliant on discounts/ad spend)',
      '持续优化（数字化内容与运营协同）': 'Continuously Optimized',
      '资产结构': 'Asset Structure',
      '重资产（大量库存/高额加盟费）': 'Heavy (Inventory & Entry Fees)',
      '轻资产（标准化项目导入）': 'Asset-Light Project Introduction',
      '客户价值': 'Client 客户价值',
      '单次交易（博弈心态）': 'Transactional (One-off)',
      '长期运营（客户价值管理）': 'Relationship-Based Operations',
      '响应速度': 'Response Time',
      '人工中转（低效/易流失）': 'Slow (Manual Handoff)',
      '标准化响应（系统化协同）': 'Standardized Response',
      '极速盈利实验诊断': 'Business Scalability Simulator',
      '输入您的门店基础数据，系统将基于多维经营评估，为您判断项目导入后的增长潜力。': 'Enter your basics. The system will assess growth potential through a multi-factor operating review.',
      '✔ 仅展示评估结论，不公开内部方法': '✔ Internal methodology remains protected',
      '✔ 基于多维经营指标综合判断': '✔ Based on multi-factor operating indicators',
      '✔ 1V1 增长顾问深度解读报告': '✔ Includes a 1-on-1 strategy session',
      '门店服务容量 (工位数)': 'Stations / Chairs',
      '日均有效客流': 'Average Daily Qualified Clients',
      '预估月度营收增长潜力': 'Estimated Monthly Revenue Uplift',
      '生成评估...': 'Generating Assessment...',
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
      '我们不仅仅是在改变发型，我们是在用数字化能力，帮助更多手艺人获得更稳定的商业增长。': 'We help beauty professionals build more stable commercial growth through digital capabilities.',
      '我们的哲学：流量归平台，交付归门店': 'Our Philosophy: Platform Scales, Studios Deliver',
      '在传统模式中，理发店老板往往陷入“既要引流又要管理交付”的内耗中。WIGSWAN（美业云链）的诞生，是为了彻底打破这一枷锁。 我们将复杂的增长策略、客户运营与服务协同封装为系统能力； 让门店回归本质——专注核心交付与艺术创造。': 'Salon owners are often trapped between marketing and operations. WIGSWAN packages growth strategy, customer operations, and service coordination into a structured system.',
      '技术底座': 'The Tech Stack',
      '持续投入数字化系统与服务标准的研发，确保合作门店始终保持经营效率优势。': 'Continuous investment in digital systems and service standards helps partners maintain an operating edge.',
      '长期主义': 'Long-Term Partnership',
      '拒绝短期加盟思维。我们通过严谨评估，只与真正具备成长基因的门店同行。': 'We reject the predatory franchise model. We only partner with studios that have the DNA for exponential growth.',
      '共生生态': 'Global Ecosystem',
      '构建一个连接优质产品、服务标准与本地门店的协作网络，让价值回到真正完成交付的人手中。': 'A global network connecting elite supply chains with local experts to maximize profit redistribution.',
      '赋能手艺人，重构美业链': 'Empowering Artists. Scaling Studios.',
      '© 2026 WIGSWAN. 全球增长总部.': '© 2026 WIGSWAN Global HQ.',
      '查看 WIGSWAN 美业云链全球合作门店的数字化增长案例。': 'Explore how WIGSWAN partner studios are scaling worldwide.',
      '全球规模化标杆 | 数字化增长案例 - WIGSWAN': 'Global Benchmarks | High-Ticket Scaling Cases - WIGSWAN',
      '数字化增长标杆': 'The Proof of Concept',
      '我们不展示操作细节，我们展示的是可验证的增长方向。以下门店通过 WIGSWAN 2.0 系统完成了经营结构升级。': 'We do not disclose operating details; we show verified growth direction and structural upgrades.',
      '核心商圈旗舰型': 'Core Market Flagship',
      '上海静安 · 5号样板店': 'LA Beverly Hills · Model Studio 05',
      '该店通过接入 WIGSWAN 增长系统，将传统服务升级为高价值形象管理项目。核心在于提升门店品牌表达、咨询承接与交付标准，而非依赖单一低价流量。': 'By adopting the WIGSWAN growth system, the studio upgraded traditional services into higher-value image management offerings.',
      '增长速率 (Velocity)': 'Scaling Velocity',
      '* 基于 WIGSWAN 合作门店经营样本综合评估': '* Based on WIGSWAN partner operating samples.',
      '社区信任深耕型': 'Boutique Trust Growth',
      '成都 · 高新社区店': 'Miami · Wynwood Boutique',
      '这是通过客户价值运营盘活存量资产的典型案例。门店在服务后持续维护客户关系，将一次成交逐步转化为长期信任与复购。': 'A representative case of turning one-time purchases into longer-term trust and repeat service through customer value operations.',
      '复购粘性 (Retention)': 'Client Retention',
      '卓越 S级': 'Elite S-Tier',
      '想知道您的门店能实现多少倍增？': 'Ready to 3X Your Studio Revenue?',
      '点击下方按钮，开启专属您的增长潜力评估。': 'Click below to start your dedicated growth potential audit.',
      '立即开启诊断': 'Get My Audit Now',
      'AI 视觉成像实验室': 'AI Visual Intelligence Lab',
      '基于 3D 骨相扫描技术，为客户预演“变美”后的每一个维度。': 'Using 3D bone structure scanning to simulate every dimension of your aesthetic transformation.',
      '◈ 3D 数字化骨相采集': '◈ 3D Digital Bone Structure Capture',
      '通过视觉辅助评估，帮助客户更直观地理解形象改善方向。': 'Use visual assessment support to help customers understand potential image improvements.',
      '⌘ K-Trend 实时风格映射': '⌘ Real-time K-Trend Mapping',
      '实时链接潮流数据库，AI 自动将最新趋势与客户画像进行 1:1 合成演示。': 'Live connection to trend databases. AI performs 1:1 style mapping onto client profiles.',
      '∞ 持续护理资产管理': '∞ Ongoing Care Asset Management',
      '建立数字资产档案，持续监测佩戴后的头皮健康度，自动触发维保预警。': 'Digital asset tracking for scalp health and natural wear, with automated maintenance triggers.',
      '© 2026 WIGSWAN. 为美业注入数字灵魂.': '© 2026 WIGSWAN. Giving beauty a digital soul.',
      '获取 WIGSWAN 美业云链最新增长动态、行业趋势与数字化经营技巧。': 'Get the latest on beauty tech, industry trends, and scaling tactics.',
      '增长情报 | 商业洞察 - WIGSWAN': 'Intelligence | Scaling Insights - WIGSWAN',
      '全球增长情报站': 'Global Intelligence Desk',
      '我们持续监测全球美业数字化趋势，为您输出具备实战价值的商业洞察。': 'We monitor global beauty shifts to deliver actionable intelligence for your studio.',
      '从“理发店”到“形象资产管理中心”：行业转型的奇点已至': 'From "Salon" to "Image Asset Management": The Industry Singularity',
      '深度解析为什么单一的剪发业务将逐渐丧失竞争力，而长期客户价值运营将成为未来的核心盈利引擎。': 'Why standalone haircuts are losing competitiveness, and why long-term customer value operations matter.',
      '数字化内容系统：如何让门店服务能力被更多目标客户看见': 'Digital Content Systems: Making Service Capability Visible',
      '解析 WIGSWAN 2.0 如何帮助门店建立持续、稳定、可信的线上表达体系。': 'How WIGSWAN 2.0 helps salons build consistent, credible online expression.',
      '订阅深度行业报告 (PDF)': 'Download the Scaling Report (PDF)',
      '© 2026 WIGSWAN. 赋能手艺人，重构美业链.': '© 2026 WIGSWAN. Empowering Artists. Scaling Studios.',
      '美业云链（WIGSWAN）数字化增长中枢，升级美业服务网络。': 'WIGSWAN: The Digital Growth Hub for Beauty Services.',
      '美业云链 | 增长中枢 - WIGSWAN': 'Growth Hub | The Scalability Engine - WIGSWAN',
      '升级美业服务网络': 'Upgrading the Beauty Service Network',
      '建立数字化增长中枢': 'The Digital Growth Hub',
      '美业云链不是一个加盟品牌，而是一套帮助门店导入高价值项目、标准化服务与数字化运营能力的协作系统。': 'WIGSWAN is not a franchise; it is a collaboration system for introducing higher-value services, service standards, and digital operations.',
      'WIGSWAN 增长协同中枢': 'WIGSWAN Growth Coordination Hub',
      '连接产品、服务标准与合作门店': 'Connecting products, service standards, and partner salons.',
      '标准化合伙人体系': 'The Standardized Partner Network',
      '打破传统层级，让真正具备交付能力的手艺人获得更稳定的合作机会与合理回报。': 'Create a partner system where capable professionals receive more stable opportunities and fair returns.',
      '零边际成本扩张': 'Zero-Marginal-Cost Expansion',
      '门店无需压货，无需重资产。通过 WIGSWAN 数字化工具，实现 24 小时内的项目极速嫁接与盈利验证。': 'No inventory. No heavy overhead. Use our digital toolkit to launch high-ticket projects within 24 hours.',
      '数字化赋能路径': 'The Enablement Path',
      '从“流量焦虑”到“价值深耕”的 4 步演进': 'A 4-step evolution from hustle to automated wealth.',
      '经营诊断': 'Business Diagnosis',
      '基于门店经营现状与客户结构，评估适合导入的增长路径。': 'Assess the right growth path based on current operations and customer structure.',
      '内容增长': 'Content Growth',
      '围绕门店真实服务能力，建立更稳定、更可信的线上表达。': 'Build more stable and credible online expression around real service capability.',
      '服务协同': 'Service Coordination',
      '通过标准化协作机制，帮助门店获得更稳定的项目支持与交付保障。': 'Use standardized collaboration to support more stable project delivery.',
      '© 2026 WIGSWAN. 全链路数字化增长引擎.': '© 2026 WIGSWAN. The Complete Scaling Ecosystem.',
      '申请成为增长合伙人': 'Become a Partner',
      '申请加入 WIGSWAN 全球增长网络，开启门店数字化评估。': 'Apply to join the global network and start your business audit.',
      '合伙人审计 | 开启盈利诊断 - WIGSWAN': 'Partner Audit | Scalability Check - WIGSWAN',
      '申请诊断': 'Apply for Audit',
      '战略合伙人资格审计': 'Strategic Partner Qualification Audit',
      'WIGSWAN 仅筛选具有强烈增长意愿且具备高标准交付能力的门店，开启增长潜力评估。': 'We only partner with highly motivated studios capable of excellent delivery. Start your growth potential audit.',
      '01. 门店经营概况': '01. Business Profile',
      '机构全称 / 品牌': 'Studio Name / Brand',
      '例如：型格沙龙深圳旗舰店': 'e.g., Beverly Hills Luxury Salon',
      '目前核心业务占比': 'Current Service Mix',
      '传统洗剪吹为主': 'Mainly Cut & Blow-dry',
      '烫染护理为主': 'Mainly Color & Treatment',
      '已有假发/接发项目': 'Existing Wigs/Extensions',
      '主要客流获取渠道': 'Primary Lead Source',
      '自然到店 / 地推': 'Walk-ins / Local Promo',
      '本地生活平台': 'Local Service Platforms',
      '内容平台 / 社交平台': 'Content / Social Platforms',
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
      '暂无（需顾问协助规划）': 'No, need expert planning',
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
      '增长潜力评估中...': 'Assessing Growth Potential...',
      'B级：稳健增长型': 'Grade B: Steady Growth',
      'A级：高效增长型': 'Grade A: High-Velocity Growth',
      'S级：旗舰增长型': 'Grade S: Flagship Growth',
      '高潜力合作样本': 'High-potential partner profile',
      '具备清晰增长空间': 'Clear growth room identified',
      '适合基础能力梳理': 'Suitable for foundation review',
      '详细评估结果将由增长顾问结合门店实际情况解读。': 'A growth advisor will interpret the detailed result with your store context.'
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
      '美业云链（WIGSWAN）数字化增长中枢，升级美业服务网络。': 'WIGSWAN：サプライチェーンとサロンを繋ぐ、美容業界のスマート・ネットワーク・ハブ。',
      '美业云链 | 增长中枢 - WIGSWAN': 'WIGSWAN | 美容業界のDXハブ',
      '申请加入 WIGSWAN 全球增长网络，开启门店数字化评估。': 'WIGSWANグローバル・ネットワークへの参画およびデジタル経営診断の申し込み。',
      '合伙人审计 | 开启盈利诊断 - WIGSWAN': '提携監査 | デジタル経営診断 - WIGSWAN',
      '首页': 'ホーム', '增长中枢': 'DXハブ', '全球案例': '導入事例', '战略优势': '戦略的優位性', '关于愿景': 'ビジョン', '增长动态': 'ニュース', '增长情报': 'インテリジェンス', '申请合作': 'お問い合わせ', '战略核心': '戦略コア', '行业诊断': '経営診断', '增长支柱': '支援の柱', '盈利实验': '経営シミュレーション', '立即诊断': '診断を開始',
      '重构美业价值链条': '職人の価値をデジタルで再定義', 'AI 驱动增长引擎': '美理容師のための知能支援システム', 'WIGSWAN 通过智能化增长系统，为传统美业门店导入高价值项目与数字化运营能力。我们不是单纯销售产品，而是帮助门店升级经营结构。': 'WIGSWANは、AIによる精密な分析とデジタル技術を駆使し、サロンの持続可能な成長を支援します。単なる製品販売ではなく、デジタル化を通じてサロン経営の根本的な効率化と価値向上を目指します。',
      '开启增长评估': '成長ポテンシャル診断を開始',
      '立即下载《2026美业数字化转型手册》：揭秘单客 LTV 翻 3.2 倍的底层逻辑 (PDF)': '「2026 美容業界DX転換マニュアル」をダウンロード：単客LTV 3.2倍のロジック (PDF)',
      '传统美业正在集体失效': '従来型サロン経営の課題', '为什么 90% 的门店守着优质流量，却陷入低客单、低复购的增长泥潭？': 'なぜ多くのサロンが、高い技術力を持ちながら収益性の向上に苦心しているのでしょうか？',
      '流量焦虑': '新規集客の限界', '获客成本逐年攀升，平台流量难以沉淀为可持续经营资产。': '広告費の増大に対し、顧客情報のデジタル資産化が遅れ、リピート率の向上が困難になっています。', '交付单一': '提供価値の画一化', '业务结构高度重合，陷入同质化价格战，缺乏高毛利、强粘性的第二增长曲线。': 'サービスが同質化し価格競争に陥りやすいため、収益性の高い新たな柱の構築が急務です。', '人治瓶颈': '属人化の課題', '高度依赖发型师个人能力，服务标准难以复制，规模化扩张即面临品质坍塌。': '個人のスキルに過度に依存しているため、サービスの標準化や組織的な成長が難しくなっています。',
      '三大核心增长支柱': 'サロンを支える3つの柱', 'WIGSWAN 2.0 系统通过技术手段，实现供需两端的最优资源动态分配。': 'WIGSWAN 2.0は、デジタル技術により需要と供給の最適化を支援します。', '智能协同中枢': 'インテリジェント・マッチング', '基于标准化经营数据，协助门店完成客户、服务与支持资源的高效协同，提升响应质量与成交效率。': '精密な顧客データに基づくAIマッチングにより、顧客と職人の最適な出会いを創出。成約率と顧客満足度を向上させます。', '内容增长系统': 'デジタル・プレゼンス構築', '将门店真实服务能力转化为更适合线上传播的品牌内容，持续建立信任与咨询入口。': 'サロンの確かな技術を、AIを活用して魅力的なコンテンツに変換。SNSを通じた質の高い新規顧客との接点を作ります。', '客户价值运营': '客户价值 (顧客生涯価値) の最大化', '通过会员分层与持续服务机制，帮助门店从单次成交转向长期关系经营。': '90日間のデジタル・カルテを活用し、最適なタイミングで再来店を促進。一度の来店を一生の信頼関係へと繋げます。',
      '战略优势矩阵': '戦略重位性', '为什么 WIGSWAN 2.0 系统是美业增长的唯一确定性路径？': 'なぜWIGSWAN 2.0がサロンDXの最適解なのか', '核心维度': '比較項目', '传统加盟模式': '従来のフランチャイズ', 'WIGSWAN 数字化生态': 'WIGSWANデジタルDXシステム', '获客成本': '顧客獲得コスト', '极高（依赖地推/昂贵商券）': '非常に高い（広告・クーポン依存）', '持续优化（数字化内容与运营协同）': '継続的に最適化（デジタル運用）', '资产结构': '資産構造', '重资产（大量库存/高额加盟费）': '重資産（在庫・高額な初期費用）', '轻资产（标准化项目导入）': '軽資産（在庫不要・オンデマンド提供）', '客户价值': '顧客との関係性', '单次交易（博弈心态）': '単発の取引', '长期运营（客户价值管理）': '客户价值の追求（長期的信頼関係）', '响应速度': '対応スピード', '人工中转（低效/易流失）': '手動による非効率な対応', '标准化响应（系统化协同）': 'デジタルによる即時マッチング',
      '极速盈利实验诊断': 'サロン経営ポテンシャル診断', '输入您的门店基础数据，系统将基于多维经营评估，为您判断项目导入后的增长潜力。': 'サロンの基本データを入力してください。多角的な経営評価により、成長ポテンシャルを診断します。', '✔ 仅展示评估结论，不公开内部方法': '✔ 内部メソッドを公開しない評価結果', '✔ 基于多维经营指标综合判断': '✔ 複数の経営指標による総合判断', '✔ 1V1 增长顾问深度解读报告': '✔ 専門コンサルタントによる個別フィードバック', '门店服务容量 (工位数)': 'セット面数 (席数)', '日均有效客流': '1日あたりの平均来店数', '预估月度营收增长潜力': '推定される月間収益向上ポテンシャル', '生成评估...': '評価を生成中...',
      '© 2026 WIGSWAN 美业云链. 版权所有.': '© 2026 WIGSWAN Beauty Cloud Chain. All rights reserved.', '为美业注入数字灵魂': '美のプロフェッショナルにデジタルの力を', '我们不仅仅是在改变发型，我们是在用数字化能力，帮助更多手艺人获得更稳定的商业增长。': '私たちは単に外見を変えるだけではありません。テクノロジーを駆使して、職人の価値を次世代へと繋いでいきます。', '我们的哲学：流量归平台，交付归门店': '私たちの哲学：集客はシステムが、技術はサロンが',
      '在传统模式中，理发店老板往往陷入“既要引流又要管理交付”的内耗中。WIGSWAN（美业云链）的诞生，是为了彻底打破这一枷锁。 我们将复杂的增长策略、客户运营与服务协同封装为系统能力； 让门店回归本质——专注核心交付与艺术创造。': 'サロン経営者が集客と現場管理の両立に疲弊する時代を終わらせるために、WIGSWANは誕生しました。成長戦略、顧客運営、サービス連携をシステム化することで、職人は本来の役割に集中できます。', '技术底座': '技術基盤', '持续投入 数字化内容系统与协同机制的研发，確保系统永远领先行业一个维度。': 'デジタルシステムとサービス標準への投資を続け、店舗運営の効率化を支援します。', '长期主义': '長期的な視点', '拒绝短期加盟思维。我们通过严谨评估，只与真正具备成长基因的门店同行。': '短期的な利益ではなく、真に成長を志すサロンと共に、持続可能なエコシステムを構築します。', '共生生态': '共創エコシステム', '构建一个连接优质产品、服务标准与本地门店的协作网络，让价值回到真正完成交付的人手中。': '高品質な商品、サービス標準、地域店舗をつなぐ協力ネットワークを構築します。', '赋能手艺人，重构美业链': '職人を支援し、美容業界をアップデートする', '© 2026 WIGSWAN. 全球增长总部.': '© 2026 WIGSWAN. グローバルDX本部.',
      '数字化增长标杆': 'デジタル活用による成功事例', '我们不展示操作细节，我们展示的是可验证的增长方向。以下门店通过 WIGSWAN 2.0 系统完成了经营结构升级。': '再現性の高いDXモデルの実績をご紹介します。これらのサロンは、WIGSWAN 2.0の導入により経営構造の最適化に成功しました。', '核心商圈旗舰型': '都市型フラッグシップ店', '上海静安 · 5号样板店': 'LA Beverly Hills · Model Studio 05', '该店通过接入 WIGSWAN 增长系统，将传统服务升级为高价值形象管理项目。核心在于提升门店品牌表达、咨询承接与交付标准，而非依赖单一低价流量。': '成長システムの導入により、従来サービスを高付加価値のイメージ管理へとアップグレードしました。', '增长速率 (Velocity)': '成長スピード', '* 基于 WIGSWAN 合作门店经营样本综合评估': '* WIGSWAN 独自モデルに基づくシミュレーション', '社区信任深耕型': '地域密着・信頼深耕型', '成都 · 高新社区店': 'Miami · Wynwood Boutique', '这是通过客户价值运营盘活存量资产的典型案例。门店在服务后持续维护客户关系，将一次成交逐步转化为长期信任与复购。': '顧客価値運営により、一度の取引を長期的な信頼とリピートにつなげた事例です。', '复购粘性 (Retention)': 'リピート率', '卓越 S级': '卓越 Sランク', '想知道您的门店能实现多少倍增？': 'あなたのサロンのDXポテンシャルを診断しませんか？', '点击下方按钮，开启专属您的增长潜力评估。': '下のボタンから、成長ポテンシャル診断を開始できます。', '立即开启诊断': '診断を開始',
      '获取 WIGSWAN 美业云链最新增长动态、行业趋势与数字化经营技巧。': 'WIGSWANが提供する最新の業界トレンド、DX経営ノウハウ、および技術情報。',
      '增长情报 | 商业洞察 - WIGSWAN': 'インテリジェンス | 美容業界のデジタル洞察 - WIGSWAN',
      '全球增长情报站': 'インテリジェンス・デスク', '我们持续监测全球美业数字化趋势，为您输出具备实戦価値の商业洞察。': '世界の美容トレンドとDX事例を継続的にモニタリングし、有益なインサイトを提供します。', '从“理发店”到“形象资产管理中心”：行业转型の奇点已至': '「ヘアサロン」から「イメージ資産管理」へ：美容業界のパラダイムシフト', '深度解析为什么单一的剪发业务将逐渐丧失竞争力，而长期客户价值运营将成为未来的核心盈利引擎。': '従来のカット中心のビジネスモデルから、長期的な顧客価値運営への移行がなぜ不可避なのかを深く考察します。', '数字化内容系统：如何让门店服务能力被更多目标客户看见': 'デジタル・プレゼンス戦略：店舗のサービス力を伝える方法', '解析 WIGSWAN 2.0 如何帮助门店建立持续、稳定、可信的线上表达体系。': 'WIGSWAN 2.0が継続的で信頼性の高いオンライン表現を支援する考え方を解説します。', '订阅深度行业报告 (PDF)': '詳細レポート(PDF)を購読する', '© 2026 WIGSWAN. 赋能手艺人，重构美业链.': '© 2026 WIGSWAN. 職人の価値を次世代へ。',
      '升级美业服务网络': '美容サービスネットワークの再構築', '建立数字化增长中枢': 'デジタル・ロジスティクスの構築', '美业云链不是一个加盟品牌，而是一套帮助门店导入高价值项目、标准化服务与数字化运营能力的协作系统。': 'WIGSWANはフランチャイズではなく、高付加価値サービス、サービス標準、デジタル運営能力を導入するための協力システムです。', 'WIGSWAN 增长协同中枢': 'WIGSWAN 成長連携ハブ', '连接产品、服务标准与合作门店': '商品、サービス標準、提携店舗を連携', '标准化合伙人体系': 'パートナー・エコシステム', '打破传统层级，让真正具备交付能力的手艺人获得更稳定的合作机会与合理回报。': '確かな提供力を持つ職人が、より安定した協業機会と適正なリターンを得られる仕組みを構築します。', '零边际成本扩张': '効率的なビジネス拡張', '门店无需承担过重前期投入。通过 WIGSWAN 数字化工具，稳步完成项目导入与经营评估。': '過度な初期投資を抑えながら、サービス導入と経営評価を段階的に進めます。', '数字化赋能路径': 'DXへの4つのステップ', '从“流量焦虑”到“价值深耕”の 4 步演進': '新規集客への依存から、深い信頼関係의 구축으로', '经营诊断': 'データ分析', '基于门店经营现状与客户结构，评估适合导入的增长路径。': '店舗の現状と顧客構造に基づき、適切な成長パスを評価します。', '内容增长': 'プレゼンス構築', '围绕门店真实服务能力，建立更稳定、更可信的线上表达。': '店舗の実際のサービス力をもとに、安定した信頼性の高いオンライン表現を構築します。', '服务协同': '最適マッチング', '通过标准化协作机制，帮助门店获得更稳定的项目支持与交付保障。': '標準化された協力体制により、安定したプロジェクト支援と納品品質を支えます。', '© 2026 WIGSWAN. 全链路数字化增长引擎.': '© 2026 WIGSWAN. 次世代美容DXシステム。', '申请成为增长合伙人': 'パートナーシップへの参加',
      '申请诊断': '経営診断の申し込み', '战略合伙人资格审计': '提携監査および資格審査', 'WIGSWAN 仅筛选具有强烈增长意愿且具备高标准交付能力的门店，开启增长潜力评估。': 'WIGSWANは、成長への高い志と確かな技術を持つサロンと共に、成長ポテンシャル診断を実施します。', '01. 门店经营概况': '01. サロン経営プロファイル', '机构全称 / 品牌': 'サロン名 / ブランド名', '例如：型格沙龙深圳旗舰店': '例：WIGSWAN 渋谷フラッグシップ', '目前核心业务占比': '現在の主要事業比率', '传统洗剪吹为主': 'カット・カラー・パー마中心', '烫染护理为主': 'トリートメント・ケア中心', '已有假发/接发项目': 'ウィッグ・エクステ導入済み', '主要客流获取渠道': '主要な集客チャネル',
      '自然到店 / 地推': '通りがかり / 店頭販促',
      '本地生活平台': '予約サイト / クーポンサイト',
      '内容平台 / 社交平台': 'SNS / コンテンツプラットフォーム',
      '私域流量 / 老客转介绍': '既存顧客のリピート / 紹介',
      '下一步：交付能力评估': '次へ：サービス提供能力の評価', '02. 交付与内容基础': '02. 設備とコンテンツ基盤', '资深发型师数量 (5年以上经验)': '経験5年以上のスタイリスト数',
      '是否有专人负责短视频/社交媒体运营？': 'SNS・動画運用の専任担当者の有無',
      '有专职运营チームあり': '専任チームあり',
      '店长/发型师兼任': '店長・スタッフが兼任',
      '外包代运营': '外部委託',
      '暂无人员投入': '担当者なし',
      '是否具备独立私密接待空间？': 'プライベートな接客空間の有無', '已具备独立部屋': '個室完備', '可进行半私密改造': '半個室への改装が可能', '暂无（需顾问协助规划）': '未整備（専門家のアドバイスが必要）', '返回': '戻る', '下一步：联系方式': '次へ：ご連絡先入力', '03. 增长顾问对接': '03. コンサルタント接続', '主理人姓名': '代表者名', '联系电话（接收诊断报告）': 'お電話番号 (診断結果送信先)', '提交审计并获取 1V1 报告': '監査を送信し個別レポートを受け取る', '正在跳转到 WIGSWAN 战略合伙人审计系统': '提携監査システムへ接続中', '正在跳转到': '移動先：', '立即前往': '今すぐ移動', '增长潜力评估中...': '成長ポテンシャルを評価中...', 'B级：稳健增长型': 'Bランク：安定成長型', 'A级：高效增长型': 'Aランク：高効率成長型', 'S级：旗舰增长型': 'Sランク：フラッグシップ', '高潜力合作样本': '高ポテンシャル提携候補', '具备清晰增长空间': '明確な成長余地があります', '适合基础能力梳理': '基礎力の整理に適しています', '详细评估结果将由增长顾问结合门店实际情况解读。': '詳細結果は店舗状況に合わせて担当コンサルタントが解説します。'
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
      'WIGSWAN 通过智能化增长系统，为传统美业门店导入高价值项目与数字化运营能力。我们不是单纯销售产品，而是帮助门店升级经营结构。': 'WIGSWAN은 고부가가치 서비스와 디지털 운영 역량을 도입해 매장의 경영 구조 업그레이드를 지원합니다.',
      '开启增长评估': '성장 진단 시작',
      '立即下载《2026美业数字化转型手册》：揭秘单客 LTV 翻 3.2 倍的底层逻辑 (PDF)': '‘2026 K-Beauty 디지털 전환 매뉴얼’ 다운로드: 단일 고객 LTV 3.2배의 로직 (PDF)',
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
      '智能协同中枢': '지능형 협업 허브',
      '基于标准化经营数据，协助门店完成客户、服务与支持资源的高效协同，提升响应质量与成交效率。': '표준화된 운영 데이터를 기반으로 고객, 서비스, 지원 리소스의 협업 효율을 높입니다.',
      '内容增长系统': '콘텐츠 성장 시스템',
      '将门店真实服务能力转化为更适合线上传播的品牌内容，持续建立信任与咨询入口。': '매장의 실제 서비스 역량을 신뢰도 높은 온라인 브랜드 콘텐츠로 전환합니다.',
      '客户价值运营': '客户价值 (고객 평생 가치) 최적화',
      '精细화 회원 생애주기 management 모델. 通过 90일 전자 기록이 서비스 알림을 자동 트리거하여 단발 거래를 평생 가치로 바꿉니다.': '90일 디지털 케어 시스템을 통해 최적의 타이밍에 재방문을 유도, 고객과의 관계를 평생 파트너십으로 만듭니다.',
      '战略优势矩阵': '압도적인 전략적 우위',
      '为什么 WIGSWAN 2.0 系统是美业增长的唯一确定性路径？': '왜 WIGSWAN 2.0이 미용 DX의 유일한 해답인가',
      '核心维度': '핵심 비교',
      '传统加盟模式': '기존 프랜차이즈',
      'WIGSWAN 数字化生态': 'WIGSWAN 디지털 생태계',
      '获客成本': '고객 획득 비용',
      '极高（依赖地推/昂贵商券）': '매우 높음 (광고 및 쿠폰 의존)',
      '持续优化（数字化内容与运营协同）': '제로에 수렴 (AI 콘텐츠 자동 유입)',
      '资产结构': '자산 구조',
      '重资产（大量库存/高额加盟费）': '무거운 자산 (재고 및 높은 가맹비)',
      '轻资产（标准化项目导入）': '가벼운 자산 (재고 부담 없음/온디맨드)',
      '客户价值': '고객 가치',
      '单차 거래（博弈心态）': '단발성 거래',
      '长期运营（客户价值管理）': '客户价值 극대화 (평생 가치 관리)',
      '响应速度': '응답 속도',
      '人工中转（低效/易流失）': '수동 방식 (낮은 효율/이탈 위험)',
      '标准化响应（系统化协同）': '실시간 매칭 (AI 자동 최적화)',
      '极速盈利实验诊断': 'AI 경영 포텐셜 진단',
      '输入您的门店基础数据，系统将基于多维经营评估，为您判断项目导入后的增长潜力。': '매장의 기본 정보를 입력하면 다차원 운영 평가를 통해 성장 잠재력을 진단합니다.',
      '✔ 仅展示评估结论，不公开内部方法': '✔ 내부 방법론은 공개하지 않는 평가 결과',
      '✔ 基于多维标准评分모델': '✔ 다차원 운영 지표 기반 종합 판단',
      '✔ 1V1 增长顾问深度解读보고서': '✔ 전문 성장 컨설턴트의 1:1 리포트 제공',
      '门店服务容量 (工位数)': '경수 (워크스테이션 수)',
      '日均有效客流': '일평균 방문 고객 수',
      '预估月度营收增长潜力': '예상 월 매출 향상 가능성',
      '生成评估...': '모델 로딩 중...',
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
      '我们不仅仅是在改变发型，我们是在用数字化能力，帮助更多手艺人获得更稳定的商业增长。': '우리는 단순히 스타일을 바꾸는 것이 아닙니다. 기술을 통해 수백만 미용 아티스트의 경제적 운명을 혁신합니다.',
      '我们的哲学：流量归平台，交付归门店': '우리의 철학: 플랫폼은 연결하고, 매장은 창조한다',
      '在传统模式中，理发店老板往往陷入“既要引流又要管理交付”的内耗中。WIGSWAN（美业云链）的诞生，是为了彻底打破这一枷锁。我们将复杂的增长策略、客户运营与服务协同封装为系统能力；让门店回归本质——专注核心交付与艺术创造。': 'WIGSWAN은 성장 전략, 고객 운영, 서비스 협업을 시스템화해 매장이 핵심 서비스에 집중하도록 돕습니다.',
      '技术底座': '테크 스택',
      '持续投入 数字化内容系统与协同机制的研发，確保系统永远领先行业一个维度。': '디지털 시스템과 서비스 표준에 지속 투자해 운영 효율의 우위를 지원합니다.',
      '长期主义': '장기적인 파트너십',
      '拒绝割韭菜式的加盟。我们通过 阶段性盈利实验，只与真正具备成长基因의门店同行.': '단기적인 이익을 쫓는 가맹 방식은 거부합니다. 우리는 성장 DNA를 가진 매장과만 함께합니다.',
      '共생 생태계': '공생 생태계',
      '构建一个连接优质产品、服务标准与本地门店的协作网络，让价值回到真正完成交付的人手中。': '우수한 제품, 서비스 표준, 지역 매장을 연결하는 협업 네트워크를 구축합니다.',
      '赋능手艺人，重构美业链': '아티스트 지원 및 뷰티 체인 혁신',
      '© 2026 WIGSWAN. 全球增长总部.': '© 2026 WIGSWAN 글로벌 본부.',
      '查看 WIGSWAN 美业云链全球合作门店的数字化增长案例。': 'WIGSWAN 글로벌 파트너 매장의 디지털 성장 사례를 확인하세요.',
      '全球规模화 벤치마크 | 数字化增长案例 - WIGSWAN': '글로벌 성공 사례 | 뷰티 DX 성장 가이드 - WIGSWAN',
      '数字化增长标杆': '성공 입증 사례 (POC)',
      '我们不展示操作细节，我们展示的是可验证的增长方向。以下门店通过 WIGSWAN 2.0 系统完成了经营结构升级。': '단순한 사례가 아닌, 복제가 가능한 수익 모델을 제시합니다. 이 매장들은 WIGSWAN 2.0을 통해 수익 구조를 근본적으로 혁신했습니다.',
      '核心商圈旗舰型': '도심형 플래그십',
      '上海静安 · 5号样板店': '서울 강남 · 07호 모델 스튜디오',
      '该店通过接入 WIGSWAN 增长系统，将传统服务升级为高价值形象管理项目。核心在于提升门店品牌表达、咨询承接与交付标准，而非依赖单一低价流量。': '성장 시스템 도입으로 기존 서비스를 고부가가치 이미지 관리 서비스로 업그레이드했습니다.',
      '增长速率 (Velocity)': '성장 가속도 (Velocity)',
      '* 基于 WIGSWAN 合作门店经营样本综合评估': '* WIGSWAN 단계적 비즈니스 최적화 모델 기준',
      '社区信任深耕型': '지역 밀착형 로열티 성장',
      '成都 · 高新社区店': '판교 · 테크노 밸리 부티크',
      '典型的通过 客户价值 价值挖掘盘活存량 자산의 사례. 门店利用 持续电子护理档案，将首单假发购买转化为了长期的护理订阅服务。老带新裂变率在 阶段性内达到了惊人的 明显。': '고객 가치 운영을 통해 일회성 거래를 장기 신뢰와 재방문으로 전환한 사례입니다.',
      '复购粘性 (Retention)': '고객 유지율 (Retention)',
      '卓越 S级': '프리미엄 S등급',
      '想知道您的门店能实现多少倍增？': '귀하의 매장은 얼마나 더 성장할 수 있을까요?',
      '点击下方按钮，开启专属您的增长潜力评估。': '아래 버튼을 눌러 귀하만을 위한 단계적 경영 포텐셜 진단을 시작하세요.',
      '立即开启诊断': '지금 진단 시작하기',
      '© 2026 WIGSWAN. 为美业注入数字灵魂.': '© 2026 WIGSWAN. 미용에 디지털 영혼을.',
      '获取 WIGSWAN 美业云链最新增长动态、行业趋势与数字化经营技巧。': '최신 뷰티 테크, 산업 트렌드, 성장 전략을 확인하세요.',
      '增长情报 | 商业洞찰 - WIGSWAN': '인텔리전스 | 비즈니스 인사이트 - WIGSWAN',
      '全球增长情报站': '글로벌 인텔리전스 데스크',
      '我们持续监测全球美业数字化趋势，为您输出具备实전 가치의商业洞찰.': '글로벌 미용 DX 트렌드를 분석하여 매장 경영을 위한 실질적인 인사이트를 제공합니다.',
      '从“理发店”到“形象资产管理中心”：行业转型的奇点已至': '‘헤어샵’에서 ‘이미지 자산 관리 센터’로: 패러다임의 변화',
      '深度解析为什么单一的剪发业务将逐渐丧失竞争力，而长期客户价值运营将成为未来的核心盈利引擎。': '단순 컷 시술 모델의 위기와 장기 고객 가치 운영이 왜 미래 미용 수익의 핵심인지 심층 분석합니다.',
      '数字化内容系统：如何让门店服务能力被更多目标客户看见': '디지털 콘텐츠 시스템: 매장의 서비스 역량을 더 잘 보이게 하는 방법',
      '解析 WIGSWAN 2.0 如何帮助门店建立持续、稳定、可信的线上表达体系。': 'WIGSWAN 2.0이 매장의 안정적이고 신뢰도 높은 온라인 표현 체계를 구축하는 방식을 설명합니다.',
      '订阅深度行业报告 (PDF)': '심층 산업 리포트 구독 (PDF)',
      '© 2026 WIGSWAN. 赋능手艺人，重构美业链.': '© 2026 WIGSWAN. 아티스트 지원 및 뷰티 체인 혁신.',
      '美业云链（WIGSWAN）数字化增长中枢，升级美业服务网络。': 'WIGSWAN: 미용 서비스 네트워크를 재구축하는 지능형 허브.',
      '美业云链 | 增长中枢 - WIGSWAN': '성장 허브 | DX 엔진 - WIGSWAN',
      '升级美业服务网络': '미용 서비스 네트워크 재구축',
      '建立数字化增长中枢': '디지털 물류 및 배정 축 구축',
      '美业云链不是一个加盟品牌，而是一套帮助门店导入高价值项目、标准化服务与数字化运营能力的协作系统。': 'WIGSWAN은 고부가가치 서비스, 서비스 표준, 디지털 운영 역량 도입을 돕는 협업 시스템입니다.',
      'WIGSWAN 增长协同中枢': 'WIGSWAN 서비스 협업 센터',
      '连接产品、服务标准与合作门店': '제품, 서비스 표준, 파트너 매장을 연결',
      '标准化合伙人体系': '파트너 에코시스템',
      '打破传统层级，建立以服务质量为标准的动态 resource 배분 네트워크. 진정한 아티스트가 시스템을 통해 존엄과 수익을 얻게 합니다.': '역량 있는 전문가가 더 안정적인 협업 기회와 합리적인 보상을 얻도록 돕습니다.',
      '零边际成本扩张': '효율적인 비즈니스 확장',
      '门店无需压货，无需重资产. 通过 WIGSWAN 数字化工具，实现 24 小时内的项目极속嫁접과 수익 검증.': '재고나 과도한 투자 부담 없이, 디지털 도구를 통해 24시간 내 고부가가치 서비스를 도입하고 수익을 검증하세요.',
      '数字化赋능 경로': 'DX로 가는 4단계 로드맵',
      '从“流量焦虑”도 “가치 심화”로의 4단계 진화': '마케팅 의존에서 깊은 신뢰 관계 구축으로의 변화',
      '经营诊断': '데이터 프로파일링',
      '基于门店经营现状与客户结构，评估适合导入的增长路径。': '客户价值 모델을 기반으로 잠재적인 VIP 고객을 정밀하게 추출합니다.',
      '内容增长': '콘텐츠 파급력 강화',
      '围绕门店真实服务能力，建立更稳定、更可信的线上表达。': '실제 서비스 역량을 중심으로 안정적이고 신뢰도 높은 온라인 표현을 구축합니다.',
      '服务协同': '인텔리전트 매칭',
      '밀리초 인사이트 매칭으로 가장 적합한 이미지 전문가가 가장 적합한 시간에 매장에 도착하도록 합니다.': '인사이트 매칭을 통해 고객에게 가장 적합한 전문가를 최적의 시간에 연결합니다.',
      '© 2026 WIGSWAN. 全链路数字化增长引擎.': '© 2026 WIGSWAN. 올인원 디지털 성장 시스템.',
      '申请成为增长合伙인': '성장 파트너 신청하기',
      '申请加入 WIGSWAN 全球增长网络，开启门店数字化评估。': '글로벌 네트워크에 합류하여 매장 경영 진단을 시작하세요.',
      '合伙人审计 | 开启盈利诊断 - WIGSWAN': '파트너 감사 | 경영 진단 - WIGSWAN',
      '申请诊断': '진단 신청',
      '战略合伙人资格审计': '전략 파트너 자격 심사',
      'WIGSWAN 仅筛选具有强烈增长意愿且具备高标准交付能力的门店，开启增长潜力评估。': '성장에 대한 강력한 의지와 기술력을 갖춘 매장을 선별하여 단계적 수익 모델 실험을 진행합니다.',
      '01. 门店经营概况': '01. 매장 경영 프로필',
      '机构全称 / 品牌': '매장명 / 브랜드명',
      '例如：型格沙龙深圳旗舰店': '예: WIGSWAN 청담 플래그십',
      '目前核心业务占比': '현재 주요 서비스 비중',
      '传统洗剪吹为主': '커트 및 일반 시술 중심',
      '烫染护理为主': '펌, 염색 및 케어 중심',
      '已有假发/接发项目': '가발 및 붙임머리 도입 완료',
      '主要客流获取渠道': '주요 고객 유입 채널',
      '自然到店 / 地推': '오프라인 방문 / 홍보',
      '本地生活平台': '지역 서비스 플랫폼 / 쿠폰',
      '内容平台 / 社交平台': 'SNS / 숏폼 콘텐츠 (틱톡 등)',
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
      '暂无（需顾问协助规划）': '미보유 (전문가 가이드 필요)',
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
      '增长潜力评估中...': '성장 잠재력 평가 중...',
      'B级：稳健增长型': 'B등급: 안정 성장형',
      'A级：高效增长型': 'A등급: 고효율 성장형',
      'S级：旗舰增长型': 'S등급: 플래그십 성장형',
      '高潜力合作样本': '고잠재력 파트너 프로필',
      '具备清晰增长空间': '명확한 성장 여지 확인',
      '适合基础能力梳理': '기초 역량 점검에 적합',
      '详细评估结果将由增长顾问结合门店实际情况解读。': '상세 평가 결과는 성장 컨설턴트가 매장 상황에 맞춰 해석합니다.'
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

  function setSlotVisibility(el, visible) {
    if (!el) return;
    el.hidden = !visible;
  }

  function applyMarketContent() {
    const content = MARKET_CONTENT[lang] || {};
    const heroNote = document.querySelector('[data-market-slot="hero-note"]');
    const heroEyebrow = document.querySelector('.hero-eyebrow');
    const banner = document.querySelector('[data-market-slot="market-banner"]');
    const growthFeed = document.querySelector('[data-market-slot="growth-feed"]');
    const growthTitle = document.querySelector('[data-market-slot="growth-title"]');
    const growthText = document.querySelector('[data-market-slot="growth-text"]');

    if (heroEyebrow && content.heroEyebrow) {
      heroEyebrow.textContent = content.heroEyebrow;
    }

    if (heroNote) {
      heroNote.textContent = content.heroNote || '';
      setSlotVisibility(heroNote, Boolean(content.heroNote));
    }

    if (banner) {
      banner.innerHTML = '';
      if (content.banner && content.banner.length) {
        content.banner.forEach((item) => {
          const card = document.createElement('div');
          card.className = 'market-banner-card';
          const title = document.createElement('h4');
          title.textContent = item.title;
          const body = document.createElement('p');
          body.textContent = item.body;
          card.append(title, body);
          banner.appendChild(card);
        });
      }
      setSlotVisibility(banner, Boolean(content.banner && content.banner.length));
    }

    if (growthFeed && growthTitle && growthText) {
      if (content.growthItems && content.growthItems.length) {
        growthTitle.innerHTML = `<strong>${content.growthTitle || ''}</strong><small>${content.growthSubtitle || ''}</small>`;
        growthText.textContent = `${content.growthItems.join('     |     ')}     |     ${content.growthItems.join('     |     ')}`;
      } else {
        growthTitle.textContent = '';
        growthText.textContent = '';
      }
      setSlotVisibility(growthFeed, Boolean(content.growthItems && content.growthItems.length));
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
    applyMarketContent();
    updateSwitcher();
  }

  function setLang(nextLang) {
    if (!LANGS.some((item) => item.code === nextLang)) return;
    localStorage.setItem('wigswan-lang', nextLang);
    const url = new URL(window.location.href);
    url.searchParams.set('lang', nextLang);
    window.location.href = url.toString();
  }

  function ensureMobileNav() {
    const header = document.querySelector('.site-header .header-inner');
    const nav = document.querySelector('.site-header .main-nav');
    if (!header || !nav) return;

    if (!nav.id) {
      nav.id = 'mainNav';
    }

    let tools = header.querySelector('.header-tools');
    if (!tools) {
      tools = document.createElement('div');
      tools.className = 'header-tools';
      header.insertBefore(tools, nav);
    }

    if (!tools.querySelector('.nav-toggle')) {
      const toggle = document.createElement('button');
      toggle.type = 'button';
      toggle.className = 'nav-toggle';
      toggle.setAttribute('aria-controls', 'mainNav');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Toggle navigation');
      toggle.innerHTML = '<span></span><span></span><span></span>';
      toggle.addEventListener('click', () => {
        const isOpen = document.body.classList.toggle('nav-open');
        toggle.setAttribute('aria-expanded', String(isOpen));
      });
      tools.appendChild(toggle);
    }

    nav.addEventListener('click', (event) => {
      if (!event.target.closest('a')) return;
      document.body.classList.remove('nav-open');
      const toggle = tools.querySelector('.nav-toggle');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    });
  }

  function ensureSwitcher() {
    const header = document.querySelector('.site-header .header-inner');
    const nav = document.querySelector('.site-header .main-nav');
    if ((!header && !nav) || document.querySelector('.language-switcher')) return;

    let tools = header && header.querySelector('.header-tools');
    if (!tools && header) {
      tools = document.createElement('div');
      tools.className = 'header-tools';
      header.insertBefore(tools, nav);
    }

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
    if (tools) {
      tools.insertBefore(switcher, tools.firstChild);
    } else {
      nav.appendChild(switcher);
    }
  }

  function updateSwitcher() {
    document.querySelectorAll('.language-switcher select').forEach((select) => {
      select.value = lang;
    });
  }

  window.WIGSWAN_I18N = {
    t: lookup,
    lang: () => lang,
    setLang
  };

  document.addEventListener('DOMContentLoaded', () => {
    ensureMobileNav();
    ensureSwitcher();
    translatePage();
  });
})();
