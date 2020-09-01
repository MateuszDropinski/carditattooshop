/* eslint-disable max-len */

import { PostContentType, PostType } from './types';
import { ARTISTS } from './artists';

export const BLOG: PostType[] = [
    {
        title: 'Post numer 1',
        textShortcut: 'Założycielem studia tatuażu Cardi Tattoo Shop jest Paweł "Cardi" Kowalczyk. '
            + 'Drzwi naszego studia po raz pierwszy otworzyły się dla klientów 5 marca 2018 roku, '
            + 'jednakże nie jest to początek naszej przygody z tatuażem...',
        author: ARTISTS[0],
        image: {
            src: './assets/post_1.jpg',
            alt: 'post 1'
        },
        date: '15.07.2020',
        content: [
            {
                type: PostContentType.Text,
                payload: {
                    title: 'Akapit',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
                    + 'Donec hendrerit turpis non libero sodales, ac dictum arcu imperdiet. '
                    + 'Nunc varius, neque ut iaculis imperdiet, orci velit feugiat nunc, eget cursus lectus turpis vitae nibh. '
                    + 'Aenean pharetra nibh eros, sit amet tempor ipsum sollicitudin vel. '
                    + 'Curabitur ullamcorper metus vitae tellus ornare gravida. '
                    + 'Pellentesque faucibus mattis nisi, non egestas enim venenatis ut. '
                    + 'Quisque bibendum et eros vel pellentesque. Nam dui risus, tristique dignissim ultrices a, elementum at '
                    + 'nisi.'
                    + 'Ut finibus consequat bibendum. Maecenas mauris quam, fringilla eu viverra ac, eleifend quis dui. '
                    + 'Nullam tellus mi, blandit a metus vel, gravida cursus tortor.\n'
                    + 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
                    + 'Donec hendrerit turpis non libero sodales, ac dictum arcu imperdiet. '
                    + 'Nunc varius, neque ut iaculis imperdiet, orci velit feugiat nunc, eget cursus lectus turpis vitae nibh. '
                    + 'Aenean pharetra nibh eros, sit amet tempor ipsum sollicitudin vel. '
                    + 'Curabitur ullamcorper metus vitae tellus ornare gravida. '
                    + 'Pellentesque faucibus mattis nisi, non egestas enim venenatis ut. '
                    + 'Quisque bibendum et eros vel pellentesque. Nam dui risus, tristique dignissim ultrices a, elementum '
                    + 'at nisi.'
                    + 'Ut finibus consequat bibendum. Maecenas mauris quam, fringilla eu viverra ac, eleifend quis dui. '
                    + 'Nullam tellus mi, blandit a metus vel, gravida cursus tortor.'
                }
            },
            {
                type: PostContentType.Image,
                payload: {
                    src: './assets/post_1.jpg',
                    alt: 'post 1'
                }
            }
        ]
    },
    {
        title: 'Post numer 2',
        textShortcut: 'Założycielem studia tatuażu Cardi Tattoo Shop jest Paweł "Cardi" Kowalczyk. '
            + 'Drzwi naszego studia po raz pierwszy otworzyły się dla klientów 5 marca 2018 roku, '
            + 'jednakże nie jest to początek naszej przygody z tatuażem...',
        author: ARTISTS[0],
        image: {
            src: './assets/post_2.jpg',
            alt: 'post 2'
        },
        date: '14.07.2020',
        content: [
            {
                type: PostContentType.Text,
                payload: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
                    + 'Donec hendrerit turpis non libero sodales, ac dictum arcu imperdiet. '
                    + 'Nunc varius, neque ut iaculis imperdiet, orci velit feugiat nunc, eget cursus lectus turpis vitae nibh. '
                    + 'Aenean pharetra nibh eros, sit amet tempor ipsum sollicitudin vel. '
                    + 'Curabitur ullamcorper metus vitae tellus ornare gravida. '
                    + 'Pellentesque faucibus mattis nisi, non egestas enim venenatis ut. '
                    + 'Quisque bibendum et eros vel pellentesque. Nam dui risus, tristique dignissim ultrices a, elementum at '
                    + 'nisi.'
                    + 'Ut finibus consequat bibendum. Maecenas mauris quam, fringilla eu viverra ac, eleifend quis dui. '
                    + 'Nullam tellus mi, blandit a metus vel, gravida cursus tortor.\n'
                    + 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
                    + 'Donec hendrerit turpis non libero sodales, ac dictum arcu imperdiet. '
                    + 'Nunc varius, neque ut iaculis imperdiet, orci velit feugiat nunc, eget cursus lectus turpis vitae nibh. '
                    + 'Aenean pharetra nibh eros, sit amet tempor ipsum sollicitudin vel. '
                    + 'Curabitur ullamcorper metus vitae tellus ornare gravida. '
                    + 'Pellentesque faucibus mattis nisi, non egestas enim venenatis ut. '
                    + 'Quisque bibendum et eros vel pellentesque. Nam dui risus, tristique dignissim ultrices a, elementum '
                    + 'at nisi.'
                    + 'Ut finibus consequat bibendum. Maecenas mauris quam, fringilla eu viverra ac, eleifend quis dui. '
                    + 'Nullam tellus mi, blandit a metus vel, gravida cursus tortor.'
            }
        ]
    },
    {
        title: 'Post numer 3',
        textShortcut: 'Założycielem studia tatuażu Cardi Tattoo Shop jest Paweł "Cardi" Kowalczyk. '
            + 'Drzwi naszego studia po raz pierwszy otworzyły się dla klientów 5 marca 2018 roku, '
            + 'jednakże nie jest to początek naszej przygody z tatuażem...',
        author: ARTISTS[0],
        image: {
            src: './assets/post_1.jpg',
            alt: 'post 1'
        },
        date: '15.07.2020',
        content: [
            {
                type: PostContentType.Text,
                payload: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
                    + 'Donec hendrerit turpis non libero sodales, ac dictum arcu imperdiet. '
                    + 'Nunc varius, neque ut iaculis imperdiet, orci velit feugiat nunc, eget cursus lectus turpis vitae nibh. '
                    + 'Aenean pharetra nibh eros, sit amet tempor ipsum sollicitudin vel. '
                    + 'Curabitur ullamcorper metus vitae tellus ornare gravida. '
                    + 'Pellentesque faucibus mattis nisi, non egestas enim venenatis ut. '
                    + 'Quisque bibendum et eros vel pellentesque. Nam dui risus, tristique dignissim ultrices a, elementum at '
                    + 'nisi.'
                    + 'Ut finibus consequat bibendum. Maecenas mauris quam, fringilla eu viverra ac, eleifend quis dui. '
                    + 'Nullam tellus mi, blandit a metus vel, gravida cursus tortor.\n'
                    + 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
                    + 'Donec hendrerit turpis non libero sodales, ac dictum arcu imperdiet. '
                    + 'Nunc varius, neque ut iaculis imperdiet, orci velit feugiat nunc, eget cursus lectus turpis vitae nibh. '
                    + 'Aenean pharetra nibh eros, sit amet tempor ipsum sollicitudin vel. '
                    + 'Curabitur ullamcorper metus vitae tellus ornare gravida. '
                    + 'Pellentesque faucibus mattis nisi, non egestas enim venenatis ut. '
                    + 'Quisque bibendum et eros vel pellentesque. Nam dui risus, tristique dignissim ultrices a, elementum '
                    + 'at nisi.'
                    + 'Ut finibus consequat bibendum. Maecenas mauris quam, fringilla eu viverra ac, eleifend quis dui. '
                    + 'Nullam tellus mi, blandit a metus vel, gravida cursus tortor.'
            }
        ]
    },
    {
        title: 'Post numer 4',
        textShortcut: 'Założycielem studia tatuażu Cardi Tattoo Shop jest Paweł "Cardi" Kowalczyk. '
            + 'Drzwi naszego studia po raz pierwszy otworzyły się dla klientów 5 marca 2018 roku, '
            + 'jednakże nie jest to początek naszej przygody z tatuażem...',
        author: ARTISTS[0],
        image: {
            src: './assets/post_2.jpg',
            alt: 'post 2'
        },
        date: '14.07.2020',
        content: [
            {
                type: PostContentType.Text,
                payload: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
                    + 'Donec hendrerit turpis non libero sodales, ac dictum arcu imperdiet. '
                    + 'Nunc varius, neque ut iaculis imperdiet, orci velit feugiat nunc, eget cursus lectus turpis vitae nibh. '
                    + 'Aenean pharetra nibh eros, sit amet tempor ipsum sollicitudin vel. '
                    + 'Curabitur ullamcorper metus vitae tellus ornare gravida. '
                    + 'Pellentesque faucibus mattis nisi, non egestas enim venenatis ut. '
                    + 'Quisque bibendum et eros vel pellentesque. Nam dui risus, tristique dignissim ultrices a, elementum at '
                    + 'nisi.'
                    + 'Ut finibus consequat bibendum. Maecenas mauris quam, fringilla eu viverra ac, eleifend quis dui. '
                    + 'Nullam tellus mi, blandit a metus vel, gravida cursus tortor.\n'
                    + 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
                    + 'Donec hendrerit turpis non libero sodales, ac dictum arcu imperdiet. '
                    + 'Nunc varius, neque ut iaculis imperdiet, orci velit feugiat nunc, eget cursus lectus turpis vitae nibh. '
                    + 'Aenean pharetra nibh eros, sit amet tempor ipsum sollicitudin vel. '
                    + 'Curabitur ullamcorper metus vitae tellus ornare gravida. '
                    + 'Pellentesque faucibus mattis nisi, non egestas enim venenatis ut. '
                    + 'Quisque bibendum et eros vel pellentesque. Nam dui risus, tristique dignissim ultrices a, elementum '
                    + 'at nisi.'
                    + 'Ut finibus consequat bibendum. Maecenas mauris quam, fringilla eu viverra ac, eleifend quis dui. '
                    + 'Nullam tellus mi, blandit a metus vel, gravida cursus tortor.'
            }
        ]
    }
];
