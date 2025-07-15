import Link from "next/link"
import { ShoppingBag, UserRoundCog } from "lucide-react"

const CartIcon = () => {
    return (
        <Link href="/cart" className="md:hidden"
        >
            <ShoppingBag size={20} />
            <UserRoundCog />
        </Link>
    )
}

export default CartIcon