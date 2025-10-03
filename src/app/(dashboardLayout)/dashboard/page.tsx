"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LogOut } from "lucide-react"
import { signOut, useSession } from "next-auth/react"

const Dashboard = () => {
  const { data: session } = useSession()
  console.log(session)

  return (
    <div className="min-h-screen w-full bg-gray-50 dark:bg-gray-900 p-8">
      {/* Greeting */}
      <div className="max-w-4xl mx-auto space-y-8">
        <Card className="shadow-md border">
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="h-14 w-14">
                <AvatarImage src={session?.user?.image ?? ""} alt={session?.user?.name ?? "User"} />
                <AvatarFallback>{session?.user?.name?.[0] ?? "U"}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-2xl font-semibold">
                  Welcome back, {session?.user?.name || "Guest"} 👋
                </CardTitle>
                <CardDescription className="text-gray-500 dark:text-gray-400">
                  Here’s what’s happening today
                </CardDescription>
              </div>
            </div>

            <Button variant="outline" onClick={() => signOut()}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </CardHeader>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-4">
            <CardHeader>
              <CardTitle className="text-lg">Projects</CardTitle>
              <CardDescription>Active and completed</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">12</p>
            </CardContent>
          </Card>
          <Card className="p-4">
            <CardHeader>
              <CardTitle className="text-lg">Tasks</CardTitle>
              <CardDescription>Due this week</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">7</p>
            </CardContent>
          </Card>
          <Card className="p-4">
            <CardHeader>
              <CardTitle className="text-lg">Messages</CardTitle>
              <CardDescription>Unread</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">3</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>What you did recently</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li>✅ Completed &#34;AI Scholar&ldquo; project setup</li>
              <li>📦 Added new parcel tracking feature to &ldquo;Parcelo&ldquo;</li>
              <li>📝 Updated profile information</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard
