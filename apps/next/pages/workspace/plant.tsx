import Feature from 'app/bundles/custom/pages/plant'
import { useSession } from 'protolib'

export default function PlantPage(props:any) {
  useSession(props.pageSession)
  return <Feature.component {...props} />
}

export const getServerSideProps = Feature.getServerSideProps