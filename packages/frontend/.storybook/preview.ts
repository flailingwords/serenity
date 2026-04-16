import type { Preview } from '@storybook/react-vite'


const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(?:background|color)$/iv,
                date: /Date$/iv
            }
        }
    }
}

export default preview
