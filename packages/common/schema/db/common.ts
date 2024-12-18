import dayjs from 'dayjs';
import { z } from 'zod';

// 日付型
const DATE_FORMAT = 'YYYY-MM-DD';
export const SHOWING_DATE_FORMAT = 'YYYY年MM月DD日';
export const RvDate = z.preprocess(
  (val) => dayjs(String(val)).format(DATE_FORMAT),
  z.string().date().brand('RvDate')
);
export type RvDate = z.infer<typeof RvDate>;
