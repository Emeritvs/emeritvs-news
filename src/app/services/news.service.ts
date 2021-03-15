import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { PostData } from '../interfaces/post-data';
import { PostProps } from '../interfaces/post-props';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private DB:AngularFirestore,
    private afa:AngularFireAuth,
  ) { }

  getAll() {
    return this.DB.collection('posts').snapshotChanges()
    .pipe(
      map((action : any) => action.map((a : any) =>{
        const dados = {
          id: a.payload.doc.id,
          data: a.payload.doc.data() as PostProps,
        };

        return dados;
      }))
    );
  }

  getPost(id: string) {
    return this.DB.collection('posts').doc(id).snapshotChanges().pipe(
      map(action => {
        const dados = {
          id: action.payload.id,
          data: action.payload.data() as PostProps,
        };

        return dados;
      })
    )
  }

  getDate() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    return `${dd}/${mm}/${yyyy}`;
  }
  
  async createPost(data : PostData) {

    const obj  = {
      title: data.title,
      subject: data.subject,
      content: data.content,
      date: this.getDate(),
      author: 'Admin'
    };

    return this.DB.collection('posts').add(obj);
  }

  updatePost(id : string, data : PostData) {
    const obj  = {
      title: data.title,
      subject: data.subject,
      content: data.content,
    };

    return this.DB.collection('posts').doc(id).update(obj);
  }

  deletePost() {

  }



}
