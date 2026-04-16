import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

    addons: ['@storybook/addon-links', '@storybook/addon-onboarding', '@storybook/addon-docs'],

    framework: {
        name: '@storybook/nextjs',
        options: {}
    },

    docs: {},

    typescript: {
        // reactDocgen: 'react-docgen-typescript'
    },

    core: {
        disableTelemetry: true
    }
}

export default config
