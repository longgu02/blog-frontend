import Head from 'next/head'

interface MetaProps {
  title: string
  description: string
  url?: string
  imageUrl?: string
  timestamp?: string
  keywords?: string
}

export function Meta({
  title,
  description,
  url,
  imageUrl,
  timestamp,
  keywords,
}: MetaProps) {
  return (
    <Head>
      <title>{title}</title>

      <meta property="fb:app_id" content="2018978111628611" />
      <meta property="og:type" content="website" />
      {url && <meta property="og:url" content={url} />}
      <meta name="description" content={description} key="description" />
      <meta property="og:title" content={title} key="title" />
      <meta
        property="og:description"
        content={description}
        key="ogdescription"
      />
      <meta property="og:site_name" content="Trava.Finance" />
      {imageUrl && (
        <meta property="og:image" content={imageUrl} key="ogimage" />
      )}

      {imageUrl && (
        <meta name="twitter:image" content={imageUrl} key="twitterimage" />
      )}
      {imageUrl && (
        <meta name="twitter:image:alt" content="cover image" key="twitteralt" />
      )}
      <meta name="twitter:site" content="@trava.finance" key="twittersite" />
      <meta
        property="twitter:card"
        content={imageUrl ? 'summary_large_image' : 'summary'}
        key="twittercard"
      />
      <meta name="twitter:title" content={title} key="twittertitle" />
      <meta
        name="twitter:description"
        content={description}
        key="twitterdescription"
      />

      {timestamp && <meta name="revised" content={timestamp} key="timestamp" />}
      <meta
        name="keywords"
        key="keywords"
        content={
          keywords ??
          'Decentralized Finance, DeFi, cross-chain lending, lending, borrowing, Binance Smart Chain, BSC, assets, smart contracts, trava'
        }
      />
    </Head>
  )
}
