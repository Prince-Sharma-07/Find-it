//@ts-nocheck
import { Footer } from '@/components/layout/footer'
import Navbar from '@/components/layout/navbar'
import Features from '@/components/sections/features'
import GetStarted from '@/components/sections/get-started'
import Hero from '@/components/sections/hero'
import RecentActivity from '@/components/sections/recent-activity'

export default function page() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Features/>
      <RecentActivity/>
      <GetStarted/>
      <Footer/>
    </>
  )
}
