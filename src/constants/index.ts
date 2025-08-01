//@ts-nocheck
import {
  Search,
  Heart,
  CheckCircle,
  Users,
  Shield,
  Zap,
  MapPin,
  Clock,
  Star,
  TrendingUp,
  Award,
  MessageCircle,
} from "lucide-react";

export const FEATURES = [
  {
    icon: Search,
    title: "Smart Search",
    description: "Advanced AI-powered search to help you find exactly what you're looking for",
    color: "bg-blue-500",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your data is protected with enterprise-grade security and privacy controls",
    color: "bg-green-500",
  },
  {
    icon: Users,
    title: "Community Network",
    description: "Connect with verified neighbors and build stronger community relationships",
    color: "bg-purple-500",
  },
  {
    icon: Zap,
    title: "Instant Notifications",
    description: "Get real-time alerts when items matching your search are found",
    color: "bg-yellow-500",
  },
  {
    icon: Award,
    title: "Reward System",
    description: "Earn points and badges for helping others find their lost belongings",
    color: "bg-red-500",
  },
  {
    icon: MessageCircle,
    title: "Direct Messaging",
    description: "Communicate safely with other users through our built-in messaging system",
    color: "bg-indigo-500",
  },
]
    
export const RECENT_ITEMS = [
  {
    id: "1",
    title: "iPhone 14 Pro",
    description: "Lost near Central Park, black case with stickers",
    location: "New York, NY",
    type: "lost",
    reward: 100,
    timeAgo: "2 hours ago",
    image: "/placeholder.svg?height=80&width=80&text=iPhone",
  },
  {
    id: "2",
    title: "Golden Retriever",
    description: "Found wandering in downtown area, very friendly",
    location: "Los Angeles, CA",
    type: "found",
    timeAgo: "4 hours ago",
    image: "/placeholder.svg?height=80&width=80&text=Dog",
  },
  {
    id: "3",
    title: "Wedding Ring",
    description: "Lost at the beach, white gold with diamond",
    location: "Miami, FL",
    type: "lost",
    reward: 500,
    timeAgo: "6 hours ago",
    image: "/placeholder.svg?height=80&width=80&text=Ring",
  },
]
