import Login from "../views/LoginView.vue";

export default {
  component: Login,
  title: "Task",
  tags: ["autodocs"],
  argTypes: {
    onPinTask: {},
    onArchiveTask: {},
  },
  excludeStories: /.*Data$/,
};

export const Default = {
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX",
    },
  },
};
