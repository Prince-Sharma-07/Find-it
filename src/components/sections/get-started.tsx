import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { isLoggedIn } from '@/actions'

export default async function GetStarted() {
  const loggedIn = await isLoggedIn()
  return (
    <section className="py-16 bg-gradient-to-r from-green-500 to-emerald-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Help Your Community?</h2>
            <p className="text-xl text-green-100 mb-8">
              Join thousands of neighbors who are making a difference, one found item at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={loggedIn ? '/' : '/signup'}>
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  Get Started Free
                </Button>
              </Link>
              <Link href="/search">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
                >
                  Browse Items
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
  )
}
