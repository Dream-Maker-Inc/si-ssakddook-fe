export type IamCertificationApiResponse = {
  certificationToken: string;
  certificationInfo: {
    username: string;
    birthDay: string;
    phone: string;
  };
};
