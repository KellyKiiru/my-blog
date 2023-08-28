import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit{

  blogs:any[]=[]

  constructor(private httpClient:HttpClient) {}

  getBlogs(){
    this.httpClient.get<any[]>('http://127.0.0.1:8000/blogs/').subscribe((data:any)=>{
      this.blogs = data;
      console.log(data);
    })
  }

  ngOnInit(): void {
    this.getBlogs()
  }
}
