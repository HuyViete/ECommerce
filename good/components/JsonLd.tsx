import { Product } from '@/lib/products';

interface JsonLdProps {
  product: Product;
  canonicalUrl: string;
}

export function ProductJsonLd({ product, canonicalUrl }: JsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://apexacoustics.com',
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Transducers',
            'item': 'https://apexacoustics.com/products',
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': product.name,
            'item': canonicalUrl,
          },
        ],
      },
      {
        '@type': 'Product',
        'name': product.name,
        'image': [`https://apexacoustics.com${product.image}`],
        'description': product.answerFirstSummary,
        'sku': product.sku,
        'mpn': product.mpn,
        'gtin13': product.gtin13,
        'brand': {
          '@type': 'Brand',
          'name': product.brand,
        },
        'additionalProperty': [
          {
            '@type': 'PropertyValue',
            'name': 'Active Noise Cancellation',
            'value': '-45.2 dB',
          },
          {
            '@type': 'PropertyValue',
            'name': 'Battery Capacity',
            'value': '820 mAh (52h playback)',
          },
          {
            '@type': 'PropertyValue',
            'name': 'Water Resistance',
            'value': 'IPX5 Sweatproof',
          },
          {
            '@type': 'PropertyValue',
            'name': 'Acoustic Target',
            'value': 'Harman 2024 Reference Target',
          },
        ],
        'offers': {
          '@type': 'Offer',
          'url': canonicalUrl,
          'priceCurrency': product.currency,
          'price': product.price.toFixed(2),
          'priceValidUntil': '2027-12-31',
          'itemCondition': 'https://schema.org/NewCondition',
          'availability': 'https://schema.org/InStock',
          'hasMerchantReturnPolicy': {
            '@type': 'MerchantReturnPolicy',
            'applicableCountry': 'US',
            'returnPolicyCategory': 'https://schema.org/MerchantReturnFiniteReturnWindow',
            'merchantReturnDays': product.returnPolicy.returnWindowDays,
            'returnMethod': 'https://schema.org/ReturnByMail',
            'returnFees': 'https://schema.org/FreeReturn',
            'merchantReturnLink': product.returnPolicy.policyUrl,
          },
          'shippingDetails': {
            '@type': 'OfferShippingDetails',
            'shippingRate': {
              '@type': 'MonetaryAmount',
              'value': product.shippingDetails.shippingRate.toFixed(2),
              'currency': product.currency,
            },
            'shippingDestination': {
              '@type': 'DefinedRegion',
              'addressCountry': product.shippingDetails.destinationCountry,
            },
            'deliveryTime': {
              '@type': 'ShippingDeliveryTime',
              'handlingTime': {
                '@type': 'QuantitativeValue',
                'minValue': 0,
                'maxValue': 1,
                'unitCode': 'DAY',
              },
              'transitTime': {
                '@type': 'QuantitativeValue',
                'minValue': 1,
                'maxValue': 2,
                'unitCode': 'DAY',
              },
            },
          },
        },
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': product.ratingValue,
          'reviewCount': product.reviewCount,
          'bestRating': '5.0',
          'worstRating': '1.0',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
