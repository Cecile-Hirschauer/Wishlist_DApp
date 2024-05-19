"use client"

import { useAccount } from "wagmi";

import NotConnected from "@/components/shared/NotConnected";
import AddToWishList from "@/components/shared/AddToWisList";


const page = () => {
    const { isConnected } = useAccount()
    return (
        <div>
            {
                isConnected ? <AddToWishList /> : <NotConnected />
            }
        </div>
    );
};

export default page;
