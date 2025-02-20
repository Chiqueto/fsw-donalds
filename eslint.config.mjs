import { FlatCompat } from '@eslint/eslintrc';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
      prettier: 'eslint-plugin-prettier', // Adiciona o plugin do Prettier
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'prettier/prettier': [
        'error',
        {
          plugins: ['prettier-plugin-tailwindcss'], // Adiciona o plugin do Tailwind CSS
        },
      ],
    },
  },
  {
    extends: ['plugin:prettier/recommended'], // Adiciona a configuração do Prettier
  },
];

export default eslintConfig;
