import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-muted">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Palestine Tracker</h3>
            <p className="text-sm text-muted-foreground">
              Tracking grassroots campaigns, protests, and aid initiatives for Palestine and Gaza.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-1-4.8 4-8.9 8-5 1.6-1 3-2.2 3.8-4z"/></svg>
              </Button>
              <Button variant="ghost" size="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </Button>
              <Button variant="ghost" size="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Campaigns</h3>
            <ul className="space-y-2">
              <li><Link href="/campaigns/global-march" className="text-sm hover:text-primary">Global March for Gaza</Link></li>
              <li><Link href="/campaigns/freedom-flotilla" className="text-sm hover:text-primary">Freedom Flotilla</Link></li>
              <li><Link href="/campaigns/campus-protests" className="text-sm hover:text-primary">Campus Protests</Link></li>
              <li><Link href="/campaigns/marches" className="text-sm hover:text-primary">Marches for Palestine</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/donations" className="text-sm hover:text-primary">Donation Campaigns</Link></li>
              <li><Link href="/allies" className="text-sm hover:text-primary">Supporting Organizations</Link></li>
              <li><Link href="/journalists" className="text-sm hover:text-primary">Journalists</Link></li>
              <li><Link href="/news" className="text-sm hover:text-primary">News</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for updates on campaigns and events.
            </p>
            <div className="flex gap-2">
              <Input placeholder="Email address" className="bg-background" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Palestine Campaigns Tracker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

  export default Footer;