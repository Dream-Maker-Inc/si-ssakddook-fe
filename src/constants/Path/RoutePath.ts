export enum RoutePath {
  // auth
  Splash = "/splash",
  Home = "/home",
  Auth = "/auth",
  SignupSuccess = "/auth/signup-success",
  FindIdSuccess = "/auth/find/id/success",
  FindIdFail = "/auth/find/id/fail",
  FindPassword = "/auth/find/password",
  FindPasswordSuccess = "/auth/find/password/success",

  Login = "/auth/login",

  // main
  Main = "/main",

  // chat
  Chat = "/chat",
  ChatCreate = "/chat/create",

  // life
  Life = "/life",
  LifeDefail = "/life/detail",

  // community
  Community = "/community",
  CommunityWrite = "/community/write",
  CommunityDetail = "/community/detail",
  CommunintyCommentDetail = "/community/detail/comment",
  CommunityList = "/community/list",
  CommunitySearch = "/community/search",
  CommunityUpdate = "/community/update",
  MyArticle = "/community/my-article",

  // diary
  Diary = "/diary",
  UpdateDiary = "/diary/update",
  CreateDiary = "/diary/create",

  // more
  More = "/more",
  MyInformation = "/more/my-information",
  ChangeNickname = "/more/change-nickname",
  ChangePassword = "/more/change-password",
  ChangeProfileImage = "/more/change-profile-image",
  Secession = "/more/secession",
  Etc = "/more/etc",
  Setting = "/more/setting",
}
