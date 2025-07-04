import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

const MobileMenu = () => {
    return (
        <Button variant="default" size="icon">
            <Menu size={20} />
        </Button>
    )
}

export default MobileMenu