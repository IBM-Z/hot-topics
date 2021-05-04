import { useStaticQuery, graphql } from "gatsby";

export const useSiteFrontmatter = () => {
  const { allMdx } = useStaticQuery(
    graphql`
      query SiteFrontmatter {
        allMdx {
          edges {
            node {
              frontmatter {
                author
                date
                description
                readTime
                title
              }
            }
          }
        }
      }
    `
  );
  return allMdx.frontmatter;
};
