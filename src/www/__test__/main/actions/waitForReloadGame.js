import { mainView } from "../mainView";
import { clickButton, clickLink } from "./click";
import { waitForLoading } from "./waitForLoading";

export async function waitForReloadGame() {
  clickLink(mainView, "Game");
  clickButton(mainView, "Reload");
  await waitForLoading();
}
