import { Persona } from "@/types/mbti";

export const personas: Record<string, Persona> = {
  INTJ: {
    code: "INTJ",
    title: "독고다이 아키텍트 마스터",
    tagline: "계획 없는 배포는 재앙이다. 시스템 설계의 신",
    emoji: "🏛️",
    gradient: "from-indigo-500 to-slate-700",
    traits: [
      "프로젝트 착수 전 아키텍처 다이어그램부터 그리고, 예외 케이스까지 미리 설계해둔다",
      "비효율적인 프로세스를 보면 참지 못하고 자동화 스크립트부터 짠다",
      "회의보다 문서로 생각을 정리하는 게 편하고, 결론 없는 논의를 싫어한다",
    ],
    bestMatch: {
      code: "ENFP",
      title: "아이디어 폭발 스파크 기획자",
      reason: "혼돈의 아이디어를 체계적인 구조로 완성시켜주는 최고의 조합",
    },
    worstMatch: {
      code: "ESFP",
      title: "퍼포먼스 만렙 스타 마케터",
      reason: "즉흥적인 텐션에 쉽게 지치고, 계획 없는 추진력에 불안해진다",
    },
  },
  INTP: {
    code: "INTP",
    title: "밤샘 분석 AI 연구원",
    tagline: "왜 대답을 못 하니... 알고리즘과 디버깅의 신",
    emoji: "🧪",
    gradient: "from-cyan-500 to-indigo-600",
    traits: [
      "궁금한 기술은 새벽 3시에도 파고들어 논문과 레퍼런스를 뒤진다",
      "정답이 나올 때까지 가설을 세우고 검증하는 과정 자체를 즐긴다",
      "정리되지 않은 잡담보다 논리적으로 딱 떨어지는 대화를 선호한다",
    ],
    bestMatch: {
      code: "ENTJ",
      title: "거침없는 빌드업 CPO",
      reason: "내 아이디어를 실제 비즈니스로 밀어붙여주는 든든한 추진체",
    },
    worstMatch: {
      code: "ESFJ",
      title: "네트워킹 만렙 분위기 메이커",
      reason: "사교적인 스몰토크가 계속되면 에너지가 빠르게 소진된다",
    },
  },
  ENTJ: {
    code: "ENTJ",
    title: "거침없는 빌드업 CPO",
    tagline: "방향성은 내가 정한다. 무결점 비즈니스 리더",
    emoji: "🚀",
    gradient: "from-indigo-600 to-blue-500",
    traits: [
      "목표를 정하면 팀 전체를 설득해서라도 밀어붙이는 추진력을 가졌다",
      "비효율적인 회의는 3분 만에 결론을 내고 바로 실행으로 넘어간다",
      "숫자와 데이터로 증명되지 않는 아이디어는 쉽게 신뢰하지 않는다",
    ],
    bestMatch: {
      code: "INFP",
      title: "유저 빙의 감성 UI 디자이너",
      reason: "차가운 전략에 사용자의 마음을 더해주는 균형 잡힌 파트너",
    },
    worstMatch: {
      code: "ISFP",
      title: "자유로운 영혼의 프론트엔드 아티스트",
      reason: "정해진 데드라인보다 감각을 중시하는 스타일에 답답함을 느낀다",
    },
  },
  ENTP: {
    code: "ENTP",
    title: "아이디어 뱅크 그로스 해커",
    tagline: "이거 바꾸면 대박 날 듯? 프로 불편러 혁신가",
    emoji: "💡",
    gradient: "from-cyan-400 to-blue-600",
    traits: [
      "하루에도 열 개씩 \"이거 이렇게 바꾸면 어때요?\" 아이디어를 던진다",
      "기존 방식에 의문을 제기하며 토론하는 걸 즐긴다",
      "새로운 실험이라면 리스크를 감수하고서라도 일단 시도해본다",
    ],
    bestMatch: {
      code: "INFJ",
      title: "비전 제시형 프로덕트 전략가",
      reason: "번뜩이는 아이디어에 깊이와 철학을 더해주는 환상의 짝꿍",
    },
    worstMatch: {
      code: "ISTJ",
      title: "팩트 체크 중심 QA 마스터",
      reason: "매번 바뀌는 아이디어에 원칙주의자는 피로감을 느낀다",
    },
  },
  INFJ: {
    code: "INFJ",
    title: "비전 제시형 프로덕트 전략가",
    tagline: "프로덕트의 철학을 만듭니다. 숨은 멘토",
    emoji: "🔮",
    gradient: "from-indigo-500 to-violet-600",
    traits: [
      "서비스의 '왜'를 항상 고민하며 팀의 방향성을 은근히 이끈다",
      "동료의 고민을 진지하게 들어주는 숨은 상담가 역할을 자처한다",
      "겉으론 조용하지만 확신이 서면 누구보다 강하게 밀어붙인다",
    ],
    bestMatch: {
      code: "ENTP",
      title: "아이디어 뱅크 그로스 해커",
      reason: "깊은 통찰과 발산적인 아이디어가 만나 시너지를 내는 조합",
    },
    worstMatch: {
      code: "ESTP",
      title: "위기 탈출 넘버원 소방수 개발자",
      reason: "즉흥적이고 현재 중심적인 태도에 방향성을 잃은 기분이 든다",
    },
  },
  INFP: {
    code: "INFP",
    title: "유저 빙의 감성 UI 디자이너",
    tagline: "한 픽셀의 UI에도 유저의 마음을 담습니다",
    emoji: "🎨",
    gradient: "from-violet-500 to-cyan-400",
    traits: [
      "버튼 하나, 문구 하나에도 사용자의 감정을 먼저 상상해본다",
      "팀의 갈등 상황에서 상처받는 사람이 없도록 조율하려 애쓴다",
      "내 손을 거친 결과물에는 진심을 담아 애정을 쏟는다",
    ],
    bestMatch: {
      code: "ENTJ",
      title: "거침없는 빌드업 CPO",
      reason: "섬세한 감성을 현실적인 비즈니스로 실현시켜주는 든든한 리더",
    },
    worstMatch: {
      code: "ESTJ",
      title: "폭풍 추진력의 PM 리더",
      reason: "감정보다 속도와 효율을 우선하는 태도에 위축되기 쉽다",
    },
  },
  ENFJ: {
    code: "ENFJ",
    title: "팀의 성장을 이끄는 스크럼 마스터",
    tagline: "모두 할 수 있어요! 팀의 사기를 책임지는 치어리더",
    emoji: "📣",
    gradient: "from-cyan-500 to-teal-400",
    traits: [
      "팀원 한 명 한 명의 컨디션과 성장을 세심하게 챙긴다",
      "회의 분위기가 가라앉으면 먼저 나서서 텐션을 끌어올린다",
      "팀 전체의 목표를 위해서라면 자신의 몫도 기꺼이 나눠 짊어진다",
    ],
    bestMatch: {
      code: "INTP",
      title: "밤샘 분석 AI 연구원",
      reason: "논리적인 통찰에 따뜻한 리더십을 더해주는 찰떡 조합",
    },
    worstMatch: {
      code: "ISTP",
      title: "조용한 백엔드 버그 킬러",
      reason: "속마음을 잘 표현하지 않는 스타일에 서운함을 느끼기 쉽다",
    },
  },
  ENFP: {
    code: "ENFP",
    title: "아이디어 폭발 스파크 기획자",
    tagline: "재미없는 서비스는 안 만들어요! 트렌드 세터",
    emoji: "✨",
    gradient: "from-fuchsia-500 to-indigo-500",
    traits: [
      "새로운 트렌드와 밈을 서비스에 녹여내는 걸 좋아한다",
      "사람들과 대화하다 떠오른 영감을 바로 기획서에 옮긴다",
      "재미없고 뻔한 기획은 못 견디고 항상 한 끗 다른 걸 추구한다",
    ],
    bestMatch: {
      code: "INTJ",
      title: "독고다이 아키텍트 마스터",
      reason: "번뜩이는 아이디어를 탄탄한 구조로 완성해주는 최고의 파트너",
    },
    worstMatch: {
      code: "ISTJ",
      title: "팩트 체크 중심 QA 마스터",
      reason: "즉흥적인 방향 전환에 원칙주의자는 스트레스를 받는다",
    },
  },
  ISTJ: {
    code: "ISTJ",
    title: "팩트 체크 중심 QA 마스터",
    tagline: "제 눈에 버그가 걸렸습니다. 철두철미한 수문장",
    emoji: "🛡️",
    gradient: "from-slate-600 to-indigo-500",
    traits: [
      "배포 전 체크리스트를 만들고 하나하나 꼼꼼히 검증한다",
      "정해진 규칙과 프로세스는 예외 없이 지켜야 마음이 편하다",
      "감정보다 사실과 근거를 기반으로 판단하고 보고한다",
    ],
    bestMatch: {
      code: "ESFP",
      title: "퍼포먼스 만렙 스타 마케터",
      reason: "꼼꼼한 검증과 유쾌한 실행력이 만나는 안정적인 조합",
    },
    worstMatch: {
      code: "ENTP",
      title: "아이디어 뱅크 그로스 해커",
      reason: "원칙 없이 계속 바뀌는 방향성에 피로감을 느낀다",
    },
  },
  ISFJ: {
    code: "ISFJ",
    title: "든든한 백업 요정 서비스 운영자",
    tagline: "이슈 발생? 제가 다 처리해 둘게요. 보이지 않는 영웅",
    emoji: "🧚",
    gradient: "from-teal-400 to-indigo-400",
    traits: [
      "장애 발생 시 누구보다 빠르게 상황을 파악하고 조용히 수습한다",
      "동료가 놓친 부분까지 세심하게 챙겨 미리 대비해둔다",
      "생색내지 않고 묵묵히 팀을 뒷받침하는 걸 좋아한다",
    ],
    bestMatch: {
      code: "ESTP",
      title: "위기 탈출 넘버원 소방수 개발자",
      reason: "위기 대응 속도와 꼼꼼한 뒷수습이 완벽하게 맞아떨어진다",
    },
    worstMatch: {
      code: "ENTP",
      title: "아이디어 뱅크 그로스 해커",
      reason: "예측 불가능한 변화구에 계속 대비해야 해서 쉽게 지친다",
    },
  },
  ESTJ: {
    code: "ESTJ",
    title: "폭풍 추진력의 PM 리더",
    tagline: "스프린트 지연은 없다. 철저한 일정과 실행력",
    emoji: "📋",
    gradient: "from-blue-600 to-cyan-500",
    traits: [
      "스프린트 일정과 마일스톤을 칼같이 관리하고 지켜낸다",
      "역할과 책임을 명확히 나눠 팀이 흔들리지 않게 이끈다",
      "결정된 사항은 군더더기 없이 바로 실행에 옮긴다",
    ],
    bestMatch: {
      code: "ISFP",
      title: "자유로운 영혼의 프론트엔드 아티스트",
      reason: "빡빡한 일정에 유연한 감성을 더해 균형을 맞추는 조합",
    },
    worstMatch: {
      code: "INFP",
      title: "유저 빙의 감성 UI 디자이너",
      reason: "감정보다 효율을 앞세우는 태도에 서로 지치기 쉽다",
    },
  },
  ESFJ: {
    code: "ESFJ",
    title: "네트워킹 만렙 분위기 메이커",
    tagline: "팀원 간 불화 제로! 모두를 챙기는 마당발 올라운더",
    emoji: "🤝",
    gradient: "from-cyan-400 to-indigo-500",
    traits: [
      "팀원들의 생일과 경조사까지 챙기는 분위기 메이커다",
      "갈등이 생기면 누구보다 먼저 나서서 중재하려 한다",
      "사람들과의 관계와 협업 분위기를 가장 중요하게 생각한다",
    ],
    bestMatch: {
      code: "ISTP",
      title: "조용한 백엔드 버그 킬러",
      reason: "말없이 실력으로 보여주는 파트너에게 든든함을 느낀다",
    },
    worstMatch: {
      code: "INTP",
      title: "밤샘 분석 AI 연구원",
      reason: "무뚝뚝하고 사적인 대화가 적은 스타일에 서운함을 느낀다",
    },
  },
  ISTP: {
    code: "ISTP",
    title: "조용한 백엔드 버그 킬러",
    tagline: "말은 필요 없다. 코드로 증명하는 실력파 엔지니어",
    emoji: "🔧",
    gradient: "from-slate-700 to-cyan-500",
    traits: [
      "문제가 생기면 말보다 손이 먼저 움직여 원인을 해결한다",
      "불필요한 잡담보다 효율적인 문제 해결 그 자체에 집중한다",
      "필요한 도구와 방법을 스스로 찾아 척척 해내는 걸 즐긴다",
    ],
    bestMatch: {
      code: "ESFJ",
      title: "네트워킹 만렙 분위기 메이커",
      reason: "묵묵한 실력파와 살가운 분위기 메이커의 케미가 좋다",
    },
    worstMatch: {
      code: "ENFJ",
      title: "팀의 성장을 이끄는 스크럼 마스터",
      reason: "감정적인 교류를 요구받는 상황이 부담스럽게 느껴진다",
    },
  },
  ISFP: {
    code: "ISFP",
    title: "자유로운 영혼의 프론트엔드 아티스트",
    tagline: "화면 인터랙션은 예술이죠. 감각적인 개발자",
    emoji: "🖌️",
    gradient: "from-fuchsia-400 to-cyan-400",
    traits: [
      "애니메이션 하나, 컬러 톤 하나에도 자신만의 감각을 담는다",
      "딱딱한 규칙보다 자유로운 분위기에서 더 좋은 결과물을 낸다",
      "유행보다 자신이 진짜 좋다고 느끼는 것을 만들고 싶어한다",
    ],
    bestMatch: {
      code: "ESTJ",
      title: "폭풍 추진력의 PM 리더",
      reason: "자유로운 감성을 현실적인 일정 안에서 완성시켜주는 조합",
    },
    worstMatch: {
      code: "ENTJ",
      title: "거침없는 빌드업 CPO",
      reason: "강한 추진력과 통제에 숨 막힘을 느끼기 쉽다",
    },
  },
  ESTP: {
    code: "ESTP",
    title: "위기 탈출 넘버원 소방수 개발자",
    tagline: "라이브 서버 터졌다고요? 지금 당장 고칩니다",
    emoji: "🧯",
    gradient: "from-red-500 to-indigo-500",
    traits: [
      "장애 알람이 울리면 누구보다 빠르게 뛰어들어 해결한다",
      "이론보다 지금 당장 되는 실전적인 해결책을 선호한다",
      "긴박한 상황일수록 오히려 집중력과 텐션이 올라간다",
    ],
    bestMatch: {
      code: "ISFJ",
      title: "든든한 백업 요정 서비스 운영자",
      reason: "빠른 대응력과 꼼꼼한 뒷정리가 완벽한 팀워크를 이룬다",
    },
    worstMatch: {
      code: "INFJ",
      title: "비전 제시형 프로덕트 전략가",
      reason: "장기적인 비전과 철학적인 논의에 답답함을 느낀다",
    },
  },
  ESFP: {
    code: "ESFP",
    title: "퍼포먼스 만렙 스타 마케터",
    tagline: "우리 서비스 모르는 사람 없게 해 주세요. 바이럴 장인",
    emoji: "🎤",
    gradient: "from-cyan-400 to-fuchsia-500",
    traits: [
      "새로운 캠페인과 콘텐츠 아이디어를 신나게 실행에 옮긴다",
      "사람들 앞에서 발표하고 서비스를 알리는 순간 에너지가 폭발한다",
      "분위기를 파악하고 트렌드에 맞춰 재빠르게 움직인다",
    ],
    bestMatch: {
      code: "ISTJ",
      title: "팩트 체크 중심 QA 마스터",
      reason: "화려한 실행력 뒤를 꼼꼼하게 받쳐주는 안정적인 조합",
    },
    worstMatch: {
      code: "INTJ",
      title: "독고다이 아키텍트 마스터",
      reason: "즉흥적인 진행 방식에 계획주의자는 불안을 느낀다",
    },
  },
};

export function getPersona(mbtiType: string): Persona | undefined {
  return personas[mbtiType.toUpperCase()];
}
