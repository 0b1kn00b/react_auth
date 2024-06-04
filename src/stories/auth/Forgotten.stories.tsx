import { Meta, StoryObj } from "@storybook/react";
import ForgotPassword from "src/react/components/auth/ForgotPassword";
import React, { ReactNode } from "react";
import { default_decorator } from "src/storybook/Util";

const meta: Meta = { 
  component: ForgotPassword,
  decorators : [default_decorator]
};

export default meta;

type Story = StoryObj<typeof ForgotPassword>;

export const Init: Story = {
  args: {},
};
