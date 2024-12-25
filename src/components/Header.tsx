import { AspectRatio } from "@/components/ui/aspect-ratio";

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
          <h1 className="text-3xl font-bold tracking-tight">sudhanshu.visuals</h1>
        </div>
        <nav className="flex gap-6">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Instagram</a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Facebook</a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
};