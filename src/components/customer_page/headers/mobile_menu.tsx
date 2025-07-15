import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter
} from "@/components/ui/sheet"
import { UserType } from "@/types/user"
import { AuthButtons, SignoutButton, UserAvatar } from "./user_comp"
import { MobileNavLinks } from "./navlink"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link"


interface MobileMenuProps {
    user: UserType | null
}

const MobileMenu = ({ user }: MobileMenuProps) => {
    return (
        <Sheet>
            <SheetTrigger className="md:hidden" asChild>
                <Button variant="default" size="icon">
                    <Menu size={20} />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col w-full md:max-w-sm">
                <SheetHeader>
                    <SheetTitle className="text-primary text-xl">{user ? "โปรไฟล์ของคุณ" : "Welcome"}</SheetTitle>
                </SheetHeader>

                <div className="flex-1 flex flex-col gap-6">

                    {/*user Profile*/}
                    {user ? <UserAvatar user={user} /> : <AuthButtons />}

                    <Separator />

                    <div className="px-4">
                        <ScrollArea className="h-48 sm:h-60 w-full">
                            {/*navlink*/}
                            <MobileNavLinks />
                            {/*navlink admin*/}

                            {user && user.role === "Admin" && (
                                <div className="mt-2">
                                    <Separator className="mb-2" />
                                    <Button
                                        variant="secondary"
                                        size="lg"
                                        className="w-full"
                                        asChild
                                    >
                                        <Link href="/admin">หลังบ้าน</Link>
                                    </Button>
                                </div>
                            )}
                        </ScrollArea>
                    </div>
                </div>

                {user && (
                    <SheetFooter>
                        <SignoutButton isMobile />
                    </SheetFooter>
                )}
            </SheetContent>

        </Sheet>
    )
}

export default MobileMenu