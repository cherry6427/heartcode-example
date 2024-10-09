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
              I'm struggling haha im ded but i like cats yay :3
            </CardDescription>
            <CardDescription>
              take a look at this cute cat below
            </CardDescription>
          </CardHeader>
          <img src="https://images.ctfassets.net/ub3bwfd53mwy/5WFv6lEUb1e6kWeP06CLXr/acd328417f24786af98b1750d90813de/4_Image.jpg?w=750" className="w-48 h-auto rounded-lg mb-2"></img>
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