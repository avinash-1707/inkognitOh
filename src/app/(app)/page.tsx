"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Bell, Shield, Zap } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleGetStarted = () => {
    router.push("/sign-in");
  };
  const handleJoin = () => {
    router.push("/sign-up");
  };
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto text-center">
        <h1 className="text-6xl md:text-6xl lg:text-6xl font-bold mb-6">
          inkognitOh!
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-400 max-w-2xl mx-auto">
          The safe space for honest feedback, secret confessions, and anonymous
          messages. No names, no traces, just truth.
        </p>
        <Button
          size="lg"
          className="font-bold text-lg bg-white text-black hover:bg-gray-300 px-8  whitespace-nowrap"
          onClick={handleGetStarted}
        >
          Get Started
        </Button>
      </section>

      {/* How it Works Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">How it Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <Card className="border border-gray-800 bg-black text-white shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="font-bold text-black text-lg">1</span>
              </div>
              <CardTitle>Create your profile link</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                Sign up in seconds and get a unique link that you can share
                anywhere.
              </p>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="border border-gray-800 bg-black text-white shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="font-bold text-black text-lg">2</span>
              </div>
              <CardTitle>Share it with friends</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                Post your link on social media or send it directly to people you
                want to hear from.
              </p>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card className="border border-gray-800 bg-black text-white shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="font-bold text-black text-lg">3</span>
              </div>
              <CardTitle>Get anonymous confessions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                Receive honest messages from people who want to share their
                thoughts without revealing their identity.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="max-w-4xl mx-auto bg-gray-800" />

      {/* Features Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose inkognitOh!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <Card className="border border-gray-800 bg-gray-900 text-white shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-col items-center text-center">
              <Shield className="w-12 h-12 text-white mb-4" />
              <CardTitle>100% Anonymous</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-400">
                We never track IP addresses or store identifying information
                about message senders.
              </p>
            </CardContent>
          </Card>

          {/* Feature 2 */}
          <Card className="border border-gray-800 bg-gray-900 text-white shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-col items-center text-center">
              <Zap className="w-12 h-12 text-white mb-4" />
              <CardTitle>No Signups Needed to Send</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-400">
                Anyone can send messages without creating an account or
                providing any personal information.
              </p>
            </CardContent>
          </Card>

          {/* Feature 3 */}
          <Card className="border border-gray-800 bg-gray-900 text-white shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-col items-center text-center">
              <Bell className="w-12 h-12 text-white mb-4" />
              <CardTitle>Real-Time Inbox</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-400">
                Get instant notifications when someone sends you a message. No
                refreshing required.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
        <Card className="border-0 bg-white text-black shadow-xl">
          <CardContent className="pt-8 pb-8 px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Ready to discover the truth?
              </h3>
              <p className="text-gray-700 mb-0">
                Create your inkognitOh! profile and start receiving anonymous
                messages today.
              </p>
            </div>
            <Button
              size="lg"
              className="bg-black text-white hover:bg-gray-800 px-8 whitespace-nowrap"
              onClick={handleJoin}
            >
              Create Your Profile
            </Button>
          </CardContent>
        </Card>
      </section>
      <footer className="py-8 px-4 text-center text-gray-500 bg-black bottom-0 relative text-sm w-full">
        <p>© 2025 inkognitOh! — The Home of Anonymous Messaging</p>
      </footer>
    </div>
  );
}
