import React from "react";
import { textFunc, bFunc } from "./TextChange";
let overview02 = `로제 카이와 - 사회학자, 문학평론가\n(1913년 3월 3일 ~ 1978년 12월 21일)`;
let overview03 =
  "프랑스의 사회학자이자 평론가인 ‘로제카이와(Roger Caillois)’는 1958년 그의 저서 '인간과 놀이'에서 “게임은 역할과 경쟁 그리고 운, 이 3가지 재미요소를 통해 궁극적인 몰입 단계에 이른다.”라고 정의하고 있습니다.\n\n현 시대의 디지털 게임 또한 그가 정의한 3가지 재미요소로 구성되어 있으며, 특히 운은 게임 전체에 영향을 주기 때문에 핵심 요소로 작용하고 있습니다.\n\n하지만 운 즉, 확률은 중앙화 되어 있는 구조로 인해 악의적인 조작 여부와 관계없이 여전히 불신의 영역으로 남아 있으며 현재까지도 많은 분쟁이 발생하고 있습니다.\n\n이제 7Chain을 통해 이러한 분쟁은 사라질 것 입니다.";
let analysis04 = `인터렉티브 게이밍 시장 또한 온라인과 오프라인을 합쳐 2022년 5,190억 달러로 성장이 예측되고 있으며, 온라인 시장의 성장세에 주목할 필요가 있습니다. 이는 디지털 게임에 익숙한 미래의 잠재 고객들이 오프라인 보다 온라인 환경을 선호하기 때문이며, 곧 \n7Chain 플랫폼 수익화에 있어 수직적 성장\n을 기대할 수 있기 때문입니다.`;
let tech02 = "세계최초의 탈중앙화 \nRNG 기술";
let tech03 =
  "난수생성을 비롯한 모든 과정이 \nEOS 기반 Smart contract로 구현되어 \n투명한 게임 환경을 제공합니다.";
let tech04 = "EOS 기반 \n스마트 컨트랙트로 구현된 Dapp";
let tech05 =
  "난수생성을 비롯한 모든 과정이 \nEOS 기반 Smart contract로 구현되어 \n투명한 게임 환경을 제공합니다.";
let tech06 = "사용자 맞춤형 \nBlockchain Scanner";
let tech07 =
  "사용자 편의에 맞춘 웹 뷰어를 제공하여 \n블록체인에 기록된 대량의 데이터를 \n보다 쉽게 확인 할 수 있습니다.";
let economic03 =
  "7Chain 플랫폼은 다수의 이해관계자(토큰홀더)에게 상당한 네트워크 효과를 가져올 것 입니다. 이 플랫폼 제안의 핵심은 완벽하게 탈중앙화된 RNG가 신뢰를 상승시킴으로써 게임 서비스 제공자와 사용자 모두를 불러올 만큼 매력적일 것이며, 궁극적으로는 거래비용이 감소될 것이기 때문입니다.\n\n결국 7Chain 플랫폼을 도입하는 것이 ‘현재의 시장 상황 보다 훨씬 우세하다’라는 직접적인 결과를 가져올 것 입니다: 이것은 이상적인 조건 하에서, 자유시장 시스템이 파레토 최적(Pareto optimality) 결과로 이끄는 것과 같습니다.\n\n결론적으로 네이티브 토큰 VII 는 (1)RNG 참여를 통한 모든 이해당사자들의 혜택, (2)게임 서비스를 위한 보유 화폐, (3)게임 플레이를 위한 지불 화폐 등 경제 생태계의 순환과 플랫폼 도입에 힘을 실어 줄 것입니다.";
