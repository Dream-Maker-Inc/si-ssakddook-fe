export const CATEGORY_TYPE = {
  WORKPLACE: "직장 폭력",
  DATE: "데이트 폭력",
  SCHOOL: "학교 폭력",
  HOUSE: "가정 폭력",
  SEX: "성폭력",
  CYBER: "사이버 폭력",
  DEPERESSION: "우울증",
  SECRET: "비밀",
  HOBBY: "취미 공유",
  WORRY: "고민",
  ETC: "기타",
} as const;
type CATEGORY_TYPE = typeof CATEGORY_TYPE[keyof typeof CATEGORY_TYPE];
