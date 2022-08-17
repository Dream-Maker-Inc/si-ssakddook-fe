// - num : '-' 문자가 들어있지않은 숫자로된 전화번호
// - type : 0을 보내면 가운데자리를 숨겨준다

// phoneFomatter('01000000000'); //010-0000-0000
// phoneFomatter('01000000000',0); //010-****-0000
// phoneFomatter('0100000000'); //010-000-0000
// phoneFomatter('0100000000',0); //010-***-0000

export const formatToPhoneNumberWithDash = (
  num: string = "",
  type?: number
) => {
  let formatNum = "";

  if (num.length == 11) {
    if (type == 0) {
      formatNum = num.replace(/(\d{3})(\d{4})(\d{4})/, "$1-****-$3");
    } else {
      formatNum = num.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
    }
  } else if (num.length == 8) {
    formatNum = num.replace(/(\d{4})(\d{4})/, "$1-$2");
  } else {
    if (num.indexOf("02") == 0) {
      if (type == 0) {
        formatNum = num.replace(/(\d{2})(\d{4})(\d{4})/, "$1-****-$3");
      } else {
        formatNum = num.replace(/(\d{2})(\d{4})(\d{4})/, "$1-$2-$3");
      }
    } else {
      if (type == 0) {
        formatNum = num.replace(/(\d{3})(\d{3})(\d{4})/, "$1-***-$3");
      } else {
        formatNum = num.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
      }
    }
  }
  return formatNum;
};
