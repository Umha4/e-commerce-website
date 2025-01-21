
import Hero from "@/components/hero";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FeatureProducts from "@/components/feature-product";
import FeauresPosts from "@/components/features-post";
import Productclassic from "@/components/product-classic";
import BlogsPage from "@/components/blogs";
import EditorsPics from "@/components/editor-pics";




export default function Home() {
  return (
    <>
    <Header />
    <Hero />
     <EditorsPics />
    <FeatureProducts />
    <Productclassic/>
    <FeauresPosts /> 
    <BlogsPage/>
    <Footer />
    
    </>
  );
}