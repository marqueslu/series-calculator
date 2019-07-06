import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesService } from '../series.service';
import { Serie } from 'src/app/core/models/serie';
import { Season } from 'src/app/core/models/season';
import { Episode } from 'src/app/core/models/episode';

const today = new Date().toISOString().split('T')[0];

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  serie: Serie;
  private seasons: Season[] = [];
  private episodes: Episode[] = [];
  private minutes: Number[] = [];
  private startDate: Date;
  private message: string = 'lallaal';
  private messageInexistentRelease: string = 'There\'s no more release for this serie';
  private nextReleaseDate: string = '';
  private thereIsReleaseDate: boolean = true;

  constructor(
    private seriesService: SeriesService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.serie = this.route.snapshot.data['serie'];
    await this.load();    
  }

  async load() {
    await this.loadSeasons(this.serie.id);
  }

  loadSeasons(idSerie: string) {
    this.seriesService.getSeasons(idSerie).subscribe(seasons => {
      this.seasons = seasons;
      this.loadEpisodes(this.serie.id);
    });
  }

  loadEpisodes(idSerie: string) {
    this.seasons.forEach(season => {
      
      if(season.releaseDate >= today){
        this.nextReleaseDate = season.releaseDate;
        this.thereIsReleaseDate = true;
      }else{
        this.thereIsReleaseDate = false;
      }

      if (season.releaseDate <= today) {
        this.seriesService
          .getEpisodes(idSerie, season.id)
          .subscribe(seasonEpisodes => {
            this.episodes.push(...seasonEpisodes);
            this.totalEpisodesTime(seasonEpisodes);
          });
      }
    });
  }

  totalEpisodesTime(episodes: Episode[]) {
    episodes.forEach(episode => {
      let time = episode.duration.split(' ');
      if (time.length === 2) {
        this.traitEpisodeHourMinutes(time);
      } else {
        this.traitEpisodeMinutes(time);
      }
    });
  }

  traitEpisodeHourMinutes(time: string[]) {
    let hour = time[0].split('');
    this.minutes.push(parseInt(hour[0]) * 60);

    let minute = time[1].split('min');
    this.minutes.push(parseInt(minute[0]));
  }

  traitEpisodeMinutes(time: string[]) {
    let minute = time[0].split('min');
    this.minutes.push(parseInt(minute[0]));
  }

  addDays(date: Date, days){
    let result = new Date(date);
    result.setDate(date.getDay() + days);
    return result;
  }
}
