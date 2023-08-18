import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

export default function DruivenBoxCard() {
  return (
    <Card className="animate-fade-up">
      <CardHeader>
        <CardTitle>Druiven Box</CardTitle>
        <CardDescription>
          An interactive tool to learn boolean algebra
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button asChild>
          <a href="http://druivenbox.haltonchess.ca" target="_blank">View Demo</a>
        </Button>
      </CardContent>
      <CardFooter>
        <CardDescription>
          Made and designed by Sunnie Kapar and Matthew Liu
        </CardDescription>
      </CardFooter>
    </Card>
  );
}
// className="bg-blue-900 hover:bg-blue-500"
