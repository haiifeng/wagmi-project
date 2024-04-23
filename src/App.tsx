import { useEffect, useState } from 'react'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { useSignMessage, useSignTypedData } from 'wagmi'
import { signTypedDataData } from '.'
import { WalletDriverName } from './constants'
import tokenExchangeABI from './abi/EvmToBtcBridge/TokenExchange.json';
import permitABI from './abi/EvmToBtcBridge/Permit.json';
import toBN from './utils/to-bn'
import getPermitSignature from './utils/signTypedData/getPermitSignature'
import { ethers } from 'ethers';

const swapContract = "0x3907aA483FAe9DE1128EbEe92737a37aB377e826"
const permitAddress = '0xc90ead4a08e02066b2d2d8f452dd6bf0aa1a5e07';
const gasFee = '2';
const amount = '1';
const decimal = 18;
const chain = {
  chain: {
    id: 200810,
  },
}
const deadline = "1713598842"

function App() {
  const account = useAccount()
  const { connectors, connect, status, error } = useConnect()
  const { disconnect } = useDisconnect()
  const { signMessage } = useSignMessage()
  const { signTypedData, signTypedDataAsync } = useSignTypedData()
  // const [signMessageValue, setSignMessageValue] = useState('')
  // const [signTypedDataValue, setSignTypedDataValue] = useState('')
  const [signTypedDataAsyncValue, setSignTypedDataAsyncValue] = useState('')
  const [permitSignatureValue, setPermitSignatureValue] = useState('')
  const [swapError, setSwapError] = useState('')

  const onSign = async () => {
    try {
      const metamask = connectors.find((connector: any) => connector.id === WalletDriverName.MetaMask);
      const providerFromMetamask = await metamask?.getProvider() as ethers.providers.ExternalProvider
      console.log(2222, providerFromMetamask, window.ethereum)
      const provider = new ethers.providers.Web3Provider(providerFromMetamask || window.ethereum);
      const signer = provider.getSigner();

      const exchangeInstance = new ethers.Contract(
        swapContract,
        tokenExchangeABI,
        signer,
      );


      const permitInstance = new ethers.Contract(permitAddress, permitABI, signer);

      const timeTamp = (dt = 0) => {
        return Math.ceil((new Date().getTime() + dt * 1000) / 1000).toString();
      };
      // 5分钟， 以秒为单位
      // const duration = 2 * 24 * 60 * 60;
      const duration = 5 * 60;
      // const deadline = timeTamp(duration);

      const total = toBN(amount).plus(gasFee).toString();
      const valuedTotal = toBN(total).multipliedBy(Math.pow(10, decimal)).toFixed(0);

      var permitSignature = await getPermitSignature(
        signer,
        permitInstance,
        swapContract,
        valuedTotal,
        deadline,
        chain,
      );

      setPermitSignatureValue(permitSignature)
      console.log(1111, permitSignature)

    }
    catch (error) {
      console.log(666, error)
      setSwapError(JSON.stringify(error));
    }

  }

  useEffect(() => {
    console.log('11111import.meta.env:', import.meta.env)
  }, [])

  return (
    <div>
      <div>
        <h2>Account</h2>

        <div>
          status: {account.status}
          <br />
          addresses: {JSON.stringify(account.addresses)}
          <br />
          chainId: {account.chainId}
        </div>

        {account.status === 'connected' && (
          <button type="button" onClick={() => disconnect()}>
            Disconnect
          </button>
        )}
      </div>

      <div>
        <h2>Connect</h2>
        {connectors.map((connector: any) => (
          <button
            key={connector.uid}
            onClick={() => connect({ connector })}
            type="button"
          >
            {connector.name}
          </button>
        ))}
        <div>{status}</div>
        <div>{error?.message}</div>
      </div>

      {/* <div>
        <button onClick={() => signMessage({ message: 'hello world' }, {
          onSuccess(data, variables, context) {
            console.log('signMessage success: ', { data, variables, context })
            setSignMessageValue(data)
          },
        })}>
          Sign message: {signMessageValue}
        </button>
      </div> */}

      {/* <div>
        <button onClick={() => signTypedData(signTypedDataData, {
          onSuccess(data: string) {
            setSignTypedDataValue(data)
          },
        })}>
          Sign typedata: {signTypedDataValue}
        </button>
      </div> */}

      <div>
        <button onClick={async () => {
          console.log('signTypedData input: ', signTypedDataData)
          const res = await signTypedDataAsync(signTypedDataData)
          console.log('signMessage output: ', res)
          setSignTypedDataAsyncValue(res)
        }}>
          Sign typedata async: {signTypedDataAsyncValue}
        </button>
      </div>

      {/* <div>
        <button>permit: 0x4ed0ae42bf48e47218e5c1bf6ecb3ab09f8392293c6eef66fcf3c96a4cf2d04e30ac726eca0746e808924897a9ffa0ae72a78be58aca1024582e0d3f9e48b48d1c</button>
      </div> */}

      <div>
        <button onClick={onSign}>permit sing: {permitSignatureValue}</button>
      </div>

      {swapError}


      <p>
        <div>WC</div>
        {/* <div>{import.meta.env}</div> */}
      </p>
    </div>
  )
}

export default App
