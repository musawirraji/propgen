import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function RecentProposals() {
  const proposals = [
    {
      id: "1",
      title: "E-commerce Website Redesign",
      client: "ABC Company",
      date: "2023-10-15",
      status: "Accepted",
    },
    {
      id: "2",
      title: "Mobile App Development",
      client: "XYZ Startup",
      date: "2023-10-12",
      status: "Pending",
    },
    {
      id: "3",
      title: "SEO Optimization Project",
      client: "123 Marketing",
      date: "2023-10-08",
      status: "Rejected",
    },
  ]

  return (
    <div className="space-y-4">
      {proposals.map((proposal) => (
        <div key={proposal.id} className="flex items-center justify-between rounded-lg border p-4">
          <div className="grid gap-1">
            <div className="font-medium">{proposal.title}</div>
            <div className="text-sm text-muted-foreground">
              {proposal.client} • {new Date(proposal.date).toLocaleDateString()}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge
              variant={
                proposal.status === "Accepted" ? "success" : proposal.status === "Rejected" ? "destructive" : "outline"
              }
            >
              {proposal.status}
            </Badge>
            <Button variant="ghost" size="icon">
              <Eye className="h-4 w-4" />
              <span className="sr-only">View</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">More</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Duplicate</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      ))}
    </div>
  )
}

