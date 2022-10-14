import { RoutePath } from "@/constants/Path";
import { useEffect } from "react";
import { exitWebApp, FlutterReceiveBridgeKeys, goBack } from "./flutter-bridge";

export const useFlutterBridgeListen = () => {
  useEffect(() => {
    const handler = (payload: any) => {
      const eventKey = payload.detail.key;

      switch (eventKey) {
        case FlutterReceiveBridgeKeys.CanGoBack:
          handleBackButtonEvent();
          break;
      }
    };

    window.addEventListener(FlutterReceiveBridgeKeys.MessageEvent, handler);

    return () => {
      window.removeEventListener(
        FlutterReceiveBridgeKeys.MessageEvent,
        handler
      );
    };
  }, []);
};

// 백버튼 이벤트 핸들링
const handleBackButtonEvent = () => {
  const isPathMain = window.location.pathname.endsWith(`${RoutePath.Main}/`);

  if (isPathMain) return exitWebApp(window);

  goBack(window);
};
