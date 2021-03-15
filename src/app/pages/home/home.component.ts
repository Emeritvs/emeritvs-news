import { Component, OnInit } from '@angular/core';
import { PostProps } from 'src/app/interfaces/post-props';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public posts : PostProps[] = [];
  public postsFiltered! : PostProps[];
  public postFilter : any = 'All';

  constructor(
    private news : NewsService
  ) { }

  async ngOnInit(): Promise<void> {
    await this.loadPosts();
  }

  loadPosts() {
    this.news.getAll().subscribe((data : any) => { 
      const tempArray : PostProps[] = [];

      for (let i = 0; i < data.length; i++) {
        const dados : any = {
          id: data[i].id,
          author: data[i].data.author,
          authorId: data[i].data.authorId,
          date: data[i].data.date,
          subject: data[i].data.subject,
          title: data[i].data.title
        };

        tempArray.push(dados);
      }
        
      this.posts = tempArray;
      this.postsFiltered = this.posts;
    });
  }

  updateFilter() {
    if (this.postFilter === 'All') {
      this.postsFiltered = this.posts;
    }
    else {
      let teste = this.posts.filter(post => {

        if (typeof post.subject === 'object') {
          let hasSubject = false;
          let subjectPosition : any; 

          for (let i = 0; i < post.subject!.length; i++) {
            if (post.subject[i] === this.postFilter) {
              hasSubject = true;
              subjectPosition = i;
              break;
            }
          }

          return post.subject[subjectPosition] === this.postFilter;
        }
        else {
          return post.subject === this.postFilter;
        }

        
      });
      this.postsFiltered = teste;
    }
  }

}
