import { restartWebApp } from "@/common/flutter-bridge/flutter-bridge";
import LocalStorage from "@/data/LocalStorage/LocalStorage";

export const logoutAndGoSplash = () => {
  LocalStorage.removeItem("jwt");
  LocalStorage.removeItem("id");
  restartWebApp(window);
  window.location.href = "/";
};
