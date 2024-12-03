import React, {ReactNode} from "react";
import {Metadata} from "next";
import {NavBar} from "@/components/ui/navBar/NavBar";

export const metadata: Metadata = {
  title: "New NextJS",
  description: 'New NextJS'
}
//если в метададах нужно больше всего, и файл начнет увеличиваться, можно создавать отдельный в папке, который будет
// называется именно header.tsx
// но лучше уточнить в документации
export default function RootLayout({children}: {
  children: ReactNode //СТранички будут попадать теперь сюда
}) {
  return (
    <html lang="en">
    <body>
    <NavBar/>
    {children}
    </body>
    </html>
  )
}