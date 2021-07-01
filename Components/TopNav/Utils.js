import { event } from "../../Utils/Utils";

export const setNavColor = (color) => {
  event.emit('setNavColor', color)
}
