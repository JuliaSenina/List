import { ofType } from "redux-observable";
import { catchError, of, switchMap } from "rxjs";
import { ajax } from "rxjs/ajax";
import { map } from "rxjs";
import {
  servicesListSuccess,
  servicesListFailure,
} from "../actions/servicesActions";

export const servicesRequestEpic = (action$) =>
  action$.pipe(
    ofType("SERVICES_LIST_REQUEST"),
    switchMap((o) =>
      ajax.getJSON("http://localhost:7070/api/services").pipe(
        map((o) => servicesListSuccess(o)),
        catchError((e) => of(servicesListFailure(e)))
      )
    )
  );
