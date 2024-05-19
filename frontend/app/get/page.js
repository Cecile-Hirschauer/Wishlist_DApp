"use client"

import { useAccount } from "wagmi";

import NotConnected from "@/components/shared/NotConnected";
import GetWishlist from "@/components/shared/GetWishlist";

const page = () => {
    const { isConnected } = useAccount()
    return (
        <div>
            {
                isConnected ? <GetWishlist /> : <NotConnected />
            }
        </div>
    );
};

export default page;
