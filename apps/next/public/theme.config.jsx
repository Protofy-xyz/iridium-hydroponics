

export default {
  logo: <div style={{ display: 'flex', alignItems: 'center' }}>
    <span style={{ marginRight: '10px' }}>
      <img src="/logo-simple.png" alt="Iridium Hydroponics logo" width="40" height="40" />
    </span>
    <span style={{ fontWeight: 'bold', fontSize: '18px', opacity:0.8}}>Iridium Hydroponics</span>
  </div>,
  project: {
    link: 'https://github.com/Protofy-xyz/Iridium-hydroponics-v1'
  },
  docsRepositoryBase: 'https://github.com/Protofy-xyz/Iridium-hydroponics-v1/tree/main/apps/nextra',
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{' '}
        {/* <a href="http://localhost:8080/documentation" target="_blank"> */}
          Iridium Hydroponics
        {/* </a> */}
      </span>
    )
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Iridium Hydroponics" />
      <meta property="og:description" content="Iridium Hydroponics documentation" />
      <link rel="icon" type="image/x-icon" href="/favicon.png"></link>
    </>
  ),
  primaryHue: 118,
  primarySaturation: 55
  // ... other theme options
}