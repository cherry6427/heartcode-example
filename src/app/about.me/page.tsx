import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function aboutme() {
    return (
      <div>
        This is about me
        <Card>
          <CardHeader>
            <CardTitle>
              Hello! I am Sheryl :>
            </CardTitle>
            <CardDescription>
              I'm struggling haha im ded
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-row gap-2">
              <p className="font-bold">Name:</p>
              Sheryl
            </div>
            <div className="flex flex-row gap-2"><p className="font-bold">Major:</p>Information Systems</div>
            <div className="flex flex-row gap-2"><p className="font-bold">Hobbies:</p>I like to dance</div>
          </CardContent>
        </Card>
      </div>
    );
  }