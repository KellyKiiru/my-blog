import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";

import { ArticleComponent } from "../article/article.component";
import { ArticlesComponent } from "../articles/articles.component";

const routes:Routes = [
    {path:'', component:ArticleComponent},
    {path:'blogs', component:ArticlesComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutesModule {}