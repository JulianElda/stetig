import AppHeader from "./AppHeader.vue";
import { generateStorybookDecorators } from "@/utils/functions";

export default {
  title: "Components/AppHeader",
  component: AppHeader,
};

const Template = () => ({
  components: { AppHeader },
  template: "<AppHeader />",
});

export const StetigHeader = Template.bind({});

StetigHeader.decorators = [
  () => ({
    template: generateStorybookDecorators(),
  }),
];
