import { Course } from './course';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
}) 

export class CourseService {
    retrieveAll(): Course[] {
        return COURSES;
    }
}

var COURSES: Course[] = [
    {
        id: 1,
        name: 'Angular: Forms',
        imageUrl: '/assets/images/forms.png',
        price: 999.99,
        code: 'XPS-8765',
        duration: 120,
        rating: 4.8,
        releaseDate: 'December, 18, 2020',
        description: 'Neste curso o aluno conhecerá os detalhes sobre a utilização e manutenção de formulários em páginas criadas com Angular'
    },
    {
        id: 2,
        name: 'Angular: HTTP/HTTPS',
        imageUrl: '/assets/images/http.png',
        price: 888.99,
        code: 'XPS-8764',
        duration: 100,
        rating: 4.5,
        releaseDate: 'December, 23, 2020',
        description: 'Neste curso o aluno conhecerá os detalhes sobre a utilização e manutenção de formulários em páginas criadas com Angular'
    },
    {
        id: 3,
        name: 'Angular: SSL/TLS',
        imageUrl: '/assets/images/ssl.png',
        price: 777.99,
        code: 'XPS-8763',
        duration: 80,
        rating: 4.3,
        releaseDate: 'December, 28, 2020',
        description: 'Neste curso o aluno conhecerá os detalhes sobre a utilização e manutenção de formulários em páginas criadas com Angular'
    },
    {
        id: 4,
        name: 'Angular: Bootcamp',
        imageUrl: '/assets/images/angular.png',
        price: 1299.99,
        code: 'XPS-8762',
        duration: 240,
        rating: 3.0,
        releaseDate: 'January, 04, 2021',
        description: 'Neste curso o aluno conhecerá os detalhes sobre a utilização e manutenção de formulários em páginas criadas com Angular'
    },
    {
        id: 5,
        name: 'Angular: Router',
        releaseDate: 'November 16, 2020',
        duration: 70,
        code: 'OHP-1095',
        rating: 4.5,
        price: 49.99,
        imageUrl: '/assets/images/router.png',
        description: 'Neste curso o aluno conhecerá os detalhes sobre a utilização e manutenção de formulários em páginas criadas com Angular'
    },
    {
        id: 6,
        name: 'Angular: Animations',
        releaseDate: 'November 25, 2020',
        duration: 60,
        code: 'PWY-9381',
        rating: 5,
        price: 59.99,
        imageUrl: '/assets/images/animations.png',
        description: 'Neste curso o aluno conhecerá os detalhes sobre a utilização e manutenção de formulários em páginas criadas com Angular'
    },
    {
        id: 7,
        name: 'Angular: CLI',
        releaseDate: 'November 2, 2020',
        duration: 40,
        code: 'XLF-1212',
        rating: 2.3,
        price: 19.99,
        imageUrl: '/assets/images/cli.png',
        description: 'Neste curso o aluno conhecerá os detalhes sobre a utilização e manutenção de formulários em páginas criadas com Angular'
    }
]
