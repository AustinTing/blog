import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/[^_]*.mdx' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    category: z.enum(['work', 'life']),
    milestone: z.boolean().default(false),
    cover: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
})

export const collections = { blog }
