import { Header, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Input, TextArea, Badge, Alert, Button } from "../components/ui";

export default function ComponentsDemo() {
  return (
    <>

      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Alerts Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Alerts</h2>
            <div className="space-y-4">
              <Alert type="success">✓ You successfully volunteered for the event!</Alert>
              <Alert type="error">✗ Error: Could not save your changes. Please try again.</Alert>
              <Alert type="warning">⚠ This event is almost full (2 spots remaining)</Alert>
              <Alert type="info">ℹ New volunteer opportunities in your area!</Alert>
            </div>
          </section>

          {/* Badges Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Badges</h2>
            <div className="flex flex-wrap gap-4">
              <Badge variant="default">Default</Badge>
              <Badge variant="success">Active</Badge>
              <Badge variant="warning">Pending</Badge>
              <Badge variant="error">Cancelled</Badge>
              <Badge variant="info">Featured</Badge>
            </div>
          </section>

          {/* Cards Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Cards</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Event Card Example */}
              <Card>
                <CardHeader>
                  <CardTitle>Park Cleanup</CardTitle>
                  <CardDescription>Saturday, January 10th at 9:00 AM</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    Help us clean up Central Park and make our community beautiful!
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="success">8 spots left</Badge>
                    <Badge variant="default">Team Event</Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-3">
                  <Button>Volunteer Now</Button>
                  <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50 hover:text-blue-600">Learn More</Button>
                </CardFooter>
              </Card>

              {/* User Profile Card Example */}
              <Card>
                <CardHeader>
                  <CardTitle>Your Profile</CardTitle>
                  <CardDescription>@johndoe</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p><strong>Hours Volunteered:</strong> 24.5</p>
                    <p><strong>Events Attended:</strong> 6</p>
                    <p><strong>Status:</strong> <Badge variant="success">Active Volunteer</Badge></p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="text-blue-600 border-blue-600">Edit Profile</Button>
                </CardFooter>
              </Card>
            </div>
          </section>

          {/* Form Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Form Inputs</h2>
            <Card>
              <CardHeader>
                <CardTitle>Create New Event</CardTitle>
                <CardDescription>Fill out the form below to create a volunteer event</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Input 
                  label="Event Name" 
                  placeholder="e.g., Beach Cleanup"
                  helperText="Give your event a catchy name"
                />
                
                <Input 
                  label="Location" 
                  placeholder="e.g., Central Park, NYC"
                />
                
                <Input 
                  label="Date & Time" 
                  type="datetime-local"
                />
                
                <Input 
                  label="Max Volunteers" 
                  type="number"
                  defaultValue="10"
                />
                
                <TextArea 
                  label="Description" 
                  placeholder="Describe the event and why volunteers are needed..."
                  rows={4}
                />

                <Input 
                  label="Email (with error)" 
                  type="email"
                  error="Please enter a valid email address"
                  defaultValue="invalid-email"
                />
              </CardContent>
              <CardFooter className="flex gap-3">
                <Button>Create Event</Button>
                <Button variant="ghost" className="text-gray-600">Cancel</Button>
              </CardFooter>
            </Card>
          </section>

          {/* Buttons Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Buttons</h2>
            <div className="flex flex-wrap gap-4">
              <Button>Default Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button disabled>Disabled Button</Button>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
