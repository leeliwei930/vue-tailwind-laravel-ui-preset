beforeEach(() => {
  cy.exec('rm tailwind.config.js', {failOnNonZeroExit: false})
  cy.exec('rm -rf node_modules', {failOnNonZeroExit: false})
  cy.exec('rm postcss.config.js', {failOnNonZeroExit: false})
  cy.exec('rm webpack.config.js', {failOnNonZeroExit: false})
  cy.exec('rm webpack.mix.js', {failOnNonZeroExit: false})
  cy.exec('rm .eslintrc.json', {failOnNonZeroExit: false})
  cy.exec('rm .eslintignore', {failOnNonZeroExit: false})
  cy.exec('rm .babelrc', {failOnNonZeroExit: false})
  cy.exec('rm package.json', {failOnNonZeroExit: false})
  cy.exec('rm yarn.lock', {failOnNonZeroExit: false})
  cy.exec('rm -rf resources/views/presets/vue-tailwind-preset', {failOnNonZeroExit: false})
  cy.exec('rm -rf resources/presets', {failOnNonZeroExit: false})
  cy.exec('rm -rf public/presets/vue-tailwind', {failOnNonZeroExit: false})

})
describe('Vue Tailwind Preset', () => {

  it('Scaffold Vue and TailwindCSS base preset', () => {

    cy.exec("php artisan vendor:publish --tag=vue-tailwind-preset")
      .its('code').should('eq', 0)

    cy.wait(10000)

    // run yarn install
    cy.exec("npm install") .its('code').should('eq', 0)

    // run yarn run dev and expect it should return 0
    cy.exec("npm run dev") .its('code').should('eq', 0)

    // launch browser point to url /vue-tailwind-laravel-ui-preset
    cy.visit('/vue-tailwind-laravel-ui-preset')

    cy.get('.content').contains('Vue Tailwind Laravel UI Preset')

  });

  it('Scaffold Vue and TailwindCSS, ESLint preset', () => {
    // run the cleanup command

    // run php artisan vendor:publish --tag=vue-tailwind-eslint-preset

    // run yarn install

    // run yarn run dev and expect it should return 0

    // launch browser point to url /vue-tailwind-laravel-ui-preset

    // Assert See Vue Tailwind Laravel UI Preset


    cy.exec("php artisan vendor:publish --tag=vue-tailwind-eslint-preset")
      .its('code').should('eq', 0)
    cy.wait(10000)


    // run yarn install
    cy.exec("npm install") .its('code').should('eq', 0)

    // run yarn run dev and expect it should return 0
    cy.exec("npm run dev") .its('code').should('eq', 0)

    // launch browser point to url /vue-tailwind-laravel-ui-preset
    cy.visit('/vue-tailwind-laravel-ui-preset')

    cy.get('.content').contains('Vue Tailwind Laravel UI Preset')
  });

  it('Scaffold Vue and TailwindCSS, ESLint + Airbnb preset', () => {
    // run php artisan vendor:publish --tag=vue-tailwind-eslint-airbnb-preset

    cy.exec("php artisan vendor:publish --tag=vue-tailwind-eslint-airbnb-preset")
      .its('code').should('eq', 0)

    cy.wait(10000)
    // run yarn install
    cy.exec("npm install") .its('code').should('eq', 0)

    // run yarn run dev and expect it should return 0
    cy.exec("npm run dev") .its('code').should('eq', 0)

    // launch browser point to url /vue-tailwind-laravel-ui-preset
    cy.visit('/vue-tailwind-laravel-ui-preset')

    cy.get('.content').contains('Vue Tailwind Laravel UI Preset')
  });


});
