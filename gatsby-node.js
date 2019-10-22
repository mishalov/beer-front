const path = require(`path`)

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    // Запрос для получения данных, используемых при создании страниц.
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        return result
      })
    )
  })

// Реализация функции Gatsby API "createPages". Она вызывается один раз когда
// уровень данных готовится к работе для того, чтобы позволить плагину создать из этих данных страницы
exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators
  const getBeers = makeRequest(
    graphql,
    `
      {
        allStrapiBeers {
          edges {
            node {
              id
            }
          }
        }
      }
      `
  ).then(result => {
    // Создаём страницы для каждого пива
    result.data.allStrapiBeers.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.id}`,
        component: path.resolve(`src/pages/beer-page/index.js`),
        context: {
          id: node.id,
        },
      })
    })
  })
  // Запрашиваем материалы статей для использования при создании страниц.
  return getBeers
}
