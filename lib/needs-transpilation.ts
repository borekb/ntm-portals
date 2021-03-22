import snakeCase from 'lodash.snakecase';

export type Example = string;

export const helloFromTs = 'Hello from TS';

export const helloSnakeCase = snakeCase(helloFromTs);
