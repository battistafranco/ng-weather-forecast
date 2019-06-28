import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ForecastService } from '../../services/forecast.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  forecast$: Observable<any>;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: ForecastService) { }

  ngOnInit() {
    this.forecast$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getForecastByCityID(+params.get('id')))
    );
  }

}
