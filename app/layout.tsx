import classes from "./page.module.css";
import {Metadata} from "next";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={classes.body}>{children}</body>
        </html>
    )
}

export const metadata: Metadata = {
    title: 'FrontendMentor.io - time tracking dashboard',
    description: 'challenge frontendmentor - time tracking dashboard',
    icons:{
        icon: '/favicon-32x32.png'

    }
}