import PostCard from "@/components/PostCard";
import { Box } from "@/style";
import React from "react";

const HeroSection = async ({ posts }) => {
  return (
    <Box className="container">
      <Box
        className="row d-flex align-items-stretch row-gap-4"
        style={{ minHeight: "95vh" }}
      >
        <Box className="col-md-4">
          <Box className="row gap-4 h-100">
            {posts?.map(
              ({ img, title, author, createdAt, catSlug, slug, views }) => {
                return (
                  <Box className="col-md-12">
                    <PostCard
                      imageUrl={img}
                      title={title}
                      creator={author}
                      date={createdAt.substring(0, 10)}
                      // comments={comments?.length}
                      category={catSlug}
                      slug={slug}
                      views={views}
                      catSlug={catSlug}
                    />
                  </Box>
                );
              }
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
