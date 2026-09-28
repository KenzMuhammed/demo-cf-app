import Banner from "@/components/common/Banner";
import BlogList from "@/widgets/Blogs/BlogList";
import FeaturedBlog from "@/widgets/Blogs/FeaturedBlog";

export default function Services() {
  return (
    <>
      <Banner
        title="Blogs"
        description="Straightforward industry insights drawn from real projects and real challenges"
        bgImage="/blogs/blog-banner-5.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blogs", href: "/blog" },
        ]}
      />
      <FeaturedBlog />
    </>
  );
}
