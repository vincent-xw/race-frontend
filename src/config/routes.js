import login from '@/pages/login/login';
import race from '@/pages/race/race';
import raceDetail from '@/pages/race-detail/race-detail';
import betDetail from '@/pages/bet-detail/bet-detail';
import league from '@/pages/league/league';
export default [
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/league',
        name: 'league',
        alias: '/',
        component: league
    },
    {
        path: '/race',
        name: 'race',
        component: race
    },
    {
        path: '/race/:id',
        name: 'raceDetail',
        component: raceDetail
    },
    {
        path: '/race/:id/bet-detail',
        name: 'betDetail',
        component: betDetail
    }
];
