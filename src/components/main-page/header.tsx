"use client"

import { ToggleTheme } from "@/components/theme-toggle"
import { Logo } from "@/components/main-page/logo"
import { CartSidebar } from "@/components/main-page/cart/sidebar"

export const Header = () => {
    return (
        <header className="flex justify-between items-center mt-4" >

            <div className="flex gap-3 items-center justify-center">

                <Logo />
                <ToggleTheme />

            </div>

            <div> <CartSidebar/> </div>

        </header>
    )
}