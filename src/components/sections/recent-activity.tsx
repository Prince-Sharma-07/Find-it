//@ts-nocheck
import { RECENT_ITEMS } from "@/constants";
import { Clock, MapPin } from "lucide-react";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export default function RecentActivity() {
  return (
    <section className="py-16 bg-[#F7F9FB] dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Recent Activity
            </h2>
            <p className="text-muted-foreground">
              See what's happening in your community right now
            </p>
          </div>
          <Link href="/search">
            <Button variant="outline">View All</Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RECENT_ITEMS.map((item, index) => (
            <div key={index}>
              <div className="hover:shadow-lg transition-shadow rounded-xl dark:bg-white/5 bg-white border-[#E2E8F0] border">
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    <img
                      src={
                        "https://img.daisyui.com/images/profile/demo/averagebulk@192.webp"
                      }
                      alt={item.title}
                      className="rounded-lg object-cover"
                      height={64}
                      width={64}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge
                          variant={
                            item.type === "lost" ? "destructive" : "success"
                          }
                        >
                          {item.type === "lost" ? "Lost" : "Found"}
                        </Badge>
                        {item.reward && (
                          <Badge variant="secondary">
                            ${item.reward} reward
                          </Badge>
                        )}
                      </div>
                      <h3 className="font-semibold text-foreground mb-1 line-clamp-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                        {item.description}
                      </p>
                      <div className="flex items-center text-xs text-muted-foreground space-x-4">
                        <div className="flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {item.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {item.timeAgo}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
