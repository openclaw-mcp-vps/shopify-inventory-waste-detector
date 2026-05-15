import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shopify Inventory Waste Detector — Find Dead Stock Costing You Money',
  description: 'Analyze your Shopify store to identify slow-moving inventory, get markdown recommendations, and free up cash tied in dead stock.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7e19f1e5-0124-4a8d-b568-26c01e8e37d6"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
