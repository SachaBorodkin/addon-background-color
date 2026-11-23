import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  manifest: {
    name: 'Background Color Addon',
    description: 'Change the background color of web pages',
    version: '0.0.1',
    author: { email: 'borodkinsacha@gmail.com' },
    permissions: ['scripting', 'activeTab'],
    host_permissions: [
      '<all_urls>',
    ],
    // Icons for the extension
    icons: {
      16: '/icon/16x16.png',
      32: '/icon/32x32.png',
    },
    // Firefox-specific settings
    browser_specific_settings: {
      gecko: {
        id: '{a9814233-8a88-4116-87df-f926a03bb548}',
        strict_min_version: '109.0',
      },
    },
  },
});
