import { UserType } from "@/types/user"
import MobileMenu from "./mobile_menu"
import CartIcon from "./cart_icon"

interface NavbarProps {
    user: UserType | null
}

const Navbar = ({ user }: NavbarProps) => {
    return (
        <nav className="flex items-center gep-3">
            {/*Mobile Navigation*/}
            {user && <CartIcon />}
            <MobileMenu />

            {/*Desktop Navigation*/}
            <div className="hidden">
                <div>Desktop Links</div>
                {user ? (
                    <div>Desktop User Menu</div>
                ) : (
                    <div>Go to signin button</div>
                )}
            </div>
        </nav>
    )
}

export default Navbar