import * as React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"

export default function ApiProductCard(props: {title: string, description: string, link: string}) {
  return (
    <Link href={props.link}>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>{props.title}</CardTitle>
          <CardDescription>{props.description}</CardDescription>
        </CardHeader>
        <CardContent>

        </CardContent>
      </Card>
    </Link>
  )
}
