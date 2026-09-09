import SubCategoryPageContent from "./SubCategoryPageContent";

const CATEGORY_MAP: Record<string, { name: string }> = {
  makeup: { name: "Makeup" },
  skincare: { name: "Skincare" },
  fragrance: { name: "Fragrance" },
  hair: { name: "Hair" },
};

const SUBCATEGORY_LABELS: Record<string, string> = {
  foundation: "Foundation", contour: "Contour", concealer: "Concealer",
  setting: "Setting Spray & Powder", highlighter: "Highlighter", primer: "Face Primer",
  tinted: "Tinted Moisturizer", "face-sets": "Face Sets", "bb-cc": "BB & CC Cream",
  "color-correct": "Color Correct", moisturizers: "Moisturizers", cleansers: "Cleansers",
  serums: "Serums", masks: "Masks", "eye-treatments": "Eye Treatments",
  "sun-care": "Sun Care", exfoliators: "Exfoliators", women: "Women's Perfume",
  men: "Men's Cologne", rollerballs: "Rollerballs", candles: "Candles",
  "gift-sets": "Gift Sets", shampoo: "Shampoo", conditioner: "Conditioner",
  styling: "Styling", treatments: "Tools",
};

interface SubCategoryPageProps {
  params: Promise<{ locale: string; slug: string; subcategory: string }>;
}

export default async function SubCategoryPage({ params }: SubCategoryPageProps) {
  const { locale, slug, subcategory } = await params;
  const categoryName = CATEGORY_MAP[slug]?.name ?? slug;
  const subcategoryName = SUBCATEGORY_LABELS[subcategory] ?? subcategory;

  return (
    <SubCategoryPageContent locale={locale} slug={slug} subcategory={subcategory} categoryName={categoryName} subcategoryName={subcategoryName} />
  );
}

export function generateStaticParams() {
  const subcategories = {
    makeup: ["foundation", "contour", "concealer", "setting", "highlighter", "primer"],
    skincare: ["moisturizers", "cleansers", "serums", "masks", "sun-care"],
    fragrance: ["women", "men", "rollerballs", "candles"],
    hair: ["shampoo", "conditioner", "styling", "treatments"],
  };
  const params: { locale: string; slug: string; subcategory: string }[] = [];
  const locales = ["en", "ar"];
  for (const locale of locales) {
    for (const [slug, subs] of Object.entries(subcategories)) {
      for (const sub of subs) {
        params.push({ locale, slug, subcategory: sub });
      }
    }
  }
  return params;
}