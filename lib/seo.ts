// Split-Pay-landing-page/lib/seo.ts
export const createMetadata = ({
    title = "SplitPay - Group Expense Manager",
    description = "SplitPay helps you manage group expenses easily and transparently.",
    img = "/placeholder-logo.png",
    siteName = "SplitPay",
    type = "article",
    canonical = process.env.NEXT_PUBLIC_URL,
    url = process.env.NEXT_PUBLIC_URL,
    ...other
  } = {}) => {
    return {
      title,
      description,
      ...other,
      metadataBase: new URL(process.env.NEXT_PUBLIC_URL!),
      openGraph: {
        title,
        description,
        siteName,
        url,
        type,
        images: img
          ? [{ url: img, width: 1200, height: 630, alt: "Blog Banner" }]
          : [],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: img ? [img] : [],
      },
    };
  };