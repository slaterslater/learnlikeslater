// schema.ts

import { createSchema, list } from '@keystone-next/keystone/schema';
import { password, text } from '@keystone-next/fields';

const isSelf = ({ session, item }: any) => (
  (session?.itemId === item.id) ? true : false
)

export const lists = createSchema({
  Book: list({
    fields: {
      name: text({ isRequired: true }),
      slug: text({ isRequired: true }),
    },
  }),
  User: list({
    fields: {
      name: text({ isRequired: true }),
      email: text({
        isRequired: true,
        isUnique: true,
        access: {
          read: isSelf
        }
      }),
      password: password({ isRequired: true }),
      card: text({
        isRequired: true,
        isUnique: true,
        access: {
          read: isSelf
        }
      }),
      pin: text({
        isRequired: true,
        access: {
          read: isSelf
        }
      })
    },
  }),
});
