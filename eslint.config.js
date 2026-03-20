import { FlatCompat } from '@eslint/eslintrc';
import { defineConfig } from '@eslint/config-helpers';

export default defineConfig([...new FlatCompat().extends('airbnb')]);
