import {Component} from '@angular/core'

@component(
    {
        title: "Tour of Heroes",
        hero={
            hero: "windstorm",
            id: 1,
        };
        template: "<h1>{{title}}</h1><h2>Hero details! {{name}}</h2>";
    })
export class Hero {
    id: number;
    name: string;
}