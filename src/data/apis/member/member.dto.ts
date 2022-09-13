export type ValidateEmailApiResponse = {
  isValid: boolean;
};

export type ValidateNicknameApiResponse = {
  isValid: boolean;
};

export type SignupApiResponse = {
  statusCode: string;
  message: string;
  ref: any;
};

export type GetCurrentMemberApiResponse = {
  id: number;
  email: string;
  nickname: string;
  name: string;
  birthDay: string;
  phone: string;
  profileImageUrl: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
};
