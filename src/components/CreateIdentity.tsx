import { Identity } from "@semaphore-protocol/identity"
import { useCallback, useContext, useEffect, useState } from "react"
import { AccountContext } from "../App"

const CreateIdentity = () => {
    const accountContext = useContext(AccountContext)

    useEffect(() => {
        const identityString = localStorage.getItem("identity")

        if (identityString) {
            const identity = new Identity(identityString)
            if(accountContext.setIdentity) {
                accountContext.setIdentity(identity)
            }

        }
    }, [])

    const createIdentity = useCallback(async () => {
        const identity = new Identity()
        if(accountContext.setIdentity) {
            accountContext.setIdentity(identity)
        }

        localStorage.setItem("identity", identity.toString())
    }, [])
    return(
        <>
        {accountContext.identity instanceof Identity ? (
                <div>
                    <div className="box">
                        <p className="box-text">Identity Created</p>
                    </div>
                </div>
            ) : (
                <div>
                    <button className="button text-white" onClick={createIdentity}>
                        Create identity with Semaphore
                    </button>
                </div>
            )}
        </>
    )
}

export default CreateIdentity