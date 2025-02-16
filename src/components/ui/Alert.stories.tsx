import { Meta, StoryObj } from '@storybook/react';
import { Alert } from './alert';
import { InfoIcon } from "lucide-react";

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['success', 'error', 'warning', 'info'],
      description: 'Defines the context of the alert (affects color scheme).',
    },
    variant: {
      control: { type: 'radio' },
      options: ['subtle', 'solid'],
      description: 'Determines the visual style of the alert.',
    },
    title: { control: 'text', description: 'Optional title for the alert.' },
    description: { control: 'text', description: 'Optional detailed message for the alert.' },
    onClose: { action: 'closed', description: 'Callback triggered when the alert is dismissed.' },
    children: { control: 'text', description: 'Additional content rendered inside the alert.' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'The Alert component displays contextual feedback with support for an optional title, description, icon, and a close button. Use the controls below to experiment with its various states.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    type: 'success',
    variant: 'subtle',
    children: 'Operation completed successfully!',
  },
};

export const WithTitleAndDescription: Story = {
  args: {
    type: 'warning',
    variant: 'subtle',
    title: 'Update Available',
    description: 'A new version is ready to install.',
  },
};

export const WithIconAndClose: Story = {
  args: {
    type: 'info',
    variant: 'solid',
    title: 'Information',
    description: 'This is an informational alert.',
    icon: <InfoIcon className="w-5 h-5" />,
    onClose: () => alert('Alert closed!'),
  },
};

export const CustomContent: Story = {
  args: {
    type: 'error',
    variant: 'solid',
    children: 'Something went wrong. Please try again later.',
  },
};
