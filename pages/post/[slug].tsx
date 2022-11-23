import { Box, Grid, Typography } from '@mui/material'
import PostLayout from '../../src/components/layouts/PostLayout'
import NavigationBar from '../../src/components/NavigationBar'

export default function Post() {
  return (
    <PostLayout enableToggle={false}>
      <Grid container>
        <Grid item xs={3}>
          <h1>Outline</h1>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed diam.
            Maxime mollitia.
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <h1>Test post</h1>

          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed diam.
            Maxime mollitia, molestiae quas vel sint commodi repudiandae
            consequuntur voluptatum laborum numquam blanditiis harum quisquam
            eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
            Provident similique accusantium nemo autem. Veritatis obcaecati
            tenetur iure eius earum ut molestias architecto voluptate aliquam
            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat,
            odit, tenetur error, harum nesciunt ipsum debitis quas aliquid.
          </Typography>
        </Grid>
      </Grid>
    </PostLayout>
  )
}

interface Post {
  slug: string
}

// export const getStaticPaths = async () => {
//   const posts: Array<data: Post> = await fetch('http://localhost:3000/posts').then(
//     (response) => response.json()
//   )
//   console.log(posts['data'])
//   const paths = posts.data.map((post: Post) => ({
//     post: {
//       slug: post.slug,
//     },
//   }))
//   return {
//     paths,
//     fallback: 'blocking',
//   }
// }

// export
