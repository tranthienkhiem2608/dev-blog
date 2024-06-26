export function discussionGql(ghDiscussionCategoryId: string | undefined) {
  return `{
          repository(owner: "tranthienkhiem2608", name: "dev-blog") {
              discussions(first: 100, categoryId: "${ghDiscussionCategoryId}") {
                nodes {
                  title
                  url
                  number
                  bodyHTML
                  bodyText
                  createdAt
                  lastEditedAt
                  author {
                    login
                    url
                    avatarUrl
                  }
                   labels(first: 100) {
                    nodes {
                      name
                    }
                  }
                }
              }
            }
      }`
}

export function discussionDetailGql(postId: number | undefined) {
  return `{
      repository(owner: "tranthienkhiem2608", name: "dev-blog") {
        discussion(number: ${postId}){
          title
          bodyHTML
          createdAt
          author{
            login
            url
            avatarUrl
          }
        }
      }
    }`
}
