import TimerButton from "./TimerButton.vue";
import { generateStorybookDecorators } from "@/utils/functions";

export default {
  title: "Components/TimerButton",
  component: TimerButton,
};

const Template = (args) => ({
  components: { TimerButton },
  setup() {
    return { args };
  },
  template: '<TimerButton v-bind="args" />',
});

export const StartButton = Template.bind({});
StartButton.args = {
  label: "start",
};
StartButton.decorators = [
  () => ({
    template: generateStorybookDecorators(),
  }),
];

export const StopButton = Template.bind({});
StopButton.args = {
  label: "stop",
};
StopButton.decorators = [
  () => ({
    template: generateStorybookDecorators(),
  }),
];
