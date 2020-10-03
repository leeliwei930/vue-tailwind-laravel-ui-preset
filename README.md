# Vue Tailwind Laravel UI Preset

What's inside this presets?

- Vue 2.6.12
- Laravel Mix 5
- Tailwind 1.8.x
- Pug Template Engine for writing Vue SFC template
- ESLint (Optional)
    - ESLint Import Resolver Alias
    - ESLint Airbnb config

### Available Presets

#### `vue-tailwind-preset`
This preset exclude any eslint configuration

#### `vue-tailwind-eslint-preset`
This preset contains eslint configuration with Vue recommended code style rule enforced.

#### `vue-tailwind-airbnb-eslint-preset`
This preset contains eslint configuration with Vue + Airbnb JavaScript code style rule enforced.

### 1.0 Installation
```sh
$ composer require techrino/vue-tailwind-laravel-ui-preset
```

### 1.1 Initialize Preset
> ⚠️ Warning 
> 
> Please the command below will overwrite some configuration that are listed in 


[List of created configuration](#1.1.1-List-of-created-configuration)
```sh
$ ▶ artisan ui vue-tailwind
  
   Select a frontend stack:
    [vue-tailwind-preset              ] Vue + Tailwind CSS
    [vue-tailwind-eslint-preset       ] Vue + Tailwind CSS + ESLint
    [vue-tailwind-airbnb-eslint-preset] Vue + Tailwind CSS + airbnb ESLint
   > 
   # Using directional key select a choice
```

#### 1.1.1 List of created configuration
Once the command above is executed, these configurations file will be placed to your projects.
```
./tailwind.config.js
./postcss.config.js
./webpack.config.js
./webpack.mix.js
./.eslintrc.json
./.eslintignore
./resources/views
./cypress <- E2E Testing Scripts for preset
./resources/views/presets/vue-tailwind-preset
./resources/presets/vue-tailwind-preset
./public/presets <- image assets
```

An extra route `/vue-tailwind-laravel-ui-preset` will be added to `routes/web.php` for  testing out the preset.

### 1.2 Install Frontend packages
```sh
$ npm install
# or
$ yarn install
```

## 1.3 Build Packages
```sh
$ npm run dev
```




## 1.4 Additional Configuration
A webpack alias also get  preconfigured in this preset,  by default these alias can be used in any `.vue` or `.js` file

| Alias | Path |
|:----|:---|
| @ | resources/presets/vue-tailwind-preset/vue |
| @css | resources/presets/vue-tailwind-preset/css |

###  Manage your webpack Alias
All the alias are pre-configured in `webpack.config.js` you can modify it based on your usage.
```js
module.exports =
    {
        resolve: {
        roots: [
          path.resolve(__dirname, 'resources/presets/vue-tailwind-preset/vue/'),
        ],
          extensions: [ '.js', '.vue', '.scss', '.css'],
          alias: {
            "@": `${__dirname}/resources/presets/vue-tailwind-preset/vue`,
            "@css": `${__dirname}/resources/presets/vue-tailwind-preset/css`,
          },
        modules: [
          'node_modules',
    
        ]
    }
};
```

If you are using `vue-tailwind-eslint-preset`  don't forget to update the alias in `.eslintrc.json` at `settings` section

```json

{
"settings": {
        "import/resolver": {
            "alias": {
                "map": [
                    ["@", "./resources/presets/vue-tailwind-preset/vue"],
                    ["@css", "./resources/presets/vue-tailwind-preset/css"]
                ],
                "extensions": [".js", ".vue"]
            }
        }
    }
}
```


