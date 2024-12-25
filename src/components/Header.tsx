import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Facebook, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary">
            <AspectRatio ratio={1}>
              <img
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwODY4NzQ5NA&ixlib=rb-4.0.3&q=80&w=200"
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Sudhanshu.Visuals</h1>
        </div>
        <nav className="flex gap-6">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://www.instagram.com/p/DD6YzfYPiWH/?igsh=MTNzMXJkbXBnMGtraQ%3D%3D" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="#" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="#" aria-label="Contact">
              <Mail className="w-5 h-5" />
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
};