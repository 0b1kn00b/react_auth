// @prefix storybook:react:story
// @description
/* eslint-disable */

import { Meta, StoryObj } from "@storybook/react";
import Signup from "src/react/components/auth/Signup";
import { default_decorator } from "src/storybook/Util";

const meta: Meta = {
  component: Signup,
  decorators : [default_decorator]
};

export default meta;

type Story = StoryObj<typeof Signup>;

export const Init: Story = {
  args: {},
};
