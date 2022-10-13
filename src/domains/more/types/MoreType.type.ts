export type ClickBoxProps = {
  title: string;
  desc: string;
  iconSrc: string;
  nextButtonState: boolean;
  onClick: () => void;
};

export type EtcBoxProps = {
  title: string;
  iconSrc: string;
  onClickPath: string;
};
