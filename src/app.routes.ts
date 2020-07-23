import { Routes } from 'nest-router';
import { v1Modules } from './modules/v1/v1.module';

export const routes: Routes = [
  {
    path: '/api/v1',
    children: v1Modules,
  },
];
