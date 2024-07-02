"use client";
import "./globals.css";

import Footer from "@/components/footer";
import Menu from "@/components/menu";
import Logo from "@/components/logo";
import { ReactNode } from "react";

const wave =
  "M0 289L9.3 272.5C18.7 256 37.3 223 56.2 212.2C75 201.3 94 212.7 112.8 249C131.7 285.3 150.3 346.7 169 343.5C187.7 340.3 206.3 272.7 225 244.5C243.7 216.3 262.3 227.7 281.2 235C300 242.3 319 245.7 337.8 248.3C356.7 251 375.3 253 394 261.2C412.7 269.3 431.3 283.7 450 271.5C468.7 259.3 487.3 220.7 506.2 234C525 247.3 544 312.7 562.8 327.5C581.7 342.3 600.3 306.7 619 310.8C637.7 315 656.3 359 675 346.8C693.7 334.7 712.3 266.3 731.2 258.8C750 251.3 769 304.7 787.8 312.8C806.7 321 825.3 284 844 291.7C862.7 299.3 881.3 351.7 890.7 377.8L900 404L900 0L890.7 0C881.3 0 862.7 0 844 0C825.3 0 806.7 0 787.8 0C769 0 750 0 731.2 0C712.3 0 693.7 0 675 0C656.3 0 637.7 0 619 0C600.3 0 581.7 0 562.8 0C544 0 525 0 506.2 0C487.3 0 468.7 0 450 0C431.3 0 412.7 0 394 0C375.3 0 356.7 0 337.8 0C319 0 300 0 281.2 0C262.3 0 243.7 0 225 0C206.3 0 187.7 0 169 0C150.3 0 131.7 0 112.8 0C94 0 75 0 56.2 0C37.3 0 18.7 0 9.3 0L0 0Z";
// Function to generate random transformations

export default function RootLayout(props: { children: ReactNode}) {
  return (
    <html lang="en">
      <body className="overlfow-hidden">
        <div className="w-screen h-[90vh] bg-black relative overflow-hidden">
          <Menu />
          <div className="relative w-full h-full z-30 overflow-hidden">
            {props.children}
          </div>

          <div
            className="fixed z-20 inset-0 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.2) 2px, transparent 0)`,
              backgroundSize: "15px 15px",
              backgroundPosition: "-16.5px -16.5px",
              maskImage: `radial-gradient(ellipse at center, rgba(0, 0, 0, 1), transparent 75%)`,
            }}
          />
        </div>

        <Footer />
      </body>
    </html>
  );
}
