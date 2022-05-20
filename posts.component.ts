import { Component, OnInit } from '@angular/core';
import { posts } from 'src/app/interface/postsinterface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts:posts[]=[]
  constructor( private postServices:PostsService) { }
  getAllsPosts(){
    this.postServices.getPosts().subscribe({
      next:(res:any)=>{
        this.posts=res
        console.log(res)
      },
      error:(httpError:any)=>{
        console.log(httpError)
      }

    })
  }
// log(x:any){
//   console.log(x);}
  
//   onSubmit(post:any){
//     this.postServices.addPost(post).subscribe(
//       {
//         next:()=>{
          
//           console.log('success')
//           this.posts.splice(0,0,post)
//         },
//         error:(httpError:any)=>{
//           console.log(httpError)
//       }
//       })
//   }
  onSubmit(post:any){
    //console.log(post)
    this.postServices.addPost(post).subscribe(
      {next:()=>{
        console.log('Success')
        this.posts.splice(0,0,post)
      },
      error:(httpError:any)=>{
        console.log(httpError)
      }
      })
  }
  deletePost(id:any,index:number){
    this.postServices.deletePost(id).subscribe({
      next:(res:any)=>{
        this.posts.splice(index,1)
      }
    })
  }
  ngOnInit(): void {
  
this.getAllsPosts()
  }

}
