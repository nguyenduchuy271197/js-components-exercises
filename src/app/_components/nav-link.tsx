import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NavLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Button variant="link" asChild className="text-lg text-primary">
      <Link href={href}>{label}</Link>
    </Button>
  );
}
