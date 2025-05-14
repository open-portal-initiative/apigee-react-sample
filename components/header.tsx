import { ShimmerButton } from "@/components/magicui/shimmer-button";
import Link from "next/link"
import "./header.css"
import { Button } from "./ui/button";

export default function Header(props: {loggedIn: boolean}) {

  return <div className="header">
    <Link href="/" className="title">
      <span className="title_text">Apigee React Portal</span>
    </Link>

    {props.loggedIn ?
      <Link href="/">
        <Button className="shadow-2x1 relative top-3 right-4 h-8">
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
            Log out
          </span>
        </Button>
      </Link>
    :
      <Link href="/login">
        <ShimmerButton className="shadow-2x1 relative top-3 right-4 h-8">
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
            Log in
          </span>
        </ShimmerButton>
      </Link>
    }

  </div>
}