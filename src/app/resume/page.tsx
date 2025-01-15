'use client'

import { useEffect } from 'react'

export default function Resume() {
  useEffect(() => {
    const adjustIframeHeight = () => {
      const iframe = document.getElementById('resumeFrame') as HTMLIFrameElement
      if (iframe) {
        iframe.style.height = `${window.innerHeight * 0.8}px`
      }
    }

    adjustIframeHeight()
    window.addEventListener('resize', adjustIframeHeight)
    
    return () => window.removeEventListener('resize', adjustIframeHeight)
  }, [])

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-4 sm:p-6">
      <iframe
        id="resumeFrame"
        src="https://docs.google.com/document/d/1lSkKShNRphKa4fnbEpuaeE1REsETmUX14UV60kVxU4A/preview?embedded=true&rm=minimal"
        className="w-full min-h-[500px] border-0"
      />
    </div>
  )
}