import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CategoryType } from "@/types/category"

import { MoreVertical, Pencil, Search, Trash2 } from "lucide-react"

interface CategoryListProps {
    categories: CategoryType[]
}

const CategoryList = ({ categories }: CategoryListProps) => {
    console.log(categories)

    return (
        <Card>
            <CardHeader className="pb-4">
                <CardTitle className="text-lg sm:text-xl">Category List</CardTitle>

                <Tabs>
                    <TabsList className="grid grid-cols-3 md:gap-4">
                        <TabsTrigger value="all">All Categories</TabsTrigger>
                        <TabsTrigger value="active">Active</TabsTrigger>
                        <TabsTrigger value="inactive">Inactive</TabsTrigger>
                    </TabsList>

                    <div className="relative mt-4">
                        <Search size={16} className="absolute left-2 top-2.5 text-muted-foreground" />
                        <Input placeholder="Search categories ..." className="pl-8" />
                    </div>
                </Tabs>
            </CardHeader>

            <CardContent>
                <div className="border rounded-md overflow-hidden">
                    <div className="grid grid-cols-12 bg-muted py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium">
                        <div className="col-span-1 hidden sm:block">No.</div>
                        <div className="col-span-6 sm:col-span-5">Category name</div>
                        <div className="col-span-2 text-center hidden sm:block">Products</div>
                        <div className="col-span-3 sm:col-span-2 text-center">Status</div>
                        <div className="col-span-3 sm:col-span-2 text-right">Actions</div>
                    </div>

                    {categories.length > 0 ? (
                        categories.map((category, index) => (
                            <div
                                key={category.id}
                                className="grid grid-cols-12 py-3 px-2 sm:px-4 border-t items-center hover:bg-gray-50 transition-colors duration-100 text-sm"
                            >
                                <div className="col-span-1 hidden sm:block">{index + 1}</div>

                                <div className="col-span-6 sm:col-span-5 truncate pr-2">{category.name}</div>

                                <div className="col-span-2 text-center hidden sm:block">0</div>

                                <div className="col-span-3 sm:col-span-2 text-center">
                                    <Badge variant={category.status === "Active" ? "default" : "outline"

                                    }
                                        className="px-1 sm:px-2"
                                    >
                                        {category.status}
                                    </Badge>
                                </div>

                                <div className="col-span-3 sm:col-span-2 flex justify-end">
                                    {/* 👇 ปุ่มสำหรับ mobile (แสดงเฉพาะ md ลงไป) */}
                                    <div className="flex gap-1 md:hidden">
                                        <Button variant="ghost" size="icon">
                                            <Pencil size={16} />
                                        </Button>
                                        <Button variant="ghost" size="icon">
                                            <Trash2 size={16} className="text-red-600" />
                                        </Button>
                                    </div>

                                    {/* 👇 ปุ่มสำหรับ desktop (แสดงเฉพาะ md ขึ้นไป) */}
                                    <div className="hidden md:flex">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="icon" className="size=8">
                                                    <MoreVertical size={16} />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            {/* ใส่เมนูได้ตามต้องการ เช่น Edit, Delete */}
                                            <DropdownMenuContent align="center">
                                                <DropdownMenuItem>
                                                    <Pencil size={15} />
                                                    <span>Edit</span>
                                                </DropdownMenuItem>

                                                <DropdownMenuSeparator />

                                                <DropdownMenuItem>
                                                    <Trash2 size={15} className="text-destructive" />
                                                    <span className="text-destructive">Delete</span>
                                                </DropdownMenuItem>

                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                </div>


                            </div>
                        ))
                    ) : (
                        <div className="py-8 text-center text-muted-foreground">
                            No categories found matching your search
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}

export default CategoryList
