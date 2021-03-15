import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostData } from 'src/app/interfaces/post-data';
import { AlertProviderService } from 'src/app/providers/alert-provider.service';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  private postId! : string;
  public postForm : PostData = {
    title: '',
    subject: '0',
    content: '',
  };

  constructor(
    private route : ActivatedRoute,
    private router: Router,
    private post : NewsService,
    public alert : AlertProviderService
  ) { 
    if (this.route.snapshot.paramMap.get('id')!.length > 0) {
      this.postId = this.route.snapshot.paramMap.get('id')!;
      this.loadPostData(this.postId);
    }
  }

  ngOnInit(): void {

  }

  loadPostData(id : string) {
    this.post.getPost(id).subscribe(dados => { 
      this.postForm = dados.data;
    });
  }

  updatePost() {
    if (this.postForm.title.length < 1) return this.alert.setAlert('warning', true, 'Informe o campo "Título" para prosseguir.');
    
    if (this.postForm.subject === '0') return this.alert.setAlert('warning', true, 'Informe o campo "Assunto" para prosseguir.');

    if (this.postForm.content.length < 1) return this.alert.setAlert('warning', true, 'Preencha o conteúdo da publicação para prosseguir.');

    this.post.updatePost(this.postId, this.postForm)
    .then(() => {
      this.alert.setAlert('success', true, 'Publicação atualizada com sucesso.');
      this.router.navigate(["/home"]);
    })
    .catch(err => {
      this.alert.setAlert('error', true, `Falha ao atualizar publicação. [ERR]: ${err}`);
      this.router.navigate(["/home"]);
    })
  }
}
