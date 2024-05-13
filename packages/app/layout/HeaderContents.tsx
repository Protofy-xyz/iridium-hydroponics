import { HeaderContents as ProtoHeaderContents, HeaderContentsProps, HeaderLink, Tinted } from 'protolib'
import { XStack, useThemeName } from '@my/ui';
import dynamic from 'next/dynamic';
import { SiteConfig } from '../conf';

export const HeaderContents = (props: HeaderContentsProps & { headerTitle?: string }) => {
  //@ts-ignore
  const SessionInfo = dynamic(() => import('./SessionInfo'), { ssr: false })
  const themeName = useThemeName() ?? 'light'
  return <ProtoHeaderContents
    logo={
      <XStack>
        <img src={'/media/logoFull-' + themeName + '.png'} style={{ height: 'auto', width: '100px' }}></img>
      </XStack>
    }
    rightArea={<XStack ai="center">
      {props.topBar}
      <XStack $xs={{ display: 'none' }}>
        <Tinted>
          <HeaderLink id="header-session-doc" href={"/documentation"}>Docs</HeaderLink>
          {
            <SessionInfo />
          }
        </Tinted>
      </XStack>
      {/* <XStack>
          <ConnectionIndicator />
        </XStack> */}
    </XStack>}
    {...props}
  />
}


