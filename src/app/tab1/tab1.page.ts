import {
  Component,
  AfterViewInit,
  OnInit
} from '@angular/core';

import {
  ScreenOrientation
} from '@ionic-native/screen-orientation/ngx';
import { _ } from 'core-js';

declare const Aliplayer: any;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, AfterViewInit  {

  constructor(private screenOrientation: ScreenOrientation) {

  }

  player: any;
  ngOnInit() {
    // tslint:disable-next-line: prefer-const
    let settings = {
      id: 'J_prismPlayer',
      width: '100%',
      autoplay: true,
      isLive: false,
      // tslint:disable-next-line: max-line-length
      source: 'https://www.itmao.club/test.mp4',
      autoPlayDelayDisplayText: '加载中……',
      useH5Prism: true,
      useFlashPrism: false,
      showBuffer: true,
      playsinline: true
    };
    this.screenOrientation.unlock();

   
    this.player = new Aliplayer(settings, function(player) {
      // player.play();
      player._switchLevel = 0;
    });

    this.player.on('play', (e) => {
      console.log('play');
    });

    this.player.on('ended', (e) => {
      console.log('ended');

    });
    this.player.on('pause', (e) => {
      console.log('pause');

    });
    this.player.off('play', function(e) {
      console.log('play');
    });
    this.player.on('requestFullScreen', (e)=>{
       console.log('requestFullScreen');
    });
    this.player.on('cancelFullScreen', (e)=>{
      console.log('cancelFullScreen');
   });
  }

  ngAfterViewInit(){
    const that = this;
    this.screenOrientation.onChange().subscribe(
      () => {
       
        const screenOrientation = this.screenOrientation.ORIENTATIONS;
        const player= that.player.fullscreenService;
        if (this.screenOrientation.type === screenOrientation.LANDSCAPE_PRIMARY
          || this.screenOrientation.type === screenOrientation.LANDSCAPE_SECONDARY) {
          if (!player.isFullScreen) {
            console.log('LANDSCAPE_PRIMARY');
            console.log(this.player);
            player.requestFullScreen();
          }
        } else {

        
          if (player.isFullScreen) {
            console.log('PORTRAIT_PRIMARY');
            player.cancelFullScreen();
          }
        }

      });
  }
}
