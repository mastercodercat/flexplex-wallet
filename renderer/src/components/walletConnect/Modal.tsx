import ModalStore from '@/store/ModalStore'
import SessionProposalModal from '@/views/walletConnectModals/SessionProposalModal'
import SessionSendTransactionModal from '@/views/walletConnectModals/SessionSendTransactionModal'
import SessionSignCosmosModal from '@/views/walletConnectModals/SessionSignCosmosModal'
import SessionRequestModal from '@/views/walletConnectModals/SessionSignModal'
import SessionSignSolanaModal from '@/views/walletConnectModals/SessionSignSolanaModal'
import SessionSignTypedDataModal from '@/views/walletConnectModals/SessionSignTypedDataModal'
import SessionUnsuportedMethodModal from '@/views/walletConnectModals/SessionUnsuportedMethodModal'
import { Modal as NextModal } from '@nextui-org/react'
import { useSnapshot } from 'valtio'

export default function Modal() {
  const { open, view } = useSnapshot(ModalStore.state)

  return (
    <NextModal blur open={open} style={{ border: '1px solid rgba(139, 139, 139, 0.4)' }}>
      {view === 'SessionProposalModal' && <SessionProposalModal />}
      {view === 'SessionSignModal' && <SessionRequestModal />}
      {view === 'SessionSignTypedDataModal' && <SessionSignTypedDataModal />}
      {view === 'SessionSendTransactionModal' && <SessionSendTransactionModal />}
      {view === 'SessionUnsuportedMethodModal' && <SessionUnsuportedMethodModal />}
      {view === 'SessionSignCosmosModal' && <SessionSignCosmosModal />}
      {view === 'SessionSignSolanaModal' && <SessionSignSolanaModal />}
    </NextModal>
  )
}