export const ko = {
  overview01: "탈중앙화된 확률의 중요성",
  overview02: textFunc(overview02),
  overview03: textFunc(overview03),
  analysis01: "글로벌 게이밍 마켓 분석",
  analysis02:
    "디지털 게임 시장은 범세계적인 성장세를 지속하고 있습니다: 스마트폰의 확산, 초고속 모바일 네트워크의 광범위한 보급, 개발 도상국 시장의 중산층 성장, 수요에 대한 소비 욕구에 힘입어 전세계적으로 성장하고 있습니다.",
  analysis03: "2012년 대비 2.6배 성장",
  analysis04: bFunc(analysis04),
  analysis05: "2013년 대비 1.4배 성장",
  analysis06: "2013년 대비 4.6배 성장",
  why01: "왜 7Chain 일까요?",
  why02:
    "7Chain은 가장 혁신적인 RNG를 통해 디지털 게임의 신뢰 문제를 해결합니다.",
  legacy01: "중앙화 시스템",
  legacy02: "데이터 조작 가능성",
  legacy03: "중앙화 서비스",
  legacy04: "디지털 자산 휘발성",
  legacy05: "제 3자 마케팅 인센티브",
  legacy06: "비용증가",
  blockChain01: "탈중앙화 시스템",
  blockChain02: "데이터 조작 불가",
  blockChain03: "탈중앙화 서비스",
  blockChain04: "디지털 자산 영구 보존",
  blockChain05: "TX 속도문제 / 실시간 게임 적용불가",
  blockChain06: "거래비용증가",
  blockChain07: "투명한 난수 생성 기술 증명 못함",
  blockChain08: "특정 OS 플랫폼에 대한 제한적 지원",
  sevenChain01: "탈중앙화 시스템",
  sevenChain02: "데이터 조작 불가",
  sevenChain03: "탈중앙화 서비스",
  sevenChain04: "MVP를 통해 기술 증명",
  sevenChain05: "가장 공정하고 완벽하게 탈중앙화된 RNG",
  sevenChain06: "MVP를 통해 기술 증명",
  sevenChain07: "DPoS 기반 / 실시간 처리, 거래수수료 없음",
  sevenChain08: "Windows, Android, iOS, HTML5 지원",
  sevenChain09: "최저 플랫폼 수수료 / 거래비용 절감",
  sevenChain10: "게임사업자 수익 향상",
  whysub01: "공정성",
  whysub02:
    "7Chain의 RNG 알고리즘은 게임 플레이어와 게임 운영자가 직접 난수 생성에 참여함으로써 게임 결과에 대한 절대적인 공정성이 제공되는 세계 최초의 기술입니다.",
  whysub03: "투명성",
  whysub04:
    "게임 플레이어는 결과가 조작되지 않음을 알 수 있고, 게임 운영사는 그 대가로 고객의 신뢰를 보장받을 수 있으며, 관할 기관은 결과의 정확성을 쉽게 검증하고 인증할 수 있습니다.",
  whysub05: "블루오션 시장",
  whysub06:
    "인터렉티브 게임으로부터 소셜 게임 그리고 롤플레잉 게임에 이르기까지 7Chain 플랫폼은 RNG 알고리즘에 의존하는 모든 디지털 게임을 호스팅할 수 있습니다.",
  tech01: "핵심기술",
  tech02: textFunc(tech02),
  tech03: textFunc(tech03),
  tech04: textFunc(tech04),
  tech05: textFunc(tech05),
  tech06: textFunc(tech06),
  tech07: textFunc(tech07),
  architecture: "7Chain 아키텍처",
  strength01: "7Chain의 강점",
  strength02: "개방형 B2B 플랫폼",
  strength03:
    "7Chain의 RNG 프로토콜은 전세계 모든 권역의 암호화폐 법령 규제없이 현재 서비스 중인 모든 게임에 빠르게 적용할 수 있습니다. 7Chain RNG는 게임 내 암호화폐를 통한 자산 거래 기능 없이도 작동할 수 있기 때문입니다. 7Chain은 게임 운영사에게 최소한의 수수료만 부과합니다.",
  strength04: "콜라보레이션",
  strength05:
    "7Chain 플랫폼은 다른 블록체인 플랫폼과 콜라보레이션이 가능합니다. 7Chain의 신뢰 기반 프로토콜이 타 생태계의 조력자로서 동작할 때 자체 생태계도 함께 성장할 수 있기 때문입니다.",
  strength06: "확장성",
  strength07:
    "7Chain 플랫폼은 HTML5 뿐만 아니라 게임 콘텐츠에 가장 많이 사용되는 Unity3d 엔진을 지원합니다. 즉, Web 기반 API와 Unity 3d 전용 SDK를 제공하여 7Chain 기술이 게임에 쉽고 빠르게 적용되도록 할 것 입니다.",
  compare01: "경쟁 프로젝트와 비교",
  compare02:
    "7Chain 팀이 세계 최초로 구현한 탈중앙화 RNG 기술은 이미 국제 PCT 특허 출원으로 보호되고 있습니다. 실제 블록체인 네트워크에서 작동되는 게임을 공개하면서 탈중앙화된 RNG 기술의 투명성과 공정성이 검증되고 있으며, 실시간 온라인 게임에도 적용이 가능함을 증명하고 있습니다.",
  compare03: "암호화폐 형태",
  compare04: "게이밍 플랫폼",
  compare05: "모든 기기 OS 지원",
  compare06: "탈중앙화 RNG 구현",
  compare07: "게이머의 RNG 참여",
  compare08: "RNG 실시간 게임 적용",
  compare09: "암호화폐 없이 적용",
  compare10: "멘탈 포커 알고리즘",
  compare11: "거래 수수료 해결",
  compare12: "상용제품 보유",
  economic01: "7Chain의 플랫폼 경제",
  economic02: require("../assets/images/Chart_Pareto_Korean.png"),
  economic03: textFunc(economic03),
  roadmap01: "2017년 4분기",
  roadmap02: "주요 멤버 영입",
  roadmap03: "블록체인기술 R&D",
  roadmap04: "2018년 1분기",
  roadmap05: "Numbers21 PTE.LTD 싱가포르 법인 설립",
  roadmap06: "게임 플레이어 참여형 RNG 기술 개발",
  roadmap07: "7Chain 프로젝트 착수",
  roadmap08: "2018년 4~5월",
  roadmap09: "7Chain RNG v0.1 개발 완료",
  roadmap10: "2018년 6월",
  roadmap11: "7Chain RNG v0.2 업데이트",
  roadmap12: "7Chain RNG v0.2 가 적용된 포커게임과 슬롯게임 MVP 공개"
};
