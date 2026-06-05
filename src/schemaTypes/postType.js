import {defineField, defineType} from 'sanity'

export const openingHoursType = defineType({
  name: 'openingHours',
  title: 'Öffnungszeiten',
  type: 'document',
  fields: [
    defineField({
      name: 'montagBisDonnerstag',
      title: 'Montag bis Donnerstag',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'freitagUndSamstag',
      title: 'Freitag und Samstag',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'sonntag',
      title: 'Sonntag',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})
