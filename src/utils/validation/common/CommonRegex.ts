export const Regex = {
  email:
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
  password:
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d!@#$%^&*()]{8,20}$/,
  phone: /^010-?([0-9]{3,4})-?([0-9]{4})$/,
  name: /^[가-힣|a-z|A-Z]+$/,
  site: /^https?:\/\/[\w\-\.]+/g,
  businessNumber: /([0-9]{3})-?([0-9]{2})-?([0-9]{5})/,
  nickname: /^[가-힣|a-z|A-Z-_]{1,10}$/,
};
