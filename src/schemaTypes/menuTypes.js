import {defineField, defineType} from 'sanity'

export const menuTypes = defineType({
  name: 'menu',
  title: 'Menü',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Kategorie',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Produktnamen',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ingredients',
      title: 'Zutaten',
      type: 'text',
    }),
    defineField({
      name: 'price',
      title: 'Preis',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'allergy',
      title: 'Allergie Infos',
      type: 'string',
    }),
  ],
})