'use client'

import { useEffect, useState } from 'react'
import { Download } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Resume() {
  const [iframeHeight, setIframeHeight] = useState('800px')

  useEffect(() => {
    const adjustIframeHeight = () => {
      // Calculates height to fill viewport minus a bit of margin for the footer/header
      const availableHeight = window.innerHeight - 100 
      setIframeHeight(`${availableHeight}px`)
    }

    adjustIframeHeight()
    window.addEventListener('resize', adjustIframeHeight)
    return () => window.removeEventListener('resize', adjustIframeHeight)
  }, [])

  return (
    <div className="w-full max-w-6xl mx-auto px-2 sm:px-4 py-6">
      {/* Subtle Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row justify-between items-center sm:items-end mb-8 gap-4 px-2"
      >
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-center sm:text-left"
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:flex items-center gap-3">
            General Resume
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Last updated: December 2025
          </p>
        </motion.div>

        {/* Floating Action-style Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex gap-3 justify-center sm:justify-start"
        >
          <motion.a
            href="https://docs.google.com/document/d/1lSkKShNRphKa4fnbEpuaeE1REsETmUX14UV60kVxU4A/export?format=pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-sm"
          >
            <Download size={18} />
            Download PDF
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative w-full overflow-hidden rounded-2xl border border-gray-100 dark:border-gray-800 shadow-2xl shadow-blue-500/5 bg-gray-50 dark:bg-gray-900"
      >
        <iframe
          id="resumeFrame"
          src="https://docs.google.com/document/d/1lSkKShNRphKa4fnbEpuaeE1REsETmUX14UV60kVxU4A/preview?embedded=true&rm=minimal"
          className="w-full border-0"
          style={{ height: iframeHeight }}
          title="Resume Preview"
        />
        
        <div className="absolute inset-0 pointer-events-none border border-black/5 dark:border-white/5 rounded-2xl" />
      </motion.div>

      <p className="mt-6 text-center text-xs text-gray-400 dark:text-gray-500 sm:hidden">
        For the best viewing experience, use a desktop or download the PDF.
      </p>
    </div>
  )
}