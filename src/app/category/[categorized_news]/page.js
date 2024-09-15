import CategoryPage from "../../_components/CategoryPage";

export default function CategorizedNews({ params, searchParams }) {
  const { categorized_news } = params;
  const initialPage = parseInt(searchParams.page) || 1;
  const initialLimit = parseInt(searchParams.limit) || 10;
  
  return (
    <>
      <CategoryPage category={categorized_news} initialPage={initialPage} initialLimit={initialLimit} />
    </>
  );
}