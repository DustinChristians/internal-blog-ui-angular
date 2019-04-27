import { NotFoundComponent } from 'src/app/not-found/not-found.component';

export const mapping = {
  types: {
    home: 'home',
    blogPostCategory: 'blogPostCategory',
    blogPost: 'blogPost'
  },
  components: [
    { contentType: 'blogPostCategory', component: NotFoundComponent }
  ]
};
