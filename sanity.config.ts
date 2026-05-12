'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Importamos las variables de entorno
import {dataset, projectId} from './src/sanity/env'
import {schema} from './src/sanity/schemaTypes'
import {structure} from './src/sanity/structure'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Forzamos una versión de API estable para evitar el error de conexión
  apiVersion: '2024-01-01', 
  schema,
  plugins: [
    structureTool({structure}),
    // Vision para consultas GROQ
    visionTool({defaultApiVersion: '2024-01-01'}),
  ],
})