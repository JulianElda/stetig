import { temperatures, COLOR_TEMPERATURES } from "@/utils/consts";

export const generateStorybookDecorators = function () {
  let result = "";
  for (const temperature in temperatures) {
    result += `<div class="p-4" style="background-color: ${
      COLOR_TEMPERATURES[temperature as temperatures]
    }"><story/></div>`;
  }
  return result;
};
