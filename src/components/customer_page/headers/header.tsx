import Link from "next/link"
import { ShoppingBagIcon } from "lucide-react"
import Navbar from "./navbar"
import { UserType } from "@/types/user"

interface HeaderCustomerProps {
    user: UserType | null
}

const HeaderCustomer = ({ user }: HeaderCustomerProps) => {
    return (
        <header className="fixed top-0 inset-x-0 z-40 border-b-border shadow-sm">
            <div className=" max-w-7xl mx-auto px-4 xl:px-0 flex justify-between items-center h-16">
                {/* icon */}
                <Link href="/" className="flex items-center gap-2 text-primary">
                    <ShoppingBagIcon size={28} />
                    <h2 className="text-xl font-bold">DeepGarden</h2>
                </Link>

                {/* menu */}
                <Navbar user={user} />
            </div>
        </header>
    )
}

export default HeaderCustomer