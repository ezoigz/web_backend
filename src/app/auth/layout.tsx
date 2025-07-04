import { authCheck } from "@/features/auths/db/auths"
import { redirect } from "next/navigation"
import HeaderCustomer from "@/components/customer_page/headers/header"

interface AuthlayoutProps {
    children: React.ReactNode
}

const Authlayout = async ({ children }: AuthlayoutProps) => {

    const user = await authCheck()


    if (user) {
        redirect("/")
    }

    return (
        <div className="flex flex-col justify-center min-h-svh">
            <HeaderCustomer user={null} />
            <main>{children}</main>
        </div>
    )
}

export default Authlayout