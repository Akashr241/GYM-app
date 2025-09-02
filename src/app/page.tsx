import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dumbbell, Shield, User } from 'lucide-react';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="flex flex-col items-center text-center mb-8">
        <div className="bg-primary p-4 rounded-full mb-4">
          <Dumbbell className="h-12 w-12 text-primary-foreground" />
        </div>
        <h1 className="text-5xl font-bold font-headline tracking-tight text-foreground">
          GymTrack Lite
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Your modern solution for gym management.
        </p>
      </div>

      <Card className="w-full max-w-sm shadow-xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-headline">Welcome Back</CardTitle>
          <CardDescription className="text-center">
            Please select your login role to proceed.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4">
            <Button asChild size="lg" className="w-full">
              <Link href="/admin/dashboard">
                <Shield className="mr-2 h-5 w-5" />
                Admin Login
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="w-full">
              <Link href="/member/dashboard">
                <User className="mr-2 h-5 w-5" />
                Member Login
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
      <footer className="mt-8 text-sm text-muted-foreground">
        © {new Date().getFullYear()} GymTrack Lite. All rights reserved.
      </footer>
    </main>
  );
}
