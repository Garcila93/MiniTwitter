import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import { AuthService } from '../../servicios/auth.service';
import{Tweets} from '../../modelos/tweet.interface'
import { AppRoutingModule } from '../../app-routing.module';

@Component({
  selector: 'app-listatweets',
  templateUrl: './listatweets.component.html',
  styleUrls: ['./listatweets.component.scss']
})
export class ListatweetsComponent implements OnInit {

  tweets: Tweets[] = [];

  constructor(private authService: AuthService,private route: ActivatedRoute, private router: Router) {  }

  ngOnInit(): void {
    this.tweets=[];
    this.feedTweets();

  }

  feedTweets() {
    this.authService.verTweet().subscribe(respuesta => {
      respuesta.forEach(element => {
        this.tweets.push(element);
      });
    });

  }

}
