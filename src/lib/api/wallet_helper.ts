import detectEthereumProvider from '@metamask/detect-provider'

module WalletHelper {
    let _provider
    let accounts = []

    export async function getProvider(): Promise<any> {
        if (_provider != null) return _provider

        _provider = await detectEthereumProvider()
        return _provider
    }

    export async function connect() {
        const provider = await getProvider()
        provider
            .request({ method: 'eth_requestAccounts' })
            .then((accts) => {
                accounts = accts
            })
            .catch((err) => {
                // TODO: Show metamask stuff
                if (err.code === 4001) {
                    // EIP-1193 userRejectedRequest error
                    // If this happens, the user rejected the connection request.
                    console.log('Please connect to MetaMask.')
                } else {
                    console.error(err)
                }
            })
    }

    export async function getAccount() {
        if (!!accounts || accounts.length == 0) {
            await connect()
        }

        return accounts[0]
    }
}

export default WalletHelper