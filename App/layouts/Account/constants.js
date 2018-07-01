import { defineAction } from 'redux-define';
export const CONTAINER_NAME = 'ACCOUNT';
export const LOGIN = defineAction('LOGIN', ['REQUEST', 'FAILURE', 'SUCCESS'], CONTAINER_NAME);