import { Meta, StoryObj } from "@storybook/react";
import Login from "src/react/components/auth/Login";
import { default_decorator } from 'src/storybook/Util';

const meta: Meta = {
  component: Login,
  decorators: [
    default_decorator
  ]
};

export default meta;

type Story = StoryObj<typeof Login>;

export const Init: Story = {
  args: {},
};
