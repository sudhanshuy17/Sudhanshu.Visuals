import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Facebook, Instagram, Mail, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary">
            <AspectRatio ratio={1}>
              <img
                src="/lovable-uploads/622c7510-def9-4bd6-a67a-93cbc92d91d0.png"
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Sudhanshu.Visuals</h1>
        </div>
        <nav className="flex gap-6 items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://www.instagram.com/p/DD6YzfYPiWH/?igsh=MTNzMXJkbXBnMGtraQ%3D%3D" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://www.facebook.com/share/19WJ3TcevM/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:officesudhanshu17@gmail.com" aria-label="Contact">
              <Mail className="w-5 h-5" />
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
};