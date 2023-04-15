import { Identity } from "@semaphore-protocol/identity"
import { useCallback, useEffect, useState } from "react"

const CreateIdentity = () => {
    const [_identity, setIdentity] = useState<Identity>()

    useEffect(() => {
        const identityString = localStorage.getItem("identity")

        if (identityString) {
            const identity = new Identity(identityString)

            setIdentity(identity)

        }
    }, [])

    const createIdentity = useCallback(async () => {
        const identity = new Identity()

        setIdentity(identity)

        localStorage.setItem("identity", identity.toString())
    }, [])
    return(
        <>
        {_identity ? (
                <div>
                    <div className="box">
                        <p className="box-text">Identity Created</p>
                    </div>
                </div>
            ) : (
                <div>
                    <button className="button text-white" onClick={createIdentity}>
                        Create identity
                    </button>
                </div>
            )}
        </>
    )
}

export default CreateIdentity