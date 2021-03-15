import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostProps } from 'src/app/interfaces/post-props';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  private postId! : string;
  public postData! : PostProps;
  public postThumb!: string;

  constructor(
    private route : ActivatedRoute,
    private newsService : NewsService
  ) { 
    if (this.route.snapshot.paramMap.get('id')!.length > 0) {
      this.postId = this.route.snapshot.paramMap.get('id')!;
      this.loadPostData(this.postId);
    }
  }

  ngOnInit(): void {

  }

  loadPostData(id : string) {
    this.newsService.getPost(id).subscribe(dados => { 
      this.postData = dados.data;
      this.setPostThumb(this.postData.subject);
    });
  }

  setPostThumb(subject : string) {
    let firstSubject = subject;

    if (typeof subject === 'object') firstSubject = subject[0];

    switch (firstSubject) {
      case 'Entertainment':
        this.postThumb = '../../../assets/images/entertainment.jpg';
        break;
      case 'Sports':
        this.postThumb = '../../../assets/images/sports.jpg';
        break;
      case 'Politics':
        this.postThumb = '../../../assets/images/politics.jpg';
        break;
      default:
        break;
    }
  }

}
