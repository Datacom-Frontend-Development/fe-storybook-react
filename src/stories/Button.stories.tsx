
import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import Button from '../component/button';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Button',
    component: Button,
    argTypes: { 
        onClick: { action: 'clicked' },
        type: { type: 'inline-radio', options: ['submit', 'button', 'reset'] }
    }
} as Meta<typeof Button>;

export const Default: StoryFn<typeof Button> = (args) => <Button {...args}>Button</Button>;

Default.args = {
    color: 'green',
    disabled: false,
    type: 'submit'
};