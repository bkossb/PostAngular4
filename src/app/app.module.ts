import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {PostComponent} from './post/post.component';
import {NavbarComponent} from './navbar/navbar.component';
import {PostCardComponent} from './post-card/post-card.component';
import {HttpModule} from '@angular/http';
import {PostService} from './post.service';
import {LengthPipe} from './length.pipe';
import {RouterModule} from '@angular/router';
import { CommentsComponent } from './comments/comments.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    NavbarComponent,
    PostCardComponent,
    LengthPipe,
    CommentsComponent,
    FooterComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {path: '', pathMatch: 'full', redirectTo: 'posts'},
      {path: 'posts', component: <any>PostComponent},
      {path: 'posts/:id', component: <any>PostCardComponent}
    ])
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
