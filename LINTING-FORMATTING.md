## Linting and Formatting

Setup for automatic code formatting and linting for code consistency throughout the code base.

- For linting [ESLint](https://eslint.org/docs/user-guide/getting-started) and [TypeScript ESlint](https://typescript-eslint.io/docs/linting/) is used
- For formatting [Prettier](https://prettier.io/docs/en/install.html) is used. To make prettier work with ESLint, you need to install the [eslint-plugin-prettier](https://github.com/prettier/eslint-config-prettier#installation) is used.
- For automatically formatting the git staged files [Husky](https://typicode.github.io/husky/#/?id=automatic-recommended) and [lint-staged](https://github.com/okonet/lint-staged#readme) are used

---

### Install Packages

```js
  npm install --save-dev prettier eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin husky lint-staged eslint-config-prettier
```

---

### Configuration

1. Add `.prettierrc.json` file with some rules like following:

```json
{
  "printWidth": 100,
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "useTabs": false,
  "bracketSpacing": true,
  "bracketSameLine": false,
  "arrowParens": "avoid",
  ...
}
```

2. Add `.eslintrc.json` file with contents like following:

```json
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
  ...
}
```

**NB:** Add `"prettier"` at last so that will override unnessary styling rules

3. Add following script to `package.json` file:

```json
{
  ...
  "scripts": {
      ...
      "format": "prettier --ignore-path .gitignore --write --plugin-search-dir=. .",
  }
}
```

---

### Enable husky and lint-staged

1. Run following script to enable husky, [more info](https://typicode.github.io/husky/#/?id=automatic-recommended):

```js
npx husky-init && npm install
```

It will create `.husky` dir with its scripts and add `"prepare: husky install"` script in `package.json` file.

2. Add following in `package.json` file:

```json
{
  ...
  "scripts": {
      ...
  },
  "lint-staged": {
    "**/*.(ts|tsx|js|json|svg|css)": [
      "prettier --write",
      "git add"
    ]
  },
}
```

It will format the git staged files and commit them, if you run `npx lint-staged`.

3. Run following script to add a git hook:

```js
npx husky add .husky/pre-commit "npx lint-staged"
```

This will add a git hook to run `npx lint-staged` before commit.

---

### Add vscode project setting for formatting

Add `.vscode/settings.json` file with following contents:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```
