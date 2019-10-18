export default image => ({
  fixed: image.childImageSharp.fixed.src,
  fluid: image.childImageSharp.fluid.src,
})
