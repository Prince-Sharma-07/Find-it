//@ts-nocheck
"use client"
import Link from "next/link"
import { Search, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="dark:bg-gray-950 bg-[#F7F9FB] border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <Search className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">FindIt</span>
            </div>
            <p className="text-muted-foreground">
              Connecting communities to reunite lost items with their owners. Together, we make sure nothing stays lost
              forever.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/search" className="block text-muted-foreground hover:text-foreground transition-colors">
                Search Items
              </Link>
              <Link href="/lost" className="block text-muted-foreground hover:text-foreground transition-colors">
                Report Lost
              </Link>
              <Link href="/found" className="block text-muted-foreground hover:text-foreground transition-colors">
                Report Found
              </Link>
              <Link href="/about" className="block text-muted-foreground hover:text-foreground transition-colors">
                About Us
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Support</h3>
            <div className="space-y-2">
              <Link href="/help" className="block text-muted-foreground hover:text-foreground transition-colors">
                Help Center
              </Link>
              <Link href="/contact" className="block text-muted-foreground hover:text-foreground transition-colors">
                Contact Us
              </Link>
              <Link href="/privacy" className="block text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Stay Updated</h3>
            <p className="text-muted-foreground">Get notified about new features and community updates.</p>
            <div className="space-y-2">
              <Input placeholder="Enter your email" />
              <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span>support@findit.com</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2 text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>1-800-FIND-IT</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Available Nationwide</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; 2024 FindIt. All rights reserved. Made with ❤️ for communities everywhere.</p>
        </div>
      </div>
    </footer>
  )
}
