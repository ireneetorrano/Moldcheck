"use client"

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'
import { useEffect, useState } from 'react'

export const dynamic = 'force-dynamic'

export default function StudioPage() {
  const [mounted, setMounted] = useState(false)

  // Solo marcamos como montado cuando estamos en el navegador
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Cargando Studio...</div>
  }

  return <NextStudio config={config} />
}