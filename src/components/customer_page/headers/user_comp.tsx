"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SheetClose } from "@/components/ui/sheet"
import { useSignout } from "@/hooks/use_sign_out"
import { UserType } from "@/types/user"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


interface userComProps {
    user: UserType
}

export const AuthButtons = () => (
    <div className="flex justify-center gap-10">
        <Button
            size="lg"
            asChild>
            <SheetClose asChild>
                <Link href="/auth/signup">ลงทะเบียน</Link>
            </SheetClose>
        </Button>
        <Button
            variant="outline"
            size="lg"
            asChild>
            <SheetClose asChild>
                <Link href="/auth/signin">เข้าสู่ระบบ</Link>
            </SheetClose>
        </Button>
    </div>
)

export const SignoutButton = ({ isMobile = false }) => {
    const { isPending, handleSignout } = useSignout()
    if (isMobile) {
        return (
            <SheetClose asChild>
                <Button
                    // variant="destructive" ไว้สำหรับปรับปุ่ม
                    size="lg"
                    disabled={isPending}
                    onClick={handleSignout}
                >
                    ออกจากระบบ
                </Button>
            </SheetClose >


        )
    }

    return (
        <Button
            className="w-full mt-4"
            disabled={isPending}
            onClick={handleSignout}

        >ออกจากระบบ</Button>
    )
}

export const UserAvatar = ({ user }: userComProps) => (
    <div className="px-4">
        <Card className="border-primary/50">
            <CardContent className="flex flex-col items-center gap-3">
                {/*รูปภาพ*/}
                <Image
                    alt={user.name || "Profile"}
                    src={user.picture || "/images/no-user-image.webp"}
                    width={128}
                    height={128}
                    priority
                    className="rounded-full border-2 border-primary object-cover"
                />
                {/*email /name*/}
                <h2 className="text-xl font-semibold">
                    {user.name || user.email}
                </h2>
            </CardContent>
        </Card>
    </div>
)

export const UserAvatarSmall = ({ user }: userComProps) => (
    <Avatar className="border-2 border-primary">
        <AvatarImage
            src={user.picture || undefined}
            alt={user.name || "User"}
        />
        <AvatarFallback className="bg-primary text-primary-foreground">
            {user.name
                ? user.name.slice(0, 2).toUpperCase()
                : user.email.slice(0, 2).toUpperCase()}
        </AvatarFallback>

    </Avatar>
)

export const UserDropdownAvatar = ({ user }: userComProps) => (
    <Avatar className="size-16 border-2 border-primary">
        <AvatarImage
            src={user.picture || undefined}
            alt={user.name || "User"} />
        <AvatarFallback className="text-lg">
            {user.name
                ? user.name.slice(0, 2).toUpperCase()
                : user.email.slice(0, 2).toUpperCase()}
        </AvatarFallback>
    </Avatar>
)