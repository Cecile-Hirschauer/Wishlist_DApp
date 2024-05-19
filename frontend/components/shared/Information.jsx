import { RocketIcon } from "@radix-ui/react-icons"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"

const Information = ({ hash, isConfirming, isConfirmed, error }) => {
    return (
        <>
            {hash &&
                <Alert className="bg-lime-200 mt-5 mb-5">
                    <RocketIcon className="h-4 w-4" />
                    <AlertTitle>Information</AlertTitle>
                    <AlertDescription>
                        Transaction hash : {hash}
                    </AlertDescription>
                </Alert>
            }
            {isConfirming &&
                <Alert className="bg-yellow-200 mt-5 mb-5">
                    <RocketIcon className="h-4 w-4" />
                    <AlertTitle>Information</AlertTitle>
                    <AlertDescription>
                        The transaction is being confirmed.
                    </AlertDescription>
                </Alert>}
            {isConfirmed &&
                <Alert className="bg-lime-200 mt-5 mb-5">
                    <RocketIcon className="h-4 w-4" />
                    <AlertTitle>Bravo !</AlertTitle>
                    <AlertDescription>
                        Transaction confirmed.
                    </AlertDescription>
                </Alert>}
            {error && (
                <Alert className="bg-rose-200 mt-5 mb-5">
                    <ExclamationTriangleIcon className="h-4 w-4" />
                    <AlertTitle>Error !</AlertTitle>
                    <AlertDescription>
                        Error : {error.shortMessage || error.message}
                    </AlertDescription>
                </Alert>
            )}
        </>
    )
}

export default Information