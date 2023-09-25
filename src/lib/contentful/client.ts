import { createClient } from 'contentful'

export const contentfulClient = createClient({
    accessToken: process.env.CONTENTFUL_TOKEN ||'',
    space: process.env.CONTENTFUL_SPACE_ID ||''
})