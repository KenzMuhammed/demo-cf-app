import Banner from "@/components/common/Banner";
import BlogDetails from "@/widgets/Blogs/BlogDetails";

export default function Services() {
  return (
    <>
      <Banner
        title="Choosing the Right Welding Equipment for High Risk Industrial Operations"
        bgImage="/blogs/blog-2.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blogs", href: "/blog" },
          {
            label: "Choosing Welding Equipment",
            href: "/blog-details",
          },
        ]}
      />
      <BlogDetails />
    </>
  );
}
