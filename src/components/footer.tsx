export function Footer() {
    return (
        <footer className="w-full bg-background/50 border-t border-foreground/10 py-8 relative z-10 mt-20">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-foreground/60 font-medium">
                    © {new Date().getFullYear()} Thakur. All rights reserved.
                </p>
                <p className="text-sm text-foreground/40">
                    Built with Next.js, Framer Motion, and React Three Fiber
                </p>
            </div>
        </footer>
    );
}
