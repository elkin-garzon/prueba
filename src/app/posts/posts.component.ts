import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../models/post';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  public posts: Array<any> = [];
  public formPost!: FormGroup;
  public model: Post = new Post();
  public verFomrulario: boolean = false;

  constructor(
    public service: PostsService,
    public formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {

    this.formPost = this.formBuilder.group({
      title: [this.model.title, [Validators.required]],
      body: [this.model.body, [Validators.required, Validators.minLength(30)]],
      userId: [this.model.userId, [Validators.required]]
    });
    this.listData();
    
  }

  listData(){
    this.posts = [];
    this.service.getData().subscribe((resp: any) => {
      this.posts = resp;
    })
  }

  nuevoPost() {
    this.formPost.patchValue({
      userId: 1
    })
    this.verFomrulario = true;
  }

  cancel() {
    this.verFomrulario = false;
  }

  save() {
    if(this.formPost.valid){
      this.service.postData(this.formPost.value).subscribe((resp:any)=>{
        if(resp.id){
          this.listData();
        }
      })
    }
    
  }
}
