import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostData } from 'src/app/interfaces/post-data';
import { PostProps } from 'src/app/interfaces/post-props';
import { AlertProviderService } from 'src/app/providers/alert-provider.service';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  public postForm : PostData = {
    title: '',
    subject: '0',
    content: '',
  };

  constructor(
    private router: Router,
    public alert : AlertProviderService,
    private post : NewsService
  ) { }

  ngOnInit(): void {
  }

  createPost() {
    if (this.postForm.title.length < 1) return this.alert.setAlert('warning', true, 'Informe o campo "Título" para prosseguir.');
    
    if (this.postForm.subject === '0') return this.alert.setAlert('warning', true, 'Informe o campo "Assunto" para prosseguir.');

    if (this.postForm.content.length < 1) return this.alert.setAlert('warning', true, 'Preencha o conteúdo da publicação para prosseguir.');

    this.post.createPost(this.postForm)
    .then(() => {
      this.alert.setAlert('success', true, 'Publicação criada com sucesso.');
      this.router.navigate(["/home"]);
    })
    .catch(err => {
      this.alert.setAlert('error', true, `Falha ao criar publicação. [ERR]: ${err}`);
      this.router.navigate(["/home"]);
    })
  }

}
