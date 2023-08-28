import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  blogs:any[]=[]

  constructor(private httpClient:HttpClient) {}

  getBlogs(){
    this.httpClient.get<any[]>('http://127.0.0.1:8000/blogs/').subscribe((data:any[])=>{
      this.blogs = data;
      console.log(data);
    })
  }

  ngOnInit(): void {
    this.getBlogs()
  }
}
