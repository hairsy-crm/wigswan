(() => {
  const LANGS = {
    zh: 'zh-CN',
    en: 'en',
    ja: 'ja',
    ko: 'ko'
  };

  const translations = {
    zh: {
      'Global Wig Sourcing from China | WIGSWAN': '中国假发全球采购 | WIGSWAN',
      'WIGSWAN helps international wig brands, wholesalers and professional studios source wigs and hair systems from China with clearer specifications, sampling and quality coordination.': 'WIGSWAN 为国际假发品牌、批发商和专业工作室提供中国假发与发块采购协同，包括需求梳理、打样与质量协调。',
      'WIGSWAN home': 'WIGSWAN 首页', 'GLOBAL SOURCING': '国际采购', 'Language': '语言', 'Open navigation': '打开导航', 'Close navigation': '关闭导航',
      'Who we serve': '服务对象', 'What we handle': '采购服务', 'How it works': '合作流程', 'Main site': '返回主站', 'Request sourcing': '提交采购需求',
      'Managed sourcing from China': '中国供应链协同采购', 'Source wigs and professional hair systems': '更高效地采购假发与专业发块', 'with less friction.': '减少沟通与交付摩擦。',
      'WIGSWAN turns your buying requirement into a clear sourcing brief, matches the right supply path, and helps coordinate samples and quality before repeat orders.': 'WIGSWAN 将采购需求整理成清晰规格，匹配合适的中国供应路径，并协助打样、质量确认与后续复购。',
      'Send a sourcing request': '提交采购需求', 'See the 4-step process': '查看四步流程', 'For international buyers · No buyer account required': '面向国际专业买家 · 无需注册账户',
      'China supply': '中国供应', 'Clearer requirements.': '需求更清晰。', 'Better matched production.': '生产匹配更准确。', 'Sourcing services': '采购服务',
      'Clear specifications': '规格梳理', 'Matched supply partners': '供应匹配', 'Sample & QC coordination': '打样与质检协调', 'Easier repeat orders': '更顺畅的复购',
      'One entrance, different buying paths.': '统一入口，匹配不同采购路径。',
      'We accept requests from all four buyer groups. The first service path is optimized for independent brands and hair replacement studios.': '四类专业买家均可提交需求；首阶段重点服务独立品牌与补发工作室。',
      'Active service': '重点服务', 'By inquiry': '按需求评估', 'Private-label brands': '独立假发品牌', 'Hair replacement studios': '补发工作室', 'Wholesalers': '批发商', 'Salon chains': '连锁沙龙',
      'Small-batch product development, private label, packaging and repeat-order consistency.': '支持小批量开发、品牌定制、包装与复购一致性。',
      'Professional hair systems, base and density specifications, samples and recurring supply.': '支持专业发块、底网与密度规格、样品及持续供货。',
      'Range planning, volume requirements and a sourcing path built around your target market.': '围绕目标市场进行品类规划、数量评估与采购路径设计。',
      'Selected products, service-ready specifications and coordinated supply for multiple locations.': '提供适合门店服务的选品、规格标准与多门店供货协同。',
      'Start this request →': '开始填写 →', 'Send an inquiry →': '提交询盘 →',
      'A practical sourcing layer—not another supplier directory.': '不是供应商名录，而是一层可执行的采购协同。',
      'Requirement clarification': '需求规格化', 'Supplier matching': '供应匹配', 'Samples and revisions': '样品与修改', 'Quality coordination': '质量协调',
      'Product type, hair material, construction, size, color, packaging and target price are translated into a usable brief.': '将产品类型、发质、结构、尺寸、颜色、包装和目标价格整理成可执行需求。',
      'We identify a suitable supply path according to the requirement instead of presenting an undifferentiated factory list.': '根据实际需求匹配供应路径，而不是提供缺乏筛选的工厂名单。',
      'Sample expectations and feedback are organized so revisions stay clear across buyer and production teams.': '梳理样品标准与反馈，让买方和生产团队之间的修改要求保持清晰。',
      'Quality checkpoints and approved specifications create a cleaner foundation for repeat purchases.': '以质量检查点和确认规格，为稳定复购建立基础。',
      'Start with one real requirement.': '从一条真实采购需求开始。', 'Send request': '提交需求', 'Clarify specs': '梳理规格', 'Review path': '确认方案', 'Start samples': '启动打样',
      'Tell us who you are buying for and what you need.': '说明您的买家类型和采购需求。', 'We organize the missing details into a workable brief.': '我们补充并整理成可执行的采购规格。',
      'We reply with next questions and a suitable sourcing approach.': '我们回复关键问题并提供合适的采购路径。', 'If there is a fit, we move into sampling and quality alignment.': '确认匹配后进入打样与质量对齐。',
      'Sourcing request': '采购询盘', 'Tell us what you need to buy.': '告诉我们您需要采购什么。',
      'Complete the essentials. We will turn them into a clear sourcing brief—no account or dashboard required.': '填写核心信息，我们会生成清晰的采购简报；无需注册或进入后台。',
      'Lightweight by design': '轻量化设计', 'After your review, information is sent through FormSubmit to WIGSWAN. The provider may retain submissions for up to 30 days.': '经您确认后，信息将通过 FormSubmit 转发给 WIGSWAN；该服务商可能最长保留提交记录 30 天。',
      'Buyer type': '买家类型', 'Select one': '请选择', 'Private-label wig brand': '独立假发品牌', 'Hair replacement studio': '补发工作室', 'Wholesaler / distributor': '批发商／经销商', 'Salon chain': '连锁沙龙', 'Other professional buyer': '其他专业买家',
      'Company or brand': '公司或品牌', 'Your company name': '公司或品牌名称', 'Country / market': '国家／市场', 'e.g. United States': '例如：美国', 'Your name': '联系人姓名', 'Contact person': '联系人',
      'Product category': '产品类别', 'Human hair wigs': '真人发假发', 'Hair systems / toppers': '发块／头顶补发片', 'Synthetic wigs': '化纤假发', 'Extensions / wefts': '接发／发帘', 'Multiple categories': '多个品类', 'Not sure yet': '暂未确定',
      'Estimated first order': '预计首单数量', 'Select a range': '请选择范围', 'Samples only': '仅打样', 'Under 50 units': '50 件以内', '50–200 units': '50–200 件', '200–1,000 units': '200–1,000 件', 'Over 1,000 units': '1,000 件以上', 'Not decided': '尚未确定',
      'Reference link': '参考链接', '(optional)': '（选填）', 'What do you need?': '具体采购需求', 'Product, hair type, length, color, base or cap, target price, packaging, timeline…': '产品、发质、长度、颜色、底网或帽型、目标价格、包装、时间要求……',
      'Prepare my sourcing request': '生成采购简报', 'Nothing is sent until you review the sourcing brief and select “Send to WIGSWAN”.': '在您确认采购简报并点击“发送给 WIGSWAN”前，不会提交任何信息。',
      'Your sourcing brief is ready': '采购简报已生成', 'Review it, then send it to WIGSWAN.': '请确认内容后发送给 WIGSWAN。', 'Send to WIGSWAN': '发送给 WIGSWAN', 'Copy brief': '复制简报', 'Edit request': '修改需求',
      '© 2026 WIGSWAN. All rights reserved.': '© 2026 WIGSWAN. 保留所有权利。', 'All rights reserved.': '保留所有权利。', 'China supply · Global professional buyers': '中国供应 · 全球专业买家',
      'WIGSWAN GLOBAL SOURCING REQUEST': 'WIGSWAN 国际采购询盘', 'Company / brand': '公司／品牌', 'Contact': '联系人', 'Email': '邮箱', 'Reference link:': '参考链接：', 'Requirement:': '采购需求：', 'Not provided': '未提供',
      'Please reply with the next questions and a suitable sourcing path.': '请回复后续需要确认的问题及合适的采购路径。', 'WIGSWAN sourcing request': 'WIGSWAN 国际采购询盘',
      'Sending…': '发送中……', 'Sending your request…': '正在发送采购需求……', 'Request sent': '已发送', 'Thank you. Your sourcing request has been sent to WIGSWAN.': '感谢提交，您的采购需求已发送给 WIGSWAN。',
      'Try sending again': '重新发送', 'We could not send the request. Please copy the brief and email it to 48076124@qq.com.': '暂时无法发送，请复制简报并邮件发送至 48076124@qq.com。',
      'Brief copied. You can paste it into your preferred email or messaging app.': '采购简报已复制，可粘贴到您常用的邮件或通讯应用。', 'The brief is selected. Press Ctrl+C or Command+C to copy it.': '采购简报已选中，请按 Ctrl+C 或 Command+C 复制。'
    },
    ja: {
      'Global Wig Sourcing from China | WIGSWAN': '中国発ウィッグのグローバル調達 | WIGSWAN',
      'WIGSWAN helps international wig brands, wholesalers and professional studios source wigs and hair systems from China with clearer specifications, sampling and quality coordination.': 'WIGSWANは、海外のウィッグブランド、卸売業者、専門スタジオ向けに、中国でのウィッグ・ヘアシステム調達、仕様整理、サンプル、品質調整を支援します。',
      'WIGSWAN home': 'WIGSWAN ホーム', 'GLOBAL SOURCING': 'グローバル調達', 'Language': '言語', 'Open navigation': 'メニューを開く', 'Close navigation': 'メニューを閉じる',
      'Who we serve': '対象バイヤー', 'What we handle': '調達支援', 'How it works': 'ご利用の流れ', 'Main site': 'メインサイト', 'Request sourcing': '調達を相談',
      'Managed sourcing from China': '中国サプライチェーン調達支援', 'Source wigs and professional hair systems': 'ウィッグと業務用ヘアシステムを', 'with less friction.': 'よりスムーズに調達。',
      'WIGSWAN turns your buying requirement into a clear sourcing brief, matches the right supply path, and helps coordinate samples and quality before repeat orders.': 'WIGSWANは調達要件を明確な仕様書にまとめ、適切な供給ルートを選定し、サンプル・品質確認・継続発注まで支援します。',
      'Send a sourcing request': '調達依頼を送る', 'See the 4-step process': '4ステップを見る', 'For international buyers · No buyer account required': '海外のプロバイヤー向け · アカウント登録不要',
      'China supply': '中国供給', 'Clearer requirements.': '要件を明確に。', 'Better matched production.': '生産を最適にマッチング。', 'Sourcing services': '調達サービス',
      'Clear specifications': '仕様整理', 'Matched supply partners': '供給先選定', 'Sample & QC coordination': 'サンプル・検品調整', 'Easier repeat orders': '継続発注を円滑に',
      'One entrance, different buying paths.': '一つの窓口から、最適な調達ルートへ。', 'We accept requests from all four buyer groups. The first service path is optimized for independent brands and hair replacement studios.': '4つのバイヤー層すべてに対応し、初期段階では独立系ブランドとヘアリプレイスメントスタジオを重点支援します。',
      'Active service': '重点対応', 'By inquiry': '個別相談', 'Private-label brands': 'プライベートブランド', 'Hair replacement studios': 'ヘアリプレイスメントスタジオ', 'Wholesalers': '卸売業者', 'Salon chains': 'サロンチェーン',
      'Small-batch product development, private label, packaging and repeat-order consistency.': '小ロット開発、プライベートラベル、包装、継続発注時の品質安定を支援。', 'Professional hair systems, base and density specifications, samples and recurring supply.': '業務用ヘアシステム、ベース・密度仕様、サンプル、継続供給に対応。',
      'Range planning, volume requirements and a sourcing path built around your target market.': '対象市場に合わせた商品構成、数量要件、調達ルートを設計。', 'Selected products, service-ready specifications and coordinated supply for multiple locations.': '店舗サービスに適した商品・仕様と複数店舗への供給を調整。',
      'Start this request →': '依頼を始める →', 'Send an inquiry →': '相談を送る →', 'A practical sourcing layer—not another supplier directory.': '単なる工場リストではなく、実務に使える調達支援。',
      'Requirement clarification': '要件整理', 'Supplier matching': '供給先選定', 'Samples and revisions': 'サンプルと修正', 'Quality coordination': '品質調整',
      'Product type, hair material, construction, size, color, packaging and target price are translated into a usable brief.': '商品タイプ、毛材、構造、サイズ、色、包装、目標価格を実行可能な仕様書に整理します。', 'We identify a suitable supply path according to the requirement instead of presenting an undifferentiated factory list.': '一律の工場一覧ではなく、要件に合う供給ルートを選定します。',
      'Sample expectations and feedback are organized so revisions stay clear across buyer and production teams.': 'サンプル基準とフィードバックを整理し、バイヤーと生産側の修正内容を明確にします。', 'Quality checkpoints and approved specifications create a cleaner foundation for repeat purchases.': '品質チェック項目と承認仕様を整え、安定した継続発注につなげます。',
      'Start with one real requirement.': 'まず一つの具体的な要件から。', 'Send request': '依頼送信', 'Clarify specs': '仕様整理', 'Review path': '方針確認', 'Start samples': 'サンプル開始',
      'Tell us who you are buying for and what you need.': 'バイヤー種別と必要な商品をお知らせください。', 'We organize the missing details into a workable brief.': '不足情報を補い、実行可能な仕様にまとめます。', 'We reply with next questions and a suitable sourcing approach.': '確認事項と適切な調達方針をご案内します。', 'If there is a fit, we move into sampling and quality alignment.': '条件が合えば、サンプルと品質基準の調整へ進みます。',
      'Sourcing request': '調達依頼', 'Tell us what you need to buy.': '必要な商品をお知らせください。', 'Complete the essentials. We will turn them into a clear sourcing brief—no account or dashboard required.': '必要事項を入力すると、明確な調達仕様書を作成します。アカウント登録は不要です。',
      'Lightweight by design': 'シンプルな仕組み', 'After your review, information is sent through FormSubmit to WIGSWAN. The provider may retain submissions for up to 30 days.': '確認後、情報はFormSubmit経由でWIGSWANへ送信されます。同サービスが送信記録を最長30日保持する場合があります。',
      'Buyer type': 'バイヤー種別', 'Select one': '選択してください', 'Private-label wig brand': 'プライベートブランド', 'Hair replacement studio': 'ヘアリプレイスメントスタジオ', 'Wholesaler / distributor': '卸売／販売代理店', 'Salon chain': 'サロンチェーン', 'Other professional buyer': 'その他のプロバイヤー',
      'Company or brand': '会社名／ブランド名', 'Your company name': '会社名を入力', 'Country / market': '国／市場', 'e.g. United States': '例：日本', 'Your name': 'お名前', 'Contact person': 'ご担当者名',
      'Product category': '商品カテゴリー', 'Human hair wigs': '人毛ウィッグ', 'Hair systems / toppers': 'ヘアシステム／トップピース', 'Synthetic wigs': '人工毛ウィッグ', 'Extensions / wefts': 'エクステ／ウェフト', 'Multiple categories': '複数カテゴリー', 'Not sure yet': '未定',
      'Estimated first order': '初回予定数量', 'Select a range': '数量を選択', 'Samples only': 'サンプルのみ', 'Under 50 units': '50点未満', '50–200 units': '50～200点', '200–1,000 units': '200～1,000点', 'Over 1,000 units': '1,000点以上', 'Not decided': '未定',
      'Reference link': '参考リンク', '(optional)': '（任意）', 'What do you need?': 'ご希望の内容', 'Product, hair type, length, color, base or cap, target price, packaging, timeline…': '商品、毛材、長さ、色、ベース／キャップ、目標価格、包装、希望時期など',
      'Prepare my sourcing request': '調達仕様書を作成', 'Nothing is sent until you review the sourcing brief and select “Send to WIGSWAN”.': '内容を確認し「WIGSWANへ送信」を選ぶまで情報は送信されません。',
      'Your sourcing brief is ready': '調達仕様書ができました', 'Review it, then send it to WIGSWAN.': '内容を確認してWIGSWANへ送信してください。', 'Send to WIGSWAN': 'WIGSWANへ送信', 'Copy brief': '仕様書をコピー', 'Edit request': '内容を修正',
      '© 2026 WIGSWAN. All rights reserved.': '© 2026 WIGSWAN. 無断転載を禁じます。', 'All rights reserved.': '無断転載を禁じます。', 'China supply · Global professional buyers': '中国供給 · 世界のプロバイヤー',
      'WIGSWAN GLOBAL SOURCING REQUEST': 'WIGSWAN グローバル調達依頼', 'Company / brand': '会社／ブランド', 'Contact': '担当者', 'Email': 'メール', 'Reference link:': '参考リンク：', 'Requirement:': '調達要件：', 'Not provided': '未記入', 'Please reply with the next questions and a suitable sourcing path.': '追加確認事項と適切な調達ルートをご案内ください。', 'WIGSWAN sourcing request': 'WIGSWAN グローバル調達依頼',
      'Sending…': '送信中…', 'Sending your request…': '調達依頼を送信しています…', 'Request sent': '送信済み', 'Thank you. Your sourcing request has been sent to WIGSWAN.': 'ありがとうございます。調達依頼をWIGSWANへ送信しました。', 'Try sending again': '再送する',
      'We could not send the request. Please copy the brief and email it to 48076124@qq.com.': '送信できませんでした。仕様書をコピーして48076124@qq.comへお送りください。', 'Brief copied. You can paste it into your preferred email or messaging app.': '仕様書をコピーしました。メールやメッセージアプリに貼り付けられます。', 'The brief is selected. Press Ctrl+C or Command+C to copy it.': '仕様書を選択しました。Ctrl+CまたはCommand+Cでコピーしてください。'
    },
    ko: {
      'Global Wig Sourcing from China | WIGSWAN': '중국 가발 글로벌 소싱 | WIGSWAN',
      'WIGSWAN helps international wig brands, wholesalers and professional studios source wigs and hair systems from China with clearer specifications, sampling and quality coordination.': 'WIGSWAN은 해외 가발 브랜드, 도매업체 및 전문 스튜디오를 위해 중국산 가발·헤어 시스템의 사양 정리, 샘플링 및 품질 조율을 지원합니다.',
      'WIGSWAN home': 'WIGSWAN 홈', 'GLOBAL SOURCING': '글로벌 소싱', 'Language': '언어', 'Open navigation': '메뉴 열기', 'Close navigation': '메뉴 닫기',
      'Who we serve': '대상 바이어', 'What we handle': '소싱 서비스', 'How it works': '진행 절차', 'Main site': '메인 사이트', 'Request sourcing': '소싱 문의',
      'Managed sourcing from China': '중국 공급망 소싱 지원', 'Source wigs and professional hair systems': '가발과 전문 헤어 시스템을', 'with less friction.': '더 수월하게 소싱하세요.',
      'WIGSWAN turns your buying requirement into a clear sourcing brief, matches the right supply path, and helps coordinate samples and quality before repeat orders.': 'WIGSWAN은 구매 요구를 명확한 소싱 사양서로 정리하고 적합한 공급 경로를 매칭하며 샘플, 품질 확인, 반복 주문을 지원합니다.',
      'Send a sourcing request': '소싱 요청 보내기', 'See the 4-step process': '4단계 절차 보기', 'For international buyers · No buyer account required': '글로벌 전문 바이어 대상 · 계정 등록 불필요',
      'China supply': '중국 공급', 'Clearer requirements.': '요구사항은 명확하게.', 'Better matched production.': '생산은 더 정확하게.', 'Sourcing services': '소싱 서비스',
      'Clear specifications': '사양 정리', 'Matched supply partners': '공급 파트너 매칭', 'Sample & QC coordination': '샘플·검품 조율', 'Easier repeat orders': '원활한 반복 주문',
      'One entrance, different buying paths.': '하나의 창구, 바이어별 맞춤 소싱 경로.', 'We accept requests from all four buyer groups. The first service path is optimized for independent brands and hair replacement studios.': '네 가지 바이어 유형 모두 문의할 수 있으며, 초기에는 독립 브랜드와 헤어 리플레이스먼트 스튜디오를 우선 지원합니다.',
      'Active service': '우선 지원', 'By inquiry': '문의 후 검토', 'Private-label brands': '독립 가발 브랜드', 'Hair replacement studios': '헤어 리플레이스먼트 스튜디오', 'Wholesalers': '도매업체', 'Salon chains': '살롱 체인',
      'Small-batch product development, private label, packaging and repeat-order consistency.': '소량 제품 개발, 자체 브랜드, 패키징 및 반복 주문의 품질 일관성을 지원합니다.', 'Professional hair systems, base and density specifications, samples and recurring supply.': '전문 헤어 시스템, 베이스·밀도 사양, 샘플 및 정기 공급을 지원합니다.',
      'Range planning, volume requirements and a sourcing path built around your target market.': '목표 시장에 맞춰 상품 구성, 수량 요건 및 소싱 경로를 설계합니다.', 'Selected products, service-ready specifications and coordinated supply for multiple locations.': '매장 서비스에 적합한 상품과 사양, 다점포 공급을 조율합니다.',
      'Start this request →': '요청 시작 →', 'Send an inquiry →': '문의 보내기 →', 'A practical sourcing layer—not another supplier directory.': '단순한 공급업체 목록이 아닌 실행형 소싱 지원.',
      'Requirement clarification': '요구사항 정리', 'Supplier matching': '공급업체 매칭', 'Samples and revisions': '샘플 및 수정', 'Quality coordination': '품질 조율',
      'Product type, hair material, construction, size, color, packaging and target price are translated into a usable brief.': '제품 유형, 모발 소재, 구조, 크기, 색상, 포장 및 목표 가격을 실행 가능한 사양서로 정리합니다.', 'We identify a suitable supply path according to the requirement instead of presenting an undifferentiated factory list.': '일괄적인 공장 목록 대신 실제 요구에 적합한 공급 경로를 찾습니다.',
      'Sample expectations and feedback are organized so revisions stay clear across buyer and production teams.': '샘플 기준과 피드백을 정리하여 바이어와 생산팀 간 수정 요청을 명확하게 유지합니다.', 'Quality checkpoints and approved specifications create a cleaner foundation for repeat purchases.': '품질 체크포인트와 승인 사양으로 안정적인 반복 구매 기반을 만듭니다.',
      'Start with one real requirement.': '하나의 실제 구매 요구부터 시작하세요.', 'Send request': '요청 제출', 'Clarify specs': '사양 정리', 'Review path': '경로 검토', 'Start samples': '샘플 시작',
      'Tell us who you are buying for and what you need.': '바이어 유형과 필요한 제품을 알려주세요.', 'We organize the missing details into a workable brief.': '누락 정보를 보완해 실행 가능한 사양서로 정리합니다.', 'We reply with next questions and a suitable sourcing approach.': '추가 질문과 적합한 소싱 방식을 안내합니다.', 'If there is a fit, we move into sampling and quality alignment.': '조건이 맞으면 샘플링과 품질 기준 조정으로 진행합니다.',
      'Sourcing request': '소싱 요청', 'Tell us what you need to buy.': '구매하려는 제품을 알려주세요.', 'Complete the essentials. We will turn them into a clear sourcing brief—no account or dashboard required.': '핵심 정보를 입력하면 명확한 소싱 사양서를 만듭니다. 계정이나 대시보드는 필요하지 않습니다.',
      'Lightweight by design': '간결한 설계', 'After your review, information is sent through FormSubmit to WIGSWAN. The provider may retain submissions for up to 30 days.': '검토 후 정보는 FormSubmit을 통해 WIGSWAN으로 전송되며, 서비스 제공자가 제출 기록을 최대 30일 보관할 수 있습니다.',
      'Buyer type': '바이어 유형', 'Select one': '선택하세요', 'Private-label wig brand': '독립 가발 브랜드', 'Hair replacement studio': '헤어 리플레이스먼트 스튜디오', 'Wholesaler / distributor': '도매업체／유통업체', 'Salon chain': '살롱 체인', 'Other professional buyer': '기타 전문 바이어',
      'Company or brand': '회사 또는 브랜드', 'Your company name': '회사명을 입력하세요', 'Country / market': '국가／시장', 'e.g. United States': '예: 대한민국', 'Your name': '담당자 이름', 'Contact person': '담당자',
      'Product category': '제품 카테고리', 'Human hair wigs': '인모 가발', 'Hair systems / toppers': '헤어 시스템／토퍼', 'Synthetic wigs': '합성모 가발', 'Extensions / wefts': '익스텐션／위프트', 'Multiple categories': '여러 카테고리', 'Not sure yet': '미정',
      'Estimated first order': '예상 첫 주문 수량', 'Select a range': '수량 범위 선택', 'Samples only': '샘플만', 'Under 50 units': '50개 미만', '50–200 units': '50–200개', '200–1,000 units': '200–1,000개', 'Over 1,000 units': '1,000개 이상', 'Not decided': '미정',
      'Reference link': '참고 링크', '(optional)': '（선택）', 'What do you need?': '구매 요구사항', 'Product, hair type, length, color, base or cap, target price, packaging, timeline…': '제품, 모발 유형, 길이, 색상, 베이스 또는 캡, 목표 가격, 포장, 일정 등',
      'Prepare my sourcing request': '소싱 사양서 만들기', 'Nothing is sent until you review the sourcing brief and select “Send to WIGSWAN”.': '사양서를 검토하고 “WIGSWAN으로 보내기”를 선택하기 전에는 정보가 전송되지 않습니다.',
      'Your sourcing brief is ready': '소싱 사양서가 준비되었습니다', 'Review it, then send it to WIGSWAN.': '내용을 확인한 후 WIGSWAN으로 보내주세요.', 'Send to WIGSWAN': 'WIGSWAN으로 보내기', 'Copy brief': '사양서 복사', 'Edit request': '요청 수정',
      '© 2026 WIGSWAN. All rights reserved.': '© 2026 WIGSWAN. 모든 권리 보유.', 'All rights reserved.': '모든 권리 보유.', 'China supply · Global professional buyers': '중국 공급 · 글로벌 전문 바이어',
      'WIGSWAN GLOBAL SOURCING REQUEST': 'WIGSWAN 글로벌 소싱 요청', 'Company / brand': '회사／브랜드', 'Contact': '담당자', 'Email': '이메일', 'Reference link:': '참고 링크:', 'Requirement:': '구매 요구:', 'Not provided': '미제공', 'Please reply with the next questions and a suitable sourcing path.': '추가 확인 사항과 적합한 소싱 경로를 회신해 주세요.', 'WIGSWAN sourcing request': 'WIGSWAN 글로벌 소싱 요청',
      'Sending…': '전송 중…', 'Sending your request…': '소싱 요청을 전송하고 있습니다…', 'Request sent': '전송 완료', 'Thank you. Your sourcing request has been sent to WIGSWAN.': '감사합니다. 소싱 요청이 WIGSWAN으로 전송되었습니다.', 'Try sending again': '다시 보내기',
      'We could not send the request. Please copy the brief and email it to 48076124@qq.com.': '요청을 보내지 못했습니다. 사양서를 복사해 48076124@qq.com으로 보내주세요.', 'Brief copied. You can paste it into your preferred email or messaging app.': '사양서를 복사했습니다. 이메일이나 메신저 앱에 붙여넣을 수 있습니다.', 'The brief is selected. Press Ctrl+C or Command+C to copy it.': '사양서가 선택되었습니다. Ctrl+C 또는 Command+C로 복사하세요.'
    }
  };

  const normalize = (value) => String(value || '').replace(/\s+/g, ' ').trim();
  const queryLang = new URLSearchParams(window.location.search).get('lang');
  const storedLang = localStorage.getItem('wigswan-lang');
  const browserLang = (navigator.language || '').slice(0, 2);
  let lang = LANGS[queryLang] ? queryLang : LANGS[storedLang] ? storedLang : LANGS[browserLang] ? browserLang : 'en';
  const originalText = new WeakMap();
  const originalAttributes = new WeakMap();

  const t = (key, target = lang) => target === 'en' ? key : (translations[target]?.[key] || key);

  const translateTextNodes = () => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (node.parentElement?.closest('script, style, pre')) continue;
      if (!originalText.has(node)) originalText.set(node, node.nodeValue);
      const original = originalText.get(node);
      const key = normalize(original);
      if (!key) continue;
      const leading = original.match(/^\s*/)?.[0] || '';
      const trailing = original.match(/\s*$/)?.[0] || '';
      node.nodeValue = `${leading}${t(key)}${trailing}`;
    }
  };

  const translateAttributes = () => {
    const attributes = ['placeholder', 'aria-label', 'title', 'content'];
    document.querySelectorAll('*').forEach((element) => {
      if (!originalAttributes.has(element)) originalAttributes.set(element, {});
      const originals = originalAttributes.get(element);
      attributes.forEach((attribute) => {
        if (!element.hasAttribute(attribute)) return;
        if (!(attribute in originals)) originals[attribute] = element.getAttribute(attribute);
        element.setAttribute(attribute, t(normalize(originals[attribute])));
      });
    });
  };

  const applyLanguage = (nextLang, notify = true) => {
    lang = LANGS[nextLang] ? nextLang : 'en';
    document.documentElement.lang = LANGS[lang];
    document.title = t('Global Wig Sourcing from China | WIGSWAN');
    translateTextNodes();
    translateAttributes();
    document.querySelectorAll('a[href^="index.html"]').forEach((link) => {
      link.href = `index.html?lang=${lang}`;
    });
    const selector = document.getElementById('sourcingLanguage');
    if (selector) selector.value = lang;
    if (notify) window.dispatchEvent(new CustomEvent('sourcing:languagechange', { detail: { lang } }));
  };

  document.addEventListener('DOMContentLoaded', () => {
    const selector = document.getElementById('sourcingLanguage');
    selector?.addEventListener('change', () => {
      localStorage.setItem('wigswan-lang', selector.value);
      const url = new URL(window.location.href);
      url.searchParams.set('lang', selector.value);
      history.replaceState({}, '', url);
      applyLanguage(selector.value);
    });
    applyLanguage(lang, false);
  });

  window.WIGSWANSourcingI18n = {
    getLang: () => lang,
    t
  };
})();
