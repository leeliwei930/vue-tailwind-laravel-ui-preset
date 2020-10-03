beforeEach(() => {
  cy.exec('rm tailwind.config.js')
  cy.exec('rm -rf node_modules')
  cy.exec('rm postcss.config.js')
  cy.exec('rm webpack.config.js')
  cy.exec('rm webpack.mix.js')
  cy.exec('rm .eslintrc.json')
  cy.exec('rm .eslintignore')
  cy.exec('rm .babelrc')
  cy.exec('rm package.json')
  cy.exec('rm yarn.lock')
  cy.exec('rm -rf resources/views/presets/vue-tailwind-preset')
  cy.exec('rm -rf resources/presets')
})
describe('Vue Tailwind Preset', () => {

  it('Scaffold Vue and TailwindCSS base preset', () => {
    // run the cleanup command

    // run php artisan vendor:publish --tag=vue-tailwind-preset

    // run yarn install

    // run yarn run dev and expect it should return 0

    // launch browser point to url /vue-tailwind-laravel-ui-preset

    // Assert See Vue Tailwind Laravel UI Preset

  });

  it('Scaffold Vue and TailwindCSS, ESLint preset', () => {
    // run the cleanup command

    // run php artisan vendor:publish --tag=vue-tailwind-eslint-preset

    // run yarn install

    // run yarn run dev and expect it should return 0

    // launch browser point to url /vue-tailwind-laravel-ui-preset

    // Assert See Vue Tailwind Laravel UI Preset
  });

  it('Scaffold Vue and TailwindCSS, ESLint + Airbnb preset', () => {
    // run php artisan vendor:publish --tag=vue-tailwind-eslint-airbnb-preset

  });


});
