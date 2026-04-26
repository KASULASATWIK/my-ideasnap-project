import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const SettingsView = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-blue-900">Account Settings</h1>
      
      <Card className="border-blue-100">
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
          <CardDescription>Update your personal details.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="John Doe" className="focus-visible:ring-black" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="john@example.com" className="focus-visible:ring-black" />
          </div>
          <Button className="bg-blue-600 hover:bg-black transition-colors duration-200">Save Changes</Button>
        </CardContent>
      </Card>

      <Card className="border-blue-100">
        <CardHeader>
          <CardTitle>Security</CardTitle>
          <CardDescription>Manage your password and account access.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="current-password">Current Password</Label>
            <Input id="current-password" type="password" className="focus-visible:ring-black" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="new-password">New Password</Label>
            <Input id="new-password" type="password" className="focus-visible:ring-black" />
          </div>
          <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-black hover:text-white transition-colors duration-200">
            Update Password
          </Button>
        </CardContent>
      </Card>

      <div className="pt-4 border-t border-gray-200">
        <Button variant="destructive" className="w-full sm:w-auto hover:bg-black transition-colors duration-200">
          Sign Out
        </Button>
      </div>
    </div>
  );
};
