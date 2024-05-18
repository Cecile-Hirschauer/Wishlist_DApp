import {Button} from "@/components/ui/button";
import {HomeIcon, EyeOpenIcon} from "@radix-ui/react-icons";
import Link from 'next/link'

export default function Home() {
    return (
        <div className={"home"}>
            <div className="home_inner">
                <h1 className={"home_inner_title"}>
                    Your decentralized platform to create
                    <span className={"home_inner_title_colored"}> wishlists </span> and
                    <span className={"home_inner_title_colored"}> fulfill the wishes </span>
                    of your friends and family
                </h1>
                <p className={"home_inner_description"}>WishBlock allows you to save, share and track the wishes of your
                    loved ones on the blockchain</p>
                <p className={"home_inner_description"}>for a transparent and secure experience.</p>
            </div>
            <div className={"home_inner_links"}>
                <Link href={"add"} className={"mr-5"}>
                    <Button className={"home_inner_links_button1 hover:bg-[#75fd38]"}>
                        <HomeIcon className={"mr-2"} />
                        Your wish list
                    </Button>
                </Link>
                <Link href={"get"} className={"ml-5"}>
                    <Button className={"home_inner_links_button2"}>
                        <EyeOpenIcon className={"mr-2"} />
                        View a wishlist
                    </Button>
                </Link>
            </div>
        </div>
    );
}
