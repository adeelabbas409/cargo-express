import { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { Label } from "../../components/label"
import { Switch } from "../../components/switch"

const meta: Meta<typeof Switch> = {
  title: "ui/Switch",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof Switch>

export const Base: Story = {
  render: (args: any) => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
  args: {},
}
