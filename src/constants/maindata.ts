export const topsection = [
  {
    id: "0",
    title: "솔루션1",
    content: "3D 워크플로에 필요한 모든 것1",
    content2:
      " 하나의 플랫폼 내에서 컨셉을 생성, 협업, 전시 및 게시할 수 있습니다. 디자이너, 엔지니어, 제품 관리자, 마케팅 담당자 등 많은 사람들이 Vectary를 사용하여 3D 업계에서 가장 효율적인 브라우저 내, 코드 없는 워크플로우 중 하나로 작업합니다.",
    img: "/img/dummy_img_01.jpg",
    bt__text: "상호 작용 및 애니메이션에 대해 알아보기",
  },
  {
    id: "1",
    title: "솔루션2",
    content: "3D 워크플로에 필요한 모든 것2",
    content2:
      " 하나의 플랫폼 내에서 컨셉을 생성, 협업, 전시 및 게시할 수 있습니다. 디자이너, 엔지니어, 제품 관리자, 마케팅 담당자 등 많은 사람들이 Vectary를 사용하여 3D 업계에서 가장 효율적인 브라우저 내, 코드 없는 워크플로우 중 하나로 작업합니다.",
    img: "/img/dummy_img_01.jpg",
    bt__text: "증강 현실 기능 설명",
  },
  {
    id: "2",
    title: "솔루션3",
    content: "3D 워크플로에 필요한 모든 것3",
    content2:
      " 하나의 플랫폼 내에서 컨셉을 생성, 협업, 전시 및 게시할 수 있습니다. 디자이너, 엔지니어, 제품 관리자, 마케팅 담당자 등 많은 사람들이 Vectary를 사용하여 3D 업계에서 가장 효율적인 브라우저 내, 코드 없는 워크플로우 중 하나로 작업합니다.",
    img: "/img/dummy_img_01.jpg",
    bt__text: "링크 복사",
  },
];
export const maintext = [
  {
    id: "0",
    title: "솔루션one",
    content: "3D 워크플로에 필요한 모든 것one",
    content2:
      " 하나의 플랫폼 내에서 컨셉을 생성, 협업, 전시 및 게시할 수 있습니다. 디자이너, 엔지니어, 제품 관리자, 마케팅 담당자 등 많은 사람들이 Vectary를 사용하여 3D 업계에서 가장 효율적인 브라우저 내, 코드 없는 워크플로우 중 하나로 작업합니다.",
    img: "/img/dummy_img_01.jpg",
    bt__text: "더 많은 비즈니스 솔루션을 찾아보세요",
  },
];
export const mainbottom = [
  {
    id: "0",
    title: "솔루션bottom",
    content: "3D 워크플로에 필요한 모든 것bottom",
    content2:
      " 하나의 플랫폼 내에서 컨셉을 생성, 협업, 전시 및 게시할 수 있습니다. 디자이너, 엔지니어, 제품 관리자, 마케팅 담당자 등 많은 사람들이 Vectary를 사용하여 3D 업계에서 가장 효율적인 브라우저 내, 코드 없는 워크플로우 중 하나로 작업합니다.",
    img: "/img/dummy_img_01.jpg",
    isBtn: false,
    bt__text: "",
  },
];
export const logo = [
  { id: "0", logotitle: "로고1" },
  { id: "01", logotitle: "로고2" },
  { id: "02", logotitle: "로고3" },
  { id: "03", logotitle: "로고4" },
  { id: "04", logotitle: "로고5" },
  { id: "05", logotitle: "로고6" },
  { id: "06", logotitle: "로고7" },
  { id: "07", logotitle: "로고8" },
  { id: "08", logotitle: "로고9" },
  { id: "09", logotitle: "로고10" },
  { id: "10", logotitle: "로고11" },
  { id: "11", logotitle: "로고12" },
];

