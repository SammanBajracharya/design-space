import { createClient } from 'contentful';
import { SPACE_ID, ACCESS_TOKEN } from './API';

export const client = createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
});
