import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// const Images = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       placeholderImage: file(
//         relativePath: { eq: "home/topBanner/topBanner.jpeg" }
//       ) {
//         childImageSharp {
//           fluid(maxWidth: 2000) {
//             ...GatsbyImageSharpFluid_withWebp
//             presentationWidth
//           }
//         }
//       }
//     }
//   `);

//   return (
//     <Img
//       fluid={data.placeholderImage.childImageSharp.fluid}
//       alt="Electrician image"
//       style={{ height: '100%' }}
//     />
//   );
// };

// export default Images;

const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid(maxWidth: 500, maxHeight: 500) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`;

const query = graphql`
  query {
    image1: file(relativePath: { eq: "home/services/service-icons1.jpg" }) {
      ...squareImage
    }

    image2: file(relativePath: { eq: "home/services/service-icons2.jpg" }) {
      ...squareImage
    }

    image3: file(relativePath: { eq: "home/services/service-icons3.jpg" }) {
      ...squareImage
    }

    image4: file(relativePath: { eq: "home/services/service-icons4.jpg" }) {
      ...squareImage
    }

    image5: file(relativePath: { eq: "home/services/service-icons5.jpg" }) {
      ...squareImage
    }

    image6: file(relativePath: { eq: "home/services/service-icons6.jpg" }) {
      ...squareImage
    }
  }
`;

// const data = useStaticQuery(graphql`
//   query {
//     placeholderImage: file(
//       relativePath: { eq: "home/topBanner/topBanner.jpeg" }
//     ) {
//       childImageSharp {
//         fluid(maxWidth: 2000) {
//           ...GatsbyImageSharpFluid_withWebp
//           presentationWidth
//         }
//       }
//     }
//   }
// `);

console.log('query', query);

export default query;
