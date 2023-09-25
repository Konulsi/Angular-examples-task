import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
//component  chalishdirildiginda set etmek lazim olan liste veya deyishken varsa bunlarin yeri oninit methodudur
export class PostsComponent implements OnInit {
  posts: [any];
  error;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe(
      (response) => {
        this.posts = <[any]>response;
      },
      (error) => (this.error = error)
    );
  }

  createPost(input: HTMLInputElement) {
    //HtmlInputElement inputdan daxil olan value ni goturmek uchun yaziriq.elternative olaraq htmlde input.value yazib burda title: string kimi qebul ede bilerik.
    const post = { title: input.value };
    input.value = '';

    this.postService.createPost(post).subscribe((response) => {
      post['id'] = response['id'];
      this.posts.splice(0, 0, post); //0 ci indexden bashla 0 element sil(yeni hechne silme) ve post u elave et
    });
  }

  updatePost(post) {
    post.title = 'updated';

    this.postService.updatePost(post).subscribe((response) => {
      console.log(response);
    });

    // this.http
    //   .patch(
    //     this.url + '/' + post.id,
    //     JSON.stringify({
    //       title: 'updated',
    //     })
    //   )
    //   .subscribe((response) => {
    //     console.log(response);
    //   });
  }

  deletePost(post) {
    this.postService.deletePost(post).subscribe(
      (response) => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error) => (this.error = error)
    );
  }
}
