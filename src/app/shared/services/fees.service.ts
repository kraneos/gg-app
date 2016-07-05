import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { HomeOptions } from '../../home/home-options';
import { Fee } from '../domain/fee';
import { ParseService } from './parse.service';

@Injectable()
export class FeesService {
    /**
     *
     */
    constructor(private parseService: ParseService) {
    }

    query(opts: HomeOptions): Observable<Fee[]> {
        let url = 'classes/Fee?skip=' + (+opts.limit * (opts.page - 1)) + '&limit=' + opts.limit;
        url = url + '&include=policy.client,policy.risk';
        if (opts.date) {
            var fromDate = new Date(opts.date.getFullYear(), opts.date.getMonth(), opts.date.getDate());
            var toDate = new Date(fromDate.valueOf());
            toDate.setDate(toDate.getDate() + 1);
            url = url + '&where={"expirationDate":{"$gt":{"__type":"Date","iso":"' + fromDate.toJSON() + '"},"$lt":{"__type":"Date","iso":"' + toDate.toJSON() + '"}}}';
        }
        return this.parseService
            .get(url)
            .map(this.parseService.extractArray)
            .catch(this.parseService.handleError);
    }

    queryByPolicy(policyId: string): Observable<Fee[]> {
        let url = 'classes/Fee?where={"policy":{"__type":"Pointer","className":"Policy","objectId":"' + policyId + '"}}';
        return this.parseService
            .get(url)
            .map(this.parseService.extractArray)
            .catch(this.parseService.handleError);
    }
}