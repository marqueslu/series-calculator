import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesService } from '../series.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Serie, Episode, Season } from 'src/app/core';
import { CustomValidator } from 'src/app/core/validators/custom.validator';

const today = new Date().toISOString().split('T')[0];

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html'
})
export class CalculatorComponent implements OnInit {
  private form: FormGroup;
  private serie: Serie;
  private seasons: Season[] = [];
  private episodes: Episode[] = [];
  private minutes: number[] = [];
  private startDateToWatch: Date;
  private finishDate: Date;
  private nextReleaseDate: string = '';
  private thereIsReleaseDate: boolean = true;
  private userIsLateToStart: boolean;

  constructor(
    private seriesService: SeriesService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      startDate: [
        '',
        [CustomValidator.StartDateValidator, Validators.required]
      ],
      hoursQuantity: ['', [Validators.min(1), Validators.required]]
    });

  }

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
      if (season.releaseDate >= today) {
        this.nextReleaseDate = season.releaseDate;
        this.thereIsReleaseDate = true;
      } else {
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

  onCalculate() {
    let days = this.totalDays();
    if (this.thereIsReleaseDate) {
      let release = this.nextReleaseDate.split('-');
      let date = new Date(
        parseInt(release[0]),
        parseInt(release[1]) - 1,
        parseInt(release[2])
      );
      this.startDateToWatch = this.subtractDays(date, days);
      this.userIsLateToStart =
        new Date(this.startDateToWatch).toISOString().split('T')[0] < today
          ? true
          : false;
    } else {
      this.finishDate = this.addDays(this.form.get('startDate').value, days);
    }
  }

  totalDays() {
    let totalMinutesPerDay: number = this.form.get('hoursQuantity').value * 60;
    let totalMinutesSerie: number = this.minutes.reduce(
      (previusValue, currentValue) => {
        return currentValue + previusValue;
      }
    );
    let total = totalMinutesSerie / totalMinutesPerDay;
    return total;
  }

  addDays(date: Date, days) {
    let result = new Date(date);
    result.setDate(date.getDay() + days);
    return result;
  }

  subtractDays(date: Date, days) {
    let result = new Date(date);
    result.setDate(date.getDay() - days);
    return result;
  }

  hasError(field: string) {
    if (
      this.form.get(field).errors != undefined ||
      this.form.get(field).errors != null
    )
      return this.form.get(field).errors;
    else {
      return false;
    }
  }
  onClean() {
    this.userIsLateToStart = undefined;
    this.finishDate = undefined;
    this.startDateToWatch = undefined;
    this.form.reset();
  }
}
