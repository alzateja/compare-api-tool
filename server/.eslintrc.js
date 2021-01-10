module.exports = {
    "parser": "@typescript-eslint/parser",
    "extends": [
      "plugin:prettier/recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier/@typescript-eslint"
    ],
    "rules": {
      //    We turn off this rule to allow for JSX typing
      "@typescript-eslint/explicit-module-boundary-types": 0
    }
  };
