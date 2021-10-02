// schema.ts

import { createSchema, list } from '@keystone-next/keystone/schema';
import { password, text } from '@keystone-next/fields';

export const lists = createSchema({
  Book: list({
    fields: {
      name: text({ isRequired: true }),
      isbn: text({ isRequired: true }),
      slug: text({ isRequired: true }),
    },
  }),
  User: list({
    fields: {
      name: text({ isRequired: true }),
      email: text({ isRequired: true, isUnique: true }),
      password: password({ isRequired: true }),
    },
  }),
});
