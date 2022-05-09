import ProjectInfoCard from '@/components/walletConnect/ProjectInfoCard'
import RequesDetailsCard from '@/components/walletConnect/RequestDetalilsCard'
import RequestMethodCard from '@/components/walletConnect/RequestMethodCard'
import RequestModalContainer from '@/components/walletConnect/RequestModalContainer'
import ModalStore from '@/store/ModalStore'
import { Button, Divider, Modal, Text } from '@nextui-org/react'
import { Fragment } from 'react'

export default function SessionUnsuportedMethodModal() {
  // Get request and wallet data from store
  const requestEvent = ModalStore.state.data?.requestEvent
  const requestSession = ModalStore.state.data?.requestSession

  // Ensure request and wallet are defined
  if (!requestEvent || !requestSession) {
    return <Text>Missing request data</Text>
  }

  // Get required request data
  const { method } = requestEvent.request

  return (
    <Fragment>
      <RequestModalContainer title="Unsuported Method">
        <ProjectInfoCard metadata={requestSession.peer.metadata} />

        <Divider y={2} />

        <RequesDetailsCard
          chains={[requestEvent.chainId ?? '']}
          protocol={requestSession.relay.protocol}
        />

        <Divider y={2} />

        <RequestMethodCard methods={[method]} />
      </RequestModalContainer>

      <Modal.Footer>
        <Button auto flat color="error" onClick={ModalStore.close}>
          Close
        </Button>
      </Modal.Footer>
    </Fragment>
  )
}
