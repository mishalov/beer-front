import normalizeImage from "./normalizeImage"

export default beers => {
  const { edges } = beers
  console.log("edges: ", edges)
  return edges.map(element => {
    const { node } = element
    return { ...node, photo: normalizeImage(node.photo) }
  })
}
