//logo picture

import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"]
});

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        src="/logo.svg"
        height="40"
        width="40"
        alt="Logo"
        className="dark:hidden"      //避免切換顏色的衝突
      />
      <Image
        src="/logo-dark.svg"          //dark 模式有切換
        height="40"
        width="40"
        alt="Logo"
        className="hidden dark:block"    //避免切換顏色的衝突
      />
      <p className={cn("font-semibold", font.className)}>
        111010575 周辰恩
      </p>
    </div>
  )
}
