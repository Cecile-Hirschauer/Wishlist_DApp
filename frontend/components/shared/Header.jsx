import Link from "next/link";
import Image from "next/image";
import {ConnectButton} from "@rainbow-me/rainbowkit";

const Header = () => {
    return (
        <nav className={'navbar'}>
            <div class="grow">
                <Link href={"/"}>
                    <Image src={'logo.svg'} alt={'Logo WishBlock'} width={150} height={30} />
                </Link>
            </div>
            <div>
                <ConnectButton showBalance={false} />
            </div>
        </nav>
    )
}

export default Header;