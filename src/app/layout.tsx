import "./globals.css"
import type { Metadata } from "next"
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  title: {
    default: "Deep Garden",
    template: "%s | Deep Garden"
  },
  description: "เว็บไซต์สำหรับการจัดจำหน่ายภาพถ่าย"
}


interface RootLayoutProps {
  children: React.ReactNode
}

const Rootlayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>

        {children}
        <Toaster />

      </body>
    </html>
  )
}

export default Rootlayout