export interface maincardDataType {
  id: string;
  subtitle: string;
  secSubtitle: string;
  btnText: string;
  content: string;
  seccondcontent?: string;
  type?: string;
  img: string;
}
export const maincardData: maincardDataType[] = [
  {
    id: "0",
    subtitle: "산업1",
    secSubtitle: "패션1",
    content: "내부 사용, 매장 내 및 온라인 소매를 위한 몰입형 제품 쇼케이스를 위한 다목적 디자인 솔루션입니다.",
    img: "/img/dummy_img_02.jpg",
    btnText: "데모보기1",
  },
  {
    id: "1",
    subtitle: "산업2",
    secSubtitle: "패션2",
    content: "내부 사용, 매장 내 및 온라인 소매를 위한 몰입형 제품 쇼케이스를 위한 다목적 디자인 솔루션입니다.",
    img: "/img/dummy_img_02.jpg",
    btnText: "데모보기2",
  },
  {
    id: "2",
    subtitle: "산업3",
    secSubtitle: "패션3",
    content: "내부 사용, 매장 내 및 온라인 소매를 위한 몰입형 제품 쇼케이스를 위한 다목적 디자인 솔루션입니다.",
    img: "/img/dummy_img_02.jpg",
    btnText: "데모보기3",
  },
];

export interface textCardType {
  id: string;
  title: string;
  content: string;
  btnText: string;
  cardtype?: string;
  textgray?: string;
}

export const mainlastsection: textCardType[] = [
  {
    id: "0",
    title: "벡터 스타터",
    btnText: "시작하다",
    content:
      "기술 세트를 구축하고 3D 디자인의 가능성에 대한 이해를 높일 수 있는 접근 가능한 옵션입니다. 아이디어, 프로젝트, 콘텐츠 협업 및 공유 방법을 시각화하기 위한 새로운 옵션을 소개합니다.",
  },
  {
    id: "1",
    title: "벡터 프로",
    btnText: "무료 Pro 평가판 시작하기",
    content:
      "  고객이나 외부 파트너에게 컨셉을 전달하는 전문가를 위한 이상적인 계획입니다. Vectary PRO로 최선을 다해 작업해 보세요. 시각적 설명, 몰입형 경험, 실제 디자인 효과를 제공하는 기능에 액세스해 보세요.",
  },
  {
    id: "2",
    title: "벡터사업",
    btnText: "데모 예약",
    content:
      " 모든 3D 파이프라인에 통합하기 위해 원활한 워크플로우가 필요한 기업을 위한 전문 솔루션입니다. 팀, 프로젝트 및 디자인 플랫폼을 하나로 통합하세요. 3D 디자인을 최대한 활용할 수 있도록 성능이 향상되었습니다.",
  },
];
export const main = [
  {
    id: "0",
    title: "협동1",
    content:
      "시간과 노력을 절약해 주는 실용적인 기능. 모든 장치에서 프로젝트에 쉽게 액세스할 수 있습니다. 파일 복제, 디자인 시스템 옵션, 사용자 정의 라이브러리 및 전체 3D 장면을 프레젠테이션 또는 생산성 도구에 쉽게 포함할 수 있습니다.",
  },
  {
    id: "1",
    title: "협동2",
    content:
      "시간과 노력을 절약해 주는 실용적인 기능. 모든 장치에서 프로젝트에 쉽게 액세스할 수 있습니다. 파일 복제, 디자인 시스템 옵션, 사용자 정의 라이브러리 및 전체 3D 장면을 프레젠테이션 또는 생산성 도구에 쉽게 포함할 수 있습니다.",
  },
  {
    id: "2",
    title: "협동3",
    content:
      "시간과 노력을 절약해 주는 실용적인 기능. 모든 장치에서 프로젝트에 쉽게 액세스할 수 있습니다. 파일 복제, 디자인 시스템 옵션, 사용자 정의 라이브러리 및 전체 3D 장면을 프레젠테이션 또는 생산성 도구에 쉽게 포함할 수 있습니다.",
  },
];
export const data = {
  title: "대화형 3D 및 AR로 작업 완료",
  content: "영감을 주고, 교육하고, 문제를 해결하는 대화형 3D 디자인을 만들고 관리하기 위한 온라인 플랫폼인 Vectary를 만나보세요.",
  btnContent: "지금 시작해보세요.",
  hightlight: "다운로드나 코드가필요 하지 않습니다",
  url: "/img/dummy_img_01.jpg",
};
