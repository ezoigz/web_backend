import { UserType } from "@/types/user"
import MobileMenu from "./mobile_menu"
import CartIcon from "./cart_icon"
import { DesktopNavLinks } from "./navlink"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import DesktopUserMenu from "./desktop_user_menu"

interface NavbarProps {
    user: UserType | null
}

const Navbar = ({ user }: NavbarProps) => {
    return (
        <nav className="flex items-center gep-3">
            {/*Mobile Navigation*/}
            {user && <CartIcon />}
            <MobileMenu user={user} />

            {/*Desktop Navigation*/}
            <div className="hidden md:flex md:items-center">
                <DesktopNavLinks />
                {user ?
                    <DesktopUserMenu user={user} />
                    :
                    (
                        <Button
                            size="sm"
                            asChild>
                            <Link href="/auth/signin">
                                เข้าสู่ระบบ
                            </Link>
                        </Button>
                    )
                }
            </div>
        </nav>
    )
}

export default Navbar