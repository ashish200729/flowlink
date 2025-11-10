import prisma from "@/lib/db";
import { Card, CardContent } from "@/components/ui/card";

const Page = async () => {

  const users = await prisma.user.findMany();
  return <div className="flex items-center justify-center h-screen">
    <Card>
      <CardContent>
        
      </CardContent>
    </Card>
        
  </div>
  
}

export default Page;